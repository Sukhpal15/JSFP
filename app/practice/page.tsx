"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Footer } from "../components/layout/Footer";
import { PracticeWorkspace } from "../components/practice/PracticeWorkspace";
import { useGlobalSearch } from "../components/layout/SearchContext";
import { questions } from "../utils/static-data";

export default function PracticePage() {
  const { search } = useGlobalSearch();
  const [activeCategory, setActiveCategory] = useState("All Questions");
  const [selectedId, setSelectedId] = useState(1);
  const [code, setCode] = useState(questions[0].starter);
  const [output, setOutput] = useState("");
  const [catVoiceEnabled, setCatVoiceEnabled] = useState(false);
  const catAudioRef = useRef<{ error: HTMLAudioElement; success: HTMLAudioElement } | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [questionPanelWidth, setQuestionPanelWidth] = useState(190);
  const [isResizingQuestions, setIsResizingQuestions] = useState(false);
  const practiceLayoutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCatVoiceEnabled(window.localStorage.getItem("jsfp-cat-voice") === "enabled");
    catAudioRef.current = {
      error: new Audio("/sounds/cat-error.mp3"),
      success: new Audio("/sounds/cat-success.mp3"),
    };
  }, []);

  function toggleCatVoice(enabled: boolean) {
    setCatVoiceEnabled(enabled);
    window.localStorage.setItem("jsfp-cat-voice", enabled ? "enabled" : "disabled");
  }

  function playCatVoice(isError: boolean) {
    if (!catVoiceEnabled || !catAudioRef.current) return;
    const audio = isError ? catAudioRef.current.error : catAudioRef.current.success;
    audio.currentTime = 0;
    void audio.play().catch(() => {});
  }

  const currentQuestion = questions.find((question) => question.id === selectedId) ?? questions[0];
  const filteredQuestions = useMemo(
    () => questions.filter((question) =>
      (activeCategory === "All Questions" || question.category === activeCategory) &&
      question.title.toLowerCase().includes(search.toLowerCase())
    ),
    [activeCategory, search],
  );

  function selectQuestion(question: (typeof questions)[number]) {
    setSelectedId(question.id);
    setCode(question.starter);
    setOutput("");
    setShowHint(false);
  }

  function runCode() {
    const frame = document.createElement("iframe");
    frame.setAttribute("sandbox", "allow-scripts");
    frame.setAttribute("aria-hidden", "true");
    frame.style.display = "none";
    const source = JSON.stringify(code).replace(/</g, "\\u003c");
    frame.srcdoc = `<!doctype html><script>
      const source = ${source};
      const lines = [];
      const format = (value) => {
        if (typeof value === "string") return value;
        try { return JSON.stringify(value, null, 2) ?? String(value); }
        catch { return String(value); }
      };
      let hasError = false;
      const send = (text, error = false) => parent.postMessage({ type: "jsfp-output", text, error }, "*");
      ["log", "info", "warn", "error"].forEach((method) => {
        console[method] = (...args) => {
          lines.push(args.map(format).join(" "));
          if (method === "error") hasError = true;
        };
      });
      try {
        const result = new Function(source)();
        if (result !== undefined) lines.push(format(result));
        send(lines.length ? lines.join("\\n") : "Code ran successfully with no output.", hasError);
      } catch (error) {
        send(error instanceof Error ? error.name + ": " + error.message : String(error), true);
      }
    <\/script>`;
    setOutput("Running your code…");
    const timeout = window.setTimeout(() => {
      window.removeEventListener("message", receive);
      frame.remove();
      setOutput("Execution timed out after 2 seconds. Check for an infinite loop and try again.");
      playCatVoice(true);
    }, 2000);
    function receive(event: MessageEvent) {
      if (event.source !== frame.contentWindow || event.data?.type !== "jsfp-output") return;
      window.clearTimeout(timeout);
      window.removeEventListener("message", receive);
      frame.remove();
      setOutput(event.data.text);
      playCatVoice(Boolean(event.data.error));
    }
    window.addEventListener("message", receive);
    document.body.appendChild(frame);
  }

  function resetCode() {
    setCode(currentQuestion.starter);
    setOutput("");
  }

  return (
    <>
      <PracticeWorkspace
        currentQuestion={currentQuestion}
        filteredQuestions={filteredQuestions}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        selectQuestion={selectQuestion}
        code={code}
        setCode={setCode}
        output={output}
        catVoiceEnabled={catVoiceEnabled}
        setCatVoiceEnabled={toggleCatVoice}
        runCode={runCode}
        resetCode={resetCode}
        showHint={showHint}
        setShowHint={setShowHint}
        questionPanelWidth={questionPanelWidth}
        setQuestionPanelWidth={setQuestionPanelWidth}
        isResizingQuestions={isResizingQuestions}
        setIsResizingQuestions={setIsResizingQuestions}
        practiceLayoutRef={practiceLayoutRef}
      />
      <Footer />
    </>
  );
}
