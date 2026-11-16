import { FormEvent, useEffect, useMemo, useRef, useState } from "react";

type IconName =
  | "home"
  | "user"
  | "orbit"
  | "spark"
  | "grid"
  | "message"
  | "arrow"
  | "code"
  | "external"
  | "github"
  | "linkedin"
  | "mail"
  | "close"
  | "check";

const iconPaths: Record<IconName, React.ReactNode> = {
  home: (
    <>
      <path d="m3 11 9-8 9 8" />
      <path d="M5 10v10h14V10M9 20v-6h6v6" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21a8 8 0 0 1 16 0" />
    </>
  ),
  orbit: (
    <>
      <circle cx="12" cy="12" r="2.5" />
      <ellipse cx="12" cy="12" rx="9" ry="4.5" />
      <path d="M6.2 5.1c2.8-2.8 6.3-3.8 8-2.1 1.8 1.7.8 5.2-2 8-2.8 2.9-6.4 3.8-8.1 2.1" />
    </>
  ),
  spark: (
    <>
      <path d="m12 2 1.6 6.4L20 10l-6.4 1.6L12 18l-1.6-6.4L4 10l6.4-1.6L12 2Z" />
      <path d="m19 17 .7 2.3L22 20l-2.3.7L19 23l-.7-2.3L16 20l2.3-.7L19 17Z" />
    </>
  ),
  grid: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </>
  ),
  message: <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8Z" />,
  arrow: (
    <>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </>
  ),
  code: (
    <>
      <path d="m9 18-6-6 6-6M15 6l6 6-6 6" />
    </>
  ),
  external: (
    <>
      <path d="M15 3h6v6M10 14 21 3" />
      <path d="M18 13v7H4V6h7" />
    </>
  ),
  github: (
    <path d="M15 22v-4c.1-1-.4-2-1-2.5 3 0 6-1.5 6-6.5a5 5 0 0 0-1.3-3.5A4.6 4.6 0 0 0 18.6 2S17.5 1.7 15 3.3a12 12 0 0 0-6 0C6.5 1.7 5.4 2 5.4 2a4.6 4.6 0 0 0-.1 3.5A5 5 0 0 0 4 9c0 5 3 6.5 6 6.5-.5.4-.8 1-.9 1.6-.1.6-.1 1.3-.1 1.9v3" />
  ),
  linkedin: (
    <>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V8h4v2" />
      <path d="M2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  close: <path d="M6 6l12 12M18 6 6 18" />,
  check: <path d="m5 12 4 4L19 6" />,
};

function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {iconPaths[name]}
    </svg>
  );
}

const navItems: { id: string; label: string; icon: IconName }[] = [
  { id: "home", label: "Home", icon: "home" },
  { id: "about", label: "About", icon: "user" },
  { id: "experience", label: "Experience", icon: "orbit" },
  { id: "skills", label: "Skills", icon: "spark" },
  { id: "projects", label: "Projects", icon: "grid" },
  { id: "contact", label: "Contact", icon: "message" },
];

const experiences = [
  {
    period: "2022 — NOW",
    role: "Lead Full-Stack Developer",
    company: "ORBITAL LABS",
    text: "Leading end-to-end product engineering for high-growth platforms, from architecture and design systems to resilient payment infrastructure.",
    impact:
      "Improved checkout conversion by 24% and reduced deployment time from hours to minutes.",
    tech: ["React", "Node.js", "Stripe", "MySQL"],
  },
  {
    period: "2020 — 2022",
    role: "Software Engineer",
    company: "NORTHSTAR DIGITAL",
    text: "Built scalable commerce experiences, API integrations, and internal automation tools used across distributed teams.",
    impact: "Automated 70% of repetitive order operations across three commerce brands.",
    tech: ["Shopify", "Express", "REST APIs", "AWS"],
  },
  {
    period: "2018 — 2020",
    role: "Web Developer",
    company: "APOGEE STUDIO",
    text: "Translated ambitious creative direction into responsive, accessible web products for early-stage startups.",
    impact: "Shipped 18 production experiences with a consistent 95+ Lighthouse score.",
    tech: ["JavaScript", "React", "MySQL", "CSS"],
  },
];

