"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

type Pet = {
  id: string;
  name: string;
  breed: string;
  image: string;
  message: string;
  accent: string;
};

const pets: Pet[] = [
  {
    id: "muffi",
    name: "Muffi",
    breed: "Black Pug",
    image: "/pets/black-pug.png",
    message: "Someone adorable came to see you!",
    accent: "from-amber-300/30 via-rose-300/10 to-transparent",
  },
  {
    id: "labrador",
    name: "Labrador",
    breed: "Labrador Retriever",
    image: "/pets/labrador.png",
    message: "A little friend just stopped by!",
    accent: "from-orange-300/30 via-amber-200/10 to-transparent",
  },
  {
    id: "saint-bernard",
    name: "Saint Bernard",
    breed: "Saint Bernard",
    image: "/pets/saint-bernard.png",
    message: "Time for a tiny dose of happiness!",
    accent: "from-amber-300/30 via-orange-200/10 to-transparent",
  },
  {
    id: "persian-cat",
    name: "Persian Cat",
    breed: "Persian Cat",
    image: "/pets/persian-cat.png",
    message: "A fluffy little visitor is here!",
    accent: "from-pink-300/30 via-violet-300/10 to-transparent",
  },
];

const floatingHearts = [
  { left: "9%", top: "23%", delay: 0, symbol: "♡", size: "text-3xl" },
  { left: "83%", top: "17%", delay: 0.35, symbol: "♥", size: "text-xl" },
  { left: "15%", top: "70%", delay: 0.6, symbol: "♡", size: "text-2xl" },
  { left: "88%", top: "67%", delay: 0.2, symbol: "♥", size: "text-3xl" },
  { left: "70%", top: "84%", delay: 0.8, symbol: "♡", size: "text-2xl" },
  { left: "29%", top: "12%", delay: 0.45, symbol: "♥", size: "text-lg" },
  { left: "50%", top: "86%", delay: 0.1, symbol: "♡", size: "text-xl" },
];

