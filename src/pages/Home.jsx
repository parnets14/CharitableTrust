import { Link } from "react-router-dom";
import {
  GraduationCap,
  HeartPulse,
  Users,
  ArrowRight,
  Quote,
  BadgeCheck,
  HeartHandshake,
  ShieldCheck,
  CalendarDays,
  Mail,
  HandHeart,
  Sprout,
  Compass,
} from "lucide-react";
import logo from "../assets/Clogo.png";
import educationImg from "../assets/Home/Education.webp";
import healthImg from "../assets/Home/Health.webp";
import familyImg from "../assets/Home/Family.webp";
import aboutImg from "../assets/Home/img1.webp";
import activityP1 from "../assets/Home/P1.webp";
import activityP2 from "../assets/Home/p2.webp";
import activityP3 from "../assets/Home/p3.webp";
import activityP4 from "../assets/Home/p4.webp";
import { IMPACT_STATS } from "../data/site";

const services = [
  {
    icon: GraduationCap,
    title: "Free Education",
    desc: "We keep children in school by covering fees, books, uniforms and digital tools — and run after-school mentoring so no child drops out for lack of money.",
    color: "from-logoBlue-500 to-logoBlue-700",
    text: "text-logoBlue-600",
    bg: "bg-logoBlue-50",
    img: educationImg,
  },
  {
    icon: HeartPulse,
    title: "Free Healthcare",
    desc: "From free medical camps to medicine support and maternal care, we bring primary healthcare to neighbourhoods that have never had a doctor nearby.",
    color: "from-logoGreen-500 to-logoGreen-700",
    text: "text-logoGreen-600",
    bg: "bg-logoGreen-50",
    img: healthImg,
  },
  {
    icon: Users,
    title: "Family Support",
    desc: "When households hit hard times, we step in with ration kits, livelihood training and counselling — helping families rebuild with dignity and stability.",
    color: "from-logoOrange-500 to-logoOrange-700",
    text: "text-logoOrange-600",
    bg: "bg-logoOrange-50",
    img: familyImg,
  },
];

const howWeWork = [
  {
    step: "01",
    icon: Compass,
    title: "Identify & reach",
    desc: "Our volunteers map underserved neighbourhoods and listen to families to understand what they truly need.",
  },
  {
    step: "02",
    icon: HandHeart,
    title: "Fund & mobilise",
    desc: "Donations and partners are pooled into focused programs — no middlemen, all routed straight to the ground.",
  },
  {
    step: "03",
    icon: Sprout,
    title: "Deliver on site",
    desc: "We run classes, camps and distribution drives hand-in-hand with local teachers, nurses and community leaders.",
  },
  {
    step: "04",
    icon: BadgeCheck,
    title: "Report & improve",
    desc: "Every outcome is recorded and shared back with donors, so the next year's work is sharper than the last.",
  },
];

const getInvolved = [
  {
    title: "Volunteer your time",
    desc: "Teach, mentor, help at a camp or use your skills in design, tech or fundraising. A few hours changes a life.",
    cta: "Join as Volunteer",
    to: "/contact",
  },
  {
    title: "Partner with us",
    desc: "CSR teams, schools and local businesses can co-run programs and amplify impact far beyond what we can do alone.",
    cta: "Become a Partner",
    to: "/contact",
  },
  {
    title: "Sponsor a child",
    desc: "Cover a year of schooling for one child and receive updates on their progress — a personal bond that lasts.",
    cta: "Start Sponsoring",
    to: "/donate",
  },
];

const activities = [activityP1, activityP2, activityP3, activityP4];
const heroStats = IMPACT_STATS.map((s) => ({ n: s.value, l: s.label }));

