import { Link } from "react-router-dom";
import {
  Eye,
  Target,
  Heart,
  GraduationCap,
  HeartPulse,
  Users,
  Quote,
  ArrowRight,
  Check,
  History,
  Users2,
  Landmark,
} from "lucide-react";
import logo from "../assets/Clogo.png";
import aboutBanner from "../assets/AboutUs Banner.webp";
import communityPh1 from "../assets/About/Ph1.webp";
import communityPh2 from "../assets/About/ph2.webp";
import communityPh3 from "../assets/About/ph3.webp";
import communityPh4 from "../assets/About/ph4.webp";
import communityPh5 from "../assets/About/ph5.webp";
import communityPh6 from "../assets/About/ph6.webp";
import educationPhoto from "../assets/About/Photo1.webp";
import familyPhoto from "../assets/About/photo3.webp";
import introImg from "../assets/About/Img.avif";
import healthPhoto from "../assets/About/photo2.webp";
import whoWeAreImg from "../assets/Home/img1.webp";
import { IMPACT_STATS } from "../data/site";

const values = [
  {
    icon: Eye,
    title: "Our Vision",
    desc: "A society where every child learns, every family heals, and every person is treated with the dignity they deserve.",
  },
  {
    icon: Target,
    title: "Our Mission",
    desc: "To close the gap between privilege and need through grassroots programs in education, healthcare and family welfare.",
  },
  {
    icon: Heart,
    title: "Our Values",
    desc: "Compassion, transparency, inclusivity and respect guide every decision we make and every life we touch.",
  },
];

const focusAreas = [
  {
    icon: GraduationCap,
    step: "01",
    tag: "Free Education",
    title: "Keeping children in school",
    desc: "We identify children at risk of dropping out and remove the financial barriers to learning — fees, books, uniforms, tuition support and digital literacy — so they stay in class and keep progressing.",
    color: "from-logoBlue-500 to-logoBlue-700",
    text: "text-logoBlue-600",
    bg: "bg-logoBlue-50",
    ring: "ring-logoBlue-100",
    chip: "bg-logoBlue-50 text-logoBlue-700",
    stat: { value: "500+", label: "Children reached" },
    points: ["School kits & uniforms", "Tuition sponsorship", "After-school mentoring"],
    img: educationPhoto,
  },
  {
    icon: HeartPulse,
    step: "02",
    tag: "Free Healthcare",
    title: "Care that reaches the last mile",
    desc: "Health should never depend on income. We run medical camps, supply essential medicines, fund critical treatment and bring maternal and child care to doorsteps the system often misses.",
    color: "from-logoGreen-500 to-logoGreen-700",
    text: "text-logoGreen-600",
    bg: "bg-logoGreen-50",
    ring: "ring-logoGreen-100",
    chip: "bg-logoGreen-50 text-logoGreen-700",
    stat: { value: "3,000+", label: "Patients treated" },
    points: ["Free medical camps", "Medicine support", "Maternal & child health"],
    img: healthPhoto,
  },
  {
    icon: Users,
    step: "03",
    tag: "Family Support",
    title: "Steadying homes in crisis",
    desc: "When families fall on hard times, we step in with ration kits, livelihood training and counselling — helping households rebuild stability and hope without losing their dignity.",
    color: "from-logoOrange-500 to-logoOrange-700",
    text: "text-logoOrange-600",
    bg: "bg-logoOrange-50",
    ring: "ring-logoOrange-100",
    chip: "bg-logoOrange-50 text-logoOrange-700",
    stat: { value: "120+", label: "Families supported" },
    points: ["Ration & essentials", "Livelihood training", "Counseling & guidance"],
    img: familyPhoto,
  },
];

const timeline = [
  {
    year: "2014",
    title: "A small beginning",
    desc: "A handful of neighbours in Bengaluru start helping local children with books and fees — the spark that became the Trust.",
  },
  {
    year: "2017",
    title: "First health camps",
    desc: "We expand beyond education, running free medical camps in underserved wards with volunteer doctors and nurses.",
  },
  {
    year: "2020",
    title: "Standing through the pandemic",
    desc: "Ration drives and medicine support reach hundreds of families when lockdowns cut off their incomes overnight.",
  },
  {
    year: "2024",
    title: "A decade of service",
    desc: "10 years on, 500+ children educated, 3,000+ patients treated and 120+ families steadied — and we're only getting started.",
  },
];

