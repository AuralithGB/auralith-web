import AuralithGuide from "@/components/AuralithGuide";

export default function Home() {
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
          <a
            href="#how-it-works"
            className="transition hover:text-[#183f31]"
          >
            How it works
          </a>

          <a
            href="#support"
            className="transition hover:text-[#183f31]"
          >
            Programmes
          </a>

          <a
            href="#sanctuary"
            className="transition hover:text-[#183f31]"
          >
            Sanctuary
          </a>

          <a
            href="#zenithra"
            className="transition hover:text-[#183f31]"
          >
            Zenithra
          </a>

          <a
            href="#about"
            className="transition hover:text-[#183f31]"
          >
            About
          </a>
        </nav>

        <button className="rounded-full border border-[#183f31]/20 bg-white/70 px-5 py-2.5 text-sm font-medium text-[#183f31] transition hover:bg-white">
          Sign in
        </button>
      </header>

      {/* Hero */}
      <section className="mx-auto grid min-h-[78vh] max-w-7xl items-center gap-14 px-6 pb-20 pt-12 lg:grid-cols-[1.08fr_0.92fr] lg:px-10 lg:pt-16">
        {/* Hero left */}
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
            You do not need to know exactly what the problem is. Tell us what
            you want to change, achieve, improve or understand, and we will
            help you find a starting point.
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

        {/* Auralith Guide */}
        <div id="start">
          <AuralithGuide />
        </div>
      </section>

      {/* Philosophy */}
      <section
        id="how-it-works"
        className="border-y border-[#183f31]/10 bg-[#eef1eb]"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#718078]">
            The Auralith Approach
          </p>

          <h2 className="mx-auto mt-4 max-w-2xl text-center text-3xl font-medium tracking-[-0.03em] text-[#17271f] sm:text-4xl">
            Progress starts with understanding.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-center leading-7 text-[#68756e]">
            We do not begin by trying to sell you something. We begin by
            understanding what you want to change and what may be getting in
            the way.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Understand",
                text: "Tell Auralith what you want to improve, achieve or change. It can be career, money, relationships, wellbeing, study, confidence, habits or something completely different.",
              },
              {
                number: "02",
                title: "Guide",
                text: "We help you turn a broad problem or ambition into a clearer direction and identify realistic next steps.",
              },
              {
                number: "03",
                title: "Act & Grow",
                text: "Choose the support that makes sense for you and keep moving forward through actions, programmes, tools and guidance.",
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

      {/* Support ecosystem */}
      <section
        id="support"
        className="mx-auto max-w-7xl px-6 py-24 lg:px-10"
      >
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#96763d]">
              One Ecosystem
            </p>

            <h2 className="mt-4 max-w-xl text-4xl font-medium tracking-[-0.035em] text-[#17271f]">
              Different people need different kinds of support.
            </h2>
          </div>

          <div className="max-w-xl text-base leading-7 text-[#66736c]">
            Auralith is more than a collection of courses. The goal is to
            understand what you need first, then help you choose an appropriate
            path forward.
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "7-Day Guidance",
              text: "A short guided starting point when you need clarity, direction and momentum.",
            },
            {
              title: "30-Day Challenge",
              text: "Structured daily guidance designed to turn intention into consistent action.",
            },
            {
              title: "Zenithra",
              text: "Your long-term digital companion for goals, reflection, progress and personal development.",
            },
            {
              title: "Human Support",
              text: "A future pathway to appropriate coaching and professional human support when technology alone is not enough.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-[#183f31]/10 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="font-semibold text-[#1c3b2e]">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#748079]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Sanctuary */}
      <section
        id="sanctuary"
        className="border-y border-[#183f31]/10 bg-[#f0f3ed]"
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2 lg:px-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#96763d]">
              Sanctuary
            </p>

            <h2 className="mt-4 text-4xl font-medium tracking-[-0.035em] text-[#17271f]">
              Sometimes progress starts with becoming still.
            </h2>
          </div>

          <div>
            <p className="text-base leading-7 text-[#66736c]">
              Sanctuary will provide a free space inside Auralith for calm,
              reflection and focus through carefully selected calming content,
              mindfulness experiences, nature, music and guided reflection.
            </p>

            <p className="mt-5 text-sm font-semibold text-[#2f6b52]">
              Free to explore • No purchase required
            </p>
          </div>
        </div>
      </section>

      {/* Zenithra */}
      <section
        id="zenithra"
        className="mx-auto max-w-7xl px-6 py-24 lg:px-10"
      >
        <div className="rounded-[2rem] bg-[#183f31] px-8 py-14 text-white lg:px-14">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d4bd89]">
                Meet Zenithra
              </p>

              <h2 className="mt-5 text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
                Your journey should not end when you close the browser.
              </h2>
            </div>

            <div>
              <p className="text-base leading-7 text-[#c9d6d0]">
                Zenithra is being designed as the long-term companion to the
                Auralith experience — helping you remember your goals, track
                progress, reflect, build habits and continue moving forward.
              </p>

              <button className="mt-7 rounded-full bg-[#f3e7c8] px-6 py-3 text-sm font-semibold text-[#173d30] transition hover:bg-white">
                Discover Zenithra →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Coaches */}
      <section className="border-y border-[#183f31]/10 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#96763d]">
                Work With Auralith
              </p>

              <h2 className="mt-4 max-w-xl text-4xl font-medium tracking-[-0.035em] text-[#17271f]">
                Are you a coach or qualified professional interested in
                supporting people?
              </h2>
            </div>

            <div>
              <p className="text-base leading-7 text-[#66736c]">
                We are building a future network of professionals who share our
                belief that people deserve thoughtful, respectful and
                practical support.
              </p>

              <p className="mt-4 text-base leading-7 text-[#66736c]">
                We welcome expressions of interest from coaches and suitably
                qualified professionals who may want to work with Auralith as
                the platform develops.
              </p>

              <button className="mt-7 rounded-full border border-[#183f31] px-6 py-3 text-sm font-semibold text-[#183f31] transition hover:bg-[#183f31] hover:text-white">
                Register your interest →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="mx-auto max-w-7xl px-6 py-24 lg:px-10"
      >
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#96763d]">
            Why Auralith?
          </p>

          <h2 className="mt-5 text-4xl font-medium tracking-[-0.035em] text-[#17271f]">
            Knowing what to do is not always enough.
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#66736c]">
            Many people already know they want something better. The difficult
            part is understanding where to begin, staying consistent and
            continuing when motivation disappears.
          </p>

          <p className="mt-5 text-lg leading-8 text-[#66736c]">
            Auralith is being built to help close that gap — from intention to
            direction, from direction to action, and from action to meaningful
            progress.
          </p>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="mx-4 mb-4 rounded-[2rem] bg-[#173d30] px-6 py-20 text-center text-white sm:mx-6 lg:mx-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c9b27e]">
          You do not need to solve everything today.
        </p>

        <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
          Start with one honest conversation.
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-[#c7d4ce]">
          Tell Auralith where you are and where you want to go. We will start
          from there.
        </p>

        <a
          href="#start"
          className="mt-8 inline-block rounded-full bg-[#f3e7c8] px-7 py-3.5 text-sm font-semibold text-[#173d30] transition hover:bg-white"
        >
          Begin with Auralith →
        </a>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <span className="font-semibold tracking-[0.16em] text-[#28483a]">
              AURALITH
            </span>

            <p className="mt-3 max-w-sm text-sm leading-6 text-[#78847d]">
              Guidance for meaningful, sustainable progress.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-[#78847d]">
            <a href="#" className="hover:text-[#183f31]">
              Privacy
            </a>

            <a href="#" className="hover:text-[#183f31]">
              Terms
            </a>

            <a href="#" className="hover:text-[#183f31]">
              Cookies
            </a>

            <a href="#" className="hover:text-[#183f31]">
              Contact
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-[#183f31]/10 pt-6 text-sm text-[#8a958f]">
          © 2026 Auralith. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
