
export const COLORS = {
  chocolate: "#4B2C20",
  deepBrown: "#2D1810",
  gold: "#D4AF37",
  goldLight: "#F1E5AC",
  red: "#720e0e",
  redHover: "#4a0a0a",
  creamBg: "#FDF5EF",
  white: "#FFFFFF",
  textDark: "#2C1810"
};

export const TRANSLATIONS = {
  de: {
    nav: {
      home: "Home",
      treatments: "Behandlungen",
      contact: "Kontakt",
      book: "Termin"
    },
    hero: {
      title: "Thai Massage für Frauen",
      subtitle: "im Oerather Mühlenfeld",
      tagline: "Nacken · Rücken · Wärme · Regeneration",
      cta: "Programm entdecken"
    },
    philosophy: {
      label: "UNSER FOKUS",
      title: "Harmonie & Wohlbefinden",
      p1: "Inmitten des Oerather Mühlenfelds schaffen wir einen exklusiven Rückzugsort nur für Frauen.",
      p2_1: "Wir konzentrieren uns voll und ganz auf die",
      p2_highlight: "Nacken-, Schulter- und Rückenmassage",
      p2_2: "sowie wohltuende Wärmebehandlungen.",
      p3: "Traditionelle Techniken treffen auf eine moderne, ruhige Atmosphäre."
    },
    treatments: {
      label: "UNSERE PREISE",
      title: "Behandlungen",
      duration: "Dauer",
      price: "PREIS",
      bookNow: "Jetzt buchen",
      noticeTitle: "Wichtiger Hinweis",
      noticeText: "Unsere Leistungen dienen ausschließlich der Entspannung und Gesundheitsvorsorge. Keine Erotik, keine medizinischen Heilversprechen.",
      idealFor: "Ideal für Menschen mit:",
      effectTitle: "Wirkung:",
      stepsTitle: "Unsere Kombinationsmassage vereint:"
    },
    anspruch: {
      title: "Unser Qualitätsversprechen",
      items: [
        { title: "Zertifiziert", text: "Traditionelle Ausbildung mit langjähriger Erfahrung." },
        { title: "Individuell", text: "Jede Massage wird auf Ihre Bedürfnisse abgestimmt." },
        { title: "Atmosphäre", text: "Ruhige, hygienische und warme Räumlichkeiten." },
        { title: "Diskret", text: "Ein geschützter Raum exklusiv für Frauen." }
      ]
    },
    contact: {
      label: "KONTAKT",
      title: "Besuchen Sie uns",
      reservation: "Reservierung erforderlich",
      callUs: "Rufen Sie uns an",
      callCta: "Termin vereinbaren",
      germany: "41812 Erkelenz",
      note: "Mo-Fr: Termine nach Vereinbarung"
    },
    footer: {
      tagline: "Ihre Auszeit im Mühlenfeld",
      rights: "© Thai Massage für Frauen. Alle Rechte vorbehalten."
    }
  },
  en: {
    nav: {
      home: "Home",
      treatments: "Treatments",
      contact: "Contact",
      book: "Booking"
    },
    hero: {
      title: "Thai Massage for Women",
      subtitle: "in Oerather Mühlenfeld",
      tagline: "Neck · Back · Warmth · Regeneration",
      cta: "Explore Treatments"
    },
    philosophy: {
      label: "OUR FOCUS",
      title: "Harmony & Well-being",
      p1: "In the heart of Oerather Mühlenfeld, we provide an exclusive retreat for women only.",
      p2_1: "We focus entirely on the",
      p2_highlight: "neck, shoulder, and back massage",
      p2_2: "along with soothing heat treatments.",
      p3: "Traditional techniques meet a modern, calm atmosphere."
    },
    treatments: {
      label: "OUR PRICES",
      title: "Treatments",
      duration: "Duration",
      price: "PRICE",
      bookNow: "Book Now",
      noticeTitle: "Important Note",
      noticeText: "Our services are exclusively for relaxation and health prevention. No erotic services, no medical healing promises.",
      idealFor: "Ideal for people with:",
      effectTitle: "Effect:",
      stepsTitle: "Our combination massage combines:"
    },
    anspruch: {
      title: "Our Quality Promise",
      items: [
        { title: "Certified", text: "Traditional training with years of experience." },
        { title: "Individual", text: "Every massage is tailored to your needs." },
        { title: "Atmosphere", text: "Quiet, hygienic, and warm rooms." },
        { title: "Discrete", text: "A protected space exclusively for women." }
      ]
    },
    contact: {
      label: "CONTACT",
      title: "Visit Us",
      reservation: "Reservation Required",
      callUs: "Call Us",
      callCta: "Book Appointment",
      germany: "41812 Erkelenz",
      note: "Mon-Fri: By appointment"
    },
    footer: {
      tagline: "Your retreat in Mühlenfeld",
      rights: "© Thai Massage for Women. All rights reserved."
    }
  }
};

