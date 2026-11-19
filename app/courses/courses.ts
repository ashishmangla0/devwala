/**
 * Every course lives behind app/courses/[course].
 * Add an entry here → the hub (/courses) lists it and /courses/<slug>
 * exists automatically — no new folder needed.
 */

export type CourseLevel = "beginner" | "intermediate" | "advanced";

export type Course = {
  title: string;
  level: CourseLevel;
  /** Answer-first summary — also used as the page's meta description. */
  description: string;
  /** Bullet topics rendered as the "What you'll learn" list. */
  skills: string[];
};

/** Level sections on the hub, in display order. */
export const LEVELS = [
  {
    key: "beginner",
    label: "Beginner",
    heading: "Where do beginners start?",
    blurb: "Never written a line of code? These four courses take you from an empty file to a real, responsive website.",
  },
  {
    key: "intermediate",
    label: "Intermediate",
    heading: "What comes after the basics?",
    blurb: "You can build pages — now make them interactive, findable, accessible, and good-looking.",
  },
  {
    key: "advanced",
    label: "Advanced",
    heading: "Which courses make me job-ready?",
    blurb: "The skills freelancers and front-end teams actually pay for — architecture, conversions, and the email niche.",
  },
] as const;

export const COURSES = {
  // ---------------------------------------------------------------- beginner
  "html5-fundamentals": {
    title: "HTML5 Fundamentals",
    level: "beginner",
    description:
      "Learn the language of the web from zero — tags, structure, and semantic elements. You'll finish able to build a complete multi-page website by hand.",
    skills: [
      "Document structure & the anatomy of a page",
      "Semantic elements — header, nav, article, footer",
      "Links, images, and media",
      "Lists, tables & metadata",
      "Multi-page website project",
    ],
  },
  "css3-styling-essentials": {
    title: "CSS3 Styling Essentials",
    level: "beginner",
    description:
      "Make plain HTML look designed. Selectors, the box model, colors, and typography — the rules that control every pixel on screen.",
    skills: [
      "Selectors, specificity & the cascade",
      "Box model — margin, border, padding",
      "Colors, units & custom properties",
      "Fonts and text styling",
      "Style a real page end-to-end",
    ],
  },
  "responsive-web-design": {
    title: "Responsive Web Design",
    level: "beginner",
    description:
      "One website that works on every screen — phones, tablets, laptops. Media queries, fluid layouts, and mobile-first thinking.",
    skills: [
      "Mobile-first workflow",
      "Media queries & breakpoints",
      "Fluid images & relative units",
      "Viewport setup and device testing",
      "Ship a phone-ready site",
    ],
  },
  "flexbox-grid-mastery": {
    title: "Flexbox & Grid Mastery",
    level: "beginner",
    description:
      "The two layout systems behind every modern website. Build card grids, dashboards, and full page layouts without floating a single div.",
    skills: [
      "Flexbox — one-dimensional layouts",
      "CSS Grid — two-dimensional layouts",
      "Template areas & named lines",
      "Alignment, gaps & nesting",
      "Rebuild real UI patterns",
    ],
  },

  // ------------------------------------------------------------ intermediate
  "html5-forms-validation": {
    title: "HTML5 Forms & Validation",
    level: "intermediate",
    description:
      "Forms people can actually finish. Input types, browser-side validation, error states, and the accessibility details that matter.",
    skills: [
      "Input types & attributes",
      "Constraint Validation API",
      "Error messages & states",
      "File uploads",
      "Accessible form markup",
    ],
  },
  "css3-animations-transitions": {
    title: "CSS3 Animations & Transitions",
    level: "intermediate",
    description:
      "Motion with meaning — hover states, keyframe animations, and transforms that make interfaces feel alive without a line of JavaScript.",
    skills: [
      "Transitions & easing",
      "@keyframes animations",
      "Transforms — scale, rotate, translate",
      "Performance & prefers-reduced-motion",
      "Scroll and page-load effects",
    ],
  },
  "semantic-html-seo": {
    title: "Semantic HTML & SEO",
    level: "intermediate",
    description:
      "Markup search engines and AI assistants can actually read. Headings, landmarks, metadata, and structured data done right.",
    skills: [
      "Document outline & heading hierarchy",
      "Meta tags & Open Graph",
      "Structured data (schema.org)",
      "Crawlable internal linking",
      "Page-speed basics",
    ],
  },
  "web-accessibility": {
    title: "Web Accessibility",
    level: "intermediate",
    description:
      "Build for everyone — keyboard users, screen-reader users, everyone in between. WCAG principles you'll apply from your first line of markup.",
    skills: [
      "WCAG principles in plain language",
      "ARIA — when to use it (and when not)",
      "Keyboard navigation & focus states",
      "Color contrast & readable type",
      "Testing with real tools",
    ],
  },
  "typography-color-web": {
    title: "Typography & Color for the Web",
    level: "intermediate",
    description:
      "The design side of front-end — type scales, pairings, palettes, and contrast. Why some pages feel professional and others don't.",
    skills: [
      "Type scales & vertical rhythm",
      "Font pairing & loading",
      "Color systems and design tokens",
      "Contrast for readability",
      "Applying a brand to code",
    ],
  },

  // ---------------------------------------------------------------- advanced
  "css-architecture": {
    title: "CSS Architecture",
    level: "advanced",
    description:
      "CSS that survives real projects — naming systems, structure, and strategies that keep stylesheets maintainable as they grow.",
    skills: [
      "BEM & naming conventions",
      "Component-based styling",
      "Custom properties & theming",
      "Scaling & refactoring strategies",
      "Sass/SCSS workflow",
    ],
  },
  "css-only-interactions": {
    title: "CSS-Only Interactions",
    level: "advanced",
    description:
      "Tabs, accordions, modals, menus — built with nothing but CSS. Modern selectors like :has(), container queries, and the checkbox trick.",
    skills: [
      "Checkbox & :target tricks",
      "The :has() selector",
      "Container queries",
      "Details/summary patterns",
      "Progressive enhancement",
    ],
  },
  "landing-page-from-design": {
    title: "Landing Page from Design",
    level: "advanced",
    description:
      "Figma to production — the exact skill freelancers get paid for. Convert a design file into a pixel-accurate, responsive landing page.",
    skills: [
      "Reading a design file",
      "Layout & spacing precision",
      "Responsive adaptation",
      "Micro-interactions",
      "Handoff & browser QA",
    ],
  },
  "email-html-development": {
    title: "Email HTML Development",
    level: "advanced",
    description:
      "The unglamorous niche that pays well — HTML emails that render in Gmail, Outlook, and Apple Mail. Tables, inline CSS, and client quirks.",
    skills: [
      "Table-based layouts",
      "Inline CSS strategies",
      "Outlook & client quirks",
      "Dark mode support",
      "Testing across email clients",
    ],
  },
  "portfolio-website-capstone": {
    title: "Portfolio Website Capstone",
    level: "advanced",
    description:
      "Everything you've learned, one real project — plan, build, and deploy a portfolio site that gets you interviews.",
    skills: [
      "Information architecture",
      "Full build from scratch",
      "Performance & SEO polish",
      "Deployment",
      "Presenting your work",
    ],
  },
} satisfies Record<string, Course>;

export type CourseSlug = keyof typeof COURSES;
