export const siteConfig = {
  name: "Nocciolina",
  title: "Nocciolina - A stone house in Alta Langa",
  description:
    "Nocciolina is a stone house for six, set among hazelnut groves in the hamlet of Somano. Alta Langa, Piedmont.",
  locale: "en_US",
  defaultImage: "/og.jpg",
  address: {
    street: "Borgata Sant'Antonio",
    locality: "Somano",
    region: "Cuneo",
    postalCode: "12060",
    country: "Italia",
  },
  mapUrl:
    "https://www.google.com/maps/place/Casa+Vacanze+Langhe+-+Nocciolina/@44.5275756,8.0091781,17z/data=!4m6!3m5!1s0x12d2bb16f1270f69:0x67a12328ec525052!8m2!3d44.5275756!4d8.0091781!16s%2Fg%2F11v3tptzgp",
  // Nocciolina has no plain phone line. +39 039 636-0500 is a WhatsApp Business
  // number only — it carries both voice calls and messages via WhatsApp.
  whatsapp: {
    display: "+39 039 636-0500",
    href: "https://wa.me/message/R2AKZF4C64OZL1",
  },
  // Coordinates for the house. Used for the "directions to" link and schema.
  geo: {
    lat: 44.5275756,
    lng: 8.0091781,
  },
  // View shown by the embedded map iframe. Slightly offset from `geo` and
  // zoomed in so the house sits in frame with its grounds.
  mapEmbed: {
    lat: 44.5265572,
    lng: 8.0090302,
    zoom: 19,
  },
  email: "info@casaway.it",
  nav: [
    { label: "Home", href: "/" },
    { label: "Property", href: "/property" },
    { label: "Langhe", href: "/langhe" },
    { label: "Story", href: "/story" },
    { label: "House Guide", href: "/guide" },
    { label: "Contact", href: "/contact" },
  ],
  contact: {
    formAction: "mailto:info@casaway.it",
    method: "post",
  },
  stay: {
    guests: 6,
    bedrooms: 2,
    bathrooms: 1,
    sizeSqm: 120,
    gardenSqm: 350,
    checkIn: "15:00",
    checkOut: "11:00",
  },
  effects: {
    reveal: true,
  },
  social: [
    { label: "WhatsApp", href: "https://wa.me/message/R2AKZF4C64OZL1" },
    {
      label: "Map",
      href: "https://www.google.com/maps/place/Casa+Vacanze+Langhe+-+Nocciolina/@44.5275756,8.0091781,17z/data=!4m6!3m5!1s0x12d2bb16f1270f69:0x67a12328ec525052!8m2!3d44.5275756!4d8.0091781!16s%2Fg%2F11v3tptzgp",
    },
    { label: "Casaway", href: "https://casaway.it" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