const governance = [
  { icon: Landmark, title: "Legally registered", desc: "Registered trust under the Indian Trusts Act, with 80G & 12A tax exemptions." },
  { icon: Users2, title: "Led by volunteers", desc: "A small core team backed by 50+ active volunteers who run programs on the ground." },
  { icon: History, title: "A decade strong", desc: "Serving Karnataka continuously since 2014 with the same founding belief." },
];

export default function About() {
  return (
    <>
      {/* ============== PAGE HERO (banner image) ============== */}
      <section className="w-full bg-white">
        <img
          src={aboutBanner}
          alt="About Us — A step towards a stronger, healthier and more educated society"
          className="w-full h-auto block"
        />
      </section>

      {/* ============== INTRO + WHO WE ARE ============== */}
      <section className="section bg-white">
        <div className="mx-auto max-w-[1600px] container-px">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr]">
            {/* Images collage */}
            <div className="relative">
              <div className="rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-primary-100 aspect-[4/3]">
                <img
                  src={whoWeAreImg}
                  alt="Children learning in a classroom"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-4 hidden sm:block w-40 md:w-48 rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white aspect-square">
                <img
                  src={introImg}
                  alt="Children in a classroom"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -top-5 -left-5 hidden md:block">
                <div className="rounded-2xl bg-accent-500 text-white px-5 py-4 shadow-2xl">
                  <p className="font-display text-3xl font-extrabold leading-none">
                    10+
                  </p>
                  <p className="text-[10px] font-bold uppercase tracking-wider mt-1">
                    Years of Service
                  </p>
                </div>
              </div>
            </div>

            {/* Text */}
            <div>
              <span className="section-eyebrow">Who we are</span>
              <h2 className="section-title">
                A trust built on{" "}
                <span className="text-primary-600">compassion</span>
              </h2>
              <p className="mt-5 text-lg text-ink-700 leading-relaxed">
                The Nadaprabhu Kempegowda Educational & Charitable Trust began
                from a simple belief — that every child deserves a chance to
                learn, every family deserves care, and no one should be left
                behind.
              </p>
              <p className="mt-4 text-ink-700 leading-relaxed">
                What started in 2014 as help for a few children has grown into
                three interconnected programs touching hundreds of lives each
                year, all rooted in the same grassroots spirit we started with.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
              {IMPACT_STATS.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl bg-primary-50/60 p-5 ring-1 ring-primary-100"
                  >
                    <p className="font-display text-2xl md:text-3xl font-extrabold text-primary-600 leading-none">
                      {s.value}
                    </p>
                    <p className="text-xs font-bold uppercase tracking-wider text-ink-700 mt-2">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== VISION / MISSION / VALUES ============== */}
      <section className="section bg-white">
        <div className="mx-auto max-w-[1600px] container-px">
          <div className="text-center max-w-2xl mx-auto">
            <span className="section-eyebrow">Who we are</span>
            <h2 className="section-title">
              Our guiding <span className="text-primary-600">purpose</span>
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <div
                key={v.title}
                className="card-hover rounded-3xl bg-white p-8 ring-1 ring-ink-300/40 shadow-card"
              >
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-primary-50 text-primary-600">
                  <v.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold text-ink-900">
                  {v.title}
                </h3>
                <p className="mt-3 text-ink-700 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============== WHAT WE DO / FOCUS AREAS ============== */}
      <section className="section bg-primary-50/40">
        <div className="mx-auto max-w-[1600px] container-px">
          {/* Centered heading */}
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-eyebrow justify-center">What we do</span>
            <h2 className="section-title">
              Where your support{" "}
              <span className="text-accent-500">shows up</span>
            </h2>
            <p className="mt-4 text-ink-700 text-lg">
              Three interconnected programs that address the biggest barriers
              children and families face every day — each one built to be
              sustained, measurable and rooted in dignity.
            </p>
          </div>

          {/* Alternating rows: one side image, one side description */}
          <div className="mt-16 space-y-16 lg:space-y-24">
            {focusAreas.map((f, idx) => {
              const flip = idx % 2 === 1;
              return (
                <div
                  key={f.title}
                  className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
                >
                  {/* Image */}
                  <div className={flip ? "lg:order-2" : ""}>
                    <div className="relative">
                      <div
                        className={`overflow-hidden rounded-[2rem] shadow-card ring-1 ${f.ring} aspect-[4/3]`}
                      >
                        <img
                          src={f.img}
                          alt={f.title}
                          loading="lazy"
                          className="h-full w-full object-cover"
                        />
                      </div>

                      {/* Floating gradient icon tile */}
                      <span
                        className={`absolute -bottom-5 ${
                          flip ? "-right-5" : "-left-5"
                        } grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br ${f.color} text-white shadow-xl ring-4 ring-white`}
                      >
                        <f.icon className="h-8 w-8" />
                      </span>

                      {/* Floating stat badge */}
                      <div
                        className={`absolute -top-5 ${
                          flip ? "-left-5" : "-right-5"
                        } rounded-2xl bg-white px-5 py-3 shadow-xl ring-1 ring-ink-300/30`}
                      >
                        <p
                          className={`font-display text-2xl font-extrabold leading-none ${f.text}`}
                        >
                          {f.stat.value}
                        </p>
                        <p className="mt-1 text-[11px] font-bold uppercase tracking-wider text-ink-700">
                          {f.stat.label}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className={flip ? "lg:order-1" : ""}>
                    <div className="flex items-center gap-3">
                      <span
                        className={`inline-flex items-center gap-2 rounded-full ${f.chip} px-4 py-1.5 text-xs font-bold uppercase tracking-wider`}
                      >
                        <f.icon className="h-3.5 w-3.5" />
                        {f.tag}
                      </span>
                      <span className="font-display text-sm font-extrabold text-ink-300">
                        {f.step} / 03
                      </span>
                    </div>

                    <h3 className="mt-5 font-display text-2xl font-bold text-ink-900 leading-tight md:text-3xl">
                      {f.title}
                    </h3>
                    <p className="mt-4 text-lg leading-relaxed text-ink-700">
                      {f.desc}
                    </p>

                    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                      {f.points.map((p) => (
                        <li
                          key={p}
                          className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 ring-1 ring-ink-300/30"
                        >
                          <span
                            className={`grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gradient-to-br ${f.color} text-white`}
                          >
                            <Check className="h-3.5 w-3.5" strokeWidth={3} />
                          </span>
                          <span className="text-sm font-medium text-ink-700">
                            {p}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      to="/donate"
                      className="mt-7 inline-flex items-center gap-2 font-semibold text-primary-600 transition-colors hover:text-accent-500"
                    >
                      Support this program <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom note */}
          <div className="mt-20 flex flex-col items-center gap-4 rounded-3xl bg-white px-8 py-7 text-center ring-1 ring-ink-300/30 shadow-card sm:flex-row sm:text-left">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-accent-50 text-accent-500">
              <Heart className="h-6 w-6" />
            </span>
            <p className="text-ink-700">
              <span className="font-bold text-ink-900">
                100% of your contribution
              </span>{" "}
              goes directly to these programs — no middlemen, no overheads on
              your donation.
            </p>
            <Link
              to="/contact"
              className="btn-ghost shrink-0 sm:ml-auto"
            >
              Get Involved <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============== OUR STORY / TIMELINE ============== */}
      <section className="section bg-white">
        <div className="mx-auto max-w-[1600px] container-px">
          <div className="text-center max-w-2xl mx-auto">
            <span className="section-eyebrow justify-center">Our journey</span>
            <h2 className="section-title">
              A decade of{" "}
              <span className="text-primary-600">quiet progress</span>
            </h2>
            <p className="mt-4 text-ink-700 text-lg">
              We've grown slowly and deliberately — here are the moments that
              shaped who we are.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {timeline.map((t) => (
              <div
                key={t.year}
                className="relative rounded-3xl bg-primary-50/40 p-7 ring-1 ring-primary-100"
              >
                <p className="font-display text-3xl font-extrabold text-primary-600">
                  {t.year}
                </p>
                <h3 className="mt-3 font-display text-lg font-bold text-ink-900">
                  {t.title}
                </h3>
                <p className="mt-2 text-sm text-ink-700 leading-relaxed">
                  {t.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============== GOVERNANCE / HOW WE'RE RUN ============== */}
      <section className="section bg-primary-50/40">
        <div className="mx-auto max-w-[1600px] container-px">
          <div className="text-center max-w-2xl mx-auto">
            <span className="section-eyebrow justify-center">How we're run</span>
            <h2 className="section-title">
              Trustworthy by{" "}
              <span className="text-accent-500">design</span>
            </h2>
            <p className="mt-4 text-ink-700 text-lg">
              The boring parts matter too — here's why donors can give with
              confidence.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {governance.map((g) => (
              <div
                key={g.title}
                className="card-hover rounded-3xl bg-white p-7 ring-1 ring-ink-300/30 shadow-card"
              >
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-accent-50 text-accent-600">
                  <g.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-xl font-bold text-ink-900">
                  {g.title}
                </h3>
                <p className="mt-2 text-sm text-ink-700 leading-relaxed">
                  {g.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============== COMMUNITY WORK — IMAGE GALLERY ============== */}
      <section className="section bg-white">
        <div className="mx-auto max-w-[1600px] container-px">
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-eyebrow justify-center">On the ground</span>
            <h2 className="section-title">
              Our <span className="text-primary-600">community work</span>
            </h2>
            <p className="mt-4 text-ink-700 text-lg">
              Moments from our programs — every week, our volunteers and local
              partners work hand-in-hand with the families we serve.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                src: communityPh1,
                alt: "Hands holding a donation",
              },
              {
                src: communityPh2,
                alt: "Volunteer helping an elder",
              },
              {
                src: communityPh3,
                alt: "Nurse at a care drive",
              },
              {
                src: communityPh4,
                alt: "Food distribution",
              },
              {
                src: communityPh5,
                alt: "Happy children",
              },
              {
                src: communityPh6,
                alt: "Team planning together",
              },
            ].map((img) => (
              <div
                key={img.src}
                className="group relative overflow-hidden rounded-3xl bg-primary-50 shadow-card ring-1 ring-ink-300/30 aspect-[4/3]"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-900/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============== QUOTE / CTA ============== */}
      <section className="pb-16 pt-2 md:pb-20">
        <div className="mx-auto max-w-[1600px] container-px">
          <div className="relative overflow-hidden rounded-[2rem] bg-white/70 p-8 shadow-[0_20px_50px_-24px_rgba(10,155,216,0.35)] ring-1 ring-logoBlue-100 backdrop-blur-xl md:p-10 lg:p-12">
            {/* Soft sky-blue blurred accents */}
            <div className="pointer-events-none absolute -top-20 -left-20 h-56 w-56 rounded-full bg-logoBlue-300/40 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -right-16 h-60 w-60 rounded-full bg-sky-200/50 blur-3xl" />
            <div className="pointer-events-none absolute top-1/2 right-1/3 h-32 w-32 rounded-full bg-logoOrange-200/40 blur-3xl" />

            <div className="relative grid items-center gap-8 lg:grid-cols-[1.6fr_1fr] lg:gap-12">
              {/* Quote */}
              <div>
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-logoBlue-500 to-logoBlue-700 text-white shadow-lg shadow-logoBlue-500/30">
                  <Quote className="h-6 w-6" />
                </span>
                <p className="mt-5 font-display text-xl font-bold leading-snug text-ink-900 md:text-2xl md:leading-snug">
                  Real change doesn't come from big announcements — it comes
                  from a hundred quiet{" "}
                  <span className="text-logoBlue-600">acts of kindness</span>,
                  sustained over years.
                </p>
              </div>

              {/* Author + CTAs */}
              <div className="flex flex-col items-start gap-5 lg:border-l lg:border-logoBlue-100 lg:pl-12">
                <div className="flex items-center gap-3">
                  <img
                    src={logo}
                    alt=""
                    className="h-11 w-11 rounded-full bg-white ring-2 ring-logoBlue-100"
                  />
                  <div>
                    <p className="font-bold text-ink-900">
                      Nadaprabhu Kempegowda Trust
                    </p>
                    <p className="text-sm text-ink-700">Together, every day</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <Link to="/donate" className="btn-primary">
                    Support Our Work <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link to="/contact" className="btn-ghost">
                    Talk to Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
