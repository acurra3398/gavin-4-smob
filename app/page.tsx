import { Nav } from "@/components/Nav";
import { Placeholder } from "@/components/Placeholder";
import { IntroOverlay } from "@/components/IntroOverlay";
import { Reveal } from "@/components/Reveal";
import { PledgeButton } from "@/components/PledgeButton";
import { Confetti } from "@/components/Confetti";
import Image from "next/image";

const voice = [
  {
    letter: "V",
    word: "Visibility",
    gradient: "from-blue-500 to-cyan-400",
    glow: "bg-blue-400/30",
    points: [
      "Active social media presence",
      "SMOB newsletter",
      "Publishing SMOB meeting minutes",
      "Regular school visits",
    ],
  },
  {
    letter: "O",
    word: "Opportunity",
    gradient: "from-amber-400 to-orange-500",
    glow: "bg-amber-400/30",
    points: [
      "Forms open to all students",
      "Feedback polls before major decisions",
      "SMOB advisory council",
    ],
  },
  {
    letter: "I",
    word: "Inclusion",
    gradient: "from-fuchsia-500 to-purple-600",
    glow: "bg-fuchsia-400/30",
    points: [
      "Self-defense policies",
      "Better school lunches",
      "Phone access during non-instructional time",
      "More ELD / ESOL support",
    ],
  },
  {
    letter: "C",
    word: "Community",
    gradient: "from-emerald-500 to-teal-400",
    glow: "bg-emerald-400/30",
    points: [
      "Partner with other counties to exchange ideas",
      "Chat with every SGA president",
      "Gavin attending student events in person",
    ],
  },
  {
    letter: "E",
    word: "Empowerment",
    gradient: "from-rose-500 to-pink-500",
    glow: "bg-rose-400/30",
    points: [
      "Leadership workshops",
      "Increasing state-level representation",
      "Spaces for underrepresented groups",
      "County-wide video conferences",
    ],
  },
];

// Update this to change the "Right Now" status shown on the site
const rightNow = {
  status: "Meeting with student leaders across Howard County",
  location: "Howard County, MD",
  updated: "Updated April 2026",
};

const announcements = [
  "🗳️ Gavin is an official HCPSS SMOB finalist",
  "📢 Follow @gavinfalcon.sga for live campaign updates",
  "🏛️ Advocating in Annapolis for Howard County students",
  "🎙️ Town hall dates coming soon — stay tuned",
  "🤝 Backed by student leaders across the county",
];

const experience = [
  {
    role: "HCASC President",
    highlights: [
      "Representing all 57,000+ students across Howard County",
      "Introduced state legislation for HoCo students",
    ],
  },
  {
    role: "LRHS Vice President",
    highlights: ["Student leadership at Long Reach High School"],
  },
  {
    role: "MASC Executive Board",
    highlights: ["School safety portfolio"],
  },
  {
    role: "SMOB Operating Budget Review Committee",
    highlights: ["Reviewed a billion-dollar budget"],
  },
  {
    role: "Class of 2027 Vice President",
    highlights: ["Elected class officer"],
  },
];

// Campaign timeline — edit dates/status freely. Status: "done" | "current" | "upcoming"
const timeline: {
  date: string;
  title: string;
  body: string;
  status: "done" | "current" | "upcoming";
}[] = [
  {
    date: "December 19, 2025",
    title: "Applications Open",
    body: "The HCPSS SMOB application window opens to all eligible students.",
    status: "done",
  },
  {
    date: "January 24, 2026",
    title: "Applications Due",
    body: "Gavin submitted his application to be the 2026–27 Student Member of the Board.",
    status: "done",
  },
  {
    date: "March 25, 2026",
    title: "SMOB Convention",
    body: "Student delegates vote at the SMOB Convention to select the finalists.",
    status: "done",
  },
  {
    date: "March 27, 2026",
    title: "Finalists Announced",
    body: "Gavin is officially named one of the HCPSS SMOB finalists.",
    status: "current",
  },
  {
    date: "April 29, 2026",
    title: "Voting Day",
    body: "Every HCPSS middle & high school student gets a vote. Make yours count.",
    status: "upcoming",
  },
  {
    date: "???",
    title: "Sworn In",
    body: "The new Student Member of the Board begins the term.",
    status: "upcoming",
  },
];

