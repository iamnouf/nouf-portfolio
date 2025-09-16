"use client";
import { useMemo, useState } from "react";
import Image from "next/image";
import {
  FaHtml5, FaCss3Alt, FaPython, FaJava, FaReact,
  FaGitAlt, FaGithub, FaFigma
} from "react-icons/fa";
import {
  SiJavascript, SiDart, SiFlutter, SiMysql, SiMongodb, SiFirebase,
  SiSelenium, SiJunit5, SiJira, SiAdobephotoshop, SiAdobexd,
  SiTrello, SiNextdotjs, SiNodedotjs, SiTailwindcss,
  SiPostman, SiTestinglibrary, SiApachejmeter, SiAdobeillustrator
} from "react-icons/si";
import type { ReactNode } from "react"; 
import { motion } from "framer-motion";

/* ------------------ DATA ------------------- */
const SKILLS: Record<string, { label: string; icon: ReactNode }[]> = {
  Languages: [
    { label: "HTML",        icon: <FaHtml5 color="#E34F26" /> },
    { label: "CSS",         icon: <FaCss3Alt color="#1572B6" /> },
    { label: "JavaScript",  icon: <SiJavascript color="#F7DF1E" /> },
    { label: "Python",      icon: <FaPython color="#3776AB" /> },
    { label: "Java",        icon: <FaJava color="#f89820" /> },
    { label: "Dart",        icon: <SiDart color="#0175C2" /> },
  ],
  "Frameworks/Libraries": [
    { label: "React",       icon: <FaReact color="#61DAFB" /> },
    { label: "Next.js",     icon: <SiNextdotjs color="#FFFFFF" /> },
    { label: "Node.js",     icon: <SiNodedotjs color="#68A063" /> },
    { label: "Flutter",     icon: <SiFlutter color="#02569B" /> },
    { label: "TailwindCSS", icon: <SiTailwindcss color="#38B2AC" /> },
  ],
  Databases: [
    { label: "MySQL",       icon: <SiMysql color="#4479A1" /> },
    { label: "MongoDB",     icon: <SiMongodb color="#47A248" /> },
    { label: "Firebase",    icon: <SiFirebase color="#FFCA28" /> },
  ],
  Testing: [
    { label: "Selenium",    icon: <SiSelenium color="#43B02A" /> },
    { label: "TestNG",      icon: <SiTestinglibrary color="#F7A41D" /> },
    { label: "JUnit",       icon: <SiJunit5 color="#25A162" /> },
    { label: "Postman",     icon: <SiPostman color="#FF6C37" /> },
    { label: "JMeter",      icon: <SiApachejmeter color="#D22128" /> },
    { label: "Katalon",     icon: <Image src="/icons/Katalon-logo-vector.svg" alt="Katalon" width={28} height={28} /> },
    { label: "Playwright",  icon: <Image src="/icons/playwright-logo.svg" alt="Playwright" width={28} height={28} /> },
  ],
  Design: [
    { label: "Figma",       icon: <FaFigma color="#F24E1E" /> },
    { label: "Adobe XD",    icon: <SiAdobexd color="#FF61F6" /> },
    { label: "Photoshop",   icon: <SiAdobephotoshop color="#31A8FF" /> },
    { label: "Illustrator", icon: <SiAdobeillustrator color="#FF9A00" /> },
  ],
  "Other Tools": [
    { label: "Git",         icon: <FaGitAlt color="#F05032" /> },
    { label: "GitHub",      icon: <FaGithub color="#FFFFFF" /> },
    { label: "Jira",        icon: <SiJira color="#0052CC" /> },
    { label: "Trello",      icon: <SiTrello color="#0079BF" /> },
  ],
};

const TABS = ["All", ...Object.keys(SKILLS)];

/* ------------------ UI ------------------ */
export default function SkillsPage() {
  const [active, setActive] = useState<string>("All");

  const list = useMemo(() => {
    if (active === "All") {
      // flatten while keeping a nice order = the TABS order (skip "All")
      return Object.keys(SKILLS).flatMap((k) => SKILLS[k]);
    }
    return SKILLS[active] ?? [];
  }, [active]);

  return (

      <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >

    <section className="skills-section">
      <h2 className="skills-title">Technical Skills</h2>
      <p className="skills-sub">My expertise across various technologies and tools</p>

      <div className="tabs">
        {TABS.map((tab) => (
          <button
            key={tab}
            className={`tab ${active === tab ? "active" : ""}`}
            onClick={() => setActive(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="skills-grid">
        {list.map((item) => (
          <button key={`${active}-${item.label}`} className="skill-card" type="button">
            <span className="skill-icon">{item.icon}</span>
            <span className="skill-label">{item.label}</span>
          </button>
        ))}
      </div>
    </section>
            </motion.section>

  );
}
