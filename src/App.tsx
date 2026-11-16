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

const resumeUrl = `${import.meta.env.BASE_URL}Patrick_Bootchot_Resume.pdf`;

const heroStats = [
  { value: "650+", label: "Commits shipped at Office Dojo" },
  { value: "2,500+", label: "Automated tests maintained" },
  { value: "5", label: "Codebases contributed to" },
  { value: "B.S.", label: "Computer Science, CSULB" },
];

const experiences = [
  {
    period: "SEP 2026 — PRESENT",
    role: "Fullstack Developer",
    company: "OFFICE DOJO CRM SYSTEMS · LOS ANGELES, CA · ON-SITE",
    points: [
      "Own day-to-day development and production support for a real estate CRM and subscription platform (Node.js/Express, MySQL, Redis, React), taking over maintenance from an international contract team.",
      "Built an end-to-end lead pipeline from sales rep leads to booked appointments to paying subscribers. Appointments close automatically when Stripe confirms payment, subscribers are credited to the right rep through referral links, and lead notes are kept as permanent customer history.",
      "Run deployments on AWS (EC2, S3, CloudFront, Parameter Store) through GitHub Actions CI/CD with database migrations, and extend a 2,500+ test Jest/Vitest suite with every change.",
      "Built a business-card lead capture app with Flask, Amazon Textract OCR, S3, DynamoDB, and SES, including multi-step owner sign-up, location-based access, and automated follow-up email.",
      "Shipped client portal features including guest showing requests, saved homes with QR sharing, listing alerts, home value reports, and a full mobile responsiveness pass.",
      "Secured file uploads by serving any non-preview file type as a download, preventing stored cross-site scripting (XSS) while still allowing all attachment types.",
    ],
    tech: ["React", "Node.js", "Express", "MySQL", "Redis", "Stripe", "AWS", "GitHub Actions", "Jest", "Vitest", "Flask"],
  },
  {
    period: "JUL 2026 — PRESENT",
    role: "Full Stack Developer",
    company: "INTERVIEWPREPAI · PERSONAL PROJECT · IN PROGRESS",
    points: [
      "Designing a scalable full-stack interview preparation platform with a React frontend and an ASP.NET Core Web API backend.",
      "Developing RESTful APIs for user authentication, resume analysis, coding practice, and AI-powered mock interviews.",
      "Implementing secure authentication with AWS Cognito and JWT, and integrating AWS S3 for resume storage.",
      "Designing a normalized PostgreSQL database and documenting the application's architecture, API structure, and ownership.",
    ],
    tech: ["React", "ASP.NET Core", "C#", "PostgreSQL", "AWS Cognito", "S3", "Docker"],
  },
  {
    period: "AUG 2024 — NOV 2024",
    role: "Full Stack Developer",
    company: "COURSEHUB · TEAM PROJECT · CSULB",
    points: [
      "Developed a full-stack academic platform that lets students manage courses, share resources, and collaborate with classmates.",
      "Used Flask and Supabase for authentication and sessions, issuing JWTs with 30-minute inactivity expiration, and MongoDB for user data, friendships, and messaging.",
      "Implemented CRUD operations for posts, comments, and user profiles through RESTful API endpoints, keeping authentication, data access, and frontend concerns separate.",
    ],
    tech: ["React", "Tailwind CSS", "Flask", "Supabase Auth", "MongoDB", "JWT"],
  },
  {
    period: "AUG 2022 — AUG 2025",
    role: "Server, Customer Service & Cashier",
    company: "TAMPOPO SUSHI AND RAMEN · CERRITOS, CA",
    points: [
      "Delivered high-volume customer service while accurately managing orders, payments, and customer requests in a fast-paced environment.",
      "Communicated with customers and teammates to resolve issues, coordinate orders, and keep service efficient during peak hours.",
    ],
    tech: ["Customer Service", "Communication", "Teamwork"],
  },
];

