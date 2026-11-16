import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import portrait from "./assets/patrick.jpg";

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

const contact = {
  name: "Patrick Bootchot",
  email: "patandjisoo@gmail.com",
  phone: "(323) 703-9533",
  phoneHref: "tel:+13237039533",
  github: "https://github.com/looksorn789",
  linkedin: "https://www.linkedin.com/in/pornthep-bootchot-35401225b/",
  location: "Bellflower, California",
};

const experiences = [
  {
    period: "NOW",
    role: "Full-Stack Developer",
    company: "INTERVIEWPREPAI · IN DEVELOPMENT",
    text: "Building an AI interview preparation platform that helps users get ready for software engineering interviews through AI-assisted practice sessions and personalized feedback.",
    impact:
      "AI-generated questions, behavioral and technical interview simulations, secure authentication, and progress tracking.",
    tech: ["React", "ASP.NET Core", "C#", "SQL Server", "OpenAI API"],
  },
  {
    period: "CSULB",
    role: "B.S. Computer Science",
    company: "CALIFORNIA STATE UNIVERSITY, LONG BEACH",
    text: "Built full-stack, distributed, and game projects as part of collaborative teams, from a student forum platform to a socket-based chat system and a Unity adventure game.",
    impact:
      "Shipped CourseHub, a Distributed Chatting System, and Keys To The Kingdom with classmates.",
    tech: ["Flask", "React", "MongoDB", "Python", "Unity"],
  },
  {
    period: "PERSONAL",
    role: "Independent Projects",
    company: "SELF-DIRECTED BUILDS",
    text: "Designing and shipping my own apps to keep learning new technologies, from real-time multiplayer games to personal productivity tools.",
    impact:
      "Built an online multiplayer Idiot card game with room codes and synced gameplay, plus a live journaling web app.",
    tech: ["C#", "React", "Vite", "Sockets", "CSS"],
  },
];

const skillGroups = [
  {
    title: "Languages & Engines",
    code: "01",
    accent: "cyan",
    items: [
      [
        "C#",
        "A primary language. Used for ASP.NET Core APIs, a real-time multiplayer card game server, and Unity gameplay.",
      ],
      [
        "Python",
        "A primary language. Used for Flask backends and a socket-based distributed chatting system.",
      ],
      [
        "JavaScript",
        "A primary language. Used to build React interfaces for nearly every project in my portfolio.",
      ],
      [
        "Unity",
        "Built Keys To The Kingdom, an adventure game with combat, dialogue, inventory, and puzzle mechanics.",
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
        "Built modern, responsive interfaces for InterviewPrepAI, CourseHub, My Daily Journal, and more.",
      ],
      [
        "ASP.NET Core",
        "Building the backend for InterviewPrepAI with Entity Framework Core and secure authentication.",
      ],
      [
        "Flask & Django",
        "Developed Python web backends, including the API layer for the CourseHub student forum.",
      ],
      [
        "Node.js",
        "Built JavaScript server-side services and APIs alongside React front ends.",
      ],
    ],
  },
  {
    title: "Data & Integrations",
    code: "03",
    accent: "amber",
    items: [
      [
        "SQL Server",
        "Modeling InterviewPrepAI's data with SQL Server and Entity Framework Core.",
      ],
      [
        "MongoDB",
        "Stored CourseHub's profiles, courses, and discussion threads with real-time updates via Supabase.",
      ],
      [
        "PostgreSQL",
        "Designed relational schemas and queries for full-stack web applications.",
      ],
      [
        "OpenAI API",
        "Integrating AI-generated interview questions and personalized feedback into InterviewPrepAI.",
      ],
    ],
  },
];