const skillGroups = [
  {
    title: "Payment Integrations",
    code: "01",
    accent: "cyan",
    items: [
      [
        "Stripe",
        "Designed subscription billing, secure checkout, webhook, and reconciliation systems.",
      ],
      [
        "Authorize.Net",
        "Implemented card-present and card-not-present payment flows for established merchants.",
      ],
      [
        "Payment Workflows",
        "Built retry logic, refunds, invoices, taxes, and operational payment dashboards.",
      ],
      [
        "Subscriptions",
        "Created flexible plans, trials, upgrades, proration, and lifecycle automation.",
      ],
    ],
  },
  {
    title: "Full-Stack Development",
    code: "02",
    accent: "violet",
    items: [
      [
        "React",
        "Built fast, accessible interfaces and scalable component systems for complex products.",
      ],
      [
        "Node.js",
        "Developed reliable services, background jobs, integrations, and real-time applications.",
      ],
      [
        "Express.js",
        "Created secure REST APIs with validation, observability, and clear service boundaries.",
      ],
      [
        "MySQL",
        "Modeled transactional data and optimized queries for high-traffic production systems.",
      ],
    ],
  },
  {
    title: "Commerce & Automation",
    code: "03",
    accent: "amber",
    items: [
      [
        "Shopify",
        "Delivered custom storefronts, apps, checkout extensions, and operations tooling.",
      ],
      [
        "API Integrations",
        "Connected fragmented platforms with durable, observable integration layers.",
      ],
      ["AI Chatbots", "Created API-powered assistants grounded in product and support knowledge."],
      [
        "Automation",
        "Turned manual workflows into dependable systems that save teams hours each week.",
      ],
    ],
  },
];

const projects = [
  {
    name: "NOVA COMMERCE",
    kicker: "Commerce platform",
    description:
      "A composable commerce system built for rapid international growth and effortless operations.",
    role: "Lead engineer & architecture",
    tech: ["React", "Node.js", "Shopify", "Stripe"],
    features: ["Multi-region storefront", "Subscription engine", "Real-time inventory"],
    color: "#7c82ff",
    pos: ["17%", "25%"],
  },
  {
    name: "PULSE PAY",
    kicker: "Fintech infrastructure",
    description:
      "A unified payment operations dashboard that makes complex transaction data understandable.",
    role: "Full-stack development",
    tech: ["React", "Express", "MySQL", "Authorize.Net"],
    features: ["Smart reconciliation", "Risk signals", "Automated reporting"],
    color: "#75e6ff",
    pos: ["62%", "15%"],
  },
  {
    name: "ATLAS AI",
    kicker: "Intelligent support",
    description:
      "A context-aware product assistant that resolves questions and connects users to the right expert.",
    role: "Product engineer",
    tech: ["Node.js", "REST APIs", "React", "AI"],
    features: ["Semantic search", "Human handoff", "Insight dashboard"],
    color: "#ffbd6d",
    pos: ["77%", "56%"],
  },
  {
    name: "FLOWSTATE",
    kicker: "Workflow automation",
    description:
      "A visual automation layer connecting sales, fulfillment, and customer operations.",
    role: "Design & engineering",
    tech: ["React", "Node.js", "Webhooks", "MySQL"],
    features: ["Visual workflows", "Event replay", "Live monitoring"],
    color: "#b891ff",
    pos: ["32%", "70%"],
  },
];

function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const halo = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (matchMedia("(pointer: coarse)").matches) return;
    const move = (e: MouseEvent) => {
      dot.current?.style.setProperty("transform", `translate3d(${e.clientX}px,${e.clientY}px,0)`);
      halo.current?.animate(
        { transform: `translate3d(${e.clientX}px,${e.clientY}px,0)` },
        { duration: 500, fill: "forwards" },
      );
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return (
    <>
      <div ref={halo} className="cursor-halo" />
      <div ref={dot} className="cursor-dot" />
    </>
  );
}