export default function CallPets() {
  const [selectorOpen, setSelectorOpen] = useState(false);
  const [activePet, setActivePet] = useState<Pet | null>(null);
  const reduceMotion = useReducedMotion();

  // Each selected pet gets one four-second surprise. Cleanup prevents stale timers.
  useEffect(() => {
    if (!activePet) return;
    const timeoutId = window.setTimeout(() => setActivePet(null), 4000);
    return () => window.clearTimeout(timeoutId);
  }, [activePet]);

  useEffect(() => {
    if (!selectorOpen && !activePet) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectorOpen(false);
        setActivePet(null);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectorOpen, activePet]);

  function summonPet(pet: Pet) {
    setSelectorOpen(false);
    setActivePet(pet);
  }

  return (
    <>
      <motion.button
        type="button"
        onClick={() => setSelectorOpen(true)}
        whileHover={reduceMotion ? undefined : { scale: 1.04, y: -1 }}
        whileTap={reduceMotion ? undefined : { scale: 0.97 }}
        className="inline-flex min-h-11 items-center gap-2.5 rounded-xl border border-[#7555a4]/60 bg-[#261d35] px-4 py-2.5 text-sm font-semibold text-[#d3b9ff] transition hover:border-[#a88add] hover:bg-[#322344] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a88add] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0b10]"
        aria-haspopup="dialog"
      >
        <motion.span
          aria-hidden="true"
          animate={reduceMotion ? undefined : { rotate: [0, -12, 12, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        >
          🐾
        </motion.span>
        Call Pets
        <span aria-hidden="true" className="text-xs opacity-60">✦</span>
      </motion.button>

      {/* Pet picker */}
      <AnimatePresence>
        {selectorOpen && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/75 p-4 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setSelectorOpen(false);
            }}
          >
            <motion.section
              role="dialog"
              aria-modal="true"
              aria-labelledby="call-pets-title"
              initial={reduceMotion ? undefined : { opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 12 }}
              transition={{ type: "spring", stiffness: 280, damping: 25 }}
              className="relative my-auto w-full max-w-2xl overflow-hidden rounded-[28px] border border-white/10 bg-[#11111b] text-white shadow-2xl"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-br from-pink-500/15 via-violet-500/10 to-transparent" />
              <button
                type="button"
                onClick={() => setSelectorOpen(false)}
                aria-label="Close pet selector"
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.07] text-2xl text-white/70 transition hover:bg-white/15 hover:text-white"
              >
                ×
              </button>

              <div className="relative px-5 pb-7 pt-8 sm:px-8 sm:pt-9">
                <div className="mb-7 text-center">
                  <motion.div
                    className="mb-3 text-4xl"
                    animate={reduceMotion ? undefined : { y: [0, -5, 0], rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 2.2, repeat: Infinity }}
                  >
                    🐾
                  </motion.div>
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.3em] text-pink-300">
                    Your little happiness break
                  </p>
                  <h2 id="call-pets-title" className="text-2xl font-bold tracking-tight sm:text-3xl">
                    Call a furry friend
                  </h2>
                  <p className="mt-2 text-sm text-white/55">
                    Choose a visitor for a little screen-time surprise.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {pets.map((pet, index) => (
                    <motion.button
                      key={pet.id}
                      type="button"
                      onClick={() => summonPet(pet)}
                      initial={reduceMotion ? undefined : { opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.07 }}
                      whileHover={reduceMotion ? undefined : { y: -4, scale: 1.02 }}
                      whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                      className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-2.5 text-left transition hover:border-pink-300/50 hover:bg-white/[0.07] sm:p-3"
                    >
                      <div className="relative mb-3 aspect-[4/3] overflow-hidden rounded-xl bg-[#211c28]">
                        <Image
                          src={pet.image}
                          alt={pet.breed}
                          fill
                          sizes="(max-width: 640px) 42vw, 280px"
                          className="object-cover transition duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-white/[0.04]" />
                      </div>
                      <h3 className="font-semibold text-white">{pet.name}</h3>
                      <p className="mt-1 text-xs text-white/50">{pet.breed}</p>
                      <p className="mt-3 text-xs font-semibold text-pink-300">Say hello <span aria-hidden="true">→</span></p>
                    </motion.button>
                  ))}
                </div>
                <p className="mt-6 text-center text-xs text-white/35">A tiny surprise. A little smile. ✨</p>
              </div>
            </motion.section>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full-screen photorealistic reveal */}
      <AnimatePresence>
        {activePet && (
          <motion.div
            key={activePet.id}
            role="dialog"
            aria-modal="true"
            aria-label={`${activePet.name} surprise`}
            className="fixed inset-0 z-[200] isolate flex items-center justify-center overflow-hidden bg-[#08070d] text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            {/* Atmospheric glow */}
            <motion.div
              className={`pointer-events-none absolute -inset-1/4 bg-gradient-to-br ${activePet.accent} blur-3xl`}
              animate={reduceMotion ? undefined : { scale: [1, 1.15, 1], rotate: [0, 7, 0] }}
              transition={{ duration: 4, ease: "easeInOut" }}
            />
            <motion.div
              className="pointer-events-none absolute left-1/2 top-1/2 h-[min(85vw,620px)] w-[min(85vw,620px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/15 blur-[100px]"
              animate={reduceMotion ? undefined : { opacity: [0.35, 0.75, 0.4], scale: [0.8, 1.12, 0.9] }}
              transition={{ duration: 2.4, repeat: Infinity }}
            />

            {/* Floating hearts */}
            {floatingHearts.map((heart, index) => (
              <motion.span
                key={index}
                aria-hidden="true"
                className={`pointer-events-none absolute select-none ${heart.size} text-pink-200/75 drop-shadow-[0_0_14px_rgba(244,114,182,0.35)]`}
                style={{ left: heart.left, top: heart.top }}
                initial={{ opacity: 0, scale: 0.45, y: 20 }}
                animate={reduceMotion ? { opacity: 0.5 } : {
                  opacity: [0, 0.85, 0.65, 0],
                  scale: [0.55, 1, 0.85],
                  y: [20, -18, -64],
                  rotate: [0, 10, -8],
                }}
                transition={{
                  duration: 2.8,
                  delay: heart.delay,
                  repeat: Infinity,
                  repeatDelay: 0.15,
                  ease: "easeOut",
                }}
              >
                {heart.symbol}
              </motion.span>
            ))}

            {/* Hero image */}
            <div className="relative z-10 flex w-full flex-col items-center px-5 pb-8 pt-12 text-center">
              <motion.div
                className="relative mb-7 h-[min(58vh,520px)] w-[min(88vw,620px)] overflow-hidden rounded-[30px] border border-white/15 bg-[#14111a] shadow-[0_0_100px_rgba(244,114,182,0.12)] sm:rounded-[38px]"
                initial={reduceMotion ? undefined : { opacity: 0, scale: 0.68, y: 18 }}
                animate={reduceMotion ? { opacity: 1 } : { opacity: 1, scale: [0.68, 1.035, 1], y: [18, 0, 0] }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              >
                <Image
                  src={activePet.image}
                  alt={activePet.breed}
                  fill
                  priority
                  sizes="(max-width: 640px) 88vw, 620px"
                  className="object-contain"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#08070d]/75 via-transparent to-[#08070d]/10" />
                <motion.div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-3 rounded-[24px] border border-white/10 sm:rounded-[30px]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                />
              </motion.div>

              <motion.p
                className="mb-2 text-[10px] font-bold uppercase tracking-[0.32em] text-pink-300 sm:text-xs"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
              >
                A little surprise for you
              </motion.p>
              <motion.h2
                className="text-4xl font-black tracking-tight sm:text-6xl"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.4 }}
              >
                {activePet.name}
              </motion.h2>
              <motion.p
                className="mt-3 max-w-sm text-base text-white/75 sm:text-lg"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.58 }}
              >
                {activePet.message}
              </motion.p>
            </div>

            <button
              type="button"
              aria-label="Close pet surprise"
              onClick={() => setActivePet(null)}
              className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.07] text-2xl text-white/75 backdrop-blur-md transition hover:bg-white/15 hover:text-white"
            >
              ×
            </button>

            {/* Four-second progress indicator */}
            <div className="absolute inset-x-0 bottom-0 h-[3px] bg-white/10">
              <motion.div
                className="h-full bg-gradient-to-r from-pink-400 via-fuchsia-400 to-violet-400"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 4, ease: "linear" }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
