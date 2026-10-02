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
    chip2: "DESIGNER & BUILDER",
    chip3: "SELECTED WORK — 4 PROJECTS",
    title1Html: 'NATEWASHERE<i class="h-o">.</i>',
    title2: "NATHAN",
    title3Html: 'SUPAKITCHUMNAN<i class="h-o">.</i>',
    sub: "Nathan Supakitchumnan — designer and builder. What follows is an index into the work: selected projects first, then process, experiments, and a way in."
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
    titleHtml: 'NATE MAKES THINGS —<br>THEN FIGURES OUT<br><span class="hl">WHY THEY WORK.</span>',
    paragraph1Html: '<b>Short biography goes here</b> — two or three sentences on who Nathan is, the kind of work he does, and the problems he likes to sit with. Source it from the existing CV and About page.',
    paragraph2: "A second paragraph goes here — how he approaches problems, and what makes the combination of skills and experience distinctive. Keep it concise; this homepage stays project-first."
  },

  capabilities: [
    {
      title: "Product Design",
      role: "PROBLEM → PRODUCT",
      image: "https://picsum.photos/seed/nate-cap-1/600/860.jpg",
      description: "Framing fuzzy problems into flows, interfaces, and systems — then pressure-testing them with real people before anything gets built.",
      bullets: ["Flows, wireframes & specs", "Interface systems & states", "Usability testing rounds"],
      featuredLabel: "Featured Work",
      featuredText: "Untitled 01 — product design case study",
      href: "#/work/untitled-01",
      cta: "See the Work"
    },
    {
      title: "UX Research",
      role: "QUESTIONS → EVIDENCE",
      image: "https://picsum.photos/seed/nate-cap-2/600/860.jpg",
      description: "Asking better questions before jumping to solutions — interviews, observations, and synthesis that turn opinions into evidence a team can act on.",
      bullets: ["Interviews & field sessions", "Usability testing", "Synthesis & findings"],
      featuredLabel: "Featured Work",
      featuredText: "Untitled 02 — research-led case study",
      href: "#/work/untitled-02",
      cta: "See the Work"
    },
    {
      title: "Prototyping",
      role: "IDEA → ARTIFACT",
      image: "https://picsum.photos/seed/nate-cap-3/600/860.jpg",
      description: "Making ideas touchable early — from paper sketches to clickable builds — so decisions get made with something real in the room, not a slide.",
      bullets: ["Sketches & flow maps", "Clickable prototypes", "Design–code handoff"],
      featuredLabel: "Featured Work",
      featuredText: "Untitled 03 — prototype",
      href: "#/work/untitled-03",
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
      tag: "Concept",
      title: "Pick My Next Move",
      text: "Playful pathfinder concept — illustrated adventure cards for choosing a next move.",
      image: "https://picsum.photos/seed/nate-pg-1/800/600.jpg",
      href: "#",
      todo: "Pick My Next Move — link the live /hire experience here"
    },
    {
      tag: "Experiment",
      title: "Untitled Experiment 01",
      text: "Short description goes here — what it explores and why it was worth making.",
      image: "https://picsum.photos/seed/nate-pg-2/800/600.jpg",
      href: "#",
      todo: "Playground destination goes here — link the live experiment"
    },
    {
      tag: "Experiment",
      title: "Untitled Experiment 02",
      text: "Short description goes here — swap in real playground items from the existing portfolio.",
      image: "https://picsum.photos/seed/nate-pg-3/800/600.jpg",
      href: "#",
      todo: "Playground destination goes here — link the live experiment"
    }
  ],

  contact: {
    titleHtml: 'GOT A PROBLEM <em>WORTH SOLVING?</em>',
    intro: "A short paragraph goes here — the kinds of projects, roles, and conversations Nathan is open to, in his own words. Until then: the form works, and the address below is the direct route.",
    email: "hello@natewashere.com"
  },

  footer: {
    blurb: "Portfolio of Nathan Supakitchumnan — designer and builder. Work first, always.",
    copyright: "© 2026 NATEWASHERE — NATHAN SUPAKITCHUMNAN"
  }
};
