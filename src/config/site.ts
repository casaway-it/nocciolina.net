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
  mapUrl: "https://maps.nocciolina.net",
  phone: "+39 039 636 9500",
  whatsapp: {
    display: "+39 039 636-0500",
    href: "https://wa.me/message/R2AKZF4C64OZL1",
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
    { label: "Map", href: "https://maps.nocciolina.net" },
    { label: "Casaway", href: "https://casaway.it" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