export default function Home() {
  return (
    <>
      <IntroOverlay />

      <main id="top" className="relative z-10 bg-white dark:bg-slate-950 transition-colors">
        {/* Top announcement bar */}
        <div className="relative bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 text-slate-900 py-2.5 text-center text-sm md:text-base font-bold overflow-hidden animate-gradient">
          <Confetti />
          <span className="relative inline-flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600" />
            </span>
            🎉 Gavin is now a SMOB Finalist! 🎉
          </span>
        </div>

        <Nav />

        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-amber-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 animate-gradient">
          {/* Floating particles */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden>
            {[
              { left: "8%", size: 12, color: "#fbbf24", dur: 18, delay: 0 },
              { left: "18%", size: 8, color: "#60a5fa", dur: 22, delay: 3 },
              { left: "28%", size: 14, color: "#c084fc", dur: 20, delay: 6 },
              { left: "42%", size: 10, color: "#34d399", dur: 24, delay: 1 },
              { left: "55%", size: 16, color: "#f472b6", dur: 19, delay: 8 },
              { left: "68%", size: 9, color: "#fbbf24", dur: 23, delay: 4 },
              { left: "80%", size: 13, color: "#60a5fa", dur: 21, delay: 10 },
              { left: "92%", size: 11, color: "#c084fc", dur: 25, delay: 2 },
            ].map((p, i) => (
              <span
                key={i}
                className="particle"
                style={{
                  left: p.left,
                  width: p.size,
                  height: p.size,
                  background: p.color,
                  animationDuration: `${p.dur}s`,
                  animationDelay: `${p.delay}s`,
                  opacity: 0.5,
                }}
              />
            ))}
          </div>
          <div className="relative max-w-6xl mx-auto px-4 md:px-6 py-14 md:py-28 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <Reveal direction="left">
              <span className="inline-block bg-amber-200 text-amber-900 dark:bg-amber-400/20 dark:text-amber-300 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6 animate-pulse-glow">
                ⭐ HCPSS SMOB Finalist
              </span>
              <h1 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
                Gavin Falcón
                <span className="block bg-gradient-to-r from-[color:var(--brand)] to-purple-600 dark:to-fuchsia-400 bg-clip-text text-transparent">
                  for SMOB
                </span>
              </h1>
              <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 max-w-xl">
                My campaign is about voice, because your voice is the only one that should matter.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#platform"
                  className="clickable bg-[color:var(--brand)] text-white dark:text-slate-900 px-6 py-3 rounded-full font-semibold hover:opacity-90 hover:scale-105 transition"
                >
                  Read the Platform
                </a>
                <a
                  href="#get-involved"
                  className="clickable border-2 border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 px-6 py-3 rounded-full font-semibold hover:border-slate-500 dark:hover:border-slate-500 hover:scale-105 transition"
                >
                  Get Involved
                </a>
              </div>
            </Reveal>
            <Reveal direction="right" delay={150}>
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg">
                <Image
                  src="/Main.webp"
                  alt="Gavin Falcón's Photo"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                  quality={80}
                  priority
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* About */}
        <section id="about" className="max-w-6xl mx-auto px-4 md:px-6 py-14 md:py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Reveal direction="left">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg">
                <Image
                  src="/Seccond.webp"
                  alt="Gavin Falcón's Photo"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                  quality={80}
                  loading="lazy"
                />
              </div>
            </Reveal>
            <Reveal direction="right" delay={100}>
              <h2 className="text-sm font-bold uppercase tracking-widest text-[color:var(--brand)]">
                About Gavin
              </h2>
              <h3 className="text-4xl font-bold mt-2 mb-6 text-slate-900 dark:text-white">
                Meet Gavin
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Gavin is the 25-26 HCASC President. He's advocated county and state wide. No matter if he is at a HCASC general assembly, or is in annapolis he knows how to make an impact.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Gavin is also the vice president at Long Reach High school. On the side he enjoys Okinawa Shorin-Ryu Kiyobukan.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Platform */}
        <section id="platform" className="bg-slate-50 dark:bg-slate-900 py-14 md:py-20">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <Reveal>
              <div className="text-center mb-16">
                <h2 className="text-sm font-bold uppercase tracking-widest text-[color:var(--brand)]">
                  Platform
                </h2>
                <h3 className="text-4xl md:text-5xl font-bold mt-2 text-slate-900 dark:text-white">
                  What We Stand For
                </h3>
                <p className="mt-4 text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
                  Every student deserves a{" "}
                  <span className="font-bold text-[color:var(--brand)]">V.O.I.C.E.</span>
                </p>
              </div>
            </Reveal>

            {/* VOICE vertical alternating timeline */}
            <div className="relative max-w-5xl mx-auto">
              {/* Central dashed line (desktop) */}
              <div
                className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-blue-300 via-fuchsia-300 to-rose-300 opacity-60"
                aria-hidden
              />

              <div className="space-y-12 md:space-y-24">
                {voice.map((v, i) => {
                  const reverse = i % 2 === 1;
                  return (
                    <Reveal
                      key={v.letter}
                      direction={reverse ? "right" : "left"}
                      delay={i * 80}
                    >
                      <div
                        className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
                          reverse ? "md:flex-row-reverse" : ""
                        }`}
                      >
                        {/* Giant letter — liquid glass */}
                        <div className="voice-letter relative flex-shrink-0 w-full md:w-1/2 flex justify-center">
                          <div className="voice-letter-inner relative">
                            {/* Colored aura behind glass */}
                            <div
                              className={`absolute -inset-6 md:-inset-10 rounded-[3rem] bg-gradient-to-br ${v.gradient} blur-2xl md:blur-3xl opacity-60 md:opacity-70`}
                              aria-hidden
                            />
                            <div
                              className={`absolute -inset-2 md:-inset-4 rounded-[2.5rem] bg-gradient-to-br ${v.gradient} blur-lg md:blur-xl opacity-70 md:opacity-80`}
                              aria-hidden
                            />

                            {/* Glass tile */}
                            <div
                              className="relative w-32 h-32 md:w-56 md:h-56 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden flex items-center justify-center rotate-[-3deg] transition-transform duration-500 hover:rotate-0 hover:scale-[1.03]"
                              style={{
                                background:
                                  "linear-gradient(135deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.1) 100%)",
                                backdropFilter: "blur(24px) saturate(180%)",
                                WebkitBackdropFilter: "blur(24px) saturate(180%)",
                                border: "1px solid rgba(255,255,255,0.5)",
                                boxShadow:
                                  "inset 0 1px 0 rgba(255,255,255,0.9), inset 0 -1px 0 rgba(255,255,255,0.15), inset 0 0 40px rgba(255,255,255,0.15), 0 30px 60px -20px rgba(0,0,0,0.35), 0 10px 30px -10px rgba(0,0,0,0.25)",
                              }}
                            >
                              {/* Top gloss highlight */}
                              <div
                                className="absolute top-0 left-0 right-0 h-1/2 rounded-t-[2rem] pointer-events-none"
                                style={{
                                  background:
                                    "linear-gradient(to bottom, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.1) 60%, transparent 100%)",
                                }}
                              />
                              {/* Diagonal shine */}
                              <div
                                className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] pointer-events-none opacity-40"
                                style={{
                                  background:
                                    "linear-gradient(115deg, transparent 40%, rgba(255,255,255,0.4) 50%, transparent 60%)",
                                }}
                              />

                              <span
                                className="relative text-6xl md:text-9xl font-black text-white select-none"
                                style={{
                                  textShadow:
                                    "0 2px 10px rgba(0,0,0,0.25), 0 0 30px rgba(255,255,255,0.35), 0 1px 0 rgba(255,255,255,0.6)",
                                }}
                              >
                                {v.letter}
                              </span>
                            </div>

                            {/* Word badge — glass pill */}
                            <div
                              className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full"
                              style={{
                                background: "rgba(255,255,255,0.75)",
                                backdropFilter: "blur(12px) saturate(180%)",
                                WebkitBackdropFilter: "blur(12px) saturate(180%)",
                                border: "1px solid rgba(255,255,255,0.8)",
                                boxShadow:
                                  "0 10px 30px -10px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.9)",
                              }}
                            >
                              <span
                                className={`font-black text-sm uppercase tracking-wider bg-gradient-to-r ${v.gradient} bg-clip-text text-transparent`}
                              >
                                {v.word}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="w-full md:w-1/2">
                          <div className="bg-white dark:bg-slate-800/70 dark:backdrop-blur rounded-2xl p-6 md:p-8 shadow-lg border border-slate-100 dark:border-slate-700">
                            <ul className="space-y-3">
                              {v.points.map((pt) => (
                                <li
                                  key={pt}
                                  className="flex items-start gap-3 text-slate-700 dark:text-slate-300"
                                >
                                  <span
                                    className={`mt-1 w-2 h-2 rounded-full flex-shrink-0 bg-gradient-to-br ${v.gradient}`}
                                  />
                                  <span className="leading-relaxed">{pt}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Announcements marquee */}
        <section
          aria-label="Announcements"
          className="bg-gradient-to-r from-[color:var(--brand)] via-purple-700 to-[color:var(--brand)] text-white py-4 overflow-hidden border-y-4 border-amber-400"
        >
          <div className="flex whitespace-nowrap animate-marquee">
            {[...announcements, ...announcements].map((a, i) => (
              <span
                key={i}
                className="mx-8 text-sm md:text-base font-semibold tracking-wide"
              >
                {a}
              </span>
            ))}
          </div>
        </section>

        {/* Right Now */}
        <section className="max-w-4xl mx-auto px-4 md:px-6 py-14 md:py-20">
          <Reveal direction="scale">
            <div className="relative rounded-3xl p-8 md:p-10 bg-gradient-to-br from-slate-900 to-slate-800 text-white overflow-hidden border border-slate-700">
              <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-emerald-500/20 blur-3xl animate-blob" />
              <div className="relative flex items-start gap-5">
                <div className="flex-shrink-0 mt-1">
                  <span className="relative flex h-4 w-4">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500" />
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-300">
                    Right Now
                  </p>
                  <p className="mt-2 text-2xl md:text-3xl font-bold leading-snug">
                    {rightNow.status}
                  </p>
                  <p className="mt-3 text-sm text-slate-400">
                    📍 {rightNow.location} · {rightNow.updated}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Timeline */}
        <section id="timeline" className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 py-14 md:py-20">
          <div className="max-w-5xl mx-auto px-4 md:px-6">
            <Reveal>
              <div className="text-center mb-16">
                <h2 className="text-sm font-bold uppercase tracking-widest text-[color:var(--brand)]">
                  Timeline
                </h2>
                <h3 className="text-4xl md:text-5xl font-bold mt-2 text-slate-900 dark:text-white">
                  The Road to SMOB
                </h3>
                <p className="mt-4 text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
                  Here&apos;s where we are and what&apos;s coming up next.
                </p>
              </div>
            </Reveal>

            <div className="relative">
              {/* Vertical line — animated flowing gradient */}
              <div
                className="timeline-spine absolute left-4 md:left-1/2 top-0 bottom-0 w-1 md:-translate-x-1/2 rounded-full shadow-[0_0_12px_rgba(251,191,36,0.4)]"
                aria-hidden
              />

              <div className="space-y-10 md:space-y-14">
                {timeline.map((t, i) => {
                  const reverse = i % 2 === 1;
                  const isDone = t.status === "done";
                  const isCurrent = t.status === "current";

                  const nodeClass = isCurrent
                    ? "bg-amber-400 ring-4 ring-amber-200"
                    : isDone
                    ? "bg-emerald-500 ring-4 ring-emerald-100"
                    : "bg-white border-2 border-slate-300";

                  const badgeClass = isCurrent
                    ? "bg-amber-100 text-amber-800 border-amber-300"
                    : isDone
                    ? "bg-emerald-100 text-emerald-800 border-emerald-300"
                    : "bg-slate-100 text-slate-600 border-slate-200";

                  const statusLabel = isCurrent
                    ? "Happening now"
                    : isDone
                    ? "Completed"
                    : "Upcoming";

                  return (
                    <Reveal
                      key={t.title + i}
                      direction={reverse ? "right" : "left"}
                      delay={i * 80}
                    >
                      <div
                        className={`relative flex items-start md:items-center gap-6 md:gap-0 ${
                          reverse ? "md:flex-row-reverse" : "md:flex-row"
                        }`}
                      >
                        {/* Card */}
                        <div
                          className={`flex-1 pl-14 md:pl-0 ${
                            reverse ? "md:pl-12" : "md:pr-12"
                          } ${reverse ? "md:text-left" : "md:text-right"}`}
                        >
                          <div
                            className={`inline-block bg-white dark:bg-slate-800/80 dark:backdrop-blur rounded-2xl p-5 md:p-6 shadow-md border border-slate-100 dark:border-slate-700 hover-lift text-left ${
                              isCurrent ? "ring-2 ring-amber-300 animate-pulse-glow" : ""
                            }`}
                          >
                            <span
                              className={`inline-block text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border mb-2 ${badgeClass}`}
                            >
                              {statusLabel}
                            </span>
                            <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                              {t.date}
                            </p>
                            <h4 className="text-lg md:text-xl font-bold mt-1 text-slate-900 dark:text-white">
                              {t.title}
                            </h4>
                            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                              {t.body}
                            </p>
                          </div>
                        </div>

                        {/* Node on the line */}
                        <div
                          className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-4 md:top-1/2 md:-translate-y-1/2 animate-node-pop"
                          style={{ animationDelay: `${i * 120 + 200}ms` }}
                        >
                          <div
                            className={`relative w-6 h-6 rounded-full ${nodeClass} shadow-lg transition-transform hover:scale-125`}
                          >
                            {isCurrent && (
                              <span
                                className="absolute inset-0 rounded-full bg-amber-400 animate-ping opacity-75"
                                aria-hidden
                              />
                            )}
                            {isDone && (
                              <svg
                                className="absolute inset-0 m-auto w-3 h-3 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={3}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            )}
                          </div>
                        </div>

                        {/* Opposite-side spacer (desktop) */}
                        <div className="hidden md:block flex-1" aria-hidden />
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="max-w-6xl mx-auto px-4 md:px-6 py-14 md:py-20">
          <Reveal>
            <div className="text-center mb-14">
              <h2 className="text-sm font-bold uppercase tracking-widest text-[color:var(--brand)]">
                Experience
              </h2>
              <h3 className="text-4xl font-bold mt-2 text-slate-900 dark:text-white">
                A Proven Track Record
              </h3>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6">
            {experience.map((e, i) => (
              <Reveal key={e.role} direction="up" delay={i * 100}>
                <div className="relative p-6 rounded-2xl bg-white dark:bg-slate-800/60 dark:backdrop-blur border border-slate-200 dark:border-slate-700 hover-lift h-full">
                  <div className="absolute top-6 left-6 w-3 h-3 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 shadow-[0_0_0_4px_rgba(251,191,36,0.15)]" />
                  <div className="pl-8">
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">{e.role}</h4>
                    <ul className="mt-3 space-y-1.5">
                      {e.highlights.map((h) => (
                        <li
                          key={h}
                          className="text-sm text-slate-600 dark:text-slate-300 flex gap-2 before:content-['→'] before:text-[color:var(--brand)] before:font-bold"
                        >
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Get Involved / CTA */}
        <section
          id="get-involved"
          className="relative overflow-hidden bg-gradient-to-br from-[#0b1e4d] via-[color:var(--brand)] to-[#3b1d6b] animate-gradient text-white py-16 md:py-24"
        >
          <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-amber-400/10 blur-3xl animate-blob" />
          <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-blue-300/10 blur-3xl animate-blob animation-delay-2000" />
          <Reveal>
            <div className="relative max-w-4xl mx-auto px-4 md:px-6 text-center">
              <h2 className="text-sm font-bold uppercase tracking-widest text-amber-300">
                Get Involved
              </h2>
              <h3 className="text-3xl md:text-5xl font-bold mt-2 mb-4 md:mb-6">
                Join the Campaign
              </h3>
              <p className="text-blue-100 text-base md:text-xl max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed">
                This election is decided by students — by <em>you</em>. Pledge
                your vote today, follow along on Instagram, and help put a real
                voice on the Howard County Board of Education.
              </p>
              <div className="flex flex-col items-center gap-4">
                <PledgeButton />
              </div>
            </div>
          </Reveal>
        </section>

        {/* Footer */}
        <footer className="bg-slate-900 text-slate-400 py-8 md:py-12">
          <div className="max-w-6xl mx-auto px-4 md:px-6 flex flex-col items-center gap-5 md:gap-6 text-sm">
            <a
              href="https://www.instagram.com/gavin4smob/"
              target="_blank"
              rel="noopener noreferrer"
              className="clickable group flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-fuchsia-600 via-pink-600 to-amber-500 text-white font-bold hover:scale-105 transition-transform shadow-lg"
            >
              <svg
                className="w-5 h-5 group-hover:rotate-12 transition-transform"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path d="M12 2.2c3.2 0 3.6 0 4.85.07 1.17.05 1.8.25 2.22.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.05.41 2.22.06 1.26.07 1.64.07 4.85s0 3.6-.07 4.85c-.05 1.17-.25 1.8-.41 2.22-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.05.36-2.22.41-1.26.06-1.64.07-4.85.07s-3.6 0-4.85-.07c-1.17-.05-1.8-.25-2.22-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.05-.41-2.22C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.85c.05-1.17.25-1.8.41-2.22.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.05-.36 2.22-.41C8.4 2.2 8.8 2.2 12 2.2zm0 2.16c-3.14 0-3.51 0-4.75.07-.98.05-1.51.2-1.86.34-.47.18-.8.4-1.15.75-.36.36-.57.68-.75 1.15-.14.36-.3.88-.34 1.86-.06 1.25-.07 1.62-.07 4.76s0 3.51.07 4.75c.05.98.2 1.51.34 1.86.18.47.4.8.75 1.15.36.36.68.57 1.15.75.36.14.88.3 1.86.34 1.25.06 1.62.07 4.75.07s3.51 0 4.75-.07c.98-.05 1.51-.2 1.86-.34.47-.18.8-.4 1.15-.75.36-.36.57-.68.75-1.15.14-.36.3-.88.34-1.86.06-1.25.07-1.62.07-4.75s0-3.51-.07-4.75c-.05-.98-.2-1.51-.34-1.86-.18-.47-.4-.8-.75-1.15-.36-.36-.68-.57-1.15-.75-.36-.14-.88-.3-1.86-.34C15.51 4.35 15.14 4.35 12 4.35zm0 3.68a3.97 3.97 0 1 1 0 7.94 3.97 3.97 0 0 1 0-7.94zm0 6.54a2.57 2.57 0 1 0 0-5.14 2.57 2.57 0 0 0 0 5.14zm5.05-6.7a.93.93 0 1 1-1.86 0 .93.93 0 0 1 1.86 0z" />
              </svg>
              <span>@gavin4smob</span>
            </a>
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-center">
              <p>© {new Date().getFullYear()} Gavin Falcón for SMOB.</p>
              <p className="hidden md:block">·</p>
              <p>Authorized by the Gavin Falcón campaign committee.</p>
            </div>
            <p className="text-xs text-slate-500">
              Created by{" "}
              <a
                href="https://alexcurrano.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-slate-300 hover:text-amber-400 underline underline-offset-4 decoration-slate-600 hover:decoration-amber-400 transition-colors"
              >
                Alexander Currano
              </a>
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
