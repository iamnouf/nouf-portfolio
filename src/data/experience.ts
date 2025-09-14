
export type Experience = {
    title: string;
    company: string;
    employmentType?: string;   // e.g., "Full-time", "Internship"
    location?: string;
    period: string;            // "Oct 2024 – Present"
    bullets: string[];
  };
  
  export const EXPERIENCES: Experience[] = [
    {
      title: "Quality Assurance Engineer",
      company: "Red Bull Mobile Saudi",
      employmentType: "Full-time",
      location: "Riyadh, Saudi Arabia",
      period: "Dec. 2024 – Present",
      bullets: [
        "Conducted QA activities for telecom software systems, ensuring compliance with requirements and performance standards.",
        "Tracked and documented bugs, validating fixes and feature releases in production.",
        "Prepared QA reports and communicated findings with stakeholders to support decision-making.",

      ],
    },
    {
      title: "Quality Assurance Engineer",
      company: "Inspire for Solutions Development",
      employmentType: "Full-time",
      location: "Riyadh, Saudi Arabia",
      period: "Sep. 2022 – Dec. 2024",
      bullets: [
        "Executed manual and automated test cases for the QIWA Project, identifying defects in production and staging environments.",
        "Investigated and reported critical bugs using JIRA, collaborating with developers for timely resolution.",
        "Tracked and analyzed new releases, validating system functionality before deployments.",
        "Coordinated with product, design, and executive teams to resolve quality issues and improve user experience.",

      ],
    },
    {
        title: "Front-End Developer",
        company: "Creativity and Entrepreneurship",
        employmentType: "Full-time · Intern",
        location: "Jeddah, Saudi Arabia",
        period: "May. 2021 – July.2021",
        bullets: [
          "Developed responsive web pages using HTML, CSS, and JavaScript.",
          "Collaborated with designers to translate mockups into functional, user-friendly interfaces.",
        ],
      },
      ];
  