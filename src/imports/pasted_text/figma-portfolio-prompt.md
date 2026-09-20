================================================================
FIGMA MAKE AI — MASTER PORTFOLIO PROMPT
For: Tangella Manoj | Backend Engineer | 2026
================================================================

ROLE AND GOAL
----------------------------------------------------------------
You are a senior UI/UX designer and frontend developer building
a world-class personal portfolio for a backend software engineer
in 2026. The portfolio must feel premium, modern, and technically
credible — the kind that gets noticed by HPE, Razorpay, Flipkart,
and Swiggy recruiters in under 10 seconds.

================================================================
VISUAL IDENTITY
================================================================

THEME: Dark mode first
Background:     #0A0A0F  (near black, not pure black)
Surface cards:  #111118  (slightly lifted)
Border:         #1E1E2E  (subtle separator)

ACCENT COLORS (pick ONE gradient, use consistently):
Option A — Electric Blue + Cyan:
  Primary:   #2979FF
  Secondary: #00E5FF
  Gradient:  linear-gradient(135deg, #2979FF 0%, #00E5FF 100%)

Option B — Emerald + Teal (fintech feel):
  Primary:   #00C896
  Secondary: #0084FF
  Gradient:  linear-gradient(135deg, #00C896 0%, #0084FF 100%)

USE Option A for HPE applications. Use Option B for fintech
companies (Razorpay, Groww, Zerodha).

TYPOGRAPHY:
  Headings:   Inter Bold or Space Grotesk Bold
  Body:       Inter Regular, 16px, line-height 1.7
  Code/Tech:  JetBrains Mono (for skill tags and code snippets)
  Sizes:      Hero name 72px | Section titles 40px | Body 16px

DESIGN STYLE: Glassmorphism with subtle depth
  Cards use: backdrop-filter blur(12px), background rgba(255,255,255,0.04)
  Subtle gradient borders on hover: 1px solid with accent gradient
  NO flat cards, NO harsh shadows — everything uses soft glow

================================================================
LAYOUT AND SECTIONS — EXACT ORDER
================================================================

----------------------------------------------------------------
SECTION 1: NAVIGATION (Fixed top, transparent → blurs on scroll)
----------------------------------------------------------------
Left:  TANGELLA MANOJ  (name as logo, Space Grotesk Bold)
Right: About | Experience | Projects | Skills | Contact
       + "Download Resume" button (accent gradient, pill shape)

On scroll: nav background becomes rgba(10,10,15,0.85) with
           backdrop-filter blur(20px)

----------------------------------------------------------------
SECTION 2: HERO (Full viewport height, centered)
----------------------------------------------------------------
Layout: Two column — Left text, Right animated visual

LEFT COLUMN:
  Line 1 (small caps, accent color): SOFTWARE ENGINEER
  Line 2 (72px Bold): Hi, I'm
  Line 3 (72px Bold, gradient text): Tangella Manoj
  Line 4 (20px, muted): I build distributed systems, debug
           production failures, and optimize for scale.
  Line 5 (18px, muted gray): 1+ year · Fintech Production · Java

  Two buttons:
  [View My Work →]  — accent gradient fill, pill, 48px height
  [Let's Connect]   — ghost/outline, same pill shape

  Below buttons — 3 stat counters with subtle animation on load:
  [ 90% ] Latency reduced   [ 75% ] Faster batch   [ 300+ ] LeetCode

RIGHT COLUMN (visual element — pick one):
  Option A: Animated terminal window showing:
    $ java -jar ezfinanz-backend.jar
    > Loaded 12 REST API endpoints
    > Disbursement pipeline: ACTIVE
    > KYC service: RUNNING
    > Uptime: 99.9%
    (text types out on loop with cursor blink)

  Option B: Abstract 3D isometric illustration of
            microservices boxes connected with lines,
            glowing in accent color

Scroll indicator at bottom: animated chevron pointing down

----------------------------------------------------------------
SECTION 3: ABOUT (Two column)
----------------------------------------------------------------
LEFT: Profile photo placeholder (circle, gradient border ring)
      OR abstract avatar with initials TM in gradient circle

RIGHT:
  Title: About Me
  Paragraph 1:
    "I build systems that work under real pressure. Right now I am
    one of two engineers owning the entire backend of a live fintech
    product — APIs, database, production incidents, and everything
    in between."

  Paragraph 2:
    "I care about code that is simple, maintainable, and fast. Not
    just working — but working well at scale. I spend time outside
    work on system design, LeetCode (300+ problems, rating 1,446),
    and building projects that mirror real production environments."

  Two highlight pills below text:
  [ B.Tech CSE — RGUKT Nuzvid | CGPA 8.9 ]
  [ Open to roles in Bengaluru / Remote ]

----------------------------------------------------------------
SECTION 4: EXPERIENCE (Timeline layout, left-aligned)
----------------------------------------------------------------
Section title: Where I Have Worked

Timeline line: thin vertical accent gradient line on left

Each entry is a glass card with:
  - Company name BOLD + "FinTech / NBFC" tag pill
  - Role in accent color
  - Date range right-aligned
  - 2-3 bullet points from resume
  - Tech tags at bottom (Java, Hibernate, MySQL, REST APIs etc.)

ENTRIES:

Entry 1:
  Company:  Ezfinanz
  Badge:    FinTech · NBFC (green pill)
  Role:     Junior Software Engineer — Full-time
  Dates:    Sep 2025 - Present
  Bullets:
    • Architected asynchronous bulk disbursement pipeline —
      cut transaction latency by 90% (500ms → 50ms)
    • Refactored batch scheduler to multithreaded execution —
      8 hours → 2 hours, 75% throughput gain
    • Engineered digital KYC service eliminating 100% of
      manual document handling across all onboarding journeys
    • Resolved 8+ critical production failures with same-day fixes
  Tags: [Java] [REST APIs] [Hibernate ORM] [MySQL] [Multithreading]

Entry 2:
  Company:  Ezfinanz
  Badge:    Internship (blue pill)
  Role:     Junior Software Engineer — Internship
  Dates:    Feb 2025 - Aug 2025
  Bullets:
    • Built 5+ backend features with optimized SQL queries
    • Contributed to 3+ production support cycles
  Tags: [Java] [SQL] [Backend]

Entry 3:
  Company:  Edubot Software Services
  Badge:    Internship (gray pill)
  Role:     Web Development Intern
  Dates:    May 2024 - Jul 2024
  Bullets:
    • Delivered 2 full stack web modules, resolved 15+ bugs
  Tags: [Java] [JDBC] [HTML] [CSS]

----------------------------------------------------------------
SECTION 5: PROJECTS (3-column card grid)
----------------------------------------------------------------
Section title: Things I Have Built
Subtitle: Real systems. Not tutorials.

Each project card (glass card, hover lifts with glow):
  - Project name (Bold, 20px)
  - One line description
  - 2-line impact statement
  - Tech stack as pill tags (JetBrains Mono, small)
  - "View on GitHub →" link (accent color, no underline)

CARD 1:
  Title:  Distributed Loan Management System
  Desc:   Cloud-ready microservices backend for fintech workflows
  Impact: 4 independent Spring Boot services · JWT auth ·
          Dockerized for single-command cloud deployment
  Tags:   [Java] [Spring Boot] [Docker] [REST APIs] [JWT] [MySQL]

CARD 2:
  Title:  Real-Time Event Processing Pipeline
  Desc:   High-throughput distributed data pipeline with Kafka
  Impact: 10,000+ events/minute · Fault-tolerant delivery ·
          Consumer group scaling
  Tags:   [Java] [Apache Kafka] [Spring Boot] [Docker] [MySQL]

CARD 3:
  Title:  DevOps Automation and Monitoring Platform
  Desc:   Full CI/CD pipeline with real-time observability
  Impact: 100% automated build/test/deploy ·
          Prometheus + Grafana dashboards
  Tags:   [GitHub Actions] [Docker] [Prometheus] [Grafana] [Python]

Hover state on card:
  - Slight upward translate (translateY -4px)
  - Subtle accent glow border appears
  - "View on GitHub →" arrow animates right

----------------------------------------------------------------
SECTION 6: SKILLS (Grouped, clean grid)
----------------------------------------------------------------
Section title: What I Work With

Layout: 3 columns of category groups

Each group:
  Category label (accent color, small caps, 12px)
  Skill pills below (glass surface, JetBrains Mono, 13px)

GROUP 1 — Languages
  [Java] [Python] [SQL] [C] [JavaScript]

GROUP 2 — Backend and Microservices
  [Spring Boot] [REST APIs] [Microservices]
  [Hibernate ORM] [Apache Kafka] [Web Services]

GROUP 3 — Cloud and DevOps
  [Docker] [GitHub Actions] [CI/CD]
  [Linux] [Distributed Computing] [Cloud Deployment]

GROUP 4 — Databases
  [MySQL] [SQL Query Optimization] [Schema Design]

GROUP 5 — Observability and Security
  [Prometheus] [Grafana] [JWT Auth] [Centralized Logging]

GROUP 6 — Core Skills
  [System Design] [Production Debugging]
  [Performance Optimization] [OOP] [DSA]

----------------------------------------------------------------
SECTION 7: CONTACT (Centered, minimal)
----------------------------------------------------------------
Section title: Let's Build Something
Subtitle: Open to full-time roles and collaborations

Center-aligned layout:
  Large email link: tangellamanoj9@gmail.com
  (accent gradient text, 28px, clickable mailto)

Below: 3 social icon buttons (pill shaped, ghost style):
  [LinkedIn ↗]   [GitHub ↗]   [Email ↗]

Closing line (small, muted):
  "Currently based in Hyderabad · Open to Bengaluru / Remote"

----------------------------------------------------------------
SECTION 8: FOOTER
----------------------------------------------------------------
Left:  TANGELLA MANOJ
Right: Designed and built from scratch · 2026
Center (very small, muted): Made with Java in the backend ☕

================================================================
INTERACTIONS AND ANIMATIONS
================================================================

PAGE LOAD:
  - Hero text fades in line by line (stagger 150ms each)
  - Stat counters count up from 0 on load
  - Terminal text types out character by character

SCROLL ANIMATIONS:
  - Each section fades in + slides up 20px as it enters viewport
  - Timeline cards slide in from left
  - Project cards pop in with stagger (100ms between each)
  - Skill pills appear with a ripple cascade

HOVER STATES:
  - Nav links: accent underline slides in from left
  - Buttons: subtle glow pulse
  - Project cards: lift + glow border
  - Social links: accent color fill animates in

CURSOR (optional, adds premium feel):
  - Custom cursor dot that follows mouse
  - Expands to ring shape when hovering over links

================================================================
MOBILE RESPONSIVE RULES
================================================================

< 768px (Mobile):
  - Hero: single column, text centered, visual hidden
  - Nav: hamburger menu, full screen overlay
  - Projects: single column stack
  - Skills: 2 column grid
  - Hero name: 44px
  - Stat counters: horizontal scroll row

768–1024px (Tablet):
  - Projects: 2 column grid
  - About: stacked (image top, text below)
  - Experience: full width cards

================================================================
TECHNICAL NOTES FOR FIGMA MAKE
================================================================

Use auto layout throughout — no fixed pixel positions
Use variables for all colors (easy theme switching)
Create components for: NavBar, ProjectCard, ExperienceCard,
  SkillPill, StatCounter, SectionTitle, Button
Prototype connections: Nav links scroll to sections
Use overflow hidden on section containers
Export ready: all assets at 2x resolution

================================================================
WHAT TO AVOID
================================================================

NO: Light mode (dark is non-negotiable for tech portfolios 2026)
NO: Stock photos or generic illustrations
NO: Cluttered layout — breathing space is the premium signal
NO: More than 2 font families
NO: Auto-play videos or heavy GIFs
NO: Skill bar percentages (they mean nothing and look amateur)
NO: Testimonials section (you don't have any yet)
NO: Blog section (adds complexity, skip for now)

================================================================
FINAL NOTE
================================================================

The portfolio must answer one question in under 10 seconds:
"Can this engineer build real production systems?"

Every section answers YES:
  → Experience proves production ownership
  → Metrics prove real impact (90%, 75%, 100%)
  → Projects prove distributed systems knowledge
  → LeetCode 1,446 proves algorithmic thinking
  → Design quality proves attention to detail

================================================================