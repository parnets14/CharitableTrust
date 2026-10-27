// Single source of truth for the trust's impact numbers.
// Every page pulls from here so the stats stay consistent.
export const IMPACT_STATS = [
  { value: "500+", label: "Children Educated" },
  { value: "3,000+", label: "Patients Treated" },
  { value: "120+", label: "Families Supported" },
  { value: "10+", label: "Years of Service" },
];

// Single source of truth for the trust's contact email addresses.
// Change a value here and every page, link and footer row updates with it.
export const TRUST_EMAILS = {
  office: "office@mkctrust.org",
  helpline: "helpline@mkctrust.org",
};

// Single source of truth for the trust's phone numbers.
// `display` is what visitors read; `tel` is the dialable form for tel: links.
export const TRUST_PHONES = {
  primary: {
    display: "+91 99724 74042",
    tel: "tel:+919972474042",
  },
};

// Single source of truth for the trust's office location.
// Pinned from the trust's Google Maps listing — change the numbers here and
// the map, the address text and the "Open in Maps" links all follow.
const COORDS = "12.832126,77.570080";
const COORDS_LABEL = "12.832126, 77.570080";

export const TRUST_LOCATION = {
  name: "Nadaprabhu Kempegowda Educational & Charitable Trust",
  lat: 12.832126,
  lng: 77.57008,
  coordsLabel: COORDS_LABEL,

  // Short, human-friendly address lines used across the site.
  street: "Bilvaradhahalli, Shanubhoganahalli",
  locality: "Anekal",
  region: "Bengaluru Urban, Karnataka",
  postalCode: "560083",
  country: "India",

  // Full address as an array so pages can render it line by line.
  addressLines: [
    "Bilvaradhahalli, Shanubhoganahalli",
    "Anekal, Bengaluru Urban",
    "Karnataka 560083, India",
  ],
  addressOneLine:
    "Bilvaradhahalli, Anekal, Bengaluru Urban, Karnataka 560083, India",

  // Card-sized versions for compact UI slots.
  shortPrimary: "Anekal, Bengaluru",
  shortSecondary: "Karnataka — 560083",

  hours: "Mon – Sat · 9:00 AM – 6:00 PM IST",

  // The exact pin the trust shared.
  mapsLink: "https://maps.app.goo.gl/9dH4ee8mMzJEfAtk7",
  // Opens the pin itself (not a text search) — works on mobile + desktop.
  mapsUrl: `https://www.google.com/maps/search/?api=1&query=${COORDS}`,
  // Turn-by-turn directions straight to the pin.
  directionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${COORDS}`,
  // Keyless embed, centred on the pin.
  embedUrl: `https://www.google.com/maps?q=${COORDS}&z=16&hl=en&output=embed`,
};
