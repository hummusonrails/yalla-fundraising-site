import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import Reveal from "@/components/Reveal";

/* ----------------------------------------------------------------
   Content — placeholders marked {PLACEHOLDER} are ready for Sharon
   to fill in with real numbers, testimonials, and her portrait.
----------------------------------------------------------------- */

const CREDENTIALS = [
  "Forward 50 Most Influential Jewish Leaders",
  "NY Jewish Week · 36 to Watch",
  "PhD · New York University",
  "Columbia University · Executive Leadership",
  "75+ Published Articles",
  "20+ Years of Nonprofit Leadership",
];

const STATS = [
  { value: "$XXM+", label: "Raised for mission-driven organizations" },
  { value: "20+", label: "Years leading nonprofit development" },
  { value: "XX", label: "Boards & teams coached and trained" },
  { value: "XX", label: "Campaigns & feasibility studies guided" },
];

const SERVICES = [
  {
    no: "01",
    title: "Advisory & Fractional CDO",
    blurb:
      "Embedded development leadership for organizations between chief development officers — strategy, pipeline, and execution, without the full-time hire.",
    points: ["Development strategy", "Major-gift pipeline", "Interim leadership"],
  },
  {
    no: "02",
    title: "Campaign & Feasibility Counsel",
    blurb:
      "From the honest feasibility study to the celebration gala — planning, case design, and counsel that carry a capital or endowment campaign to its goal.",
    points: ["Feasibility studies", "Case for support", "Campaign management"],
  },
  {
    no: "03",
    title: "Board Development",
    blurb:
      "Turn a well-meaning board into a fundraising board. Recruitment, roles, and the structures that get every member comfortable asking.",
    points: ["100% giving boards", "Governance", "The ask, made easy"],
  },
  {
    no: "04",
    title: "Coaching for Leaders",
    blurb:
      "One-on-one coaching for executive directors and development directors who want a candid thought-partner who has actually done the job.",
    points: ["EDs & dev directors", "Confidential", "Real-world playbooks"],
  },
  {
    no: "05",
    title: "Speaking & Training",
    blurb:
      "Keynotes and staff workshops that leave a room energized and equipped — on fundraising, Jewish philanthropy, and building careers of service.",
    points: ["Keynotes", "Staff training", "Workshops"],
  },
];

const CLIENTS = [
  "Jewish federations & foundations",
  "Israel-connected nonprofits & NGOs",
  "Day schools, camps & education",
  "Synagogues & community organizations",
  "Social-service & advocacy groups",
  "Arts, culture & continuity initiatives",
];

const TESTIMONIALS = [
  {
    quote:
      "Even years after we stopped working for the same organization, Sharon remains a trusted colleague and an important source of professional counsel. She is energetic, organized, and focused, and working with her is always a pleasure. I know that when Sharon and I partner on a project, real progress will be made.",
    name: "Sara Wolkenfeld",
    role: "Chief Learning Officer",
  },
  {
    quote:
      "Sharon is a can-do, creative, analytical and pragmatic professional. I have seen her build and deepen organizations and have learned from her ability to spot challenges and turn them into opportunities. Sharon acts with strength and grace and has a great sense of humor throughout her hard and dedicated work.",
    name: "Asher Lopatin",
    role: "Executive Director",
  },
];

/* ----------------------------------------------------------------
   Page
----------------------------------------------------------------- */