const skillGroups = [
  {
    title: "Languages",
    code: "01",
    items: [
      [
        "JavaScript",
        "My primary language at Office Dojo, used across React frontends and Node.js/Express services and tested with Jest and Vitest.",
        "PROFESSIONAL",
      ],
      [
        "Python",
        "Flask services for Office Dojo's lead capture app and pay portal, the CourseHub API, and a socket-based distributed chat system.",
        "PROFESSIONAL + PROJECTS",
      ],
      [
        "C#",
        "ASP.NET Core Web APIs for InterviewPrepAI, a real-time multiplayer card game server, and Unity gameplay systems.",
        "PROJECTS",
      ],
      [
        "SQL",
        "Schema design, versioned migrations, and production queries in MySQL and PostgreSQL, including read-only audit queries for billing data.",
        "PROFESSIONAL",
      ],
      [
        "HTML & CSS",
        "Semantic, responsive layouts with Tailwind CSS and Sass, including a full mobile pass on Office Dojo's client portal.",
        "PROFESSIONAL",
      ],
    ],
  },
  {
    title: "Frameworks",
    code: "02",
    items: [
      [
        "React",
        "Used daily at Office Dojo for the CRM and client portal (Redux Toolkit, TanStack Query, Zustand, React Hook Form) and in every personal project.",
        "PROFESSIONAL",
      ],
      [
        "Node.js & Express",
        "REST APIs for the Office Dojo CRM with Sequelize, Socket.IO, BullMQ job queues, request validation, rate limiting, and Sentry monitoring.",
        "PROFESSIONAL",
      ],
      [
        "ASP.NET Core",
        "Web API backend for InterviewPrepAI with JWT authentication through AWS Cognito and a normalized PostgreSQL schema.",
        "PROJECTS",
      ],
      [
        "Flask",
        "Office Dojo's business-card lead capture app and pay portal backend, plus CourseHub's API with Supabase auth and JWT sessions.",
        "PROFESSIONAL + PROJECTS",
      ],
      [
        "Next.js",
        "Server-rendered React applications built with TypeScript and Tailwind CSS.",
        "TOOLKIT",
      ],
    ],
  },
  {
    title: "Cloud & DevOps",
    code: "03",
    items: [
      [
        "AWS",
        "EC2, S3, CloudFront, and Parameter Store for the CRM; Textract, DynamoDB, and SES for lead capture; Cognito and S3 for InterviewPrepAI.",
        "PROFESSIONAL",
      ],
      [
        "GitHub Actions",
        "CI/CD pipelines with automated tests, sharded Jest runs, database migrations, automatic staging deploys, and gated production releases.",
        "PROFESSIONAL",
      ],
      [
        "Testing",
        "Jest, Vitest, Supertest, and Testing Library. I extend Office Dojo's 2,500+ test suite with every change I ship.",
        "PROFESSIONAL",
      ],
      [
        "Docker",
        "Containerized development and deployment environments for InterviewPrepAI.",
        "PROJECTS",
      ],
    ],
  },
  {
    title: "Data & Integrations",
    code: "04",
    items: [
      [
        "MySQL",
        "The production database for the Office Dojo CRM, managed with Sequelize models and versioned migrations.",
        "PROFESSIONAL",
      ],
      [
        "PostgreSQL",
        "A normalized relational schema for InterviewPrepAI's users, interview sessions, and resume data.",
        "PROJECTS",
      ],
      [
        "Redis",
        "Caching, rate limiting, BullMQ job queues, and the Socket.IO adapter for real-time CRM features.",
        "PROFESSIONAL",
      ],
      [
        "MongoDB",
        "Document storage for CourseHub user profiles, friendships, and messaging.",
        "PROJECTS",
      ],
      [
        "Stripe & Payments",
        "Subscription billing, trials, and webhooks. Appointments close automatically when Stripe confirms payment, alongside Authorize.Net card processing.",
        "PROFESSIONAL",
      ],
    ],
  },
];

