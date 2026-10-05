// NATEWASHERE editable site copy.
// This file is intentionally plain JavaScript so the site works when opened locally.
// Edit text between quotes. HTML is allowed only in fields ending in "Html".

const SITE = {
  meta: {
    title: "NATEWASHERE — Nathan Supakitchumnan · Designer & Builder",
    description: "Portfolio of Nathan Supakitchumnan — designer and builder. Selected work, capabilities, playground experiments, and contact."
  },

  hero: {
    chip1: "SITE REBUILD IN PROGRESS",
    chip2: "PRODUCT / DATA / UX",
    chip3: "HUMAN × OBJECT × SYSTEM",
    title1Html: 'DATA➕HUMAN<i class="h-o">.</i>',
    title2: "NETHAN",
    title3Html: '<span class="sn-full">SUPAKITCHUMNAN</span><span class="sn-short">SU</span><i class="h-o">.</i>',
    sub: ""
  },

  marquee: [
    { text: "Product Design" },
    { text: "UX Research", style: "out" },
    { text: "Prototyping" },
    { text: "Systems", style: "out" },
    { text: "Experiments", style: "hl" },
    { text: "Work in Progress" }
  ],

  about: {
    titleHtml: 'TURN DATA INTO BETTER EXPERIENCES&nbsp;<br><span class="hl">INSIGHT TO PRODUCTS.</span>',
    paragraph1Html: '<b>Nethan Supakitchumnan</b> is an industrial product, data-driven, and UX designer. His work sits where physical objects, information, and interfaces meet.',
    paragraph2: "He is interested in how AI-enabled capabilities can redefine human/object interaction — and in testing those ideas with real people before they harden into products. He is especially interested in how people with objects, interfaces and systems behind them"
  },

  capabilities: [
    {
      title: "Product Design",
      role: "PROBLEM → PRODUCT",
      image: "https://picsum.photos/seed/nate-cap-1/600/860.jpg",
      description: "Framing fuzzy problems into flows, interfaces, and systems — then pressure-testing them with real people before anything gets built.",
      bullets: ["Flows, wireframes & specs", "Interface systems & states", "Usability testing rounds"],
      featuredLabel: "Featured Work",
      featuredText: "Designing Data Autonomy — thesis case study",
      href: "#/work/designing-data-autonomy",
      cta: "See the Work"
    },
    {
      title: "UX Research",
      role: "QUESTIONS → EVIDENCE",
      image: "https://picsum.photos/seed/nate-cap-2/600/860.jpg",
      description: "Asking better questions before jumping to solutions — interviews, observations, and synthesis that turn opinions into evidence a team can act on.",
      bullets: ["Interviews & field sessions", "Usability testing", "Synthesis & findings"],
      featuredLabel: "Featured Work",
      featuredText: "WasteNot — research-led case study",
      href: "#/work/wastenot",
      cta: "See the Work"
    },
    {
      title: "Prototyping",
      role: "IDEA → ARTIFACT",
      image: "https://picsum.photos/seed/nate-cap-3/600/860.jpg",
      description: "Making ideas touchable early — from paper sketches to clickable builds — so decisions get made with something real in the room, not a slide.",
      bullets: ["Sketches & flow maps", "Clickable prototypes", "Design–code handoff"],
      featuredLabel: "Featured Work",
      featuredText: "Emergency Dispatcher AI Chatbot — prototype",
      href: "#/work/emergency-dispatcher-ai-chatbot",
      cta: "See the Work"
    },
    {
      title: "Experiments",
      role: "PLAY → PRACTICE",
      image: "https://picsum.photos/seed/nate-cap-4/600/860.jpg",
      description: "A standing excuse to play: visual studies, tools, and side quests that feed the main work with new inputs — and keep the practice curious.",
      bullets: ["Playground builds", "Visual studies", "Tools & small scripts"],
      featuredLabel: "Lives In",
      featuredText: "The Playground — below",
      href: "#playground",
      cta: "Tour the Playground"
    }
  ],

  playground: [
    {
      tag: "Investigation 01",
      title: "AI Job Postings",
      question: "How fast has demand for AI skills grown in job postings across countries?",
      what: "Tracks the share of online job postings listing at least one AI skill across 22 countries, 2014–2025.",
      why: "Headlines about AI jobs are loud; I wanted the measured trend, country by country, rather than the noise.",
      how: ["Public data (Lightcast / OWID)", "Cleaning", "Time series", "Country comparison", "Visualization"],
      meta: "22 COUNTRIES · 2014–2025",
      image: "/__l5e/assets-v1/3d216929-6e0b-412a-aade-402151018278/pg-jobs.jpg",
      href: "https://ai-job-postings.netlify.app"
    },
    {
      tag: "Investigation 02",
      title: "AI Skill Heatmap",
      question: "Which AI skills do employers request for each type of role?",
      what: "A 3D heat map of AI skills explicitly required or preferred across 14 role families, with linked listing evidence.",
      why: "“AI skills” means different things to engineers, marketers and operators — I wanted to see how.",
      how: ["Data collection", "Skill normalization", "Aggregation", "3D heat map", "Interactive filtering"],
      meta: "1,095 LISTINGS · 5 JOB BOARDS",
      image: "/__l5e/assets-v1/0fc24f91-4226-4afb-a1ac-23a97f06297d/pg-heat.jpg",
      href: "https://aiskill-heatmap.nate-4f6.workers.dev"
    },
    {
      tag: "Investigation 03",
      title: "Junior Data Scientist",
      question: "What do employers actually require of junior data scientists?",
      what: "Breaks down technical skills, tools, experience and education across 30 verified live job postings.",
      why: "Entry-level advice is often generic; reading the postings themselves gives a more honest picture.",
      how: ["Data collection", "Manual verification", "Requirement coding", "Ranking", "Visualization"],
      meta: "30 VERIFIED POSTINGS · SEP 2026",
      image: "/__l5e/assets-v1/4ef5a840-62a7-41e5-98a1-20bed9c0e84a/pg-jds.jpg",
      href: "https://junior-data-scientist.netlify.app"
    },
    {
      tag: "Investigation 04",
      title: "City Explorer",
      question: "Which European cities perform similarly on quality of life?",
      what: "Compares 391 European urban areas on environment, mobility, economy and survey-based wellbeing.",
      why: "Choosing where to live is a multi-variable question; I wanted to see cities side by side.",
      how: ["Public data (OECD / Eurostat)", "Percentile scoring", "Geographic analysis", "Comparison", "Interactive filtering"],
      meta: "391 CITIES · OECD / EUROSTAT",
      image: "/__l5e/assets-v1/56c5c26e-e993-4c51-bda3-7bc0e11dc63d/pg-city.jpg",
      href: "https://city-explorer-dashboard.netlify.app"
    }
  ],

  contact: {
    titleHtml: 'GOT A PROBLEM <em>WORTH SOLVING?</em>',
    intro: "Open to conversations about industrial product, data, and UX work — especially where physical and digital meet. Use the form or email directly.",
    email: "hello@natewashere.com"
  },

  footer: {
    blurb: "Portfolio of Nathan Supakitchumnan — designer and builder. Work first, always.",
    copyright: "© 2026 NATEWASHERE — NATHAN SUPAKITCHUMNAN"
  }
};
