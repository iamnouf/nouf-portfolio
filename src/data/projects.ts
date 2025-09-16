// src/data/projects.ts
export type Project = {
  id: string;
  title: string;
  blurb: string;          // وصف قصير
  tags: string[];         // تُستخدم للفلترة
  cover: string;          // في public/images/...
  tech: string[];         // تُعرض كـ Chips
  links?: {
    demo?: string;
    github?: string;
    caseStudy?: string;
  };
};

export const PROJECTS: Project[] = [
  {
    id: "qa-portal",
    title: "Bug Tracker",
    blurb:
      "bug tracking system that helps teams log, track, and resolve issues efficiently.",
    tags: ["Web", "Testing"],
    cover: "/images/projects/qa-portal.png",
    tech: ["Next.js", "Tailwind", "Playwright", "PostgreSQL"],
    
  },
  {
    id: "store-app",
    title: "Riyadh Sociaty",
    blurb:
      "designed for premium dining and lifestyle experiences in Riyadh. ",
    tags: ["Mobile", "Design"],
    cover: "/images/projects/store-app.png",
    tech: ["Flutter", "Firebase"],
  
  },
  {
    id: "portfolio",
    title: "To Do List",
    blurb:
      "task management app that helps users stay organized.",
    tags: ["Web"],
    cover: "/images/projects/portfolio.png",
    tech: ["Next.js", "Framer Motion", "Tailwind"],
  
  },
];