export const SHOP_INFO = {
  address: "Dinslakener Ring 27, 41812 Erkelenz",
  phone: "0176 43286928",
  phoneLink: "tel:017643286928",
  googleMapsUrl: "https://share.google/pdqx9aad1WD1dfox6"
};

export const SERVICES_DATA = {
  de: [
    {
      id: 1,
      title: "Nacken- & Rückenmassage",
      subtitle: "Gezielt. Tiefenwirksam. Entlastend.",
      description: "Durch Drucktechniken, Dehnungen und Mobilisation wird die Muskulatur gelockert und die Durchblutung gefördert.",
      highlights: [
        "Nacken- und Schulterverspannungen",
        "Rückenbeschwerden",
        "Sitzende Tätigkeit oder körperliche Belastung",
        "Stressbedingte Spannungen"
      ],
      effects: [
        "Spürbare Entlastung",
        "Verbesserte Beweglichkeit",
        "Tiefe Entspannung"
      ],
      duration: "60 min",
      options: [
        { duration: "60 min", price: "50" }
      ]
    },
    {
      id: 2,
      title: "Kombinationsbehandlung",
      subtitle: "Maximale Wirkung für Nacken & Rücken",
      description: "👉 Ideal bei starken, langanhaltenden Verspannungen oder zur intensiven Regeneration.",
      isCombo: true,
      highlights: [
        "1. klassische Thai-Nacken-Rückenmassage",
        "2. intensive Tiefenwärme mit Hot-Stones",
        "3. entspannender Abschluss mit Kräuterstempeln"
      ],
      duration: "90 / 120 min",
      options: [
        { duration: "90 min", price: "75" },
        { duration: "120 min", price: "100" }
      ]
    }
  ],
  en: [
    {
      id: 1,
      title: "Neck & Back Massage",
      subtitle: "Targeted. Deep acting. Relieving.",
      description: "Through pressure techniques, stretching and mobilization, the muscles are loosened and blood circulation is promoted.",
      highlights: [
        "Neck and shoulder tension",
        "Back complaints",
        "Sedentary activity or physical strain",
        "Stress-related tension"
      ],
      effects: [
        "Noticeable relief",
        "Improved mobility",
        "Deep relaxation"
      ],
      duration: "60 min",
      options: [
        { duration: "60 min", price: "50" }
      ]
    },
    {
      id: 2,
      title: "Combination Treatment",
      subtitle: "Maximum effect for neck & back",
      description: "👉 Ideal for strong, long-lasting tension or intensive regeneration.",
      isCombo: true,
      highlights: [
        "1. Classic Thai Neck & Back Massage",
        "2. Intensive deep heat with Hot Stones",
        "3. Relaxing finish with Herbal Compresses"
      ],
      duration: "90 / 120 min",
      options: [
        { duration: "90 min", price: "75" },
        { duration: "120 min", price: "100" }
      ]
    }
  ]
};