export default function Home() {
  return (
    <>
      {/* ============== HERO BANNER (full image background) ============== */}
      <section className="relative w-full overflow-hidden">
        {/* Full-bleed background image */}
        <img
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1920&q=85&auto=format&fit=crop"
          alt="Children from the community"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        {/* Readability overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink-900/85 via-ink-900/60 to-ink-900/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-[1600px] container-px py-20 md:py-28 lg:py-36">
          <div className="max-w-3xl animate-fade-up">
            {/* Trust eyebrow pill */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 ring-1 ring-white/25 backdrop-blur">
              <BadgeCheck className="h-4 w-4 text-logoOrange-300" />
              <span className="text-xs font-bold uppercase tracking-wider text-white">
                Nadaprabhu Kempegowda · Since 2014
              </span>
            </div>

            {/* Headline */}
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              Building brighter futures,{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-logoBlue-300">
                  together.
                </span>
                {/* Hand-drawn underline accent */}
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 8"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2,5 Q60,1 100,4 T198,3"
                    stroke="#F5A623"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Supporting line */}
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/90 md:text-xl">
              For over a decade we've stood with children, patients and families
              across Karnataka — turning small acts of kindness into lasting,
              measurable change.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link to="/donate" className="btn-primary text-base">
                Donate Now <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/70 px-6 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-ink-900"
              >
                Explore Our Work <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Trust pills */}
            <div className="mt-9 flex flex-wrap gap-2.5">
              {[
                { icon: ShieldCheck, label: "80G & 12A Registered" },
                { icon: HeartHandshake, label: "100% Transparent Giving" },
                { icon: CalendarDays, label: "10+ Years of Service" },
              ].map((t) => (
                <span
                  key={t.label}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3.5 py-1.5 text-xs font-semibold text-white ring-1 ring-white/25 backdrop-blur"
                >
                  <t.icon className="h-3.5 w-3.5 text-logoGreen-300" />
                  {t.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============== HERO STATS BAR ============== */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1600px] container-px -mt-8 md:-mt-10">
          <div className="relative z-10 grid grid-cols-2 gap-4 rounded-3xl bg-white p-6 shadow-2xl ring-1 ring-logoBlue-100 md:grid-cols-4">
            {heroStats.map((s, i) => (
              <div
                key={s.l}
                className={`text-center ${
                  i > 0 ? "md:border-l md:border-ink-300/40" : ""
                }`}
              >
                <p className="font-display text-3xl font-extrabold text-logoBlue-600">
                  {s.n}
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-ink-700">
                  {s.l}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============== SERVICES ============== */}
      <section className="section bg-white">
        <div className="mx-auto max-w-[1600px] container-px">
          <div className="text-center max-w-2xl mx-auto">
            <span className="section-eyebrow">What we do</span>
            <h2 className="section-title">
              Our Three Pillars of{" "}
              <span className="text-logoBlue-600">Service</span>
            </h2>
            <p className="mt-4 text-ink-700 text-lg">
              Three connected programs that tackle the biggest barriers a child
              or family faces — each built to be sustained, measured and rooted
              in dignity.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className="group card-hover rounded-3xl bg-white ring-1 ring-ink-300/40 overflow-hidden shadow-card"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute top-4 left-4 h-12 w-12 rounded-2xl grid place-items-center ${s.bg} ${s.text} shadow-soft`}>
                    <s.icon className="h-6 w-6" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl font-bold text-ink-900">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-ink-700 leading-relaxed">{s.desc}</p>
                  <Link
                    to="/about"
                    className={`mt-5 inline-flex items-center gap-2 font-bold text-sm group/btn ${s.text} hover:gap-3 transition-all`}
                  >
                    Learn more
                    <span className={`grid h-7 w-7 place-items-center rounded-full ${s.bg}`}>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============== HOW WE WORK (PROCESS) ============== */}
      <section className="section bg-logoBlue-50/50">
        <div className="mx-auto max-w-[1600px] container-px">
          <div className="text-center max-w-2xl mx-auto">
            <span className="section-eyebrow justify-center">How we work</span>
            <h2 className="section-title">
              From a promise to{" "}
              <span className="text-logoBlue-600">real outcomes</span>
            </h2>
            <p className="mt-4 text-ink-700 text-lg">
              A simple, honest loop keeps every rupee accountable — from the
              moment it's given to the day it changes a life.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {howWeWork.map((h) => (
              <div
                key={h.step}
                className="relative rounded-3xl bg-white p-7 ring-1 ring-ink-300/30 shadow-card"
              >
                <span className="font-display text-5xl font-extrabold text-logoBlue-100 leading-none">
                  {h.step}
                </span>
                <div className="mt-4 inline-grid h-12 w-12 place-items-center rounded-2xl bg-logoBlue-50 text-logoBlue-600">
                  <h.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-xl font-bold text-ink-900">
                  {h.title}
                </h3>
                <p className="mt-2 text-sm text-ink-700 leading-relaxed">
                  {h.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============== ABOUT PREVIEW ============== */}
      <section className="section bg-white">
        <div className="mx-auto max-w-[1600px] container-px">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-card aspect-[4/3]">
                <img
                  src={aboutImg}
                  alt="Children learning in a classroom"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden md:block">
                <div className="rounded-2xl bg-logoOrange-500 text-white px-5 py-4 shadow-2xl">
                  <p className="font-display text-3xl font-extrabold leading-none">
                    10+
                  </p>
                  <p className="text-xs font-bold uppercase tracking-wider mt-1 opacity-90">
                    Years of Service
                  </p>
                </div>
              </div>
            </div>

            <div>
              <span className="section-eyebrow">About Us</span>
              <h2 className="section-title">
                A step towards a stronger, healthier and more{" "}
                <span className="text-logoBlue-600">educated society</span>.
              </h2>
              <p className="mt-5 text-ink-700 text-lg leading-relaxed">
                We are a community-rooted trust committed to walking alongside
                families — providing free education to children, medical care to
                those who can't afford it, and steady support to households in
                need.
              </p>
              <ul className="mt-6 space-y-3 text-ink-700">
                {[
                  "Empowering children through quality education",
                  "Bringing healthcare within everyone's reach",
                  "Standing with families through difficult times",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <span className="mt-1 grid h-5 w-5 place-items-center rounded-full bg-logoBlue-100 text-logoBlue-600">
                      <ArrowRight className="h-3 w-3" />
                    </span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <Link to="/about" className="btn-ghost mt-8">
                Read Our Story <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============== DONATE BANNER ============== */}
      <section className="section">
        <div className="mx-auto max-w-[1600px] container-px">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-logoBlue-400 via-logoBlue-500 to-logoBlue-700 text-white shadow-2xl">
            <div className="absolute inset-0 dot-grid-bg opacity-20" />
            <div className="pointer-events-none absolute -top-20 -right-20 h-80 w-80 rounded-full bg-logoOrange-400/40 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
            <div className="relative grid items-center gap-10 p-10 md:p-14 lg:grid-cols-2">
              <div>
                <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-[0.18em] text-white/90 mb-3">
                  Make an Impact
                </span>
                <h2 className="font-display text-4xl md:text-5xl font-extrabold leading-tight">
                  Your support can{" "}
                  <span className="text-logoOrange-200">change</span> lives.
                </h2>
                <p className="mt-5 text-lg text-white/90 max-w-md leading-relaxed">
                  A single gift can keep a child in school, fund a check-up or
                  put food on a family's table. Choose an amount that feels
                  right — we'll make sure it counts.
                </p>
              </div>
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/30">
                  <img
                    src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900&q=80&auto=format&fit=crop"
                    alt="Helping hands"
                    className="h-72 w-full object-cover"
                  />
                </div>
                <Link
                  to="/donate"
                  className="absolute -bottom-5 left-1/2 -translate-x-1/2 btn-primary text-base"
                >
                  Make a Donation <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== GET INVOLVED ============== */}
      <section className="section bg-logoOrange-50/40">
        <div className="mx-auto max-w-[1600px] container-px">
          <div className="text-center max-w-2xl mx-auto">
            <span className="section-eyebrow justify-center">Get involved</span>
            <h2 className="section-title">
              There's more than one way to{" "}
              <span className="text-logoOrange-500">help</span>
            </h2>
            <p className="mt-4 text-ink-700 text-lg">
              Not ready to give just yet? Your time, skills and voice matter as
              much as your money.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {getInvolved.map((g) => (
              <div
                key={g.title}
                className="group card-hover flex flex-col rounded-3xl bg-white p-7 ring-1 ring-ink-300/30 shadow-card"
              >
                <h3 className="font-display text-xl font-bold text-ink-900">
                  {g.title}
                </h3>
                <p className="mt-3 flex-1 text-sm text-ink-700 leading-relaxed">
                  {g.desc}
                </p>
                <Link
                  to={g.to}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-logoOrange-600 hover:gap-3 transition-all"
                >
                  {g.cta} <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============== ACTIVITIES GALLERY ============== */}
      <section className="section bg-white">
        <div className="mx-auto max-w-[1600px] container-px">
          {/* Centered heading */}
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-eyebrow justify-center">Our Activities</span>
            <h2 className="section-title">
              Moments that <span className="text-logoOrange-500">make</span> a
              difference
            </h2>
            <p className="mt-4 text-lg text-ink-700">
              Glimpses from our on-ground programs — every photo is a story of
              hope and community.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {activities.map((src, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-2xl shadow-card aspect-square group"
              >
                <img
                  src={src}
                  alt={`Activity ${i + 1}`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============== TESTIMONIAL (full-bleed) ============== */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-logoOrange-50 via-white to-logoOrange-100/60 py-16 md:py-20">
        {/* Soft blurred accents */}
        <div className="pointer-events-none absolute -top-24 -left-20 h-72 w-72 rounded-full bg-logoOrange-200/50 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 -right-20 h-72 w-72 rounded-full bg-logoBlue-200/40 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <Quote className="mx-auto h-9 w-9 text-logoOrange-500" />

          <p className="mx-auto mt-6 max-w-3xl font-display text-xl font-bold leading-snug text-ink-900 md:text-2xl md:leading-snug">
            Education is the most powerful weapon which you can use to change
            the world. We are proud to be a small part of these{" "}
            <span className="text-logoBlue-600">children's journey</span>.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center overflow-hidden rounded-full bg-white ring-1 ring-logoOrange-100">
                <img src={logo} alt="" className="h-full w-full object-cover" />
              </span>
              <div className="text-left">
                <p className="text-sm font-bold text-ink-900">
                  Nadaprabhu Kempegowda Trust
                </p>
                <p className="text-xs text-ink-700">Team &amp; Volunteers</p>
              </div>
            </div>

            <span className="hidden h-10 w-px bg-ink-300/50 sm:block" />

            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-logoGreen-600" />
              <span className="text-xs font-bold uppercase tracking-wider text-ink-700">
                80G &amp; 12A Registered
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ============== CONTACT TEASER ============== */}
      <section className="section bg-white">
        <div className="mx-auto max-w-[1600px] container-px">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-logoBlue-50 via-white to-sky-50 ring-1 ring-logoBlue-100 shadow-card">
            {/* Soft blurred accents */}
            <div className="pointer-events-none absolute -top-20 -left-16 h-64 w-64 rounded-full bg-logoBlue-200/40 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -right-16 h-64 w-64 rounded-full bg-logoOrange-200/40 blur-3xl" />
            <div className="pointer-events-none absolute inset-0 dot-grid-bg opacity-20" />

            <div className="relative mx-auto max-w-2xl px-8 py-14 text-center md:py-16">
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-logoBlue-500 to-logoBlue-700 text-white shadow-lg shadow-logoBlue-500/30">
                <Mail className="h-6 w-6" />
              </span>
              <span className="section-eyebrow justify-center mt-6">
                Contact Us
              </span>
              <h2 className="section-title">
                We're here to help. Reach out to us for any{" "}
                <span className="text-logoBlue-600">queries</span> or support.
              </h2>
              <p className="mt-5 text-lg text-ink-700 leading-relaxed">
                Whether you want to volunteer, partner with us, or simply learn
                more about our work — our team is always happy to hear from you.
              </p>
              <Link to="/contact" className="btn-primary mt-8">
                Get in Touch <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
