"use client";

import { useMemo, useRef, useState, type CSSProperties } from "react";
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
  const [showHint, setShowHint] = useState(false);
  const [questionPanelWidth, setQuestionPanelWidth] = useState(190);
  const [isResizingQuestions, setIsResizingQuestions] = useState(false);
  const practiceLayoutRef = useRef<HTMLDivElement>(null);

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
    setOutput("The code runner is not connected yet.\n\nNext step: integrate secure JavaScript execution and test cases.");
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
