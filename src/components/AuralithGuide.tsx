"use client";

import { useState } from "react";

const startingIdeas = [
  "Career & Work",
  "Money & Financial Goals",
  "Relationships",
  "Health & Routine",
  "Stress & Wellbeing",
  "Confidence",
  "Study & Learning",
  "Habits & Discipline",
  "Direction & Purpose",
];

export default function AuralithGuide() {
  const [message, setMessage] = useState("");

  const chooseIdea = (idea: string) => {
    setMessage(`I would like help with ${idea.toLowerCase()}.`);
  };

  return (
    <div className="w-full rounded-[32px] border border-[#e4e8e3] bg-white p-8 shadow-[0_20px_60px_rgba(28,65,52,0.10)]">
      <div className="mb-8 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e8f1eb] text-xl text-[#17513f]">
          ✦
        </div>

        <div>
          <p className="font-semibold text-[#123b30]">Auralith Guide</p>
          <p className="text-sm text-[#78847f]">
            Start wherever you are.
          </p>
        </div>
      </div>

      <h2 className="mb-3 text-3xl font-medium tracking-tight text-[#102d25]">
        What&apos;s happening in your life right now?
      </h2>

      <p className="mb-6 leading-7 text-[#66736e]">
        Tell Auralith what you&apos;d like to change, improve or achieve.
        You don&apos;t need to know exactly what the solution is.
      </p>

      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="For example: I feel stuck in my career and I don't know what to do next..."
        className="min-h-[130px] w-full resize-none rounded-2xl border border-[#dce3df] bg-[#fbfcfa] p-4 text-[#17352c] outline-none transition focus:border-[#28634f]"
      />

      <p className="mb-3 mt-6 text-sm font-medium text-[#50635b]">
        Or start with an area of your life:
      </p>

      <div className="flex flex-wrap gap-2">
        {startingIdeas.map((idea) => (
          <button
            key={idea}
            type="button"
            onClick={() => chooseIdea(idea)}
            className="rounded-full border border-[#dce3df] px-4 py-2 text-sm text-[#365449] transition hover:border-[#28634f] hover:bg-[#f1f6f2]"
          >
            {idea}
          </button>
        ))}
      </div>

      <button
        type="button"
        disabled={!message.trim()}
        className="mt-7 w-full rounded-full bg-[#174f3d] px-6 py-4 font-semibold text-white transition hover:bg-[#123f31] disabled:cursor-not-allowed disabled:opacity-40"
      >
        Continue with Auralith →
      </button>

      <p className="mt-4 text-center text-xs leading-5 text-[#8a9691]">
        Auralith provides guidance and personal-development support.
        It is not a medical or emergency service.
      </p>
    </div>
  );
}
