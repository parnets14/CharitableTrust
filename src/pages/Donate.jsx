import { Link } from "react-router-dom";
import {
  Heart,
  ShieldCheck,
  Building2,
  CreditCard,
  Copy,
  CheckCircle2,
  Phone,
  Mail,
  ArrowRight,
  Quote,
  Sparkles,
  BookOpen,
  Stethoscope,
  Home,
  BadgeCheck,
  Clock,
  Receipt,
  QrCode,
} from "lucide-react";
import { useState } from "react";
import donateBanner from "../assets/DonateUs Banner.webp";
import heroImage from "../assets/Image1.webp";
import healthCampsImage from "../assets/image 1.webp";
import familyStoryImage from "../assets/image3.webp";
import moneyGoesImage from "../assets/photos 1.webp";
import { IMPACT_STATS, TRUST_EMAILS, TRUST_PHONES } from "../data/site";

const bankDetails = [
  { label: "Account Name", value: "Nadaprabhu Kempegowda Educational & Charitable Trust" },
  { label: "Account Number", value: "50100123456789" },
  { label: "Bank Name", value: "State Bank of India" },
  { label: "Branch", value: "Bengaluru Main Branch" },
  { label: "IFSC Code", value: "SBIN0001234" },
  { label: "Account Type", value: "Current Account" },
];

const trustStats = IMPACT_STATS;

function GraduationCapIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c0 1.1 2.7 3 6 3s6-1.9 6-3v-5" />
    </svg>
  );
}

const giveOptions = [
  {
    amount: 500,
    label: "₹500",
    help: "School supplies for a child for a month",
    icon: BookOpen,
    accent: "from-logoBlue-500 to-logoBlue-700",
    shadow: "shadow-logoBlue-500/30",
    ring: "ring-logoBlue-100",
    bg: "from-logoBlue-50/60 to-white",
    chip: "bg-logoBlue-100/80",
  },
  {
    amount: 1000,
    label: "₹1,000",
    help: "Health check-up for a family",
    icon: Stethoscope,
    accent: "from-logoGreen-500 to-logoGreen-700",
    shadow: "shadow-logoGreen-500/30",
    ring: "ring-logoGreen-100",
    bg: "from-logoGreen-50/60 to-white",
    chip: "bg-logoGreen-100/80",
  },
  {
    amount: 2500,
    label: "₹2,500",
    help: "Tuition + books for a child for a year",
    icon: GraduationCapIcon,
    accent: "from-primary-500 to-primary-700",
    shadow: "shadow-primary-500/30",
    ring: "ring-primary-100",
    bg: "from-primary-50/60 to-white",
    chip: "bg-primary-100/80",
  },
  {
    amount: 5000,
    label: "₹5,000",
    help: "Supports a complete family for a month",
    icon: Home,
    accent: "from-logoOrange-500 to-logoOrange-700",
    shadow: "shadow-logoOrange-500/30",
    ring: "ring-logoOrange-100",
    bg: "from-logoOrange-50/60 to-white",
    chip: "bg-logoOrange-100/80",
  },
];

const stories = [
  {
    img: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=800&q=80&auto=format&fit=crop",
    tag: "Education",
    title: "A classroom full of hope",
    desc: "Your donations funded school kits, uniforms and tuition support for 500+ children who had dropped out.",
  },
  {
    img: healthCampsImage,
    tag: "Healthcare",
    title: "Health camps that reach the last mile",
    desc: "Free medical camps, medicines and maternal care brought primary healthcare to families who had never seen a doctor.",
  },
  {
    img: familyStoryImage,
    tag: "Family Support",
    title: "Standing with families in tough times",
    desc: "Ration kits, livelihood training and counseling helped 120+ families rebuild with dignity and stability.",
  },
];

const fundAllocation = [
  { label: "Education programs", pct: 45, color: "from-logoBlue-500 to-logoBlue-700", note: "School kits, fees, tuition & mentoring" },
  { label: "Healthcare camps", pct: 35, color: "from-logoGreen-500 to-logoGreen-700", note: "Camps, medicines & maternal care" },
  { label: "Family support", pct: 20, color: "from-logoOrange-500 to-logoOrange-700", note: "Ration, livelihood & counseling" },
];

