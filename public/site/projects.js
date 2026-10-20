// Edit portfolio projects here. Keep field names unchanged.
// Optional fields: links [{label,href}], explorations [{title,question,description,image,live,code}], approach [steps].
const IMG="/site/img/projects/";
const PROJECTS=[
  {
    slug:"emergency-dispatcher-ai-chatbot",
    title:"Emergency Dispatcher AI Chatbot",
    category:"Human–AI / Emergency Triage",
    year:"2024",
    role:"Master’s Data-Driven Design Project",
    client:"Academic Project",
    status:"Case Study",
    summary:"An AI decision-support concept helping emergency dispatchers structure incoming information while keeping high-stakes decisions under human control.",
    description:[
      "A human-centered emergency-triage concept exploring how AI can support dispatchers without replacing professional judgment. The system combines structured symptom intake, natural-language processing, live transcription, dispatcher summaries, and rule-based safeguards to improve situational awareness during high-pressure calls."
    ],
    tags:["Human–AI","Emergency Triage","AI Decision Support","UX Research"],
    heroImage:IMG+"emergency-dispatcher/dashboard-cpr.jpg",
    thumb:IMG+"emergency-dispatcher/dashboard-cpr.jpg",
    gallery:[
      {src:IMG+"emergency-dispatcher/dashboard-cpr.jpg",cap:"Dispatcher dashboard — CPR guidance scenario."},
      {src:IMG+"emergency-dispatcher/dashboard-heart-attack.jpg",cap:"Dispatcher dashboard — suspected heart-attack scenario."},
      {src:IMG+"emergency-dispatcher/voice-flow.jpg",cap:"Caller-side voice intake flow."},
      {src:IMG+"emergency-dispatcher/dispatch-room.jpg",cap:"Emergency dispatch environment."},
      {src:IMG+"emergency-dispatcher/dispatcher.jpg",cap:"Dispatchers work under constant time pressure."}
    ],
    insight:"AI should support, not replace, professional judgment in high-stakes situations.",
    featured:true
  },
  {
    slug:"wastenot",
    title:"WasteNot",
    category:"Behavioral Design / AI UX",
    year:"2024",
    role:"Master’s Data-Driven Design Project",
    client:"Academic Project",
    status:"Case Study",
    summary:"A mobile concept exploring how AI-supported interventions can help people make better decisions around surplus food and household waste.",
    description:[
      "Research identified awareness, trust, price, convenience, and uncertainty about freshness as key influences on food-waste behavior. The resulting concept combines surplus-food discovery, transparent pricing, filtering, recommendations, and AI-supported decision aids designed to reduce cognitive effort rather than automate decisions."
    ],
    tags:["Behavioral Design","Food Waste","AI Intervention","Mobile UX"],
    heroImage:IMG+"wastenot/prototype-recommendations.jpg",
    thumb:IMG+"wastenot/prototype-recommendations.jpg",
    gallery:[
      {src:IMG+"wastenot/prototype-recommendations.jpg",cap:"Prototype 2 — surplus discovery and personalized recommendations."},
      {src:IMG+"wastenot/prototype-food-lens.jpg",cap:"Prototype 2 — AI Food Lens decision aid."},
      {src:IMG+"wastenot/fridge.jpg",cap:"Freshness uncertainty at home."},
      {src:IMG+"wastenot/household-waste.jpg",cap:"Household food waste."},
      {src:IMG+"wastenot/benchmark-too-good-to-go.jpg",cap:"Benchmark — Too Good To Go (EU)."},
      {src:IMG+"wastenot/benchmark-tabete.jpg",cap:"Benchmark — Tabete (JP)."}
    ],
    links:[{label:"View Prototype",href:"https://bit.ly/3ZhhNXE"}],
    insight:"AI can support behavior change by reducing cognitive effort at the moment a decision is made.",
    featured:true
  },
  {
    slug:"designing-data-autonomy",
    title:"Designing Data Autonomy",
    category:"Product / Data / UX",
    year:"2025",
    role:"MDDD Thesis Project",
    client:"Nederlandse Datakluis",
    status:"Thesis Case Study",
    summary:"A thesis exploring how physical products, personal data pods, and AI interfaces can make data ownership and consent more understandable.",
    description:[
      "Developed with Nederlandse Datakluis, the project reframes data autonomy as a design challenge. Physical and digital prototypes explore how people can understand what data they hold, why it is requested, how permissions work, and how AI assistance can remain useful without removing user control."
    ],
    tags:["Data Autonomy","Industrial Design","Human–AI","Personal Data"],
    heroImage:IMG+"data-autonomy/data-pod.jpg",
    thumb:IMG+"data-autonomy/data-pod.jpg",
    gallery:[
      {src:IMG+"data-autonomy/data-pod.jpg",cap:"Physical data pod prototype."},
      {src:IMG+"data-autonomy/repair-journey.jpg",cap:"Washing-machine repair journey with a data pod."},
      {src:IMG+"data-autonomy/shopping-journey.jpg",cap:"Online shopping assistant journey."},
      {src:IMG+"data-autonomy/data-protection-trend.jpg",cap:"Context — more people protecting personal data online."},
      {src:IMG+"data-autonomy/tracking-concern.jpg",cap:"Context — concern about online tracking."}
    ],
    links:[{label:"Nederlandse Datakluis",href:"https://www.datakluis.com"}],
    insight:"Data autonomy depends on clarity and perceived control, not simply preventing data sharing.",
    featured:true
  },
  {
    slug:"questions-in-data",
    title:"Questions in Data",
    category:"Research / Data Visualization",
    year:"2026",
    role:"Independent Research & Data Visualization",
    client:"Independent",
    status:"Ongoing",
    summary:"Self-initiated research projects using data processing and interactive visualization to investigate questions about AI, work, skills, and cities.",
    description:[
      "A growing collection of investigations that begin with a question rather than a predetermined output. Each project moves through sourcing, validating, processing, and visualizing data to create an interactive tool that makes the evidence easier to inspect and compare."
    ],
    tags:["Research","Data Visualization","Data Processing","D3.js","Interactive Tools"],
    heroImage:IMG+"questions-in-data/ai-skill-heatmap.jpg",
    thumb:IMG+"questions-in-data/ai-skill-heatmap.jpg",
    explorations:[
      {title:"AI Job Postings",question:"How is employer demand for AI changing over time?",description:"An interactive dashboard exploring changes in the share of job postings mentioning AI using published labor-market data.",image:IMG+"questions-in-data/ai-job-postings.jpg",live:"https://ai-job-postings.netlify.app"},
      {title:"AI Skill Heatmap",question:"Which AI skills appear across different job families?",description:"A role × skill heatmap showing how AI-related capabilities vary across different types of work.",image:IMG+"questions-in-data/ai-skill-heatmap.jpg",live:"https://aiskill-heatmap.nate-4f6.workers.dev",code:"https://github.com/theoriginalnatewashere/aiskill-heatmap"},
      {title:"Junior Data Scientist Research",question:"What are employers actually asking junior data scientists to know?",description:"A research dashboard based on 30 verified live job postings covering technical skills, professional capabilities, tools, experience, education, and source evidence.",image:IMG+"questions-in-data/junior-data-scientist.jpg",live:"https://junior-data-scientist.netlify.app"},
      {title:"City Explorer",question:"How do European cities compare across quality-of-life measures?",description:"An interactive tool for comparing European cities across environment, mobility, economic opportunity, and residents’ perceptions.",image:IMG+"questions-in-data/city-explorer.jpg",live:"https://city-explorer-dashboard.netlify.app",code:"https://github.com/theoriginalnatewashere/City-Explorer"}
    ],
    gallery:[
      {src:IMG+"questions-in-data/ai-job-postings.jpg",cap:"AI Job Postings — overall trend, 2014–2025."},
      {src:IMG+"questions-in-data/ai-skill-heatmap.jpg",cap:"AI Skill Heatmap — role × skill view."},
      {src:IMG+"questions-in-data/junior-data-scientist.jpg",cap:"Junior Data Scientist — skill stack."},
      {src:IMG+"questions-in-data/city-explorer.jpg",cap:"City Explorer — scatterplot and map, Amsterdam and Barcelona selected."}
    ],
    approach:["Question","Source","Validate","Process","Visualize","Explore"],
    insight:"Start with a useful question, check the data and assumptions, then make the result understandable and usable.",
    featured:true
  }
];
