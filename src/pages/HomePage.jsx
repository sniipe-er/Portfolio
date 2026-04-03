import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";

const featuredProject = {
  title: "CourseCampus",
  subtitle: "LMS Backend API",
  description:
    "CourseCampus is a backend-first Learning Management System API built with Django and Django REST Framework. It is designed around secure authentication, role-driven workflows, and structured REST endpoints for real product scenarios.",
  metrics: [
    { label: "User Roles", value: "3 Roles" },
    { label: "Authentication", value: "JWT" },
    { label: "Architecture", value: "API Only" },
  ],
  techStack: [
    "Django",
    "Django REST Framework",
    "SQLite",
    "SimpleJWT",
    "React",
  ],
  features: [
    "Custom user model with Student, Instructor, and Admin roles",
    "JWT authentication flow with access and refresh tokens",
    "Role-based permissions for course and lesson workflows",
    "Student enrollment system with gated lesson access",
    "Assignment submission support in an API-only backend",
  ],
  githubUrl: "https://github.com/sniipe-er/CourseCampus",
};

const futureProjects = [
  {
    title: "Backend Product Slot",
    status: "Next Build",
    summary:
      "Reserved for the next production-focused backend project, whether that is a multi-tenant API, internal platform, or security-aware web application.",
    tags: ["Backend Architecture", "API Design", "Production Ready"],
    cta: {
      label: "Discuss a Project",
      href: "#contact",
    },
  },
  {
    title: "Freelance API Partner",
    status: "Available Now",
    summary:
      "Open to remote backend freelance collaborations across Europe, with a focus on Django APIs, authentication flows, and clean application structure.",
    tags: ["Remote Europe", "Freelance", "Django"],
    cta: {
      label: "Contact Me",
      href: "#contact",
    },
  },
];

const skillGroups = [
  {
    title: "Backend",
    caption: "Building clean server-side logic and production-ready APIs.",
    skills: ["Django", "Django REST Framework", "REST APIs", "JWT Authentication"],
  },
  {
    title: "Database",
    caption: "Structuring reliable data layers for learning platforms and web apps.",
    skills: ["SQLite", "PostgreSQL (basic)"],
  },
  {
    title: "Tools",
    caption: "Shipping, debugging, and collaborating with modern developer workflows.",
    skills: ["Git", "GitHub", "Postman"],
  },
  {
    title: "Frontend",
    caption: "Enough frontend fluency to support and showcase backend products well.",
    skills: ["React (basic)"],
  },
];

const aboutHighlights = [
  {
    title: "Security-aware engineering",
    description:
      "My cybersecurity background shapes the way I think about authentication, access control, and backend trust boundaries.",
  },
  {
    title: "API-first backend thinking",
    description:
      "I enjoy designing REST APIs that feel predictable, maintainable, and practical for frontend teams to integrate with.",
  },
  {
    title: "Systems with clean structure",
    description:
      "I care about readable backend code, maintainable app logic, and foundations that can grow with real product requirements.",
  },
  {
    title: "Open to Europe-based remote work",
    description:
      "I am actively looking for junior backend roles and freelance opportunities where I can keep growing fast.",
  },
];

const contactDetails = {
  email: "sayfjm688@gmail.com",
  github: "https://github.com/sniipe-er",
  availability: "Available for remote backend roles and freelance work in Europe.",
  location: "Based in Morocco, open to remote work across Europe.",
};

export default function HomePage() {
  return (
    <div className="relative overflow-x-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.18),transparent_46%)]" />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection highlights={aboutHighlights} />
        <ProjectsSection
          featuredProject={featuredProject}
          futureProjects={futureProjects}
        />
        <SkillsSection skillGroups={skillGroups} />
        <ContactSection contactDetails={contactDetails} />
      </main>
      <Footer />
    </div>
  );
}