const taxBenefits = [
  {
    icon: BadgeCheck,
    title: "Tax-deductible under 80G",
    desc: "Donations to the Trust are eligible for deduction under Section 80G of the Income Tax Act — lower your taxable income while you give.",
  },
  {
    icon: Receipt,
    title: "Official receipt & thank-you",
    desc: "Share your payment screenshot and we'll email you a proper donation receipt you can use for your tax filing.",
  },
  {
    icon: ShieldCheck,
    title: "Fully transparent",
    desc: "As a 12A-registered trust, our books are audited and our programs are reported back to every donor who asks.",
  },
];

function CopyRow({ label, value }) {
  const [copied, setCopied] = useState(false);
  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };
  return (
    <div className="flex items-center justify-between gap-3 py-3 border-b border-ink-300/40 last:border-b-0">
      <div className="min-w-0 flex-1">
        <p className="text-xs font-bold uppercase tracking-wider text-ink-500">
          {label}
        </p>
        <p className="mt-0.5 font-semibold text-ink-900 break-all">{value}</p>
      </div>
      <button
        onClick={onCopy}
        aria-label={`Copy ${label}`}
        className="shrink-0 inline-flex items-center gap-1.5 rounded-full bg-primary-50 px-3 py-1.5 text-xs font-bold text-primary-600 hover:bg-primary-100"
      >
        {copied ? (
          <>
            <CheckCircle2 className="h-3.5 w-3.5" />
            Copied
          </>
        ) : (
          <>
            <Copy className="h-3.5 w-3.5" />
            Copy
          </>
        )}
      </button>
    </div>
  );
}

function CopyUpiButton({ value }) {
  const [copied, setCopied] = useState(false);
  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };
  return (
    <button
      onClick={onCopy}
      aria-label={`Copy ${value}`}
      className="shrink-0 inline-flex items-center gap-1.5 rounded-full bg-accent-500 px-4 py-2 text-xs font-bold text-white shadow-md shadow-accent-500/30 hover:bg-accent-600 transition-colors"
    >
      {copied ? (
        <>
          <CheckCircle2 className="h-3.5 w-3.5" />
          Copied
        </>
      ) : (
        <>
          <Copy className="h-3.5 w-3.5" />
          Copy ID
        </>
      )}
    </button>
  );
}

