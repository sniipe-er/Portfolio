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
    "A production-minded Learning Management System backend built with Django and Django REST Framework, designed around secure authentication, role-driven workflows, and API-first product delivery.",
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
    title: "Project Slot 02",
    status: "Coming next",
    summary:
      "Reserved for the next backend product, freelance API build, or security-focused web platform.",
    tags: ["Backend Architecture", "API Design", "Deployment Ready"],
    cta: {
      label: "Start a Project",
      href: "#contact",
    },
  },
  {
    title: "Project Slot 03",
    status: "Open for work",
    summary:
      "Available for remote backend roles and freelance collaborations across Europe, with a focus on secure Django systems.",
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
    title: "Security-aware by default",
    description:
      "My cybersecurity background shapes how I think about authentication, access control, and backend trust boundaries.",
  },
  {
    title: "Focused on API quality",
    description:
      "I enjoy designing REST APIs that feel predictable, maintainable, and easy for frontend teams to build on.",
  },
  {
    title: "Open to Europe-based remote work",
    description:
      "I am actively looking for junior backend roles and freelance opportunities where I can keep growing fast.",
  },
];

const contactDetails = {
  email: "hello@sayfallahjamai.dev",
  github: "https://github.com/sniipe-er",
  availability: "Available for remote backend roles and freelance work in Europe.",
};

export default function HomePage() {
  return (
    <div className="relative overflow-x-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.18),transparent_46%)]" />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection highlights={aboutHighlights} />
        <ProjectsSection featuredProject={featuredProject} futureProjects={futureProjects} />
        <SkillsSection skillGroups={skillGroups} />
        <ContactSection contactDetails={contactDetails} />
      </main>
      <Footer />
    </div>
  );
}
