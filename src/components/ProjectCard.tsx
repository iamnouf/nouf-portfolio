"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "@/data/projects";

type Props = { p: Project };

export default function ProjectCard({ p }: Props) {
  return (

    <motion.article
      layout
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="proj-card"
    >
      <div className="proj-cover">
        <Image
          src={p.cover}
          alt={p.title}
          fill
          sizes="(max-width: 900px) 100vw, 33vw"
          priority={false}
          className="obj"
        />
      </div>

      <div className="proj-body">
        <h3 className="proj-title">{p.title}</h3>
        <p className="proj-blurb">{p.blurb}</p>

        <div className="proj-tech">
          {p.tech.map((t) => (
            <span key={t} className="chip mini">{t}</span>
          ))}
        </div>

        <div className="proj-actions">
          {p.links?.demo && (
            <a className="btn primary sm" href={p.links.demo} target="_blank" rel="noreferrer">
              Live Demo
            </a>
          )}
          {p.links?.github && (
            <a className="btn linear sm" href={p.links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          )}
          {p.links?.caseStudy && (
            <a className="btn linear sm" href={p.links.caseStudy}>
              Case Study
            </a>
          )}
        </div>
      </div>
    </motion.article>

  );
}
