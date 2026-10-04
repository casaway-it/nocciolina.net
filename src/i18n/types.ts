export type Content = {
  siteName: string;
  siteTitle: string;
  siteDescription: string;

  nav: {
    home: string;
    property: string;
    langhe: string;
    story: string;
    guide: string;
    contact: string;
    enquire: string;
    menu: string;
    primaryNav: string;
    mobileNav: string;
    languageLabel: string;
  };

  footer: {
    tagline: string;
    signal: string;
    visit: string;
    reachUs: string;
    explore: string;
    phoneLabel: string;
    whatsappLabel: string;
    emailLabel: string;
    openInMaps: string;
    houseGuide: string;
    terms: string;
    privacy: string;
    rights: string; // template with {year} and {name}
  };

  skipToContent: string;

  home: {
    hero: {
      eyebrow: string;
      title: [string, string, string];
      body: string;
      action: string;
      alt: string;
    };
    marquee: string[];
    welcome: {
      eyebrow: string;
      heading: [string, string, string];
      body: string[];
      caption: string;
      quote: string;
      quoteByline: string;
      asideAlt: string;
      fireAlt: string;
    };
    video: {
      eyebrow: string;
      title: string;
    };
    cards: Array<{ title: string; body: string; alt: string }>;
    stays: {
      eyebrow: string;
      heading: [string, string, string];
      note: string;
      caption: string;
      asideAlt: string;
      asideCta: string;
      rooms: Array<{ number: string; title: string; accent: string; body: string; pairing: string }>;
    };
    deckAlt: string;
    nature: {
      eyebrow: string;
      heading: [string, string, string];
      body: string[];
      figureCaption: string;
      figureAlt: string;
      highlights: Array<{ title: string; body: string }>;
    };
    gateway: {
      eyebrow: string;
      heading: [string, string, string];
      body: string[];
      cta: string;
      figureCaption: string;
      figureAlt: string;
    };
    story: {
      eyebrow: string;
      headingLine1: string;
      headingAccent: string;
      interiorAlt: string;
      quote: string;
      timeline: Array<{ year: string; text: string }>;
      cta: string;
    };
    contact: {
      eyebrow: string;
      heading: [string, string, string];
      body: string;
      formTitle: string;
      confirmation: string;
      directLabel: string;
      directPhonePrefix: string;
      directWhatsappPrefix: string;
      emailLabel: string;
      form: {
        fullName: string;
        email: string;
        phone: string;
        arrival: string;
        departure: string;
        guests: string;
        message: string;
        messagePlaceholder: string;
        send: string;
      };
    };
  };

  bottomGallery: {
    title: string;
    alts: string[]; // 10 entries
  };

  property: {
    title: string;
    description: string;
    pageHead: {
      eyebrow: string;
      title: string;
      lead: string;
    };
    heroAlt: string;
    groups: Array<{ title: string; items: string[] }>;
    sections: {
      outside: { title: string; subtitle: string };
      livingRoom: { title: string; subtitle: string };
      kitchenBar: { title: string; subtitle: string };
      bedrooms: { title: string; subtitle: string };
      bathrooms: { title: string; subtitle: string };
    };
    stayHeading: string;
    checkInLabel: string; // "Check-in from"
    checkOutLabel: string; // "Check-out by"
    enquireCta: string;
    alts: {
      outside: string[];
      livingRoom: string[];
      kitchenBar: string[];
      bedrooms: string[];
      bathrooms: string[];
    };
  };

  story: {
    title: string;
    description: string;
    pageHead: {
      eyebrow: string;
      title: string;
      lead: string;
    };
    heroAlt: string;
    intro: string;
    findingHeading: string;
    findingBody: string;
    renovatingHeading: string;
    renovatingBody: string;
    outdoorsHeading: string;
    outdoorsBody: string;
    goodbyeHeading: string;
    goodbyeBody: string;
    sayHelloBefore: string;
    alts: {
      pair1: [string, string];
      grid1: [string, string, string, string, string, string];
      grid2: [string, string, string, string];
      pair2: [string, string];
    };
  };

  guide: {
    title: string;
    description: string;
    pageHead: {
      eyebrow: string;
      title: string;
      lead: string;
    };
    requestBefore: string;
    requestAfter: string;
    whatsInsideHeading: string;
    whatsInside: string[];
    beforeHeading: string;
    beforeBodyBefore: string;
    beforeBodyAfter: string;
    whatsappText: string;
    coverAlt: string;
    coverCaption: string;
  };

  contact: {
    title: string;
    description: string;
    pageHead: {
      eyebrow: string;
      title: string;
      lead: string;
    };
    mailboxAlt: string;
    labels: {
      phone: string;
      whatsapp: string;
      email: string;
      address: string;
    };
    form: {
      sendMessage: string;
      name: string;
      email: string;
      phone: string;
      arrival: string;
      departure: string;
      message: string;
      messagePlaceholder: string;
      send: string;
    };
  };

  tos: {
    title: string;
    description: string;
    pageHead: {
      eyebrow: string;
      title: string;
      lead: string;
    };
    pdfLineBefore: string;
    pdfLink: string;
    pdfLineAfter: string;
    directHeading: string;
    directBody: string;
    otaHeading: string;
    otaBody: string;
    privacyHeading: string;
    privacyBodyBefore: string;
    privacyPolicyText: string;
    privacyBodyAfter: string;
  };

  langhe: {
    title: string;
    description: string;
    pageHead: {
      eyebrow: string;
      title: string;
      lead: string;
    };
    heroAlt: string;
    tocLabel: string;
    syncBefore: string;
    syncLinkText: string;
    syncAfter: string;
    openLink: string; // "Open in Maps" tooltip
    categoryTitles: Record<string, string>; // keyed by category id
    poiNotes: Record<string, string>; // keyed by POI id
  };
};
