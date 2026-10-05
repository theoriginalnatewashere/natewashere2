import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Nathan Supakitchumnan · NATEWASHERE" },
      {
        name: "description",
        content:
          "Nathan Supakitchumnan is a multidisciplinary product and UX designer working across product, data, and human-centered systems.",
      },
      { property: "og:title", content: "About — Nathan Supakitchumnan" },
      {
        property: "og:description",
        content:
          "From industrial design and entrepreneurship to data-driven design and human-centered AI.",
      },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "https://natewashere2.lovable.app/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://natewashere2.lovable.app/about" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Anton&family=Archivo:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap",
      },
      { rel: "stylesheet", href: "/site/styles.css" },
    ],
  }),
  component: AboutPage,
});

const CHATBOT_URL = "https://natewashere.streamlit.app";
const CV_PLACEHOLDER_MESSAGE = "CV goes here — drop the file into the project and link it up";

const navLinks = [
  { href: "/#work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/#playground", label: "Playground" },
  { href: "/#contact", label: "Contact" },
];

function BrandMark({ size = 24 }: { size?: number }) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" style={{ width: size, height: size }} aria-hidden="true">
      <path d="M7 24V8h4l10 13.2V8h4v16h-4L11 10.8V24z" />
      <rect x="26.5" y="21" width="3.5" height="3.5" fill="#ff4d00" />
    </svg>
  );
}

function AboutSection({ num, title, children }: { num: string; title: string; children: ReactNode }) {
  return (
    <section className="ab-sec">
      <div className="container ab-grid">
        <div>
          <div className="kicker">
            <b>{num}</b> ABOUT
          </div>
          <h2 className="display ab-h2">{title}</h2>
        </div>
        <div className="ab-body">{children}</div>
      </div>
    </section>
  );
}

function Chips({ items }: { items: string[] }) {
  return (
    <div className="ab-list">
      {items.map((item) => (
        <span className="chip" key={item}>
          {item}
        </span>
      ))}
    </div>
  );
}

function AboutPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    addEventListener("keydown", onKey);
    return () => {
      removeEventListener("keydown", onKey);
      document.body.classList.remove("menu-open");
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!toastMessage) return;
    const t = setTimeout(() => setToastMessage(null), 3600);
    return () => clearTimeout(t);
  }, [toastMessage]);

  const showCv = () => setToastMessage(CV_PLACEHOLDER_MESSAGE);

  return (
    <div>
      <nav id="nav" className="solid">
        <div className="container nav-in">
          <a className="brand" href="/" aria-label="Natewashere — home">
            <BrandMark />
            <span>
              <b>
                NATEWASHERE<i className="h-o">.</i>
              </b>
              <br />
              <small>PORTFOLIO</small>
            </span>
          </a>
          <div className="nav-links">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} aria-current={l.href === "/about" ? "page" : undefined}>
                {l.label}
              </a>
            ))}
          </div>
          <div className="nav-right">
            <a className="btn btn-orange btn-sm" href="/#contact">
              Get in Touch <ArrowRight />
            </a>
            <button id="menuBtn" aria-label="Open menu" onClick={() => setMenuOpen(true)}>
              <Menu />
            </button>
          </div>
        </div>
      </nav>

      <div id="menu" aria-hidden={!menuOpen}>
        <button id="menuClose" aria-label="Close menu" onClick={() => setMenuOpen(false)}>
          <X />
        </button>
        <a className="m-link" href="/about" onClick={() => setMenuOpen(false)}>
          <i>01</i>About
        </a>
        <a className="m-link" href="/#work">
          <i>02</i>Work
        </a>
        <a className="m-link" href="/#playground">
          <i>03</i>Playground
        </a>
        <a
          className="m-link"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setMenuOpen(false);
            showCv();
          }}
        >
          <i>04</i>CV
        </a>
        <a className="m-link" href="/#contact">
          <i>05</i>Contact
        </a>
        <div className="menu-foot">
          <span>NATEWASHERE — PORTFOLIO</span>
          <span>WORK FIRST, ALWAYS</span>
          <span>HELLO@NATEWASHERE.COM</span>
        </div>
      </div>

      <main>
        <header className="ab-hero">
          <div className="container">
            <a className="pp-backlink" href="/#about">
              ← BACK TO HOME
            </a>
            <div className="kicker">
              <b>00</b> ABOUT ME
            </div>
            <h1 className="display ab-title">
              PRODUCT, DATA <br />
              &amp; <em>PEOPLE.</em>
            </h1>
            <p className="ab-lede">
              I'm a multidisciplinary product and UX designer working across product, data, and
              human-centered systems.
            </p>
            <p className="ab-intro">
              My background spans industrial design, entrepreneurship, brand strategy, UX, applied
              data analytics, and AI. The common thread has always been the same: understanding how
              people interact with complex systems, then making those systems clearer, more useful,
              and more intuitive.
            </p>
            <p className="ab-intro">
              Industrial design taught me to see products as form, function, manufacturing, and human
              behavior. I still approach digital products the way I would a physical object — by
              looking at the entire system around the user, not only the interface.
            </p>
          </div>
        </header>

        <AboutSection num="01" title="A path through different kinds of design">
          <p className="ab-strong">My career has rarely followed a straight line.</p>
          <p>
            I've worked as a creative director, founded businesses and community spaces, built
            sustainability initiatives, developed brands, led marketing teams, and designed digital
            products — across the United States, Thailand, Indonesia, and the Netherlands.
          </p>
          <p>
            In Chiang Mai, I founded a creative coworking and event space for entrepreneurs,
            designers, and remote professionals. I also founded an environmentally focused product
            brand and helped establish a nonprofit promoting plastic reduction and sustainable living.
            Earlier, I ran a boutique guesthouse in Bangkok centered on cultural exchange and
            community.
          </p>
          <p className="ab-quote">A product is also a business model, a community, and a set of relationships.</p>
        </AboutSection>

        <AboutSection num="02" title="From intuition to evidence">
          <p>
            Over time I became increasingly interested in the role data could play in design — which
            led me toward UX research, experimentation, analytics, and eventually data science.
          </p>
          <p>
            I completed a <b>Master of Data Driven Design</b> at Utrecht University of Applied
            Sciences, working across applied research, data science, critical thinking, and
            AI-enabled system design. Industrial design keeps that work grounded in users, context,
            and practical implementation.
          </p>
          <p>
            I'm most interested in the space between qualitative and quantitative thinking: combining
            interviews and observation with analytics, prototyping, and machine learning to
            understand not just what people do, but why.
          </p>
        </AboutSection>

        <AboutSection num="03" title="Designing with data and AI">
          <p>
            At Stichting Nederlandse Datakluis, I researched and designed AI-enabled prototypes that
            help people understand and control their personal data: a dashboard, a chatbot, and a
            voice assistant — tested iteratively with users and supported by a retrieval-augmented
            generation system using LangChain, FAISS, and ElevenLabs.
          </p>
          <p className="ab-quote">The technology was only one part of the problem.</p>
          <p>
            The larger questions were about trust, transparency, privacy, ownership, and
            explainability. How much should a system tell someone? How should AI communicate
            uncertainty? How can complex information become understandable without being
            oversimplified?
          </p>
        </AboutSection>

        <AboutSection num="04" title="How I work">
          <p>
            I move between modes depending on the problem — researching and synthesizing needs,
            mapping a system, prototyping an interaction, building a dashboard, analyzing data, or
            testing approaches with users.
          </p>
          <Chips
            items={[
              "Research",
              "Interaction design",
              "Prototyping",
              "Analytics",
              "Experimentation",
              "Systems thinking",
              "Cross-functional collaboration",
            ]}
          />
          <p>
            I'm comfortable working between disciplines, translating between designers, developers,
            data specialists, stakeholders, and users. And I care about consequences: sustainability,
            transparency, accessibility, and responsible technology recur throughout my work.
          </p>
        </AboutSection>

        <AboutSection num="05" title="What I'm exploring now">
          <p>My current interests sit where design, data, and emerging technology meet:</p>
          <Chips
            items={[
              "Human-centered AI",
              "Decision-support tools",
              "Conversational interfaces",
              "Data visualization",
              "Responsible data systems",
              "Complex information design",
            ]}
          />
          <p>
            Recent projects include a personal-data chatbot, experiments with fine-tuning language
            models, and an emergency-response AI concept that evaluates live call transcriptions to
            help assess incident severity. Some investigations begin with a design problem; others
            simply begin with a question I want to answer.
          </p>
        </AboutSection>

        <AboutSection num="06" title="Beyond the work">
          <p>
            Having lived and worked across Asia, Europe, and the United States, I think about design
            through multiple cultural contexts rather than a single perspective. I speak English,
            Chinese, and Thai.
          </p>
          <p>
            I'm interested in cities, communities, technology, sustainability, and the ways people
            adapt tools and systems to fit everyday life.
          </p>
          <p className="ab-strong">
            I'm most useful where the problem isn't yet fully defined — moving between research and
            execution, qualitative and quantitative evidence, systems thinking and detailed
            interaction design.
          </p>
        </AboutSection>

        <section className="ab-cta">
          <div className="container">
            <div className="kicker">
              <b>07</b> NEXT
            </div>
            <h2 className="display ab-cta-t">
              SEE THE <em>WORK.</em>
            </h2>
            <div className="ab-cta-row">
              <button type="button" className="btn btn-orange" onClick={showCv}>
                View CV <ArrowRight />
              </button>
              <a className="btn btn-ghost" href="/#work">
                Explore Selected Work <ArrowDown />
              </a>
              <a className="btn btn-ghost" href={CHATBOT_URL} target="_blank" rel="noopener noreferrer">
                Talk to my profile <ArrowUpRight />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-mark" aria-hidden="true">
          NATEWASHERE
        </div>
        <div className="container">
          <div className="foot-grid">
            <div className="foot-brand">
              <a className="brand" href="/">
                <BrandMark size={22} />
                <span>
                  <b style={{ fontSize: "1.05rem" }}>
                    NATEWASHERE<i className="h-o">.</i>
                  </b>
                  <br />
                  <small>NATHAN SUPAKITCHUMNAN</small>
                </span>
              </a>
              <p>Portfolio of Nathan Supakitchumnan — designer and builder. Work first, always.</p>
            </div>
            <div>
              <h4>Explore</h4>
              <ul>
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <a href={l.href}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4>Elsewhere</h4>
              <ul>
                <li>
                  <a href="https://www.linkedin.com/in/nethansu/" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://substack.com/@natewashere26" target="_blank" rel="noopener noreferrer">
                    Substack
                  </a>
                </li>
                <li>
                  <a href="https://github.com/theoriginalnatewashere" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </li>
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
          <div className="foot-bottom">
            <span>© 2025 NATEWASHERE — NATHAN SUPAKITCHUMNAN</span>
            <span>DESIGNED &amp; BUILT BY NATE</span>
          </div>
        </div>
      </footer>

      <div id="toasts" aria-live="polite">
        {toastMessage && (
          <div className="toast on">
            <span>{toastMessage}</span>
          </div>
        )}
      </div>
    </div>
  );
}
