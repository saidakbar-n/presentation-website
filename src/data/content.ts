import type {
  JourneyStep,
  PhilosophyPillar,
  Project,
  CoreValue,
  FutureMilestone,
  PersonalInterest,
} from "@/types";

export const journeySteps: JourneyStep[] = [
  {
    id: "uzbekistan",
    year: "—",
    title: "Uzbekistan",
    subtitle: "Tashkent",
    description: "Where curiosity and discipline started.",
    icon: "origin",
  },
  {
    id: "cs",
    year: "2023",
    title: "Computer Science",
    subtitle: "Webster University",
    description: "Foundation in systems, OOP, and software design.",
    icon: "education",
  },
  {
    id: "uzinfocom",
    year: "2024–25",
    title: "Uzinfocom",
    subtitle: "Software Engineering Trainee",
    description: "Production code with Python, Django, FastAPI, Vue.js, PostgreSQL.",
    icon: "work",
  },
  {
    id: "switzerland",
    year: "2025",
    title: "Switzerland",
    subtitle: "Exchange semester",
    description: "Four months that showed me the engineering culture I want.",
    image: "/images/switzerland-matterhorn.png",
    icon: "mountain",
  },
  {
    id: "deutschlify",
    year: "2025",
    title: "Deutschlify",
    subtitle: "Founder",
    description: "AI platform for German exam preparation.",
    icon: "product",
  },
  {
    id: "converza",
    year: "2025–26",
    title: "Converza",
    subtitle: "Co-Founder & Tech Lead",
    description: "LLM agents automating marketing workflows.",
    icon: "ai",
  },
  {
    id: "german",
    year: "2025–26",
    title: "Learning German",
    subtitle: "B1 → B2",
    description: "Goethe B2 target: December 2026.",
    icon: "language",
  },
  {
    id: "germany",
    year: "2026",
    title: "Building in Germany",
    subtitle: "Next chapter",
    description: "Ausbildung, deep fundamentals, and a long-term engineering career.",
    icon: "target",
  },
];

export const projects: Project[] = [
  {
    id: "deutschlify",
    name: "Deutschlify",
    role: "Founder",
    tagline: "AI German exam prep",
    description: "Goethe, TELC, TestDaF, DSH — realistic simulations, personalized practice.",
    technologies: ["Python", "FastAPI", "PostgreSQL", "OpenAI"],
    lessons: ["Architecture first. Validate every AI output."],
    impact: "Structured prep for high-stakes certification.",
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    accent: "text-emerald-400",
  },
  {
    id: "converza",
    name: "Converza",
    role: "Co-Founder & Tech Lead",
    tagline: "AI agents for agencies",
    description: "Autonomous workflows replacing repetitive marketing tasks.",
    technologies: ["Python", "FastAPI", "LLM APIs"],
    lessons: ["Own the system, not just features."],
    impact: "Less manual work, more creative focus.",
    gradient: "from-violet-500/20 via-purple-500/10 to-transparent",
    accent: "text-violet-400",
    url: "https://getconverza.com",
  },
  {
    id: "uzbek-sign",
    name: "Sign Language Recognition",
    role: "AI Developer @ Uzinfocom",
    tagline: "Inclusive communication",
    description: "ML model for Uzbek Sign Language recognition.",
    technologies: ["Python", "TensorFlow", "PyTorch"],
    lessons: ["Data quality is engineering."],
    impact: "Better communication for hearing-impaired communities.",
    gradient: "from-sky-500/20 via-blue-500/10 to-transparent",
    accent: "text-sky-400",
  },
];

export const philosophyPillars: PhilosophyPillar[] = [
  {
    id: "learning",
    title: "Continuous Learning",
    summary: "Never stop.",
    description: "Every challenge is a chance to improve — not just ship faster.",
    icon: "book",
  },
  {
    id: "ownership",
    title: "Ownership",
    summary: "Finish what you start.",
    description: "See problems through. Don't hand off when it gets hard.",
    icon: "shield",
  },
  {
    id: "thinking",
    title: "Critical Thinking",
    summary: "Understand first.",
    description: "Know the problem before writing code.",
    icon: "brain",
  },
  {
    id: "ai",
    title: "Responsible AI",
    summary: "AI assists. You decide.",
    description: "Productivity tools don't replace understanding why code works.",
    icon: "sparkles",
  },
  {
    id: "meaning",
    title: "Meaningful Software",
    summary: "Real problems only.",
    description: "Build what helps people — not what's merely interesting.",
    icon: "heart",
  },
];

export const coreValues: CoreValue[] = [
  {
    id: "courage",
    title: "Courage",
    story: "Chose Ausbildung over the easy path — invested in fundamentals.",
  },
  {
    id: "ownership",
    title: "Ownership",
    story: "Founded products. Led architecture. Shipped to production.",
  },
  {
    id: "innovation",
    title: "Innovation",
    story: "AI-native products — validated, not just generated.",
  },
  {
    id: "teamwork",
    title: "Teamwork",
    story: "Agile teams, hackathons, co-founding under pressure.",
  },
  {
    id: "integrity",
    title: "Integrity",
    story: "Honest communication. Independent validation. No shortcuts.",
  },
  {
    id: "respect",
    title: "Respect",
    story: "Inclusive tech — sign language AI, accessible learning tools.",
  },
];

export const futureMilestones: FutureMilestone[] = [
  {
    year: "2026–29",
    title: "Ausbildung in Germany",
    description: "Fundamentals + hands-on engineering.",
  },
  {
    year: "2029–32",
    title: "Software Engineer",
    description: "Scalable systems, growing responsibility.",
  },
  {
    year: "2032+",
    title: "Senior Engineer",
    description: "Systems that improve millions of lives.",
  },
];

export const personalInterests: PersonalInterest[] = [
  {
    id: "nature",
    title: "Nature",
    description: "Patience and perspective.",
    image: "/images/alpine-lake.png",
  },
  {
    id: "hiking",
    title: "Hiking",
    description: "Switzerland and beyond.",
    image: "/images/switzerland-matterhorn.png",
  },
  {
    id: "gym",
    title: "Gym",
    description: "Discipline through daily reps.",
    image: "/images/gym.png",
    imageClassName: "object-cover object-center",
  },
  {
    id: "german",
    title: "Learning German",
    description: "B1 → B2 by Dec 2026.",
    image: "/images/learning-german.png",
    imageClassName: "object-cover object-center",
  },
  {
    id: "documenting",
    title: "Documenting My Journey",
    description: "Videos and notes — learn in public.",
    image: "/images/documenting-journey.png",
    imageClassName: "object-cover object-top",
  },
];

export const whyGermanyNarrative = [
  {
    heading: "Switzerland changed my direction",
    body: "Four months in the DACH region showed me engineering built on quality, trust, and responsibility. I committed to Germany — and to learning German.",
  },
];

export const whyAusbildungNarrative = [
  {
    heading: "Not a step back",
    body: "I have university, internship, and startup experience. I chose Ausbildung because I know what I still need to learn.",
  },
  {
    heading: "Three years of depth",
    body: "Theory + practice. Fundamentals that outlast any framework.",
  },
];
