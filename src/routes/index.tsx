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
      <a href="/site/cv.pdf" target="_blank" rel="noopener noreferrer">CV</a>
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
  <a class="m-link" href="#about"><i>01</i>About</a>
  <a class="m-link" href="#work"><i>02</i>Work</a>
  <a class="m-link" href="#playground"><i>03</i>Playground</a>
  <a class="m-link" href="/site/cv.pdf" target="_blank" rel="noopener noreferrer"><i>04</i>CV</a>
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
    <span class="hud-chip"><span class="dot"></span> INTERACTION FIELD<span class="hud-sec"> — DATA · OBJECT · HUMAN</span><span hidden id="reelNow"></span><span hidden id="reelTotal"></span></span>
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
    <p class="hero-sub" id="heroSub">Nathan Supakitchumnan — designer and builder. What follows is an index into the work: who he is, then selected projects, process, experiments, and a way in.</p>
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

<!-- ============ ABOUT ============ -->
<section class="manifesto" id="about">
  <div class="container">
    <div class="kicker" data-reveal><b>01</b> ABOUT</div>
    <div class="manifesto-grid">
      <h2 class="display" data-reveal id="aboutTitle">NATE MAKES THINGS —<br>THEN FIGURES OUT<br><span class="hl">WHY THEY WORK.</span></h2>
      <div class="manifesto-copy" data-reveal style="--d:.15s">
        <!-- PLACEHOLDER BIO — replace both paragraphs with verified copy from the existing CV / About page -->
        <p id="aboutP1"><b>Short biography goes here</b> — two or three sentences on who Nathan is, the kind of work he does, and the problems he likes to sit with. Source it from the existing CV and About page.</p>
        <p id="aboutP2">A second paragraph goes here — how he approaches problems, and what makes the combination of skills and experience distinctive. Keep it concise; selected work follows below.</p>
        <div class="about-btns">
          <a class="btn btn-ghost btn-sm" href="/about">Read More <i data-lucide="arrow-right"></i></a>
          <a class="btn btn-orange btn-sm" href="/site/cv.pdf" target="_blank" rel="noopener noreferrer">View Full CV <i data-lucide="arrow-right"></i></a>
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

<!-- ============ SELECTED WORK ============ -->
<section id="work">
  <div class="container">
    <div class="sec-head" data-reveal>
      <div>
        <div class="kicker"><b>02</b> SELECTED WORK</div>
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


<!-- ============ CAPABILITIES ============ -->
<section class="coaches" id="capabilities">
  <div class="container">
    <div class="sec-head" data-reveal>
      <div>
        <div class="kicker"><b>03</b> HOW I WORK</div>
        <h2 class="sec-title display">FOUR WAYS <em>IN.</em></h2>
      </div>
      <p class="sec-note">Different problems need different starting points. The process moves between systems, evidence, prototypes, and behavior.</p>
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
        <span class="counter" aria-live="polite"><b id="carNow">01</b> / <span id="carTotal">03</span></span>
        <button class="ctrl-btn" id="carPrev" aria-label="Previous project"><i data-lucide="chevron-left"></i></button>
        <button class="ctrl-btn" id="carNext" aria-label="Next project"><i data-lucide="chevron-right"></i></button>
      </div>
    </div>
    <p class="iw-intro" data-reveal>A closer look at the thinking behind selected projects.</p>

    <div class="car-viewport" id="carViewport" data-reveal tabindex="0" role="region" aria-roledescription="carousel" aria-label="Inside the Work — use arrow keys to switch projects">
      <div class="car-track" id="carTrack"><!-- slides injected from /site/inside-work.js --></div>
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
        <h2 class="sec-title display">QUESTIONS IN <em>DATA.</em></h2>
      </div>
      <p class="sec-note">Small investigations into questions I was curious enough to pursue, using data, visualization, and interactive tools to look for answers.</p>
    </div>

    <div class="pg-grid" id="playgroundGrid" data-reveal style="--d:.1s"><!-- injected from content.js --></div>
  </div>
</section>

<!-- ============ CONTACT ============ -->
<section class="book" id="contact">
  <div class="container book-grid">
    <div data-reveal>
      <div class="kicker"><b>06</b> CONTACT</div>
      <h2 class="display" id="contactTitle">LET'S WORK <em>TOGETHER</em></h2>
      <p id="contactIntro" class="ct-lead">Have a product, data, or AI problem worth exploring?</p>
      <p class="ct-copy">I'm open to product design, UX research, data visualization, and human-centered AI opportunities.</p>
      <div class="ct-actions">
        <a class="btn btn-orange" href="mailto:nate@digitalnomad.jp">Email me <i data-lucide="arrow-right"></i></a>
      </div>
    </div>

    <div class="ct-bot" data-reveal style="--d:.15s">
      <svg class="ct-bot-svg" viewBox="0 0 120 100" fill="none" aria-hidden="true" focusable="false">
        <path d="M18 14h84a8 8 0 0 1 8 8v44a8 8 0 0 1-8 8H52l-18 16v-16H18a8 8 0 0 1-8-8V22a8 8 0 0 1 8-8z" stroke="currentColor" stroke-width="2"/>
        <rect x="38" y="34" width="10" height="14" fill="#ff4d00"/>
        <rect x="72" y="34" width="10" height="14" fill="#ff4d00"/>
        <path d="M46 58h28" stroke="currentColor" stroke-width="2"/>
        <path d="M60 14V4M56 4h8" stroke="currentColor" stroke-width="2"/>
        <path d="M100 24h4M100 30h4" stroke="currentColor" stroke-width="2" opacity=".5"/>
      </svg>
      <div class="ct-bot-t">
        <b>Ask about my work</b>
        <span>Chat with an assistant about Nathan's background, projects, skills, and experience.</span>
      </div>
      <a class="btn btn-ghost" href="https://natewashere.streamlit.app" target="_blank" rel="noopener noreferrer">Ask about my work <i data-lucide="arrow-up-right"></i></a>
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
          <a href="https://www.linkedin.com/in/nethansu/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><svg class="ico-linkedin" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>
          <a href="https://substack.com/@natewashere26" target="_blank" rel="noopener noreferrer" aria-label="Substack"><svg class="substack" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22.539 8.242H1.46V5.406h21.079zM1.46 10.532V21.74l10.54-7.155 10.539 7.155V10.532zM22.539 2.792H1.46V0h21.079z"/></svg></a>
          <a href="https://github.com/theoriginalnatewashere" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><svg class="ico-github" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg></a>
        </div>
      </div>
      <div>
        <h4>Explore</h4>
        <ul>
          <li><a href="#work">Work</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#playground">Playground</a></li>
          <li><a href="/site/cv.pdf" target="_blank" rel="noopener noreferrer">CV</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div>
        <h4>Elsewhere</h4>
        <ul>
          <li><a href="https://www.linkedin.com/in/nethansu/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="https://substack.com/@natewashere26" target="_blank" rel="noopener noreferrer">Substack</a></li>
          <li><a href="https://github.com/theoriginalnatewashere" target="_blank" rel="noopener noreferrer">GitHub</a></li>
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
      await loadScript("/site/inside-work.js");
      await loadScript("/site/app.js");
      if (cancelled) return;
      await loadScript("/site/mosaic.js");
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
