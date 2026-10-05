/* INSIDE THE WORK — three carousel slides, one memorable idea per project. Edit copy/images here.
   Slides render into #carTrack; the carousel logic lives in app.js. */
(function () {
  const IMG = "/site/img/projects/";
  const SLIDES = [
    {
      slug: "designing-data-autonomy", category: "Data ownership / Systems thinking", title: "Designing Data Autonomy",
      thesis: "What if personal data felt like something you actually owned?",
      copy: "Turning abstract ideas of privacy, consent, and data ownership into a physical model people could understand and control.",
      img: { src: IMG + "data-autonomy/data-pod.jpg", alt: "Physical personal data pod prototype held in the hand" },
      move: "The data pod used familiar ideas of keys, wallets, and passports to make ownership and access tangible.",
    },
    {
      slug: "emergency-dispatcher-ai-chatbot", category: "Human-AI interaction / Decision support", title: "Emergency Dispatch AI Chatbot",
      thesis: "How should AI help in an emergency without making the decision?",
      copy: "Designing AI to organize emergency information, surface critical signals, and reduce cognitive load while keeping trained professionals in control.",
      img: { src: IMG + "emergency-dispatcher/dashboard-cpr.jpg", alt: "Dispatcher dashboard with live call transcript, AI-organized incident summary and CPR guidance" },
      move: "AI structures and summarizes the situation. Human dispatchers assess, confirm, prioritize, and make critical decisions.",
    },
    {
      slug: "wastenot", category: "Behavioral design / User research", title: "WasteNot",
      thesis: "How do you change behavior without asking people to change their habits?",
      copy: "Using research into price, convenience, freshness, and trust to make lower-waste choices easier in everyday food decisions.",
      img: { src: IMG + "wastenot/prototype-recommendations.jpg", alt: "WasteNot marketplace interface with surplus food deals and personalized recommendations" },
      move: "Instead of asking users to become more environmentally motivated, the experience aligned lower-waste choices with motivations they already had: value, convenience, and trust.",
    },
  ];
  const n = String(SLIDES.length).padStart(2, "0");
  const track = document.getElementById("carTrack");
  if (!track) return;
  track.innerHTML = SLIDES.map((s, i) => `
  <article class="story iw-slide" role="group" aria-roledescription="slide" aria-label="${i + 1} of ${SLIDES.length}: ${s.title}">
    <div class="iw-text">
      <div class="iw-seq"><b>${String(i + 1).padStart(2, "0")}</b> / ${n}<span>${s.category}</span></div>
      <h3 class="iw-title">${s.title}</h3>
      <p class="iw-thesis display">${s.thesis}</p>
      <p class="iw-context">${s.copy}</p>
      <div class="iw-move"><span class="iw-lbl">Key design move</span><p>${s.move}</p></div>
      <a class="iw-link" href="#/work/${s.slug}">Explore case study <i data-lucide="arrow-up-right"></i></a>
    </div>
    <figure class="iw-fig"><img class="bw" src="${s.img.src}" alt="${s.img.alt}" draggable="false"></figure>
  </article>`).join("");
})();
