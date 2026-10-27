import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Home as HomeIcon,
  Info,
  Heart,
  PhoneCall,
  GraduationCap,
  Stethoscope,
  Users,
  HandHeart,
} from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
} from "./BrandIcons";
import logo from "../assets/Clogo.png";
import { TRUST_LOCATION, TRUST_EMAILS, TRUST_PHONES } from "../data/site";

const quickLinks = [
  { label: "Home", to: "/", icon: HomeIcon },
  { label: "About Us", to: "/about", icon: Info },
  { label: "Donate Us", to: "/donate", icon: HandHeart },
  { label: "Contact Us", to: "/contact", icon: PhoneCall },
];

const programs = [
  { label: "Free Education", icon: GraduationCap, to: "/about" },
  { label: "Free Healthcare", icon: Stethoscope, to: "/about" },
  { label: "Family Support", icon: Heart, to: "/about" },
  { label: "Community Outreach", icon: Users, to: "/about" },
];

const contacts = [
  {
    icon: Phone,
    label: TRUST_PHONES.primary.display,
    href: TRUST_PHONES.primary.tel,
  },
  {
    icon: Mail,
    label: TRUST_EMAILS.office,
    href: `mailto:${TRUST_EMAILS.office}`,
  },
  {
    icon: Mail,
    label: TRUST_EMAILS.helpline,
    href: `mailto:${TRUST_EMAILS.helpline}`,
  },
  {
    icon: MapPin,
    label: "Anekal, Bengaluru 560083",
    href: TRUST_LOCATION.mapsUrl,
    external: true,
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-primary-700 text-white">
      {/* Decorative top accent strip */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500" />
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-[1600px] container-px py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logo}
                alt="Trust logo"
                className="h-12 w-12 rounded-full bg-white ring-2 ring-white/40 p-0.5"
              />
              <div>
                <p className="font-extrabold text-sm leading-tight">
                  Nadaprabhu Kempegowda
                </p>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-primary-200">
                  Educational & Charitable Trust
                </p>
              </div>
            </div>
            <p className="text-sm text-primary-100/90 leading-relaxed">
              Building brighter futures by supporting education, healthcare and
              families in need — one community at a time.
            </p>
            <div className="mt-5 flex gap-3">
              {[
                { icon: FacebookIcon, label: "Facebook" },
                { icon: InstagramIcon, label: "Instagram" },
                { icon: YoutubeIcon, label: "YouTube" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="grid h-9 w-9 place-items-center rounded-full bg-white/10 ring-1 ring-white/10 hover:bg-accent-500 transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-extrabold text-base mb-4 relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 h-0.5 w-8 bg-accent-500" />
            </h4>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="group inline-flex items-center gap-2.5 text-primary-100/90 hover:text-white transition-colors"
                  >
                    <span className="grid h-7 w-7 place-items-center rounded-lg bg-white/10 ring-1 ring-white/10 group-hover:bg-accent-500 group-hover:ring-accent-400 transition-colors">
                      <l.icon className="h-3.5 w-3.5" />
                    </span>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Work */}
          <div>
            <h4 className="font-display font-extrabold text-base mb-4 relative inline-block">
              Our Work
              <span className="absolute -bottom-1 left-0 h-0.5 w-8 bg-accent-500" />
            </h4>
            <ul className="space-y-2.5 text-sm">
              {programs.map((p) => (
                <li key={p.label}>
                  <Link
                    to={p.to}
                    className="group inline-flex items-center gap-2.5 text-primary-100/90 hover:text-white transition-colors"
                  >
                    <span className="grid h-7 w-7 place-items-center rounded-lg bg-white/10 ring-1 ring-white/10 group-hover:bg-white/15 transition-colors text-white">
                      <p.icon className="h-3.5 w-3.5" />
                    </span>
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-extrabold text-base mb-4 relative inline-block">
              Get in Touch
              <span className="absolute -bottom-1 left-0 h-0.5 w-8 bg-accent-500" />
            </h4>
            <ul className="space-y-2.5 text-sm">
              {contacts.map((c) => {
                const content = (
                  <span className="inline-flex items-center gap-2.5 text-primary-100/90 hover:text-white transition-colors">
                    <span className="grid h-7 w-7 place-items-center rounded-lg bg-white/10 ring-1 ring-white/10 text-white">
                      <c.icon className="h-3.5 w-3.5" />
                    </span>
                    {c.label}
                  </span>
                );
                return (
                  <li key={c.label}>
                    {c.href ? (
                      <a
                        href={c.href}
                        {...(c.external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                      >
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-primary-100/80">
          <p>
            © {new Date().getFullYear()} Nadaprabhu Kempegowda Educational &
            Charitable Trust. All rights reserved.
          </p>
          <p>Made with care for the community we serve.</p>
        </div>
      </div>
    </footer>
  );
}
