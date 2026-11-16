# Patrick Bootchot — Developer Portfolio

**Live site: [patrick-dev.cloud](https://patrick-dev.cloud/)**

My personal portfolio, covering my work as a fullstack developer, my professional experience, my technical skills, and selected projects. It is a single-page React app with a space-inspired design, built to be fast, responsive, and easy to keep up to date.

## About me

I'm a fullstack developer at **Office Dojo CRM Systems** in Los Angeles. I own day-to-day development and production support for a real estate CRM and subscription platform built with React, Node.js/Express, MySQL, Redis, Stripe, and AWS. I hold a **B.S. in Computer Science from California State University, Long Beach**, and I'm open to new opportunities: full-time, part-time, contract, or freelance.

## Sections

| Section | What's there |
| --- | --- |
| **Home** | Introduction, key stats, and quick links to my experience and resume |
| **About** | Background, current role, location, and education |
| **Experience** | Timeline of professional roles and major builds |
| **Skills** | Interactive toolkit across languages, frameworks, cloud/DevOps, and data. Selecting a skill shows where I've used it. |
| **Projects** | Interactive star map of selected projects, each with tech stack, features, source code, and demo links |
| **Contact** | Email, phone, resume, and a message form that opens a pre-filled email |

## Featured projects

- **[InterviewPrepAI](https://github.com/looksorn789/InterviewPrepAi)**: AI-powered interview preparation platform (React, ASP.NET Core, PostgreSQL, AWS Cognito, S3, Docker). *In progress.*
- **[CourseHub](https://github.com/looksorn789/CourseHub)**: Academic collaboration platform (React, Flask, Supabase Auth, MongoDB). Team project. [Demo](https://youtu.be/SAqRzDYyfaU)
- **[Idiot Card Game](https://github.com/looksorn789/Idiot-Card-Game)**: Real-time online multiplayer card game (C#, React, sockets)
- **[My Daily Journal](https://github.com/looksorn789/My-Daily-Journal)**: Journaling web app with mood board and calendar. [Live](https://looksorn789.github.io/My-Daily-Journal/)
- **[Distributed Chat](https://github.com/MNRainDrop/CECS-327-Project1)**: Socket-based distributed chat system (Python). Team project.
- **[Keys To The Kingdom](https://github.com/zsanchez6/KeysToTheKingdom)**: Unity adventure game (C#). Team project. [Demo](https://youtu.be/e6bru3lDydA)

## Built with

- **React 19** + **TypeScript**
- **Vite 8** for development and production builds
- **Tailwind CSS v4** plus hand-written CSS for the custom design
- Interaction details, all without third-party UI or animation libraries:
  - scroll-aware navigation
  - reveal-on-scroll animations
  - a custom cursor
  - an accessible project dialog

## Running locally

Requires **Node.js 22** and **pnpm** (versions are pinned in `.mise.toml`).

```bash
pnpm install      # install dependencies
pnpm dev          # start the dev server with hot reload
pnpm build        # production build to dist/
pnpm preview      # preview the production build locally
```

## Project structure

```text
├── index.html                         # HTML shell
├── public/
│   ├── favicon.png
│   └── Patrick_Bootchot_Resume.pdf    # linked from "View Resume"
└── src/
    ├── main.tsx                       # React entry point
    ├── App.tsx                        # page sections and content data
    ├── index.css                      # global styles and design
    └── assets/patrick.jpg             # portrait
```

## Updating content

All site content lives in plain data arrays at the top of [`src/App.tsx`](src/App.tsx), so updating the portfolio doesn't require touching any layout code:

- `contact` holds email, phone, GitHub, LinkedIn, and location
- `heroStats` holds the stats row on the home section
- `experiences` holds roles, dates, bullet points, and tech tags
- `skillGroups` holds skill categories, descriptions, and where each skill was used
- `projects` holds project details, links, colors, and star-map positions

To update the resume, replace `public/Patrick_Bootchot_Resume.pdf` and keep the same file name.

## Contact

- **Website:** [patrick-dev.cloud](https://patrick-dev.cloud/)
- **Email:** [patandjisoo@gmail.com](mailto:patandjisoo@gmail.com)
- **GitHub:** [github.com/looksorn789](https://github.com/looksorn789)
- **LinkedIn:** [Pornthep (Patrick) Bootchot](https://www.linkedin.com/in/pornthep-bootchot-35401225b/)

---

© 2026 Patrick Bootchot. All rights reserved.