const projects = [
  {
    name: "INTERVIEWPREPAI",
    kicker: "AI interview prep",
    description:
      "A scalable full-stack interview preparation platform, currently in progress. A React frontend and an ASP.NET Core Web API power resume analysis, coding practice, and AI-powered mock interviews.",
    role: "Personal project · In progress",
    tech: ["React", "ASP.NET Core", "C#", "PostgreSQL", "AWS Cognito", "S3", "Docker"],
    features: [
      "AI-powered mock interviews",
      "Resume analysis with S3 storage",
      "Coding practice",
      "AWS Cognito + JWT authentication",
      "Normalized PostgreSQL schema",
      "Documented API architecture",
    ],
    github: "https://github.com/looksorn789/InterviewPrepAi",
    demo: "",
    color: "#7c82ff",
    pos: ["6%", "10%"],
  },
  {
    name: "COURSEHUB",
    kicker: "Academic platform",
    description:
      "A full-stack academic platform that lets students manage courses, share resources, and collaborate with classmates, built with security and scalability in mind.",
    role: "Team project · Full Stack Developer",
    tech: ["React", "Tailwind CSS", "Flask", "Supabase Auth", "MongoDB", "JWT"],
    features: [
      "Supabase auth with JWT sessions",
      "30-minute inactivity expiry",
      "Friendships & messaging",
      "Posts, comments & profile CRUD",
    ],
    github: "https://github.com/looksorn789/CourseHub",
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
      "An online multiplayer version of the card game Idiot, with special cards and synchronized gameplay.",
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
          <i /> OPEN TO NEW OPPORTUNITIES <span>/ LOS ANGELES · REMOTE</span>
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
            FULLSTACK DEVELOPER · LOS ANGELES, CA
          </div>
          <h1>
            ENGINEERING
            <br />
            <em>RELIABLE</em> SOFTWARE.
          </h1>
          <div className="hero-meta">
            <div>
              <strong>PATRICK BOOTCHOT</strong>
              <span>FULLSTACK DEVELOPER @ OFFICE DOJO</span>
            </div>
            <p>
              I design, ship, and support full-stack web applications, from React interfaces to
              Node.js and ASP.NET Core APIs, payment systems, and AWS deployments.
            </p>
          </div>
          <div className="hero-actions">
            <button className="button primary" onClick={() => scrollTo("experience")}>
              VIEW EXPERIENCE <Icon name="arrow" />
            </button>
            <a className="button ghost" href={resumeUrl} target="_blank" rel="noreferrer">
              VIEW RESUME <Icon name="external" />
            </a>
          </div>
          <dl className="hero-stats">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <dt>{stat.label}</dt>
                <dd>{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="scroll-mark">
          <span>SCROLL</span>
          <i />
        </div>
      </section>

      <section id="about" className="section about-section">
        <div className="section-number">01 / ABOUT</div>
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
            <SectionTitle eyebrow="ABOUT ME" title="PATRICK BOOTCHOT" />
            <p className="about-lead reveal">
              I build dependable software for <em>real businesses and real users.</em>
            </p>
            <div className="bio-grid reveal">
              <p>
                I'm Patrick (Pornthep) Bootchot, a fullstack developer at Office Dojo in Los
                Angeles. I own day-to-day development and production support for a real estate CRM
                and subscription platform, shipping features across a React frontend, Node.js and
                Express APIs, MySQL and Redis, Stripe billing, and AWS infrastructure.
              </p>
              <p>
                I hold a B.S. in Computer Science from California State University, Long Beach.
                Outside of work, I'm building InterviewPrepAI, an AI-powered interview preparation
                platform built with React, ASP.NET Core, and PostgreSQL. I care about clean
                architecture, thorough testing, and code the next developer can easily maintain.
                I'm open to new opportunities, whether full-time, part-time, contract, or freelance.
              </p>
            </div>
            <div className="fact-row reveal">
              <div>
                <small>CURRENTLY</small>
                <strong>Fullstack Developer</strong>
                <span>Office Dojo · Los Angeles</span>
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
        <div className="section-number">02 / EXPERIENCE</div>
        <SectionTitle
          eyebrow="WORK EXPERIENCE"
          title="EXPERIENCE"
          copy="Professional roles and major builds, most recent first."
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
                <ul className="exp-points">
                  {exp.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
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
        <div className="section-number">03 / SKILLS</div>
        <SectionTitle
          eyebrow="TECHNICAL SKILLS"
          title="TECHNICAL TOOLKIT"
          copy="The languages, frameworks, and infrastructure I use to design, ship, and run production software. Select a technology to see where I've used it."
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
              <span /> {selectedSkill[2]} EXPERIENCE
            </div>
          </aside>
        </div>
      </section>

      <section id="projects" className="section projects-section">
        <div className="section-number">04 / PROJECTS</div>
        <SectionTitle
          eyebrow="SELECTED PROJECTS"
          title="SELECTED WORK"
          copy="Personal and team builds outside of my day job. Select a project to see its tech stack, key features, and source code."
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
            SELECT A PROJECT FOR DETAILS{" "}
            <span>{String(projects.length).padStart(2, "0")} PROJECTS</span>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="contact-halo" />
        <div className="section-number">05 / CONTACT</div>
        <div className="contact-layout">
          <div className="contact-copy">
            <SectionTitle eyebrow="GET IN TOUCH" title="LET'S WORK TOGETHER." />
            <p className="reveal">
              I'm open to new opportunities of all kinds. If you have a role, a project, or just
              want to talk, I'd love to hear from you. I'm happy to connect with recruiters, hiring
              managers, founders, and teams of any size.
            </p>
            <div className="opportunity-list reveal">
              {[
                "Full-time, part-time & internship roles",
                "Contract & freelance work",
                "On-site, hybrid, or remote",
              ].map((item) => (
                <span key={item}>
                  <i />
                  {item}
                </span>
              ))}
            </div>
            <a className="direct-email reveal" href={`mailto:${contact.email}`}>
              <small>EMAIL</small>
              <strong>{contact.email}</strong>
              <Icon name="arrow" />
            </a>
            <a className="direct-email reveal" href={contact.phoneHref}>
              <small>PHONE · {contact.location.toUpperCase()}</small>
              <strong>{contact.phone}</strong>
              <Icon name="arrow" />
            </a>
            <a className="direct-email reveal" href={resumeUrl} target="_blank" rel="noreferrer">
              <small>RESUME · PDF</small>
              <strong>View my resume</strong>
              <Icon name="external" />
            </a>
          </div>
          <form className="contact-form reveal" onSubmit={submit}>
            <div className="form-top">
              <span>SEND A MESSAGE</span>
              <small>OPENS IN YOUR EMAIL APP</small>
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
                placeholder="Tell me about the role or project..."
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
          DESIGNED & BUILT IN LOS ANGELES
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
        <button onClick={() => scrollTo("home")}>BACK TO TOP ↑</button>
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
                  <span>TECH STACK</span>
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
