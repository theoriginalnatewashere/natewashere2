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
      title: "FRAME",
      role: "Find the real problem.",
      image: "/site/img/how-i-work/01-frame.webp",
      alt: "Problem framing with notes and system mapping on a wall.",
      description: "Map the system before designing the solution. Look at people, objects, constraints, incentives, information flows, and technology to understand where the real opportunity sits.",
      bullets: ["System Mapping", "Problem Framing", "Stakeholder Analysis"]
    },
    {
      title: "READ",
      role: "Let evidence change the question.",
      image: "/site/img/how-i-work/02-read.webp",
      alt: "Reviewing charts and research data at a desk.",
      description: "Use interviews, observations, behavioral data, datasets, and experiments as material for understanding what matters—not simply as validation for an existing idea.",
      bullets: ["UX Research", "Data Analysis", "Behavioral Insight"]
    },
    {
      title: "MAKE",
      role: "Turn uncertainty into something tangible.",
      image: "/site/img/how-i-work/03-make.webp",
      alt: "Building and testing a physical electronic prototype.",
      description: "Build the quickest useful representation of an idea: sketches, interfaces, physical models, dashboards, AI experiments, or interactive prototypes.",
      bullets: ["Prototyping", "Interaction Design", "Experimentation"]
    },
    {
      title: "ADAPT",
      role: "Test how the system responds.",
      image: "/site/img/how-i-work/04-adapt.webp",
      alt: "Evaluating a small prototype alongside a digital interface.",
      description: "Put the idea into use, observe what happens, learn from failures and unexpected behavior, then refine the product or system around what the evidence shows.",
      bullets: ["User Testing", "Iteration", "System Refinement"]
    }
  ],

  playground: [
    {
      tag: "Investigation 01",
      title: "AI Skill Heatmap",
      question: "Which AI skills do employers request for each type of role?",
      what: "AI skills employers explicitly require or prefer, mapped across 14 role families.",
      why: "“AI skills” means different things to engineers, marketers and operators.",
      how: ["Data collection", "Skill normalization", "3D heat map", "Filtering"],
      meta: "1,095 LISTINGS · 5 JOB BOARDS",
      image: "/site/img/playground/pg-heat.jpg",
      href: "https://aiskill-heatmap.nate-4f6.workers.dev"
    },
    {
      tag: "Investigation 02",
      title: "Junior Data Scientist",
      question: "What do employers actually require of junior data scientists?",
      what: "Skills, tools, experience and education across 30 verified job postings.",
      why: "Entry-level advice is generic; the postings themselves are more honest.",
      how: ["Data collection", "Manual verification", "Requirement coding", "Ranking"],
      meta: "30 VERIFIED POSTINGS · SEP 2026",
      image: "/site/img/playground/pg-jds.jpg",
      href: "https://junior-data-scientist.netlify.app"
    },
    {
      tag: "Investigation 03",
      title: "City Explorer",
      question: "Which European cities perform similarly on quality of life?",
      what: "391 European urban areas compared on environment, mobility, economy and wellbeing.",
      why: "Where to live is a many-variable question best seen side by side.",
      how: ["OECD / Eurostat data", "Percentile scoring", "Geographic analysis", "Comparison"],
      meta: "391 CITIES · OECD / EUROSTAT",
      image: "/site/img/playground/pg-city.jpg",
      href: "https://city-explorer-dashboard.netlify.app"
    }
  ],

  contact: {
    titleHtml: "LET'S WORK <em>TOGETHER</em>",
    intro: "Have a product, data, or AI problem worth exploring?"
  },

  footer: {
    blurb: "Portfolio of Nathan Supakitchumnan — designer and builder. Work first, always.",
    copyright: "© 2026 NATEWASHERE — NATHAN SUPAKITCHUMNAN"
  }
};
