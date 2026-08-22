"use client";

import { useState } from "react";

const journeys = [
  "Build discipline",
  "Improve my career",
  "Study better",
  "Build confidence",
  "Find direction",
  "Something else",
];

export default function Home() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-[#f8f7f2] text-[#17211b]">
      {/* Navigation */}
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-7 lg:px-10">
        <a
          href="#"
          className="text-2xl font-semibold tracking-[0.22em] text-[#183f31]"
        >
          AURALITH
        </a>

        <nav className="hidden items-center gap-8 text-sm text-[#43534a] md:flex">
          <a href="#how-it-works" className="transition hover:text-[#183f31]">
            How it works
          </a>
          <a href="#support" className="transition hover:text-[#183f31]">
            Programmes
          </a>
          <a href="#sanctuary" className="transition hover:text-[#183f31]">
            Sanctuary
          </a>
          <a href="#zenithra" className="transition hover:text-[#183f31]">
            Zenithra
          </a>
          <a href="#about" className="transition hover:text-[#183f31]">
            About
          </a>
        </nav>

        <button className="rounded-full border border-[#183f31]/20 bg-white/70 px-5 py-2.5 text-sm font-medium text-[#183f31] transition hover:bg-white">
          Sign in
        </button>
      </header>

      {/* Hero */}
      <section className="mx-auto grid min-h-[78vh] max-w-7xl items-center gap-14 px-6 pb-20 pt-12 lg:grid-cols-[1.08fr_0.92fr] lg:px-10 lg:pt-16">
        <div>
          <div className="mb-7 inline-flex rounded-full border border-[#b99a5d]/30 bg-[#f2ead8] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#765f32]">
            Understand • Guide • Act • Grow
          </div>

          <h1 className="max-w-3xl text-5xl font-medium leading-[1.05] tracking-[-0.04em] text-[#14251d] sm:text-6xl lg:text-7xl">
            You know you want
            <span className="text-[#2f6b52]"> more from yourself.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#59665f] sm:text-xl">
            Auralith helps you understand what is holding you back, clarify
            where you want to go, and turn that direction into realistic
            action.
          </p>

          <p className="mt-5 max-w-xl text-base leading-7 text-[#718078]">
            No pressure. No instant sales pitch. Start with where you are, and
            we&apos;ll work out what could help.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#start"
              className="rounded-full bg-[#183f31] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#183f31]/10 transition hover:-translate-y-0.5 hover:bg-[#215440]"
            >
              Start your journey →
            </a>

            <a
              href="#how-it-works"
              className="px-3 py-3 text-sm font-semibold text-[#365146] transition hover:text-[#183f31]"
            >
              See how Auralith works
            </a>
          </div>
        </div>

        {/* Guided entry card */}
        <div
          id="start"
          className="rounded-[2rem] border border-[#183f31]/10 bg-white p-7 shadow-[0_30px_80px_rgba(31,55,44,0.10)] sm:p-9"
        >
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e6efe9] text-lg text-[#24543f]">
              ✦
            </div>

            <div>
              <p className="text-sm font-semibold text-[#1e3f31]">
                Auralith Guide
              </p>
              <p className="text-xs text-[#87928c]">
                Let&apos;s start with one question.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-medium leading-9 tracking-[-0.02em] text-[#18271f]">
            What would you most like to change or achieve right now?
          </h2>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {journeys.map((journey) => (
              <button
                key={journey}
                onClick={() => setSelected(journey)}
                className={`rounded-2xl border px-5 py-4 text-left text-sm font-medium transition ${
                  selected === journey
                    ? "border-[#2f6b52] bg-[#edf4ef] text-[#183f31]"
                    : "border-[#dfe5e1] bg-[#fbfcfb] text-[#4b5b53] hover:border-[#8eaa9d] hover:bg-[#f5f8f6]"
                }`}
              >
                {journey}
              </button>
            ))}
          </div>

          {selected && (
            <div className="mt-7 rounded-2xl bg-[#f3f0e7] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#92733c]">
                Your starting point
              </p>

              <p className="mt-2 text-sm leading-6 text-[#4e574f]">
                You chose <strong>{selected}</strong>. Next, Auralith will ask
                a few useful questions to understand what&apos;s happening
                before suggesting your next step.
              </p>

              <button className="mt-4 rounded-full bg-[#183f31] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#215440]">
                Continue →
              </button>
            </div>
          )}

          <p className="mt-6 text-center text-xs leading-5 text-[#929c96]">
            You don&apos;t need to have everything figured out before you
            begin.
          </p>
        </div>
      </section>

      {/* Philosophy strip */}
      <section
        id="how-it-works"
        className="border-y border-[#183f31]/10 bg-[#eef1eb]"
      >
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#718078]">
            The Auralith approach
          </p>

          <h2 className="mx-auto mt-4 max-w-2xl text-center text-3xl font-medium tracking-[-0.03em] text-[#17271f] sm:text-4xl">
            Progress starts with understanding.
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Understand",
                text: "We begin with your goal, where you are now, and what is making progress difficult.",
              },
              {
                number: "02",
                title: "Guide",
                text: "Auralith helps turn a vague ambition into a clearer direction and realistic next steps.",
              },
              {
                number: "03",
                title: "Act & grow",
                text: "Use guided actions, programmes and support to make progress you can actually sustain.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="rounded-3xl border border-[#183f31]/10 bg-[#f8f7f2] p-7"
              >
                <span className="text-xs font-semibold tracking-[0.16em] text-[#a18349]">
                  {item.number}
                </span>
                <h3 className="mt-5 text-xl font-semibold text-[#1d392d]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#68756e]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support preview */}
      <section id="support" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#96763d]">
              One ecosystem
            </p>

            <h2 className="mt-4 max-w-xl text-4xl font-medium tracking-[-0.035em] text-[#17271f]">
              The right support should depend on what you need.
            </h2>
          </div>

          <div className="max-w-xl text-base leading-7 text-[#66736c]">
            Auralith can guide you toward free resources, structured
            development programmes, Zenithra, or eventually human coaching
            when deeper support is appropriate.
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            ["30-Day Challenge", "Focused action and daily development."],
            ["Zenithra", "Your long-term development companion."],
            ["Sanctuary", "Free space for calm, focus and reflection."],
            ["Human Support", "Coaching when technology is not enough."],
          ].map(([title, text]) => (
            <div
              key={title}
              className="rounded-3xl border border-[#183f31]/10 bg-white p-6"
            >
              <h3 className="font-semibold text-[#1c3b2e]">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#748079]">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="mx-4 mb-4 rounded-[2rem] bg-[#173d30] px-6 py-20 text-center text-white sm:mx-6 lg:mx-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c9b27e]">
          Your next step does not need to be huge.
        </p>

        <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
          Start by understanding where you are.
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-[#c7d4ce]">
          A few thoughtful questions can turn “I feel stuck” into something you
          can begin working on.
        </p>

        <a
          href="#start"
          className="mt-8 inline-block rounded-full bg-[#f3e7c8] px-7 py-3.5 text-sm font-semibold text-[#173d30] transition hover:bg-white"
        >
          Begin with Auralith →
        </a>
      </section>

      {/* Footer */}
      <footer className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-10 text-sm text-[#78847d] sm:flex-row sm:items-center sm:justify-between lg:px-10">
        <span className="font-semibold tracking-[0.16em] text-[#28483a]">
          AURALITH
        </span>

        <p>Guidance for meaningful, sustainable progress.</p>

        <p>© 2026 Auralith</p>
      </footer>
    </main>
  );
}