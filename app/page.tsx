import { Nav } from "@/components/Nav";
import { Placeholder } from "@/components/Placeholder";
import { IntroOverlay } from "@/components/IntroOverlay";
import { Reveal } from "@/components/Reveal";

const pillars = [
  {
    title: "Student Voice",
    body: "Lorem ipsum — placeholder for platform pillar #1. Describe the candidate's commitment to amplifying student voices in board decisions.",
  },
  {
    title: "Mental Health",
    body: "Lorem ipsum — placeholder for platform pillar #2. Describe mental health initiatives and student wellness goals.",
  },
  {
    title: "Equity & Access",
    body: "Lorem ipsum — placeholder for platform pillar #3. Describe equity goals across schools and programs.",
  },
];

const endorsements = [
  { name: "[Endorser Name]", role: "[Role / Organization]" },
  { name: "[Endorser Name]", role: "[Role / Organization]" },
  { name: "[Endorser Name]", role: "[Role / Organization]" },
];

export default function Home() {
  return (
    <>
      <IntroOverlay />
      {/* Spacer so the intro has room to scroll away */}
      <div className="intro-spacer" aria-hidden />

      <main id="top" className="relative z-10 bg-white">
        <Nav />

        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-amber-50 animate-gradient">
          <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
            <Reveal direction="left">
              <span className="inline-block bg-amber-200 text-amber-900 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
                Official SMOB Finalist
              </span>
              <h1 className="text-5xl md:text-6xl font-black tracking-tight text-slate-900 leading-tight">
                [Candidate Name]
                <span className="block bg-gradient-to-r from-[color:var(--brand)] to-purple-600 bg-clip-text text-transparent">
                  for SMOB
                </span>
              </h1>
              <p className="mt-6 text-lg text-slate-600 max-w-xl">
                A placeholder tagline goes here. Something short, inspiring, and
                memorable that captures the heart of the campaign.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#platform"
                  className="bg-[color:var(--brand)] text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 hover:scale-105 transition"
                >
                  Read the Platform
                </a>
                <a
                  href="#get-involved"
                  className="border-2 border-slate-300 px-6 py-3 rounded-full font-semibold hover:border-slate-500 hover:scale-105 transition"
                >
                  Get Involved
                </a>
              </div>
            </Reveal>
            <Reveal direction="right" delay={150}>
              <Placeholder label="Hero Photo" aspect="portrait" />
            </Reveal>
          </div>
        </section>

        {/* About */}
        <section id="about" className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Reveal direction="left">
              <Placeholder label="About Photo" aspect="square" />
            </Reveal>
            <Reveal direction="right" delay={100}>
              <h2 className="text-sm font-bold uppercase tracking-widest text-[color:var(--brand)]">
                About the Candidate
              </h2>
              <h3 className="text-4xl font-bold mt-2 mb-6">
                Meet [Candidate Name]
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Placeholder bio paragraph. Describe the candidate&apos;s background,
                school, grade, and what drew them to run for SMOB.
              </p>
              <p className="text-slate-600 leading-relaxed">
                A second placeholder paragraph covering extracurriculars, leadership
                experience, and personal motivation.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Platform */}
        <section id="platform" className="bg-slate-50 py-20">
          <div className="max-w-6xl mx-auto px-6">
            <Reveal>
              <div className="text-center mb-14">
                <h2 className="text-sm font-bold uppercase tracking-widest text-[color:var(--brand)]">
                  Platform
                </h2>
                <h3 className="text-4xl font-bold mt-2">What We Stand For</h3>
              </div>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-8">
              {pillars.map((p, i) => (
                <Reveal key={p.title} direction="up" delay={i * 150}>
                  <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover-lift h-full">
                    <Placeholder label="Icon" aspect="square" className="mb-6 max-w-20" />
                    <h4 className="text-xl font-bold mb-3">{p.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{p.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Endorsements */}
        <section id="endorsements" className="max-w-6xl mx-auto px-6 py-20">
          <Reveal>
            <div className="text-center mb-14">
              <h2 className="text-sm font-bold uppercase tracking-widest text-[color:var(--brand)]">
                Endorsements
              </h2>
              <h3 className="text-4xl font-bold mt-2">Supported By</h3>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8">
            {endorsements.map((e, i) => (
              <Reveal key={i} direction="scale" delay={i * 120}>
                <div className="flex items-center gap-4 p-6 rounded-xl bg-slate-50 hover-lift">
                  <div className="w-16 h-16 shrink-0">
                    <Placeholder label="Photo" aspect="square" />
                  </div>
                  <div>
                    <p className="font-bold">{e.name}</p>
                    <p className="text-sm text-slate-500">{e.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Get Involved / CTA */}
        <section
          id="get-involved"
          className="relative overflow-hidden bg-gradient-to-br from-[#0b1e4d] via-[color:var(--brand)] to-[#3b1d6b] animate-gradient text-white py-24"
        >
          <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-amber-400/10 blur-3xl animate-blob" />
          <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-blue-300/10 blur-3xl animate-blob animation-delay-2000" />
          <Reveal>
            <div className="relative max-w-4xl mx-auto px-6 text-center">
              <h2 className="text-sm font-bold uppercase tracking-widest text-amber-300">
                Get Involved
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
                Join the Campaign
              </h3>
              <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-10">
                Placeholder call-to-action text. Explain how students can vote,
                volunteer, share, or donate to help this campaign succeed.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="#"
                  className="bg-amber-400 text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-amber-300 hover:scale-105 transition"
                >
                  Pledge to Vote
                </a>
                <a
                  href="#"
                  className="border-2 border-white/40 px-8 py-4 rounded-full font-bold hover:bg-white/10 hover:scale-105 transition"
                >
                  Volunteer
                </a>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Footer */}
        <footer className="bg-slate-900 text-slate-400 py-10">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-4 text-sm">
            <p>© {new Date().getFullYear()} [Candidate Name] for SMOB.</p>
            <p>Authorized by the [Candidate Name] campaign committee.</p>
          </div>
        </footer>
      </main>
    </>
  );
}
