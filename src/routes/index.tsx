import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NATEWASHERE — Nathan Supakitchumnan · Designer & Builder" },
      {
        name: "description",
        content:
          "Portfolio of Nathan Supakitchumnan — designer and builder. Selected work, capabilities, playground experiments, and contact.",
      },
      { property: "og:title", content: "NATEWASHERE — Nathan Supakitchumnan" },
      {
        property: "og:description",
        content:
          "Selected work, capabilities, playground experiments, and contact.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Anton&family=Archivo:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap",
      },
      { rel: "stylesheet", href: "/site/styles.css" },
    ],
  }),
  component: Index,
});

const html = `<!-- grain layers -->
<div class="grain" id="grain1"></div>
<div class="grain g2" id="grain2"></div>
<div id="cursor"></div>

<!-- preloader -->
<div id="preloader">
  <svg viewBox="0 0 32 32" fill="none"><path d="M7 24V8h4l10 13.2V8h4v16h-4L11 10.8V24z" fill="#f0efec"/><rect x="26.5" y="21" width="3.5" height="3.5" fill="#ff4d00"/></svg>
  <div id="preNum">000</div>
  <p>OPENING THE PORTFOLIO</p>
</div>

<!-- nav -->
<nav id="nav">
  <div class="container nav-in">
    <a class="brand" href="#top" aria-label="Natewashere — home">
      <svg viewBox="0 0 32 32" fill="currentColor"><path d="M7 24V8h4l10 13.2V8h4v16h-4L11 10.8V24z"/><rect x="26.5" y="21" width="3.5" height="3.5" fill="#ff4d00"/></svg>
      <span><b>NATEWASHERE<i class="h-o">.</i></b><br><small>PORTFOLIO</small></span>
    </a>
    <div class="nav-links">
      <a href="#work">Work</a>
      <a href="#about">About</a>
      <a href="#playground">Playground</a>
      <a href="#" data-cv>CV</a>
      <a href="#contact">Contact</a>
    </div>
    <div class="nav-right">
      <a class="btn btn-orange btn-sm" href="#contact">Get in Touch <i data-lucide="arrow-right"></i></a>
      <button id="menuBtn" aria-label="Open menu"><i data-lucide="menu"></i></button>
    </div>
  </div>
</nav>

<!-- mobile menu -->
<div id="menu" aria-hidden="true">
  <button id="menuClose" aria-label="Close menu"><i data-lucide="x"></i></button>
  <a class="m-link" href="#work"><i>01</i>Work</a>
  <a class="m-link" href="#about"><i>02</i>About</a>
  <a class="m-link" href="#playground"><i>03</i>Playground</a>
  <a class="m-link" href="#" data-cv><i>04</i>CV</a>
  <a class="m-link" href="#contact"><i>05</i>Contact</a>
  <div class="menu-foot"><span>NATEWASHERE — PORTFOLIO</span><span>WORK FIRST, ALWAYS</span><span>HELLO@NATEWASHERE.COM</span></div>
</div>

<!-- ═══════════ HOME ═══════════ -->
<div id="homeRoot">

<!-- ============ HERO + PROJECT REEL ============ -->
<header class="hero" id="top">
  <!-- Reel slides are injected from PROJECTS data — click a slide to open its project page -->
  <div class="reel" id="reel" title="Click a slide to open the project">
    <div class="reel-scrim"></div>
  </div>

  <div class="reel-hud">
    <span class="hud-chip"><span class="dot"></span> PROJECT REEL — <span id="reelNow">01</span>/<span id="reelTotal">04</span></span>
    <span class="hud-chip tc-chip">TC <span id="tc">00:00:00:00</span></span>
    <button class="hud-chip" id="soundBtn" aria-label="Toggle ambient reel sound"><i data-lucide="volume-x"></i><span>SOUND</span></button>
  </div>

  <div class="container hero-inner">
    <div class="hero-meta">
      <span class="chip"><span class="dot"></span> <span id="heroChip1">SITE REBUILD IN PROGRESS</span></span>
      <span class="chip" id="heroChip2">DESIGNER &amp; BUILDER</span>
      <span class="chip" id="heroChip3">SELECTED WORK — 4 PROJECTS</span>
    </div>
    <h1 class="display">
      <span class="h-line"><span id="heroTitle1">NATEWASHERE<i class="h-o">.</i></span></span>
      <span class="h-line"><span class="h-outline" id="heroTitle2">NATHAN</span></span>
      <span class="h-line"><span id="heroTitle3">SUPAKITCHUMNAN<i class="h-o">.</i></span></span>
    </h1>
    <p class="hero-sub" id="heroSub">Nathan Supakitchumnan — designer and builder. What follows is an index into the work: selected projects first, then process, experiments, and a way in.</p>
    <div class="hero-cta">
      <a class="btn btn-orange" href="#work">View Selected Work <i data-lucide="arrow-down"></i></a>
      <a class="btn btn-ghost" href="#about">About Me <i data-lucide="arrow-right"></i></a>
    </div>
  </div>

  <div class="hero-foot">
    <div class="container">
      <div class="coach-strip">
        <span class="tiles" id="stripTiles"></span>
        <span class="lbl hide-m">SELECTED WORK — 04 PROJECTS</span>
        <a class="lbl" href="#work">OPEN THE INDEX <i data-lucide="arrow-up-right"></i></a>
      </div>
      <span class="spacer"></span>
      <span class="scroll-cue">SCROLL</span>
    </div>
  </div>
</header>

<!-- marquee — replace terms with verified disciplines from CV when available -->
<div class="marquee" aria-hidden="true">
  <div class="mq-track" id="mqTrack">
      <!-- injected from content.js -->
    </div>
</div>

<!-- ============ SELECTED WORK ============ -->
<section id="work">
  <div class="container">
    <div class="sec-head" data-reveal>
      <div>
        <div class="kicker"><b>01</b> SELECTED WORK</div>
        <h2 class="sec-title display">SELECTED <em>WORK.</em></h2>
      </div>
      <p class="sec-note">Rows expand. Images follow the cursor. Every project opens on its own page.</p>
    </div>

    <!-- Project rows injected from PROJECTS data -->
    <div class="prog-list" id="workList" data-reveal style="--d:.1s"></div>
  </div>
</section>

<!-- floating project preview -->
<div id="progFloat"><img id="progFloatImg" class="bw" src="" alt=""></div>

<!-- ============ ABOUT ============ -->
<section class="manifesto" id="about">
  <div class="container">
    <div class="kicker" data-reveal><b>02</b> ABOUT</div>
    <div class="manifesto-grid">
      <h2 class="display" data-reveal id="aboutTitle">NATE MAKES THINGS —<br>THEN FIGURES OUT<br><span class="hl">WHY THEY WORK.</span></h2>
      <div class="manifesto-copy" data-reveal style="--d:.15s">
        <!-- PLACEHOLDER BIO — replace both paragraphs with verified copy from the existing CV / About page -->
        <p id="aboutP1"><b>Short biography goes here</b> — two or three sentences on who Nathan is, the kind of work he does, and the problems he likes to sit with. Source it from the existing CV and About page.</p>
        <p id="aboutP2">A second paragraph goes here — how he approaches problems, and what makes the combination of skills and experience distinctive. Keep it concise; this homepage stays project-first.</p>
        <div class="about-btns">
          <button class="btn btn-ghost btn-sm" data-todo="Full About page goes here — link it once it exists">Read More <i data-lucide="arrow-right"></i></button>
          <button class="btn btn-orange btn-sm" data-todo="CV goes here — drop the file into the project and link it up">View Full CV <i data-lucide="arrow-right"></i></button>
        </div>
      </div>
    </div>
    <!-- Qualitative practice metadata — no invented numbers. Replace labels with verified terms. -->
    <div class="stats" data-reveal>
      <div class="stat"><div class="num word">Product</div><div class="lbl">Shape &amp; frame</div></div>
      <div class="stat"><div class="num word">Research</div><div class="lbl">Ask &amp; test</div></div>
      <div class="stat"><div class="num word">Prototype</div><div class="lbl">Make it touchable</div></div>
      <div class="stat"><div class="num word">Build</div><div class="lbl">Put it out there</div></div>
    </div>
  </div>
</section>

<!-- ═══ PLACEHOLDER IMAGE — swap for a real portrait / studio shot ═══ -->
<div class="band">
  <img class="bw" src="https://picsum.photos/seed/nate-desk/1600/900.jpg" alt="Workspace — placeholder image" data-parallax>
  <div class="band-cap">
    <div class="container">
      <span class="chip"><span class="dot"></span> WORK IN PROGRESS — ALWAYS</span>
      <span class="chip">IMAGE — REPLACE WITH PORTRAIT / STUDIO</span>
    </div>
  </div>
</div>

<!-- ============ CAPABILITIES ============ -->
<section class="coaches" id="capabilities">
  <div class="container">
    <div class="sec-head" data-reveal>
      <div>
        <div class="kicker"><b>03</b> HOW I WORK</div>
        <h2 class="sec-title display">FOUR WAYS <em>IN.</em></h2>
      </div>
      <p class="sec-note">Hover, tap, or press Enter to flip a card.</p>
    </div>

    <div class="coach-grid" id="capabilityGrid"><!-- injected from content.js --></div>
  </div>
</section>

<!-- ============ PROJECT HIGHLIGHTS ============ -->
<section class="stories" id="highlights">
  <div class="container">
    <div class="sec-head" data-reveal>
      <div>
        <div class="kicker"><b>04</b> PROJECT HIGHLIGHTS</div>
        <h2 class="sec-title display">INSIDE THE <em>WORK.</em></h2>
      </div>
      <div class="controls">
        <span class="counter"><b id="carNow">01</b> / <span id="carTotal">04</span></span>
        <button class="ctrl-btn" id="carPrev" aria-label="Previous highlight"><i data-lucide="chevron-left"></i></button>
        <button class="ctrl-btn" id="carNext" aria-label="Next highlight"><i data-lucide="chevron-right"></i></button>
      </div>
    </div>

    <div class="car-viewport" id="carViewport" data-reveal>
      <div class="car-track" id="carTrack"><!-- slides injected from PROJECTS --></div>
    </div>
    <div class="car-segs" id="carSegs" data-reveal></div>
  </div>
</section>

<!-- ============ PLAYGROUND ============ -->
<section id="playground">
  <div class="container">
    <div class="sec-head" data-reveal>
      <div>
        <div class="kicker"><b>05</b> PLAYGROUND</div>
        <h2 class="sec-title display">SIDE QUESTS &amp; <em>EXPERIMENTS.</em></h2>
      </div>
      <p class="sec-note">Lighter work — concepts, prototypes, unfinished ideas. Selected Work stays the main event.</p>
    </div>

    <div class="pg-grid" id="playgroundGrid" data-reveal style="--d:.1s"><!-- injected from content.js --></div>
  </div>
</section>

<!-- ============ CONTACT ============ -->
<section class="book" id="contact">
  <div class="container book-grid">
    <div data-reveal>
      <div class="kicker"><b>06</b> CONTACT</div>
      <h2 class="display" id="contactTitle">GOT A PROBLEM <em>WORTH SOLVING?</em></h2>
      <!-- PLACEHOLDER — replace with verified positioning: the kinds of projects, roles, and conversations Nathan is open to -->
      <p id="contactIntro" style="color:var(--silver);max-width:48ch;margin-bottom:2.2rem;font-size:.95rem">A short paragraph goes here — the kinds of projects, roles, and conversations Nathan is open to, in his own words. Until then: the form works, and the address below is the direct route.</p>
      <div class="steps">
        <div class="step"><span class="n">01</span><i data-lucide="pen-line"></i><div class="t"><b>Write a few lines</b><span>What you're making, where you're stuck, what good looks like.</span></div></div>
        <div class="step"><span class="n">02</span><i data-lucide="git-branch"></i><div class="t"><b>Pick a reason</b><span>Project, role, collaboration — or something else entirely.</span></div></div>
        <div class="step"><span class="n">03</span><i data-lucide="mail"></i><div class="t"><b>Or just email</b><span>Skip the form — the address is right here.</span></div></div>
      </div>
      <div class="book-contact">
        <!-- PLACEHOLDER EMAIL — replace with verified address -->
        <a id="contactEmail" href="mailto:hello@natewashere.com"><i data-lucide="mail"></i> <span>HELLO@NATEWASHERE.COM</span></a>
        <span><i data-lucide="link"></i> MORE LINKS IN THE FOOTER</span>
      </div>
    </div>

    <div class="form-panel" data-reveal style="--d:.15s" id="formPanel">
      <div class="fp-head"><b>SAY HELLO</b><span>NO FORM CITY?</span></div>
      <form id="bookForm" novalidate>
        <div class="field" id="fName">
          <label for="inName">Name *</label>
          <input id="inName" type="text" autocomplete="name" placeholder="Your name">
          <div class="err-msg">Tell me your name — 2+ characters</div>
        </div>
        <div class="field" id="fEmail">
          <label for="inEmail">Email *</label>
          <input id="inEmail" type="email" autocomplete="email" placeholder="you@somewhere.com">
          <div class="err-msg">That email doesn't look right</div>
        </div>
        <div class="frow">
          <div class="field" id="fReason">
            <label for="inReason">Reason *</label>
            <div class="sel">
              <select id="inReason">
                <option value="" selected disabled>Pick one</option>
                <option>A project</option>
                <option>A role or opportunity</option>
                <option>A collaboration</option>
                <option>Something else</option>
              </select>
              <i data-lucide="chevron-down"></i>
            </div>
            <div class="err-msg">Pick a reason — "something else" counts</div>
          </div>
          <div class="field">
            <label for="inCompany">Company / Org (optional)</label>
            <input id="inCompany" type="text" autocomplete="organization" placeholder="Where you're from">
          </div>
        </div>
        <div class="field" id="fMsg">
          <label for="inMsg">Message *</label>
          <textarea id="inMsg" rows="4" placeholder="What are you making, where are you stuck…"></textarea>
          <div class="err-msg">A few words help — 10+ characters</div>
        </div>
        <button class="btn btn-orange" type="submit">Send Message <i data-lucide="arrow-right"></i></button>
        <p class="form-fine">Front-end demo — nothing is sent until a backend is wired up</p>
      </form>
      <div class="book-done">
        <div class="done-ico"><i data-lucide="check"></i></div>
        <h3>Validated — not sent.</h3>
        <p>This site is front-end only for now, so nothing actually left your browser. Email <b>hello@natewashere.com</b> and it reaches Nate for real.</p>
        <div class="ref">FORM DEMO — BACKEND TODO</div>
        <button class="btn btn-ghost btn-sm" id="bookAgain">Write Another <i data-lucide="arrow-right"></i></button>
      </div>
    </div>
  </div>
</section>

</div><!-- /homeRoot -->

<!-- ═══════════ PROJECT PAGES (hash-routed, rendered from PROJECTS) ═══════════ -->
<div id="ppRoot" aria-live="polite"></div>

<!-- ============ FOOTER ============ -->
<footer>
  <div class="footer-mark" aria-hidden="true">NATEWASHERE</div>
  <div class="container">
    <div class="foot-grid">
      <div class="foot-brand">
        <a class="brand" href="#top">
          <svg viewBox="0 0 32 32" fill="currentColor" style="width:22px;height:22px"><path d="M7 24V8h4l10 13.2V8h4v16h-4L11 10.8V24z"/><rect x="26.5" y="21" width="3.5" height="3.5" fill="#ff4d00"/></svg>
          <span><b style="font-size:1.05rem">NATEWASHERE<i class="h-o">.</i></b><br><small>NATHAN SUPAKITCHUMNAN</small></span>
        </a>
        <p id="footerBlurb">Portfolio of Nathan Supakitchumnan — designer and builder. Work first, always.</p>
        <div class="socials">
          <!-- PLACEHOLDER — replace with verified social URLs -->
          <button data-social="LinkedIn" aria-label="LinkedIn"><i data-lucide="linkedin"></i></button>
          <button data-social="Instagram" aria-label="Instagram"><i data-lucide="instagram"></i></button>
          <button data-social="GitHub" aria-label="GitHub"><i data-lucide="github"></i></button>
        </div>
      </div>
      <div>
        <h4>Explore</h4>
        <ul>
          <li><a href="#work">Work</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#playground">Playground</a></li>
          <li><a href="#" data-cv>CV</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div>
        <h4>Elsewhere</h4>
        <ul>
          <li><a href="#" data-social="LinkedIn">LinkedIn</a></li>
          <li><a href="#" data-social="Instagram">Instagram</a></li>
          <li><a href="#" data-social="GitHub">GitHub</a></li>
        </ul>
      </div>
      <div>
        <h4>Status</h4>
        <ul>
          <li>Built by hand — no template</li>
          <li>Rebuild in progress</li>
          <li>Work first, always</li>
        </ul>
      </div>
    </div>
    <div class="foot-bottom">
      <span id="footerCopyright">© 2025 NATEWASHERE — NATHAN SUPAKITCHUMNAN</span>
      <span>DESIGNED &amp; BUILT BY NATE</span>
    </div>
  </div>
</footer>

<!-- sticky CTA -->
<div id="stickyBar">
  <div class="container">
    <span class="msg">HAVE A PROJECT IN MIND? — <b>LET'S TALK</b></span>
    <a class="btn btn-orange btn-pulse" href="#contact">Get in Touch <i data-lucide="arrow-right"></i></a>
  </div>
</div>

<div id="toasts"></div>`;

function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = src;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.body.appendChild(s);
  });
}

function Index() {
  useEffect(() => {
    let cancelled = false;
    (async () => {
      await loadScript("https://unpkg.com/lucide@latest");
      if (cancelled) return;
      await loadScript("/site/content.js");
      await loadScript("/site/projects.js");
      await loadScript("/site/app.js");
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