export default function Donate() {
  return (
    <>
      {/* ============== PAGE BANNER ============== */}
      <section className="w-full overflow-hidden bg-white">
        <img
          src={donateBanner}
          alt="Donate Us — Your support brings education, healthcare and hope to families in need"
          className="block w-full h-auto"
        />
      </section>

      {/* ============== HERO (SPLIT: TEXT LEFT, IMAGE RIGHT) ============== */}
      <section className="relative overflow-hidden bg-white">
        {/* Subtle decorative blobs */}
        <div className="pointer-events-none absolute -top-20 -right-20 h-96 w-96 rounded-full bg-primary-100/60 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-accent-100/50 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 dot-grid-bg opacity-20" />

        <div className="relative mx-auto max-w-[1600px] container-px py-14 md:py-20 lg:py-24">
          <div className="grid items-stretch gap-10 lg:gap-14 lg:grid-cols-2">
            {/* LEFT — text */}
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-primary-700 ring-1 ring-primary-100">
                <Sparkles className="h-3.5 w-3.5" />
                Every gift matters
              </span>
              <h1 className="mt-5 font-display text-4xl md:text-5xl lg:text-[3.4rem] font-extrabold text-ink-900 leading-[1.1]">
                Give hope.<br />
                <span className="text-accent-500">Change a life</span> today.
              </h1>
              <p className="mt-5 text-lg text-ink-700 leading-relaxed">
                100% of your donation reaches children, patients and families
                through our education, healthcare and welfare programs — with full
                transparency and zero overhead on your gift.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="#quick-give" className="btn-primary">
                  Donate Now <Heart className="h-4 w-4" />
                </a>
                <a href="#donate-options" className="btn-ghost">
                  Other ways to give
                </a>
              </div>

              {/* Stats bar (under text) */}
              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-3 max-w-xl">
                {trustStats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl bg-primary-50/60 p-3.5 ring-1 ring-primary-100"
                  >
                    <p className="font-display text-xl md:text-2xl font-extrabold text-primary-600 leading-none">
                      {s.value}
                    </p>
                    <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-ink-700">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — image */}
            <div className="relative h-full">
              <div className="relative h-full min-h-[420px] rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-primary-100">
                <img
                  src={heroImage}
                  alt="Volunteer supporting families in the community"
                  className="h-full w-full object-cover"
                />
                {/* Subtle gradient overlay for badge readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/40 via-transparent to-transparent" />
              </div>

              {/* Floating trust badge */}
              <div className="absolute -bottom-5 -left-5 hidden sm:block">
                <div className="rounded-2xl bg-white px-5 py-4 shadow-2xl ring-1 ring-primary-100">
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-accent-400 to-accent-600 text-white shadow-md shadow-accent-500/30">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-display text-lg font-extrabold text-ink-900 leading-none">
                        100%
                      </p>
                      <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-ink-700">
                        To programs
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating small stat */}
              <div className="absolute -top-4 -right-4 hidden md:block">
                <div className="rounded-2xl bg-primary-600 text-white px-4 py-3 shadow-2xl">
                  <p className="font-display text-xl font-extrabold leading-none">
                    10+ yrs
                  </p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-wider opacity-90">
                    of service
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== QUICK GIVE — AMOUNT SELECTOR ============== */}
      <section id="quick-give" className="section bg-white">
        <div className="mx-auto max-w-[1600px] container-px">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="section-eyebrow">Quick give</span>
            <h2 className="section-title">
              Pick an amount that{" "}
              <span className="text-primary-600">moves you</span>
            </h2>
            <p className="mt-4 text-ink-700 text-lg">
              Every rupee is a step toward education, healthcare and dignity for
              a family. Choose what feels right.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {giveOptions.map((g) => (
              <a
                key={g.amount}
                href="#donate-options"
                className={`group card-hover relative overflow-hidden rounded-3xl bg-gradient-to-br ${g.bg} ring-1 ${g.ring} p-7 shadow-card`}
              >
                <div
                  className={`pointer-events-none absolute -top-12 -right-12 h-40 w-40 rounded-full ${g.chip} blur-2xl transition-all group-hover:scale-125`}
                />
                <div className="relative">
                  <div
                    className={`inline-grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${g.accent} text-white shadow-lg ${g.shadow}`}
                  >
                    <g.icon className="h-6 w-6" />
                  </div>
                  <p className="mt-5 font-display text-3xl md:text-4xl font-extrabold text-ink-900">
                    {g.label}
                  </p>
                  <p className="mt-2 text-sm text-ink-700 leading-relaxed min-h-[2.5rem]">
                    {g.help}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-accent-500 group-hover:gap-3 transition-all">
                    Give {g.label} <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ============== STORIES OF IMPACT ============== */}
      <section className="section bg-primary-50/40">
        <div className="mx-auto max-w-[1600px] container-px">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="section-eyebrow">Where it goes</span>
            <h2 className="section-title">
              Stories of <span className="text-accent-500">real impact</span>
            </h2>
            <p className="mt-4 text-ink-700 text-lg">
              Your generosity shows up in classrooms, clinics and homes across
              Karnataka. Here's a glimpse of what's possible.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {stories.map((s) => (
              <article
                key={s.title}
                className="group card-hover overflow-hidden rounded-3xl bg-white ring-1 ring-ink-300/30 shadow-card"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary-700 shadow">
                    {s.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-ink-900 leading-tight">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-700 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============== WHERE YOUR MONEY GOES ============== */}
      <section className="section bg-cream/60">
        <div className="mx-auto max-w-[1600px] container-px">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div>
              <span className="section-eyebrow">Accountability</span>
              <h2 className="section-title">
                Where your money{" "}
                <span className="text-primary-600">actually goes</span>
              </h2>
              <p className="mt-4 text-ink-700 text-lg leading-relaxed">
                We publish a simple breakdown every year so you always know your
                gift is doing the work — not disappearing into overhead. Here's
                our current allocation across programs.
              </p>
              <ul className="mt-6 space-y-4">
                {fundAllocation.map((f) => (
                  <li key={f.label}>
                    <div className="flex items-baseline justify-between">
                      <span className="font-bold text-ink-900">{f.label}</span>
                      <span className="font-display text-xl font-extrabold text-primary-600">
                        {f.pct}%
                      </span>
                    </div>
                    <div className="mt-2 h-3 w-full overflow-hidden rounded-full bg-white/70 ring-1 ring-primary-100">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${f.color}`}
                        style={{ width: `${f.pct}%` }}
                      />
                    </div>
                    <p className="mt-1.5 text-xs text-ink-700">{f.note}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl ring-1 ring-primary-100 aspect-[4/3]">
                <img
                  src={moneyGoesImage}
                  alt="Volunteers supporting a family"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden md:block rounded-2xl bg-accent-500 text-white px-5 py-4 shadow-2xl">
                <p className="font-display text-2xl font-extrabold leading-none">
                  100%
                </p>
                <p className="text-[10px] font-bold uppercase tracking-wider mt-1 opacity-90">
                  To programs, not overhead
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== TAX BENEFITS ============== */}
      <section className="section bg-white">
        <div className="mx-auto max-w-[1600px] container-px">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="section-eyebrow">Good for them, good for you</span>
            <h2 className="section-title">
              Your gift is also{" "}
              <span className="text-accent-500">tax-smart</span>
            </h2>
            <p className="mt-4 text-ink-700 text-lg">
              Giving shouldn't just feel good — it should help at tax time too.
              Here's how we make that easy.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {taxBenefits.map((t) => (
              <div
                key={t.title}
                className="card-hover rounded-3xl bg-gradient-to-br from-primary-50/60 to-white p-7 ring-1 ring-primary-100 shadow-card"
              >
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 text-white shadow-lg shadow-primary-500/30">
                  <t.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-ink-900">
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

      {/* ============== DONATE OPTIONS ============== */}
      <section id="donate-options" className="section bg-white">
        <div className="mx-auto max-w-[1600px] container-px">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="section-eyebrow">Ways to give</span>
            <h2 className="section-title">
              Choose how you'd like to{" "}
              <span className="text-primary-600">contribute</span>
            </h2>
            <p className="mt-4 text-ink-700 text-lg">
              UPI, bank transfer, or talk to us directly — whatever works best
              for you.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* UPI / QR */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-accent-50 via-white to-primary-50 p-8 ring-1 ring-primary-100 shadow-card">
              <div className="pointer-events-none absolute -top-12 -right-12 h-48 w-48 rounded-full bg-accent-200/40 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-primary-200/30 blur-3xl" />

              <div className="relative">
                {/* Header */}
                <div className="flex items-start justify-between gap-3 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-accent-400 to-accent-600 text-white grid place-items-center shadow-lg shadow-accent-500/30">
                      <CreditCard className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-bold text-ink-900">
                        Scan & Pay
                      </h3>
                      <p className="text-sm text-ink-700">
                        UPI / QR — instant, zero fees
                      </p>
                    </div>
                  </div>
                  <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-emerald-700 ring-1 ring-emerald-200">
                    <BadgeCheck className="h-3.5 w-3.5" />
                    Verified
                  </span>
                </div>

                {/* QR + how-to-pay */}
                <div className="grid sm:grid-cols-[180px_1fr] gap-6 items-start">
                  {/* QR */}
                  <div className="relative mx-auto sm:mx-0">
                    <div className="relative aspect-square w-full max-w-[180px] rounded-2xl bg-white p-3 ring-2 ring-accent-200 shadow-lg">
                      <div className="relative h-full w-full rounded-xl bg-gradient-to-br from-primary-50 to-white ring-1 ring-dashed ring-primary-200 grid place-items-center overflow-hidden">
                        <QrCode
                          className="h-1/2 w-1/2 text-primary-300"
                          strokeWidth={1.5}
                        />
                        <div className="absolute inset-0 grid place-items-center">
                          <span className="rounded-full bg-accent-500 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow">
                            Place UPI QR
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* Corner accents */}
                    <span className="absolute -top-1.5 -left-1.5 h-4 w-4 border-t-2 border-l-2 border-accent-500 rounded-tl-lg" />
                    <span className="absolute -top-1.5 -right-1.5 h-4 w-4 border-t-2 border-r-2 border-accent-500 rounded-tr-lg" />
                    <span className="absolute -bottom-1.5 -left-1.5 h-4 w-4 border-b-2 border-l-2 border-accent-500 rounded-bl-lg" />
                    <span className="absolute -bottom-1.5 -right-1.5 h-4 w-4 border-b-2 border-r-2 border-accent-500 rounded-br-lg" />
                  </div>

                  {/* Right side */}
                  <div className="space-y-4">
                    {/* 3-step guide */}
                    <ol className="grid grid-cols-3 gap-2">
                      {[
                        { n: "1", t: "Open any UPI app" },
                        { n: "2", t: "Scan the QR" },
                        { n: "3", t: "Enter amount & pay" },
                      ].map((s) => (
                        <li
                          key={s.n}
                          className="rounded-xl bg-white/80 p-2.5 text-center ring-1 ring-primary-100"
                        >
                          <span className="inline-grid h-6 w-6 place-items-center rounded-full bg-accent-500 text-[11px] font-bold text-white">
                            {s.n}
                          </span>
                          <p className="mt-1.5 text-[11px] font-semibold text-ink-900 leading-tight">
                            {s.t}
                          </p>
                        </li>
                      ))}
                    </ol>

                    {/* UPI ID with copy */}
                    <div className="rounded-2xl bg-white p-3.5 ring-1 ring-accent-200">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-wider text-ink-500">
                            UPI ID
                          </p>
                          <p className="mt-0.5 font-mono text-base font-bold text-primary-700">
                            mkctrust@upi
                          </p>
                        </div>
                        <CopyUpiButton value="mkctrust@upi" />
                      </div>
                    </div>

                    {/* Supported apps */}
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-ink-500">
                        Works with
                      </p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {[
                          { name: "Google Pay", tone: "bg-white text-ink-900 ring-ink-200", letter: "G", letterBg: "bg-blue-500" },
                          { name: "PhonePe", tone: "bg-white text-ink-900 ring-ink-200", letter: "P", letterBg: "bg-purple-600" },
                          { name: "Paytm", tone: "bg-white text-ink-900 ring-ink-200", letter: "P", letterBg: "bg-sky-500" },
                          { name: "BHIM", tone: "bg-white text-ink-900 ring-ink-200", letter: "B", letterBg: "bg-orange-500" },
                        ].map((a) => (
                          <span
                            key={a.name}
                            className={`inline-flex items-center gap-2 rounded-full px-2.5 py-1.5 text-xs font-semibold ring-1 ${a.tone}`}
                          >
                            <span
                              className={`grid h-5 w-5 place-items-center rounded-full text-[10px] font-extrabold text-white ${a.letterBg}`}
                            >
                              {a.letter}
                            </span>
                            {a.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <p className="mt-5 text-xs text-ink-700 leading-relaxed">
                  After paying, share the screenshot on{" "}
                  <a
                    href={`mailto:${TRUST_EMAILS.office}`}
                    className="font-bold text-accent-600 hover:underline"
                  >
                    {TRUST_EMAILS.office}
                  </a>{" "}
                  and we'll email you a thank-you note + official receipt.
                </p>

                {/* Why UPI — fills the card so it matches the bank card height */}
                <div className="mt-6 rounded-2xl bg-white/70 ring-1 ring-accent-200/70 p-4">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-ink-500">
                    Why UPI with us
                  </p>
                  <ul className="mt-3 grid grid-cols-3 gap-3">
                    {[
                      { label: "Instant", desc: "Settles in seconds" },
                      { label: "Zero fees", desc: "No charges to you" },
                      { label: "Direct", desc: "Goes straight to trust" },
                    ].map((b) => (
                      <li key={b.label} className="text-center">
                        <p className="font-display text-sm font-extrabold text-accent-600">
                          {b.label}
                        </p>
                        <p className="mt-0.5 text-[11px] text-ink-700 leading-tight">
                          {b.desc}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pay safely footer note */}
                <div className="mt-4 flex items-start gap-2 rounded-xl bg-emerald-50/80 ring-1 ring-emerald-200/70 p-3">
                  <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <p className="text-[11px] text-ink-700 leading-relaxed">
                    <span className="font-bold text-emerald-700">Pay safely.</span>{" "}
                    UPI payments are PIN-protected and processed by your bank.
                    We never see or store your credentials.
                  </p>
                </div>
              </div>
            </div>

            {/* Bank Transfer */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-50 via-white to-logoBlue-50 p-8 ring-1 ring-primary-100 shadow-card">
              <div className="pointer-events-none absolute -top-12 -right-12 h-48 w-48 rounded-full bg-primary-200/40 blur-3xl" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 text-white grid place-items-center shadow-lg shadow-primary-500/30">
                    <Building2 className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-ink-900">
                      Bank Transfer
                    </h3>
                    <p className="text-sm text-ink-700">
                      NEFT / IMPS / RTGS
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl bg-white/80 backdrop-blur p-5 ring-1 ring-primary-100">
                  {bankDetails.map((b) => (
                    <CopyRow key={b.label} label={b.label} value={b.value} />
                  ))}
                </div>

                <div className="mt-5 flex items-start gap-3 rounded-2xl bg-accent-50 border border-accent-200 p-4">
                  <ShieldCheck className="h-5 w-5 text-accent-500 shrink-0 mt-0.5" />
                  <p className="text-sm text-ink-700">
                    <span className="font-bold text-accent-500">Important:</span>{" "}
                    Please verify the account name "Nadaprabhu Kempegowda
                    Educational & Charitable Trust" before making the payment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== TRUST + QUERY STRIP ============== */}
      <section className="section bg-cream/60">
        <div className="mx-auto max-w-[1600px] container-px">
          <div className="grid gap-8 lg:grid-cols-2 items-stretch">
            {/* Trust message */}
            <div className="relative rounded-3xl bg-white p-8 md:p-10 ring-1 ring-accent-200/60 shadow-card overflow-hidden">
              <Quote className="absolute -top-2 -right-2 h-24 w-24 text-accent-100" />
              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full bg-accent-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent-600">
                  <BadgeCheck className="h-3.5 w-3.5" />
                  Our promise
                </div>
                <h3 className="mt-4 font-display text-2xl md:text-3xl font-bold text-ink-900 leading-tight">
                  A note from our team
                </h3>
                <p className="mt-4 text-ink-700 leading-relaxed">
                  Every rupee you donate is accounted for and put to work — on
                  school kits, medical camps and family rations. We believe in
                  total transparency, and we'd love to share stories of the
                  people your generosity supports.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link to="/about" className="btn-ghost">
                    See Our Work <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-sm font-bold text-primary-600 hover:text-accent-500 transition-colors"
                  >
                    Talk to us <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Query card */}
            <div className="rounded-3xl bg-gradient-to-br from-primary-700 to-primary-900 text-white p-8 md:p-10 shadow-2xl overflow-hidden relative">
              <div className="pointer-events-none absolute -bottom-12 -right-12 h-48 w-48 rounded-full bg-accent-500/20 blur-3xl" />
              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent-300 ring-1 ring-white/20">
                  <Clock className="h-3.5 w-3.5" />
                  Quick response
                </div>
                <h3 className="mt-4 font-display text-2xl md:text-3xl font-bold leading-tight">
                  Need help with a donation?
                </h3>
                <p className="mt-3 text-primary-100/90 leading-relaxed">
                  For queries, sharing a payment screenshot, or requesting an
                  official receipt — our team is just a call or email away.
                </p>

                <div className="mt-6 grid sm:grid-cols-2 gap-3">
                  <a
                    href={TRUST_PHONES.primary.tel}
                    className="flex items-center gap-3 rounded-2xl bg-white/10 hover:bg-white/15 backdrop-blur p-4 transition-colors"
                  >
                    <div className="h-11 w-11 rounded-xl bg-accent-500 grid place-items-center shrink-0">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] uppercase tracking-wider text-primary-200">
                        Call us
                      </p>
                      <p className="font-bold truncate">
                        {TRUST_PHONES.primary.display}
                      </p>
                    </div>
                  </a>
                  <div className="flex items-center gap-3 rounded-2xl bg-white/10 backdrop-blur p-4">
                    <div className="h-11 w-11 rounded-xl bg-accent-500 grid place-items-center shrink-0">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] uppercase tracking-wider text-primary-200">
                        Email us
                      </p>
                      <a
                        href={`mailto:${TRUST_EMAILS.office}`}
                        className="block font-bold truncate hover:underline"
                      >
                        {TRUST_EMAILS.office}
                      </a>
                      <a
                        href={`mailto:${TRUST_EMAILS.helpline}`}
                        className="block text-xs text-primary-100/80 truncate hover:text-white hover:underline transition-colors"
                      >
                        {TRUST_EMAILS.helpline}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
