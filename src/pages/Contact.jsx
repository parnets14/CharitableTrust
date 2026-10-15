import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  ArrowRight,
} from "lucide-react";
import contactBanner from "../assets/Contactus Banner.webp";

const contactCards = [
  {
    icon: Phone,
    title: "Phone",
    primary: "+91 98765 43210",
    secondary: "+91 80 2345 6789",
    href: "tel:+919876543210",
    tone: "from-primary-500 to-primary-600",
  },
  {
    icon: Mail,
    title: "Email",
    primary: "info@mkctrust.org",
    secondary: "donate@mkctrust.org",
    href: "mailto:info@mkctrust.org",
    tone: "from-accent-400 to-accent-500",
  },
  {
    icon: MapPin,
    title: "Office",
    primary: "Bengaluru, Karnataka",
    secondary: "India — 560001",
    href: "#map",
    tone: "from-emerald-500 to-emerald-600",
  },
  {
    icon: Clock,
    title: "Hours",
    primary: "Mon — Sat",
    secondary: "9:00 AM – 6:00 PM",
    href: "#",
    tone: "from-indigo-500 to-indigo-600",
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Static site — simulate submission
    setStatus("success");
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setStatus(null), 4000);
  };

  return (
    <>
      {/* ============== HERO BANNER (contact banner image) ============== */}
      <section className="w-full overflow-hidden bg-white">
        <img
          src={contactBanner}
          alt="Contact Us — We'd love to hear from you"
          className="block w-full h-[180px] sm:h-[220px] md:h-[280px] lg:h-[320px] object-cover object-center"
        />
      </section>

      {/* ============== FORM + CONTACT CARDS (cards beside form) ============== */}
      <section id="contact-form" className="pt-8 pb-16 md:pt-10 md:pb-24 bg-primary-50/40 scroll-mt-20">
        <div className="mx-auto max-w-[1600px] container-px">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] items-stretch">
            {/* Contact info — LEFT (single unified card) */}
            <div className="rounded-3xl bg-white ring-1 ring-ink-300/40 shadow-card overflow-hidden flex flex-col h-full">
              {/* Header — matches form style */}
              <div className="flex items-center gap-3 p-6 sm:p-8 border-b border-ink-300/30">
                <div className="h-12 w-12 rounded-2xl bg-primary-50 text-primary-600 grid place-items-center shrink-0">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-ink-900">
                    Get in touch
                  </h2>
                  <p className="text-sm text-ink-700">
                    Reach out anytime — we're always happy to help.
                  </p>
                </div>
              </div>
              {/* Contact rows — compact, evenly distributed */}
              <ul className="flex-1 flex flex-col justify-evenly py-2">
                {contactCards.map((c) => {
                  const isLink =
                    typeof c.href === "string" &&
                    (c.href.startsWith("tel:") || c.href.startsWith("mailto:"));
                  const inner = (
                    <>
                      <span
                        className={`h-12 w-12 shrink-0 rounded-2xl bg-gradient-to-br ${c.tone} text-white grid place-items-center shadow-soft`}
                      >
                        <c.icon className="h-5 w-5" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-[11px] font-bold uppercase tracking-wider text-ink-500">
                          {c.title}
                        </p>
                        <p className="mt-0.5 font-bold text-ink-900 truncate">
                          {c.primary}
                        </p>
                        <p className="text-xs text-ink-700 truncate">
                          {c.secondary}
                        </p>
                      </div>
                    </>
                  );
                  return (
                    <li key={c.title}>
                      {isLink ? (
                        <a
                          href={c.href}
                          className="group flex items-center gap-4 px-6 sm:px-8 py-3.5 w-full hover:bg-primary-50/40 transition-colors"
                        >
                          {inner}
                        </a>
                      ) : (
                        <div className="flex items-center gap-4 px-6 sm:px-8 py-3.5 w-full">
                          {inner}
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Form — RIGHT */}
            <div className="rounded-3xl bg-white p-8 md:p-10 ring-1 ring-ink-300/40 shadow-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-12 w-12 rounded-2xl bg-primary-50 text-primary-600 grid place-items-center">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-ink-900">
                    Send us a message
                  </h2>
                  <p className="text-sm text-ink-700">
                    We'll respond within 1–2 working days.
                  </p>
                </div>
              </div>

              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-ink-500">
                      Full name
                    </label>
                    <input
                      required
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="mt-2 w-full rounded-xl bg-primary-50/40 ring-1 ring-primary-100 px-4 py-3 text-ink-900 placeholder:text-ink-500/60 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-ink-500">
                      Email
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="mt-2 w-full rounded-xl bg-primary-50/40 ring-1 ring-primary-100 px-4 py-3 text-ink-900 placeholder:text-ink-500/60 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-ink-500">
                    Subject
                  </label>
                  <input
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    className="mt-2 w-full rounded-xl bg-primary-50/40 ring-1 ring-primary-100 px-4 py-3 text-ink-900 placeholder:text-ink-500/60 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-ink-500">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    className="mt-2 w-full rounded-xl bg-primary-50/40 ring-1 ring-primary-100 px-4 py-3 text-ink-900 placeholder:text-ink-500/60 focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
                  />
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <button type="submit" className="btn-primary">
                    Send Message <Send className="h-4 w-4" />
                  </button>
                  {status === "success" && (
                    <p className="text-sm font-semibold text-emerald-600">
                      Thanks! We'll be in touch soon.
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ============== LOCATION (info + map) ============== */}
      <section className="section bg-white">
        <div className="mx-auto max-w-[1600px] container-px">
          <div className="text-center mb-10">
            <p className="section-eyebrow">Find us</p>
            <h2 className="section-title">Our Location</h2>
            <p className="mt-4 text-ink-700 max-w-2xl mx-auto">
              Visit our office in Bengaluru — we're always happy to welcome
              supporters, volunteers and families in person.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] items-stretch">
            {/* Info panel — LEFT */}
            <div className="rounded-3xl bg-gradient-to-br from-logoBlue-400 via-logoBlue-500 to-logoBlue-600 text-white p-8 md:p-10 shadow-card flex flex-col">
              <div className="h-14 w-14 rounded-2xl bg-white/20 backdrop-blur grid place-items-center mb-6">
                <MapPin className="h-7 w-7" />
              </div>
              <h3 className="font-display text-2xl font-bold leading-tight">
                Nadaprabhu Kempegowda Educational & Charitable Trust
              </h3>
              <p className="mt-4 text-white/90 leading-relaxed">
                Bengaluru, Karnataka, India — 560001
              </p>

              <div className="mt-8 space-y-4 border-t border-white/25 pt-8">
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-white/80 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold">Office Hours</p>
                    <p className="text-sm text-white/80">
                      Monday – Saturday · 9:00 AM – 6:00 PM IST
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-white/80 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold">Call us</p>
                    <p className="text-sm text-white/80">
                      +91 98765 43210
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=Bengaluru"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto pt-8"
              >
                <span className="inline-flex items-center gap-2 rounded-xl bg-white text-logoBlue-600 font-bold px-5 py-3 hover:bg-logoBlue-50 transition-colors">
                  Open in Google Maps <ArrowRight className="h-4 w-4" />
                </span>
              </a>
            </div>

            {/* Map — RIGHT */}
            <div className="rounded-3xl overflow-hidden shadow-card ring-1 ring-ink-300/40 min-h-[380px] lg:min-h-[500px]">
              <iframe
                title="Office location"
                src="https://www.google.com/maps?q=Bengaluru,+Karnataka,+India&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
