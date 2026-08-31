"use client";

import { useState } from "react";

type Step = "start" | "goal" | "obstacle" | "capacity" | "result";

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

const goalOptions = [
  "I want clarity",
  "I want to improve something",
  "I want to change something",
  "I want to achieve a specific goal",
  "I want to feel more in control",
  "I'm not sure yet",
];

const obstacleOptions = [
  "I don't know where to start",
  "I lack confidence",
  "I keep procrastinating",
  "I struggle with consistency",
  "I feel overwhelmed",
  "I don't have enough time",
  "Something else",
];

const capacityOptions = [
  "10–15 minutes a day",
  "20–30 minutes a day",
  "Around 1 hour a day",
  "A few hours each week",
  "I'm not sure yet",
];

export default function AuralithGuide() {
  const [step, setStep] = useState<Step>("start");
  const [message, setMessage] = useState("");
  const [goal, setGoal] = useState("");
  const [obstacle, setObstacle] = useState("");
  const [capacity, setCapacity] = useState("");

  const chooseIdea = (idea: string) => {
    setMessage(`I would like help with ${idea.toLowerCase()}.`);
  };

  const restart = () => {
    setStep("start");
    setMessage("");
    setGoal("");
    setObstacle("");
    setCapacity("");
  };

  const getFirstAction = () => {
    if (obstacle.includes("where to start")) {
      return "Write down what you want to be different 30 days from now. Keep it to one clear outcome.";
    }

    if (obstacle.includes("confidence")) {
      return "Write down three situations where you already handled something better than you expected. Use them as evidence, not motivation.";
    }

    if (obstacle.includes("procrastinating")) {
      return "Choose one task connected to your goal and reduce it to a version that takes less than 10 minutes. Do that version today.";
    }

    if (obstacle.includes("consistency")) {
      return "Choose one small action you can repeat daily for the next seven days. Make it small enough that missing it would feel unnecessary.";
    }

    if (obstacle.includes("overwhelmed")) {
      return "Write down everything currently competing for your attention. Circle only the one thing that would create the most useful progress.";
    }

    if (obstacle.includes("time")) {
      return "Find one realistic 15-minute window in your current routine and protect it for your goal before trying to create a bigger plan.";
    }

    return "Write down the single biggest change you want to see and one action you could realistically take in the next 24 hours.";
  };

  const getSuggestedPath = () => {
    if (
      message.toLowerCase().includes("stress") ||
      message.toLowerCase().includes("overwhelmed")
    ) {
      return "Start with free Auralith guidance and Sanctuary. If the issue is mainly routine or consistency, a short guided programme may help next.";
    }

    if (
      message.toLowerCase().includes("career") ||
      message.toLowerCase().includes("job") ||
      message.toLowerCase().includes("promotion")
    ) {
      return "A 7-Day Career Clarity or 30-Day development pathway could be a strong next step.";
    }

    if (
      message.toLowerCase().includes("money") ||
      message.toLowerCase().includes("financial") ||
      message.toLowerCase().includes("rich")
    ) {
      return "A short Money & Direction pathway could help turn the ambition into a clearer and more realistic financial goal.";
    }

    if (
      message.toLowerCase().includes("relationship") ||
      message.toLowerCase().includes("partner")
    ) {
      return "A relationship and communication guidance pathway may be appropriate. Human support can be considered later where useful.";
    }

    if (
      message.toLowerCase().includes("weight") ||
      message.toLowerCase().includes("health") ||
      message.toLowerCase().includes("exercise")
    ) {
      return "A habit and routine pathway may help with consistency. Auralith should support behaviour change, not replace medical or nutritional advice.";
    }

    return "A short 7-Day Guidance pathway may be the best first structured step, followed by a deeper 30-Day programme if you want more support.";
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

      {step === "start" && (
        <>
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
            onClick={() => setStep("goal")}
            className="mt-7 w-full rounded-full bg-[#174f3d] px-6 py-4 font-semibold text-white transition hover:bg-[#123f31] disabled:cursor-not-allowed disabled:opacity-40"
          >
            Continue with Auralith →
          </button>
        </>
      )}

      {step === "goal" && (
        <>
          <p className="text-sm font-medium text-[#7d8a84]">Step 1 of 3</p>

          <h2 className="mt-2 text-3xl font-medium tracking-tight text-[#102d25]">
            What would a good outcome look like for you?
          </h2>

          <div className="mt-6 grid gap-3">
            {goalOptions.map((option) => (
              <button
                key={option}
                onClick={() => {
                  setGoal(option);
                  setStep("obstacle");
                }}
                className="rounded-2xl border border-[#dce3df] bg-[#fbfcfa] px-5 py-4 text-left text-sm font-medium text-[#365449] transition hover:border-[#28634f] hover:bg-[#f1f6f2]"
              >
                {option}
              </button>
            ))}
          </div>
        </>
      )}

      {step === "obstacle" && (
        <>
          <p className="text-sm font-medium text-[#7d8a84]">Step 2 of 3</p>

          <h2 className="mt-2 text-3xl font-medium tracking-tight text-[#102d25]">
            What feels like the biggest obstacle right now?
          </h2>

          <div className="mt-6 grid gap-3">
            {obstacleOptions.map((option) => (
              <button
                key={option}
                onClick={() => {
                  setObstacle(option);
                  setStep("capacity");
                }}
                className="rounded-2xl border border-[#dce3df] bg-[#fbfcfa] px-5 py-4 text-left text-sm font-medium text-[#365449] transition hover:border-[#28634f] hover:bg-[#f1f6f2]"
              >
                {option}
              </button>
            ))}
          </div>
        </>
      )}

      {step === "capacity" && (
        <>
          <p className="text-sm font-medium text-[#7d8a84]">Step 3 of 3</p>

          <h2 className="mt-2 text-3xl font-medium tracking-tight text-[#102d25]">
            How much time could you realistically give this?
          </h2>

          <div className="mt-6 grid gap-3">
            {capacityOptions.map((option) => (
              <button
                key={option}
                onClick={() => {
                  setCapacity(option);
                  setStep("result");
                }}
                className="rounded-2xl border border-[#dce3df] bg-[#fbfcfa] px-5 py-4 text-left text-sm font-medium text-[#365449] transition hover:border-[#28634f] hover:bg-[#f1f6f2]"
              >
                {option}
              </button>
            ))}
          </div>
        </>
      )}

      {step === "result" && (
        <>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9a7b43]">
            Your Auralith starting point
          </p>

          <h2 className="mt-3 text-3xl font-medium tracking-tight text-[#102d25]">
            You have enough information to begin.
          </h2>

          <div className="mt-7 space-y-4">
            <div className="rounded-2xl bg-[#f5f7f4] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#728079]">
                What you told us
              </p>
              <p className="mt-2 leading-7 text-[#30463d]">{message}</p>
            </div>

            <div className="rounded-2xl bg-[#f5f7f4] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#728079]">
                Your direction
              </p>
              <p className="mt-2 leading-7 text-[#30463d]">{goal}</p>
            </div>

            <div className="rounded-2xl bg-[#f5f7f4] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#728079]">
                Main obstacle
              </p>
              <p className="mt-2 leading-7 text-[#30463d]">{obstacle}</p>
            </div>

            <div className="rounded-2xl bg-[#f5f7f4] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#728079]">
                Realistic capacity
              </p>
              <p className="mt-2 leading-7 text-[#30463d]">{capacity}</p>
            </div>

            <div className="rounded-2xl border border-[#cfded6] bg-[#eef5f0] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#2f6b52]">
                Your first action
              </p>
              <p className="mt-2 leading-7 text-[#24483a]">
                {getFirstAction()}
              </p>
            </div>

            <div className="rounded-2xl border border-[#eadfca] bg-[#f7f1e5] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#92733c]">
                A possible next path
              </p>
              <p className="mt-2 leading-7 text-[#5b503b]">
                {getSuggestedPath()}
              </p>
            </div>
          </div>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            <button className="rounded-full bg-[#174f3d] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#123f31]">
              Explore 7-Day Guidance →
            </button>

            <button
              onClick={restart}
              className="rounded-full border border-[#174f3d] px-6 py-3.5 text-sm font-semibold text-[#174f3d] transition hover:bg-[#f1f6f2]"
            >
              Start again
            </button>
          </div>
        </>
      )}

      <p className="mt-6 text-center text-xs leading-5 text-[#8a9691]">
        Auralith provides general guidance and personal-development support.
        It is not a medical, clinical or emergency service.
      </p>
    </div>
  );
}