export default function Home() {
  return (
    <div id="top" className="flex flex-1 flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* ============================ HERO ============================ */}
        <section className="relative overflow-hidden">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-8 lg:pb-28 lg:pt-24">
            <div>
              <p
                data-rise
                className="eyebrow text-terracotta"
                style={{ animationDelay: "0ms" }}
              >
                Fundraising counsel · Sharon Weiss-Greenberg
              </p>
              <h1
                data-rise
                style={{ animationDelay: "90ms" }}
                className="mt-6 text-balance text-5xl leading-[1.02] text-ink sm:text-6xl lg:text-[4.25rem]"
              >
                Raise more.
                <br />
                Build a board that{" "}
                <span className="italic text-terracotta">gives</span>.
                <br />
                Run a campaign that lasts.
              </h1>
              <p
                data-rise
                style={{ animationDelay: "180ms" }}
                className="mt-7 max-w-xl text-lg leading-relaxed text-ink-2"
              >
                I help Jewish and Israel-connected nonprofits move their mission
                forward — strategy, boards, and campaigns from someone who has
                sat in the development chair, not just advised from beside it.
              </p>
              <div
                data-rise
                style={{ animationDelay: "270ms" }}
                className="mt-9 flex flex-wrap items-center gap-4"
              >
                <a
                  href="#book"
                  className="group inline-flex items-center gap-2 rounded-full bg-terracotta px-7 py-3.5 text-base font-semibold text-paper shadow-soft transition-all hover:bg-terracotta-deep"
                >
                  Book a call
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-7 py-3.5 text-base font-semibold text-ink transition-colors hover:border-ink/40"
                >
                  See how I help
                </a>
              </div>
            </div>

            {/* Portrait */}
            <Reveal className="relative" delay={120}>
              <div className="relative mx-auto max-w-md">
                <div className="absolute -inset-3 -rotate-2 rounded-[2rem] bg-paper-3" />
                <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full bg-sage/25 blur-xl" />
                {/* Portrait — sourced from sharonweissgreenberg.com as a
                    preview placeholder; replace with a final hero shot. */}
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.7rem] border border-cream-line shadow-lift">
                  <Image
                    src="/images/sharon-headshot.jpeg"
                    alt="Sharon Weiss-Greenberg"
                    fill
                    priority
                    sizes="(max-width: 1024px) 80vw, 440px"
                    className="object-cover object-top"
                  />
                </div>
                {/* Floating proof chip */}
                <div className="absolute -bottom-5 right-2 rounded-2xl border border-cream-line bg-paper px-5 py-3 shadow-lift">
                  <p className="font-display text-2xl font-semibold text-ink">
                    Forward 50
                  </p>
                  <p className="text-xs text-ink-3">
                    Most Influential Jewish Leaders
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Credential marquee */}
          <div className="border-y border-cream-line bg-paper-2/60">
            <div className="flex overflow-hidden py-3.5">
              <div className="flex shrink-0 items-center gap-0 whitespace-nowrap [animation:var(--animate-marquee)]">
                {[...CREDENTIALS, ...CREDENTIALS].map((c, i) => (
                  <span
                    key={i}
                    className="flex items-center text-sm font-medium text-ink-2"
                  >
                    <span className="px-7">{c}</span>
                    <span className="text-terracotta">✦</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================ STATS ============================ */}
        <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4">
            {STATS.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 90}>
                <div className="border-t-2 border-terracotta/70 pt-5">
                  <p className="font-display text-4xl font-semibold text-ink lg:text-5xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm leading-snug text-ink-2">
                    {stat.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-xs text-ink-3">
            Placeholder figures — to be replaced with Sharon&rsquo;s actuals.
          </p>
        </section>

        {/* ============================ APPROACH ============================ */}
        <section id="approach" className="bg-ink text-paper">
          <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <Reveal>
                <p className="eyebrow text-gold">The approach</p>
                <h2 className="mt-5 text-balance text-3xl leading-tight text-paper sm:text-4xl">
                  Not a consultant who hands you a binder.
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <div className="space-y-6 text-lg leading-relaxed text-paper/80">
                  <p>
                    Plenty of firms will study your organization and leave you a
                    report. I work differently. I step in beside your team —
                    strategy and the hard asks, the board conversations and the
                    quiet course-corrections — and stay until it&rsquo;s
                    working.
                  </p>
                  <p>
                    I&rsquo;ve led development from the inside, so I know the
                    difference between a plan that sounds good in a boardroom and
                    one that actually closes gifts. And because I&rsquo;ve spent
                    my career in the Jewish and Israel-connected nonprofit world,
                    I understand your donors, your community, and what&rsquo;s
                    truly at stake.
                  </p>
                  <p className="font-display text-xl italic text-gold">
                    Yalla — let&rsquo;s raise more, together.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ============================ SERVICES ============================ */}
        <section
          id="services"
          className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28"
        >
          <Reveal>
            <p className="eyebrow text-terracotta">How I help</p>
            <h2 className="mt-5 max-w-2xl text-balance text-4xl leading-tight text-ink sm:text-5xl">
              Five ways to move your fundraising forward.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-cream-line bg-cream-line sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, i) => (
              <Reveal
                key={service.no}
                delay={(i % 3) * 80}
                className="group flex h-full flex-col bg-paper p-8 transition-colors hover:bg-paper-2"
              >
                <span className="font-display text-sm font-semibold text-terracotta">
                  {service.no}
                </span>
                <h3 className="mt-5 text-2xl text-ink">{service.title}</h3>
                <p className="mt-3 flex-1 text-[0.975rem] leading-relaxed text-ink-2">
                  {service.blurb}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {service.points.map((p) => (
                    <li
                      key={p}
                      className="rounded-full bg-paper-3 px-3 py-1 text-xs font-medium text-ink-2"
                    >
                      {p}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
            {/* CTA tile */}
            <Reveal
              delay={160}
              className="flex h-full flex-col justify-between bg-sage p-8 text-paper"
            >
              <div>
                <h3 className="text-2xl text-paper">Not sure where to start?</h3>
                <p className="mt-3 text-[0.975rem] leading-relaxed text-paper/85">
                  Most engagements begin with one honest conversation about where
                  you are and where you want to be.
                </p>
              </div>
              <a
                href="#book"
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-paper px-6 py-3 text-sm font-semibold text-ink transition-transform hover:translate-x-1"
              >
                Book a call →
              </a>
            </Reveal>
          </div>
        </section>

        {/* ============================ ABOUT ============================ */}
        <section id="about" className="bg-paper-2">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-8 lg:py-28">
            <Reveal className="order-2 lg:order-1">
              <div className="relative mx-auto max-w-sm">
                <div className="absolute -inset-3 rotate-2 rounded-[2rem] bg-paper-3" />
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.7rem] border border-cream-line shadow-lift">
                  <Image
                    src="/images/sharon-candid.jpeg"
                    alt="Sharon Weiss-Greenberg"
                    fill
                    sizes="(max-width: 1024px) 80vw, 384px"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </Reveal>

            <div className="order-1 lg:order-2">
              <Reveal>
                <p className="eyebrow text-terracotta">I&rsquo;m Sharon</p>
                <h2 className="mt-5 text-balance text-4xl leading-tight text-ink sm:text-[2.75rem]">
                  Two decades in the room where the money is raised.
                </h2>
              </Reveal>
              <Reveal delay={100}>
                <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink-2">
                  <p>
                    I&rsquo;m a nonprofit leader, fundraiser, and educator with
                    more than twenty years strengthening Jewish life, community,
                    and continuity. I&rsquo;ve led development from the inside —
                    most recently as VP of Development for an Israeli nonprofit
                    empowering amputees to rebuild their independence. Today I
                    counsel Israeli and Jewish nonprofits around the world,
                    helping them raise the resources their missions depend on.
                  </p>
                  <p>
                    Along the way I earned a PhD at NYU, trained leaders through
                    Columbia, published 75+ articles, and was named to the
                    Forward 50 and NY Jewish Week&rsquo;s 36 to Watch. But the
                    credential I lean on most is the simplest: I&rsquo;ve
                    actually raised the money, built the boards, and led the
                    teams I now help others build.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={180}>
                <a
                  href="#book"
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-terracotta hover:text-terracotta-deep"
                >
                  Let&rsquo;s get to know each other
                  <span>→</span>
                </a>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ============================ CLIENTS ============================ */}
        <section
          id="clients"
          className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28"
        >
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <Reveal>
              <p className="eyebrow text-terracotta">Who I work with</p>
              <h2 className="mt-5 text-balance text-4xl leading-tight text-ink sm:text-5xl">
                Built for the Jewish &amp; Israel-connected nonprofit world.
              </h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-2">
                Great fundraising is universal — but knowing your community, your
                calendar, and your donors is not. That fluency is where I start,
                and it&rsquo;s why organizations like these bring me in.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <ul className="grid gap-px overflow-hidden rounded-2xl border border-cream-line bg-cream-line sm:grid-cols-2">
                {CLIENTS.map((c) => (
                  <li
                    key={c}
                    className="flex items-center gap-3 bg-paper px-5 py-5 text-[0.95rem] font-medium text-ink"
                  >
                    <span className="text-terracotta">✦</span>
                    {c}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* ============================ TESTIMONIALS ============================ */}
        <section className="bg-paper-2">
          <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
            <Reveal>
              <p className="eyebrow text-terracotta">In their words</p>
            </Reveal>
            <div className="mt-10 grid gap-8 lg:grid-cols-2">
              {TESTIMONIALS.map((t, i) => (
                <Reveal
                  key={i}
                  delay={i * 110}
                  className="flex flex-col rounded-3xl border border-cream-line bg-paper p-9 shadow-soft"
                >
                  <span className="font-display text-5xl leading-none text-terracotta/40">
                    &ldquo;
                  </span>
                  <p className="mt-2 flex-1 font-display text-xl leading-relaxed text-ink">
                    {t.quote}
                  </p>
                  <div className="mt-7 border-t border-cream-line pt-5">
                    <p className="font-semibold text-ink">{t.name}</p>
                    <p className="text-sm text-ink-3">{t.role}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============================ BOOK CTA ============================ */}
        <section
          id="book"
          className="relative overflow-hidden bg-terracotta text-paper"
        >
          <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-terracotta-deep/50 blur-3xl" />
          <div className="absolute -bottom-28 -left-16 h-72 w-72 rounded-full bg-gold/30 blur-3xl" />
          <div className="relative mx-auto max-w-4xl px-6 py-24 text-center lg:px-8 lg:py-32">
            <Reveal>
              <h2 className="text-balance text-4xl leading-tight text-paper sm:text-5xl lg:text-6xl">
                Let&rsquo;s raise more, together.
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-paper/85">
                Tell me where your organization is headed. We&rsquo;ll spend
                thirty minutes on what&rsquo;s working, what isn&rsquo;t, and
                whether I&rsquo;m the right partner to help you get there.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="mailto:hello@yallafundraising.com"
                  className="inline-flex items-center gap-2 rounded-full bg-paper px-8 py-4 text-base font-semibold text-ink transition-transform hover:scale-[1.03]"
                >
                  Book a call →
                </a>
                <a
                  href="https://www.linkedin.com/"
                  className="inline-flex items-center gap-2 rounded-full border border-paper/40 px-8 py-4 text-base font-semibold text-paper transition-colors hover:border-paper"
                >
                  Connect on LinkedIn
                </a>
              </div>
              <p className="mt-6 text-sm text-paper/60">
                {`{PLACEHOLDER — booking link / Calendly and contact email to be wired up}`}
              </p>
            </Reveal>
          </div>
        </section>
      </main>

      {/* ============================ FOOTER ============================ */}
      <footer className="bg-ink text-paper/70">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-14 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-display text-xl font-semibold text-paper">
                Yalla
              </span>
              <span className="font-display text-xl font-semibold text-terracotta">
                Fundraising
              </span>
            </div>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-paper/60">
              Fundraising counsel for Jewish &amp; Israel-connected nonprofits. A
              practice of Yalla DevRel LLC.
            </p>
          </div>
          <div className="flex flex-col gap-3 text-sm lg:items-end">
            <a
              href="mailto:hello@yallafundraising.com"
              className="hover:text-paper"
            >
              hello@yallafundraising.com
            </a>
            <a href="https://yalladevrel.com" className="hover:text-paper">
              yalladevrel.com
            </a>
            <p className="text-paper/40">© 2026 Yalla DevRel LLC</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
