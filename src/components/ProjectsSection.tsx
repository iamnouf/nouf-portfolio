"use client";

import { PROJECTS } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";

export default function ProjectsSection() {
  return (
       <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >

    <section id="projects" className="projects-section container">
      <header className="tl-header">
        <h2 className="tl-title"> Projects</h2>
        <p className="tl-sub">A few things I’ve built & shipped</p>
      </header>

      <div className="projects-grid">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.id} p={p} />
        ))}
      </div>
    </section>
    </motion.section>
  );
}