const projects = [
  {
    name: "INTERVIEWPREPAI",
    kicker: "AI interview prep",
    description:
      "A full-stack AI interview preparation platform currently in development. The application helps users prepare for software engineering interviews through AI-assisted practice sessions and personalized feedback.",
    role: "Personal project · In development",
    tech: ["React", "ASP.NET Core", "C#", "SQL Server", "Entity Framework Core", "OpenAI API"],
    features: [
      "AI-generated interview questions",
      "Behavioral interview practice",
      "Technical interview simulations",
      "Secure authentication",
      "Progress tracking",
      "Responsive web interface",
    ],
    github: "https://github.com/looksorn789/InterviewPrepAi",
    demo: "",
    color: "#7c82ff",
    pos: ["6%", "10%"],
  },
  {
    name: "COURSEHUB",
    kicker: "Student forum",
    description:
      "CourseHub is a student-driven forum platform where students can collaborate and assist one another with course materials.",
    role: "Team project",
    tech: ["Flask", "React", "MongoDB", "Supabase"],
    features: ["Authentication", "Profiles", "Real-time updates", "Course discussions"],
    github: "https://github.com/Elias0127/CourseHub",
    demo: "https://youtu.be/SAqRzDYyfaU",
    color: "#75e6ff",
    pos: ["44%", "5%"],
  },
  {
    name: "DISTRIBUTED CHAT",
    kicker: "Real-time messaging",
    description:
      "A distributed communication system where users can join chat rooms and communicate in real time using sockets.",
    role: "Team project",
    tech: ["Python", "Socket Programming"],
    features: ["Join chat rooms", "Broadcast messages", "Connected client list", "Stop server/client"],
    github: "https://github.com/MNRainDrop/CECS-327-Project1",
    demo: "",
    color: "#ffbd6d",
    pos: ["72%", "24%"],
  },
  {
    name: "IDIOT CARD GAME",
    kicker: "Multiplayer card game",
    description:
      "Online multiplayer implementation of the card game Idiot featuring special cards and synchronized gameplay.",
    role: "Personal project",
    tech: ["C#", "React", "Vite", "Sockets"],
    features: ["Host transfer", "Room codes", "Real-time gameplay", "Special card abilities"],
    github: "https://github.com/looksorn789/Idiot-Card-Game",
    demo: "",
    color: "#b891ff",
    pos: ["16%", "48%"],
  },
  {
    name: "MY DAILY JOURNAL",
    kicker: "Personal journaling",
    description:
      "A personal journaling web application focused on organization and self-expression.",
    role: "Personal project",
    tech: ["React", "CSS"],
    features: ["Journal entries", "Mood board", "Calendar", "Dark mode", "Authentication"],
    github: "https://github.com/looksorn789/My-Daily-Journal",
    demo: "https://looksorn789.github.io/My-Daily-Journal/",
    color: "#ff8fc7",
    pos: ["50%", "44%"],
  },
  {
    name: "KEYS TO THE KINGDOM",
    kicker: "Unity adventure game",
    description:
      "A Unity adventure game featuring combat, inventory management, and puzzle solving.",
    role: "Team project",
    tech: ["Unity", "C#"],
    features: ["Combat", "Dialogue", "Inventory", "Doors & keys"],
    github: "https://github.com/zsanchez6/KeysToTheKingdom",
    demo: "https://youtu.be/e6bru3lDydA",
    color: "#8dffb8",
    pos: ["68%", "70%"],
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
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const body = [
      String(data.get("message") ?? ""),
      "",
      `— ${name}`,
      String(data.get("email") ?? ""),
      String(data.get("phone") ?? ""),
    ]
      .filter((line, i) => i < 3 || line)
      .join("\n");
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
      `Portfolio inquiry from ${name}`,
    )}&body=${encodeURIComponent(body)}`;
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
          PB<span>.</span>
        </button>
        <div className="availability">
          <i /> OPEN TO ENTRY-LEVEL ROLES <span>/ 2026</span>
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
              <strong>PATRICK BOOTCHOT</strong>
              <span>FULL-STACK DEVELOPER</span>
            </div>
            <p>
              I build modern, responsive web applications that combine clean design with practical
              functionality.
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
              <img src={portrait} alt="Patrick Bootchot, full-stack developer" />
              <div className="portrait-shade" />
            </div>
            <span className="orbit-label label-one">PROBLEM SOLVER</span>
            <span className="orbit-label label-two">LIFELONG LEARNER</span>
            <span className="orbit-label label-three">33° 53′ N</span>
          </div>
          <div className="about-copy">
            <SectionTitle eyebrow="MY PLANET" title="PATRICK BOOTCHOT" />
            <p className="about-lead reveal">
              I build software that <em>delivers real value.</em>
            </p>
            <div className="bio-grid reveal">
              <p>
                Hi! I'm Patrick (Pornthep Bootchot), a full-stack software developer with a
                Bachelor's degree in Computer Science from California State University, Long Beach.
                I've built front-end and back-end applications with React, ASP.NET Core, Flask,
                Node.js, and Django, backed by databases like MongoDB and PostgreSQL. My primary
                languages are C#, Python, and JavaScript.
              </p>
              <p>
                I enjoy learning new technologies, solving challenging problems, and creating
                software that delivers real value. I'm currently seeking an entry-level software
                engineering opportunity where I can keep growing as a developer while contributing
                to meaningful projects.
              </p>
            </div>
            <div className="fact-row reveal">
              <div>
                <small>CURRENTLY</small>
                <strong>Building InterviewPrepAI</strong>
                <span>Open to entry-level roles</span>
              </div>
              <div>
                <small>BASED IN</small>
                <strong>Bellflower, CA</strong>
                <span>Southern California</span>
              </div>
              <div>
                <small>EDUCATION</small>
                <strong>B.S. Computer Science</strong>
                <span>CSULB</span>
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
          copy="A journey through the education, teams, and projects that shaped me as a developer."
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
              <span /> HANDS-ON PROJECT EXPERIENCE
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
            <path d="M72 64 452 38 732 138 692 382 512 245 172 266 72 64" />
            <path d="m452 38 60 207" />
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
            INTERACTIVE STAR MAP{" "}
            <span>{String(projects.length).padStart(2, "0")} DISCOVERIES</span>
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
              Whether you're looking for a software developer, have a project in mind, or simply
              want to connect, I'd be happy to hear from you.
            </p>
            <div className="opportunity-list reveal">
              {[
                "Entry-level software engineering roles",
                "Full-time opportunities",
                "Project collaborations",
              ].map((item) => (
                <span key={item}>
                  <i />
                  {item}
                </span>
              ))}
            </div>
            <a className="direct-email reveal" href={`mailto:${contact.email}`}>
              <small>DIRECT CHANNEL</small>
              <strong>{contact.email}</strong>
              <Icon name="arrow" />
            </a>
            <a className="direct-email reveal" href={contact.phoneHref}>
              <small>PHONE · {contact.location.toUpperCase()}</small>
              <strong>{contact.phone}</strong>
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
                  <Icon name="check" /> EMAIL DRAFT OPENED
                </>
              ) : (
                <>
                  SEND MESSAGE <Icon name="arrow" />
                </>
              )}
            </button>
            {sent && (
              <p className="success" role="status">
                Your email app should open with your message ready to send. If it didn't, email me
                directly at {contact.email}.
              </p>
            )}
          </form>
        </div>
      </section>

      <footer>
        <div className="monogram">
          PB<span>.</span>
        </div>
        <p>
          DESIGNED & ENGINEERED WITH CURIOSITY
          <br />
          <span>© 2026 PATRICK BOOTCHOT</span>
        </p>
        <div className="socials">
          <a href={`mailto:${contact.email}`} aria-label="Email">
            <Icon name="mail" />
          </a>
          <a href={contact.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Icon name="linkedin" />
          </a>
          <a href={contact.github} target="_blank" rel="noreferrer" aria-label="GitHub">
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
                  <span>PROJECT TYPE</span>
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
                {projects[activeProject].demo && (
                  <a href={projects[activeProject].demo} target="_blank" rel="noreferrer">
                    LIVE DEMO <Icon name="external" />
                  </a>
                )}
                <a href={projects[activeProject].github} target="_blank" rel="noreferrer">
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
