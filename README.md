# ANSHUL — THE SERIES

### A Cinematic Portfolio | AI · Machine Learning · Data Science · Generative AI

A cinematic, streaming-inspired developer portfolio built for **Anshul Deep Bajpai**, a B.Tech Computer Science and Engineering student specializing in Artificial Intelligence and Machine Learning.

Explore my journey through AI/ML, Data Science, Generative AI, Data Analytics, Computer Vision, and Full-Stack Development.

Every section is an episode. Every project is an Original. The entire portfolio is designed to tell the story behind my technical journey.

> A personal portfolio with a fictional streaming-platform aesthetic. This project is not affiliated with Netflix or any other streaming service and does not use their logos.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Running the Project](#running-the-project)
- [Updating Portfolio Content](#updating-portfolio-content)
- [Profile Photo and Assets](#profile-photo-and-assets)
- [Resume Configuration](#resume-configuration)
- [Featured Project Areas](#featured-project-areas)
- [Accessibility and Performance](#accessibility-and-performance)
- [Keyboard Shortcuts](#keyboard-shortcuts)
- [Production Build](#production-build)
- [Deployment](#deployment)
- [Connect With Me](#connect-with-me)
- [License and Disclaimer](#license-and-disclaimer)

---

## Overview

**ANSHUL — THE SERIES** transforms a conventional developer portfolio into an interactive, cinematic experience.

Instead of presenting projects and skills as a static list, the application organizes professional development into seasons, episodes, featured originals, and interactive content sections.

The portfolio combines modern frontend development with motion design, responsive layouts, reusable components, and centralized portfolio data.

### Design Philosophy

- **Cinematic storytelling:** Present projects and achievements through a streaming-inspired interface.
- **Interactive exploration:** Browse technical skills, project cards, and professional milestones.
- **Data-driven content:** Manage portfolio information through a centralized TypeScript data file.
- **Responsive experience:** Support desktop, tablet, and mobile layouts.
- **Accessible interactions:** Respect reduced-motion preferences and provide keyboard-accessible controls.

---

## Features

### Interactive Portfolio Experience

- Cinematic opening sequence.
- Profile selection interface.
- Animated hero section.
- Interactive introductory highlight reel.
- Continue Exploring section.
- Season-based academic and professional journey.
- Horizontal project and episode rails.
- Featured project cards and detailed project modals.
- Interactive technical skills categories.
- Achievements and certifications section.
- Resume preview and download.
- Contact section with email, LinkedIn, and GitHub links.

### Visual Design

- Dark, cinematic interface.
- Custom typography and color palettes.
- Framer Motion animations.
- Magnetic buttons and interactive hover effects.
- Scroll-triggered transitions.
- Custom cursor interactions on compatible devices.
- Responsive portrait images.
- Reusable visual effects and layout components.

### Portfolio Content

The application can showcase:

- Artificial Intelligence and Machine Learning.
- Generative AI and Large Language Models.
- Retrieval-Augmented Generation (RAG).
- Data Science and Data Analytics.
- Financial analytics and business intelligence.
- Computer Vision and Natural Language Processing.
- Backend development and API-driven applications.
- Programming and algorithmic problem-solving.

---

## Technology Stack

### Frontend

| Technology | Purpose |
|---|---|
| React 18 | Component-based user interface |
| TypeScript | Type safety and maintainable application code |
| Vite 6 | Development server and production build |
| Tailwind CSS 4 | Utility-first styling |
| Framer Motion 11 | Animations and interactive transitions |
| Lenis | Smooth scrolling |

### Development Areas

| Domain | Focus |
|---|---|
| Artificial Intelligence | Intelligent applications and AI systems |
| Machine Learning | Predictive models and applied ML |
| Generative AI | LLM applications, RAG, and AI agents |
| Data Science | Data preparation, analysis, and visualization |
| Data Analytics | Business intelligence and financial analytics |
| Computer Vision | Image processing and visual AI applications |
| Web Development | React interfaces and API-driven applications |
| Programming | Python, C++, Java, and problem-solving |

---

## Project Structure

The following structure describes the main directories and files used by the portfolio.

```text
anshul-ai-ml-portfolio/
│
├── public/
│   ├── assets/
│   │   ├── portrait-420.webp
│   │   ├── portrait-720.webp
│   │   ├── portrait-1100.webp
│   │   └── Anshul_Deep_Bajpai_Resume.pdf
│   │
│   └── favicon.svg
│
├── scripts/
│   └── build-images.mjs
│
├── src/
│   ├── data/
│   │   └── portfolio.ts
│   │
│   ├── components/
│   │   ├── OpeningSequence.tsx
│   │   ├── ProfileSelector.tsx
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── PlayIntro.tsx
│   │   ├── ContinueWatching.tsx
│   │   ├── About.tsx
│   │   ├── Seasons.tsx
│   │   ├── EpisodeCard.tsx
│   │   ├── Originals.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectModal.tsx
│   │   ├── TopPicks.tsx
│   │   ├── Skills.tsx
│   │   ├── Achievements.tsx
│   │   ├── ResumeSection.tsx
│   │   ├── ResumeModal.tsx
│   │   ├── FinalCTA.tsx
│   │   ├── CustomCursor.tsx
│   │   ├── Poster.tsx
│   │   ├── Rail.tsx
│   │   ├── Scene.tsx
│   │   └── fx.tsx
│   │
│   ├── hooks/
│   │   ├── sectionProgress.ts
│   │   ├── smoothScroll.ts
│   │   └── useMedia.ts
│   │
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
│
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

**Note:** This is a documentation-oriented overview of the main project files. Your local repository may contain additional components, configuration files, or hooks. Keep the README synchronized with the actual filenames in your project.

---

## Getting Started

### Prerequisites

Install the following software before running the project:

- [Node.js](https://nodejs.org/) — version 18 or later, subject to your installed Vite version's requirements.
- npm — included with Node.js.
- Git — optional if downloading the source code directly.

Verify your installation:

```bash
node --version
npm --version
git --version
```

### Clone the Repository

```bash
git clone https://github.com/anshuldeepbajpai-dhoni/anshul-ai-ml-portfolio.git
```

Navigate to the project directory:

```bash
cd anshul-ai-ml-portfolio
```

If you downloaded the project as a ZIP file, extract it and open the extracted project directory in your terminal.

### Install Dependencies

```bash
npm install
```

This installs the dependencies declared in `package.json`.

---

## Running the Project

Start the Vite development server:

```bash
npm run dev
```

Vite will print a local URL in the terminal, typically:

```text
http://localhost:5173/
```

Open that address in your browser.

The development server supports hot module replacement, allowing many source changes to appear without manually restarting the application.

---

## Updating Portfolio Content

### Centralized Portfolio Data

**Most portfolio content is managed through `src/data/portfolio.ts`.**

This file acts as the primary data source for the profile, projects, technical skills, achievements, certifications, and journey sections.

| Content | Data location |
|---|---|
| Name, introduction, email, and profile links | `profile` |
| Project titles, descriptions, technologies, and GitHub URLs | `projects` |
| Achievements | `achievements` |
| Certifications | `certifications` |
| Technical skill categories | `skillCategories` |
| Skill evidence | `skillEvidence` |
| Academic and professional journey | `seasons` |
| Featured projects | `topPicks` |
| Introductory highlight reel | `introSlides` |
| Viewer profiles | `viewerProfiles` |
| Opening studio card label | `profile.originalLabel` |

### Adding a Project

Add a project object to the existing `projects` array in `src/data/portfolio.ts`.

Example:

```typescript
{
  id: 'example-ai-project',
  title: 'Example AI Project',
  year: '2026',
  genre: 'Artificial Intelligence • Machine Learning',
  logline: 'A concise description of the project and the problem it addresses.',
  stack: ['Python', 'Machine Learning', 'FastAPI'],
  build: [
    'Implemented the main application workflow.',
    'Integrated the required machine learning components.',
  ],
  features: [
    'Data processing',
    'Model inference',
    'Interactive results',
  ],
  metrics: [
    {
      value: 'Project Metric',
      label: 'Description',
    },
  ],
  github: 'https://github.com/your-username/your-repository',
  palette: {
    from: '#071a16',
    via: '#14532d',
    to: '#05080d',
    accent: '#46e3a8',
  },
  motif: 'shield',
},
```

Replace the example details with information that accurately reflects your implementation. Ensure that the project ID is unique and that the `motif` value is supported by the existing project-art component.

### Updating the Journey

The `seasons` array contains the episode-based journey.

Each episode follows the structure used by the existing data model:

```typescript
{
  code: 'S01 E01',
  title: 'The Engineer',
  description: 'A description of this stage of the journey.',
  tags: ['Python', 'AI', 'Problem Solving'],
  runtime: '2026',
  palette: violet,
},
```

Follow the existing season numbering and palette definitions when adding episodes.

### Updating Contact Information

Edit the `profile` object in `src/data/portfolio.ts`.

Keep the email, LinkedIn URL, GitHub URL, and portfolio URL accurate. Contact buttons in the interface use these values to construct their destinations.

---

## Profile Photo and Assets

Portfolio images are stored in:

```text
public/assets/
```

The responsive portrait files used by the interface are:

| File | Intended use |
|---|---|
| `portrait-420.webp` | Smaller displays |
| `portrait-720.webp` | Standard responsive portrait |
| `portrait-1100.webp` | Larger displays |

If the image-generation script is configured, source images can be processed into optimized WebP assets.

Check the available scripts:

```bash
npm run
```

If `images` is listed in the output, run:

```bash
npm run images
```

This script should be used only when the corresponding image-generation command is present in your `package.json` and the expected source images are available.

Keep all image paths consistent with the paths referenced in your React components and portfolio configuration.

---

## Resume Configuration

Place your resume PDF in:

```text
public/assets/Anshul_Deep_Bajpai_Resume.pdf
```

Ensure the resume path configured in the application matches the actual filename.

For example, a component might reference:

```typescript
'/assets/Anshul_Deep_Bajpai_Resume.pdf'
```

If you replace the resume or change its filename, update the relevant configuration or component.

Before publishing, verify that:

- The PDF opens correctly.
- The download button points to the correct file.
- The displayed resume is current.
- The PDF does not contain outdated personal or academic information.

---

## Featured Project Areas

The portfolio showcases projects across several technical domains.

### Generative AI

LLM-powered applications, retrieval-augmented generation, intelligent assistants, and agentic workflows.

### Machine Learning

Classification, prediction, model evaluation, and applied machine learning.

### Data Science

Exploratory data analysis, statistical analysis, feature engineering, and visualization.

### Data Analytics

Financial analytics, SQL-based data exploration, business intelligence, and interactive dashboards.

### Computer Vision

Image processing, face analysis, emotion recognition, and visual AI applications.

### Network Security

Network packet inspection and traffic analysis, where supported by the implementation of the relevant project.

### Full-Stack Development

React interfaces, REST APIs, backend services, and data-driven applications.

Project descriptions, technologies, repository links, and metrics should reflect the actual work completed.

---

## Accessibility and Performance

The portfolio incorporates several accessibility and performance considerations.

- Respects the user's `prefers-reduced-motion` setting where implemented.
- Provides responsive layouts for different screen sizes.
- Uses keyboard-focus styles on interactive elements where implemented.
- Supports Escape-key dismissal for supported overlays.
- Provides touch-friendly project rails and controls.
- Uses responsive WebP images.
- Applies scroll-based animation and visual effects.
- Uses reusable React components to organize the interface.

Accessibility and performance behavior may vary by component. Test keyboard navigation, touch interactions, and reduced-motion behavior before deployment.

---

## Keyboard Shortcuts

The application supports keyboard interactions in relevant components.

| Action | Shortcut |
|---|---|
| Skip the opening sequence | `Enter` or `Esc`, where implemented |
| Pause or resume the intro reel | `Space`, when the reel has focus or handles the shortcut |
| Navigate intro slides | `←` and `→`, where implemented |
| Close supported overlays | `Esc` |

Exact behavior depends on the implementation of each component. Check the corresponding source files if you modify keyboard handlers.

---

## Production Build

Create a production build:

```bash
npm run build
```

This command runs the TypeScript build and Vite production bundler, as configured in `package.json`.

Preview the generated production build locally:

```bash
npm run preview
```

Vite will print a local preview URL.

The generated static website is written to:

```text
dist/
```

**Important:** Resolve TypeScript errors before deployment. Do not publish a build that fails the configured production checks.

---

## Deployment

The generated static site can be deployed to compatible hosting platforms.

### Vercel

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Select Vite as the framework if it is not detected automatically.
4. Set the build command to `npm run build`.
5. Set the output directory to `dist`.
6. Deploy the application.

### Netlify

1. Connect the GitHub repository.
2. Configure the build command as `npm run build`.
3. Set the publish directory to `dist`.
4. Deploy the application.

### Other Hosting Platforms

GitHub Pages and other static hosting providers can also be used. Check the platform's requirements for Vite routing, asset paths, and deployment configuration before publishing.

After deployment, verify that all images, resume links, project repositories, and contact buttons work correctly.

---

## Connect With Me

**Anshul Deep Bajpai**

B.Tech — Computer Science and Engineering  
Specialization: Artificial Intelligence and Machine Learning

- **GitHub:** [anshuldeepbajpai-dhoni](https://github.com/anshuldeepbajpai-dhoni)
- **LinkedIn:** [Anshul Deep Bajpai](https://www.linkedin.com/in/anshuldeepbajpai-441b1b37b/)
- **Email:** [anshuldeepbajpai@gmail.com](mailto:anshuldeepbajpai@gmail.com)
- **Portfolio:** [anshuldeepbajpai-portfolio.vercel.app](https://anshuldeepbajpai-portfolio.vercel.app/)

---

## License and Disclaimer

This project is a personal developer portfolio with a fictional streaming-platform-inspired interface.

It is not affiliated with Netflix or any other streaming service.

All project descriptions, photographs, credentials, and external links should belong to or be authorized for use by the portfolio owner.

If you intend to distribute this project, review the licenses of its dependencies and any third-party assets included in the repository.

---

## Final Note

**ANSHUL — THE SERIES**

*Every project tells a story. Every episode moves the journey forward.*

Built with React, TypeScript, creativity, and a passion for Artificial Intelligence and Machine Learning.