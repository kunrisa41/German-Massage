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
      title: "Gezielte Regeneration",
      p1: "Verspannungen im Nacken- und Rückenbereich beeinträchtigen Wohlbefinden, Schlaf und Konzentration.",
      p2: "Unsere Behandlungen konzentrieren sich ausschließlich auf diese Zonen – gezielt, professionell and wirkungsvoll.",
      p3: "Wir verbinden traditionelle Thai-Massagegriffe mit Wärmeanwendungen und Kräuterkraft, um Muskulatur zu lockern, Stress abzubauen und neue Energie zu schenken."
    },
    treatments: {
      label: "UNSERE PREISE",
      title: "Behandlungen",
      duration: "Dauer",
      price: "PREISE",
      bookNow: "Jetzt buchen",
      noticeTitle: "Wichtiger Hinweis",
      noticeText: "Unsere Dienstleistungen dienen ausschließlich der Entspannung und Gesundheitsvorsorge. Keine erotischen Dienstleistungen, keine medizinischen Heilversprechen.",
      idealFor: "Diese Behandlung richtet sich gezielt an Menschen mit:",
      effectTitle: "Wirkung",
      stepsTitle: "Unsere Kombinationsmassage vereint:"
    },
    anspruch: {
      title: "Unser Qualitätsversprechen",
      items: [
        { title: "Zertifiziert", text: "Traditionelle Ausbildung with langjähriger Erfahrung." },
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
      note: "Mo-Fr: Nach telefonischer Rücksprache."
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
      title: "Targeted Regeneration",
      p1: "Tension in the neck and back area affects well-being, sleep and concentration.",
      p2: "Our treatments focus exclusively on these zones – targeted, professional and effective.",
      p3: "We combine traditional Thai massage techniques with heat applications and herbal power to loosen muscles, reduce stress and provide new energy."
    },
    treatments: {
      label: "OUR PRICES",
      title: "Treatments",
      duration: "Duration",
      price: "PRICE",
      bookNow: "Book Now",
      noticeTitle: "Important Note",
      noticeText: "Our services are exclusively for relaxation and health prevention. No erotic services, no medical healing promises.",
      idealFor: "This treatment is specifically aimed at people with:",
      effectTitle: "Effect",
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
      note: "Mon-Fri: After telephone consultation"
    },
    footer: {
      tagline: "Your retreat in Mühlenfeld",
      rights: "© Thai Massage for Women. All rights reserved."
    }
  }
};

export const SHOP_INFO = {
  address: "Dinslakener Ring 27, 41812 Erkelenz",
  phone: "0151 64319130",
  phoneLink: "tel:015164319130",
  googleMapsUrl: "https://maps.app.goo.gl/hzChWPnEkjYf2kYx5?g_st=ic"
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
      options: [
        { duration: "60 min", price: "50" }
      ]
    },
    {
      id: 2,
      title: "Kombinationsbehandlung",
      subtitle: "Maximale Wirkung für Nacken & Rücken",
      description: "Ideal bei starken, langanhaltenden Verspannungen oder zur intensiven Regeneration durch die Kombination verschiedener Techniken.",
      isCombo: true,
      highlights: [
        "Klassische Thai-Nacken-Rückenmassage",
        "Intensive Tiefenwärme with Hot-Stones",
        "Entspannender Abschluss with Kräuterstempeln"
      ],
      effects: [],
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
      options: [
        { duration: "60 min", price: "50" }
      ]
    },
    {
      id: 2,
      title: "Combination Treatment",
      subtitle: "Maximum effect for neck & back",
      description: "Ideal for strong, long-lasting tension or intensive regeneration through the combination of various techniques.",
      isCombo: true,
      highlights: [
        "Classic Thai Neck & Back Massage",
        "Intensive deep heat with Hot Stones",
        "Relaxing finish with Herbal Compresses"
      ],
      effects: [],
      options: [
        { duration: "90 min", price: "75" },
        { duration: "120 min", price: "100" }
      ]
    }
  ]
};