function SectionTitle({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return (
    <div className="section-heading reveal">
      <div className="eyebrow">
        <span />
        {eyebrow}
      </div>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [activeSkill, setActiveSkill] = useState<[number, number]>([1, 0]);
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [sent, setSent] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const stars = useMemo(
    () =>
      Array.from({ length: 54 }, (_, i) => ({
        left: `${(i * 47) % 100}%`,
        top: `${(i * 83) % 100}%`,
        delay: `${(i % 8) * 0.42}s`,
        size: `${1 + (i % 3)}px`,
      })),
    [],
  );

  useEffect(() => {
    const sections = navItems
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => entry.isIntersecting && setActiveSection(entry.target.id));
      },
      { rootMargin: "-35% 0px -55%" },
    );
    sections.forEach((section) => observer.observe(section));
    const revealObserver = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        }),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));
    return () => {
      observer.disconnect();
      revealObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = activeProject !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeProject]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
    window.setTimeout(() => setSent(false), 5000);
  };

  const selectedSkill = skillGroups[activeSkill[0]].items[activeSkill[1]];

  return (
    <main>
      <Cursor />
      <div className="stars" aria-hidden="true">
        {stars.map((s, i) => (
          <i
            key={i}
            style={{
              left: s.left,
              top: s.top,
              animationDelay: s.delay,
              width: s.size,
              height: s.size,
            }}
          />
        ))}
      </div>

      <header className="topbar">
        <button className="monogram" onClick={() => scrollTo("home")} aria-label="Back to home">
          AM<span>.</span>
        </button>
        <div className="availability">
          <i /> AVAILABLE FOR SELECT PROJECTS <span>/ 2025</span>
        </div>
        <button
          className="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
        </button>
      </header>

      <nav className={`cosmic-nav ${menuOpen ? "open" : ""}`} aria-label="Primary navigation">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={activeSection === item.id ? "active" : ""}
            onClick={() => scrollTo(item.id)}
            aria-label={item.label}
          >
            <Icon name={item.icon} />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <section id="home" className="hero">
        <div className="hero-glow" />
        <div className="planet hero-planet">
          <div className="planet-ring" />
          <div className="planet-light" />
        </div>
        <div className="hero-copy">
          <div className="eyebrow">
            <span />
            WELCOME TO MY ORBIT
          </div>
          <h1>
            EXPLORING THE
            <br />
            <em>DIGITAL</em> UNIVERSE.
          </h1>
          <div className="hero-meta">
            <div>
              <strong>ALEX MORGAN</strong>
              <span>FULL-STACK DEVELOPER</span>
            </div>
            <p>
              I engineer digital products where ambitious ideas meet robust, human-centered
              technology.
            </p>
          </div>
          <div className="hero-actions">
            <button className="button primary" onClick={() => scrollTo("about")}>
              EXPLORE MY UNIVERSE <Icon name="arrow" />
            </button>
            <button className="button ghost" onClick={() => scrollTo("contact")}>
              LET'S CONNECT
            </button>
          </div>
        </div>
        <div className="scroll-mark">
          <span>SCROLL TO EXPLORE</span>
          <i />
        </div>
      </section>

      <section id="about" className="section about-section">
        <div className="section-number">01 / IDENTITY</div>
        <div className="about-layout">
          <div className="portrait-world reveal">
            <div className="portrait-orbit orbit-one">
              <span>CURIOUS</span>
            </div>
            <div className="portrait-orbit orbit-two">
              <span>BUILDER</span>
            </div>
            <div className="portrait-frame">
              <img
                src="https://images.unsplash.com/photo-1760004941335-6feccb7f800a?crop=faces&fit=crop&fm=jpg&q=85&w=900&h=1100"
                alt="Alex Morgan, full-stack developer"
              />
              <div className="portrait-shade" />
            </div>
            <span className="orbit-label label-one">DESIGN THINKING</span>
            <span className="orbit-label label-two">DEEP FOCUS</span>
            <span className="orbit-label label-three">01° 24′ N</span>
          </div>
          <div className="about-copy">
            <SectionTitle eyebrow="MY PLANET" title="ALEX MORGAN" />
            <p className="about-lead reveal">
              I turn complex systems into <em>clear, useful experiences.</em>
            </p>
            <div className="bio-grid reveal">
              <p>
                I'm a full-stack developer with 7+ years of experience building products that
                balance thoughtful design with dependable engineering. I work across the entire
                product orbit—from first sketch to production scale.
              </p>
              <p>
                My approach is equal parts curiosity and precision: understand the real problem,
                remove what isn't essential, then craft a solution people trust and enjoy using.
              </p>
            </div>
            <div className="fact-row reveal">
              <div>
                <small>CURRENTLY</small>
                <strong>Lead Developer</strong>
                <span>Orbital Labs</span>
              </div>
              <div>
                <small>BASED IN</small>
                <strong>Austin, TX</strong>
                <span>Working globally</span>
              </div>
              <div>
                <small>OFFLINE</small>
                <strong>Photography</strong>
                <span>Hiking & astronomy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="section experience-section">
        <div className="section-number">02 / TRAJECTORY</div>
        <SectionTitle
          eyebrow="PROFESSIONAL ORBIT"
          title="MISSIONS & MILESTONES"
          copy="A journey through the teams, systems, and products that shaped my practice."
        />
        <div className="timeline">
          <div className="trajectory" />
          {experiences.map((exp, i) => (
            <article className="experience-card reveal" key={exp.company}>
              <div className="mission-node">
                <span>{String(i + 1).padStart(2, "0")}</span>
                <i />
              </div>
              <div className="exp-period">{exp.period}</div>
              <div className="exp-main">
                <h3>{exp.role}</h3>
                <h4>{exp.company}</h4>
                <p>{exp.text}</p>
                <div className="exp-reveal">
                  <strong>MISSION IMPACT</strong>
                  <p>{exp.impact}</p>
                </div>
                <div className="tags">
                  {exp.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="section skills-section">
        <div className="section-number">03 / CAPABILITIES</div>
        <SectionTitle
          eyebrow="TECHNOLOGY CONSTELLATION"
          title="TOOLS IN MY ORBIT"
          copy="A connected ecosystem of technologies, platforms, and solutions I use to bring digital products to life."
        />
        <div className="skills-layout reveal">
          <div className="skill-groups">
            {skillGroups.map((group, gi) => (
              <div
                className={`skill-group ${activeSkill[0] === gi ? "active" : ""}`}
                key={group.title}
              >
                <button className="group-title" onClick={() => setActiveSkill([gi, 0])}>
                  <span>{group.code}</span>
                  {group.title}
                  <Icon name="arrow" />
                </button>
                <div className="constellation">
                  {group.items.map((item, ii) => (
                    <button
                      key={item[0]}
                      className={activeSkill[0] === gi && activeSkill[1] === ii ? "active" : ""}
                      onClick={() => setActiveSkill([gi, ii])}
                    >
                      <i />
                      <span>{item[0]}</span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <aside className="skill-detail" key={selectedSkill[0]}>
            <div className="skill-visual">
              <span />
              <i />
              <b />
            </div>
            <small>SELECTED TECHNOLOGY</small>
            <h3>{selectedSkill[0]}</h3>
            <p>{selectedSkill[1]}</p>
            <div className="detail-signal">
              <span /> PRODUCTION EXPERIENCE
            </div>
          </aside>
        </div>
      </section>

      <section id="projects" className="section projects-section">
        <div className="section-number">04 / SELECTED WORK</div>
        <SectionTitle
          eyebrow="GALAXY OF CREATIONS"
          title="PROJECTS WORTH EXPLORING"
          copy="Select a signal to discover the thinking, technology, and outcomes behind each build."
        />
        <div className="galaxy reveal">
          <svg
            className="constellation-lines"
            viewBox="0 0 1000 530"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d="M170 130 620 80 770 300 320 375 170 130" />
            <path d="m620 80-300 295" />
          </svg>
          {projects.map((project, i) => (
            <button
              className="project-star"
              key={project.name}
              style={
                {
                  left: project.pos[0],
                  top: project.pos[1],
                  "--star-color": project.color,
                } as React.CSSProperties
              }
              onClick={() => setActiveProject(i)}
            >
              <span className="star-core">
                <i />
              </span>
              <b>{String(i + 1).padStart(2, "0")}</b>
              <strong>{project.name}</strong>
              <small>{project.kicker}</small>
            </button>
          ))}
          <div className="galaxy-caption">
            INTERACTIVE STAR MAP <span>04 DISCOVERIES</span>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="contact-halo" />
        <div className="section-number">05 / TRANSMISSION</div>
        <div className="contact-layout">
          <div className="contact-copy">
            <SectionTitle
              eyebrow="ESTABLISH COMMUNICATION"
              title="LET'S BUILD SOMETHING OUT OF THIS WORLD."
            />
            <p className="reveal">
              Have an ambitious product, a complex integration, or a team that needs another curious
              mind? My channel is open.
            </p>
            <div className="opportunity-list reveal">
              {[
                "Full-time opportunities",
                "Part-time collaborations",
                "Contract & freelance projects",
              ].map((item) => (
                <span key={item}>
                  <i />
                  {item}
                </span>
              ))}
            </div>
            <a className="direct-email reveal" href="mailto:hello@alexmorgan.dev">
              <small>DIRECT CHANNEL</small>
              <strong>hello@alexmorgan.dev</strong>
              <Icon name="arrow" />
            </a>
          </div>
          <form className="contact-form reveal" onSubmit={submit}>
            <div className="form-top">
              <span>NEW TRANSMISSION</span>
              <small>SECURE CHANNEL / 256-BIT</small>
            </div>
            <label>
              <span>FULL NAME</span>
              <input name="name" required placeholder="Your name" autoComplete="name" />
            </label>
            <div className="field-row">
              <label>
                <span>EMAIL ADDRESS</span>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  autoComplete="email"
                />
              </label>
              <label>
                <span>PHONE NUMBER</span>
                <input name="phone" type="tel" placeholder="+1 555 000 0000" autoComplete="tel" />
              </label>
            </div>
            <label>
              <span>MESSAGE</span>
              <textarea
                name="message"
                required
                minLength={10}
                rows={5}
                placeholder="Tell me a little about your mission..."
              />
            </label>
            <button className="button primary submit-button" type="submit">
              {sent ? (
                <>
                  <Icon name="check" /> MESSAGE RECEIVED
                </>
              ) : (
                <>
                  SEND MESSAGE <Icon name="arrow" />
                </>
              )}
            </button>
            {sent && (
              <p className="success" role="status">
                Transmission received. I'll respond within 1–2 business days.
              </p>
            )}
          </form>
        </div>
      </section>

      <footer>
        <div className="monogram">
          AM<span>.</span>
        </div>
        <p>
          DESIGNED & ENGINEERED WITH CURIOSITY
          <br />
          <span>© 2025 ALEX MORGAN</span>
        </p>
        <div className="socials">
          <a href="mailto:hello@alexmorgan.dev" aria-label="Email">
            <Icon name="mail" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Icon name="linkedin" />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
            <Icon name="github" />
          </a>
        </div>
        <button onClick={() => scrollTo("home")}>RETURN TO ORIGIN ↑</button>
      </footer>

      {activeProject !== null && (
        <div
          className="project-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-title"
          onMouseDown={(e) => e.currentTarget === e.target && setActiveProject(null)}
        >
          <div className="modal-shell">
            <button
              className="modal-close"
              onClick={() => setActiveProject(null)}
              aria-label="Close project"
            >
              <Icon name="close" />
            </button>
            <div
              className="project-preview"
              style={{ "--project-color": projects[activeProject].color } as React.CSSProperties}
            >
              <div className="mock-browser">
                <span />
                <span />
                <span />
                <div className="mock-nav" />
                <div className="mock-title" />
                <div className="mock-grid">
                  <i />
                  <i />
                  <i />
                </div>
              </div>
              <div className="preview-orb" />
            </div>
            <div className="modal-copy">
              <small>
                {projects[activeProject].kicker} / 0{activeProject + 1}
              </small>
              <h2 id="project-title">{projects[activeProject].name}</h2>
              <p>{projects[activeProject].description}</p>
              <div className="modal-meta">
                <div>
                  <span>MY ROLE</span>
                  <strong>{projects[activeProject].role}</strong>
                </div>
                <div>
                  <span>CORE SYSTEMS</span>
                  <strong>{projects[activeProject].tech.join(" · ")}</strong>
                </div>
              </div>
              <div className="feature-list">
                {projects[activeProject].features.map((f) => (
                  <span key={f}>
                    <Icon name="check" size={15} />
                    {f}
                  </span>
                ))}
              </div>
              <div className="modal-actions">
                <a href="#" onClick={(e) => e.preventDefault()}>
                  VIEW LIVE <Icon name="external" />
                </a>
                <a href="https://github.com" target="_blank" rel="noreferrer">
                  SOURCE <Icon name="github" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
