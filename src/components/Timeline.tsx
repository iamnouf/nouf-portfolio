"use client";
import { EXPERIENCES } from "../data/experience";

export default function Timeline() {
  return (
    <section className="timeline-section container" id="experience">
      <header className="tl-header">
        <h2 className="tl-title">Experience</h2>
        <p className="tl-sub">My professional journey and roles.</p>
      </header>

      <div className="timeline">
        {EXPERIENCES.map((exp, i) => (
          <article className="tl-item fade-up" key={exp.title + i}>
            {/* dot */}
            <span aria-hidden className="tl-dot" />
            {/* card */}
            <div className="tl-card">
              <div className="tl-row tl-title-row">
                <h3 className="tl-role">{exp.title}</h3>
                {exp.employmentType && (
                  <span className="tl-chip">{exp.employmentType}</span>
                )}
              </div>

              <div className="tl-row tl-meta">
                <span className="tl-company">{exp.company}</span>
                {exp.period && <span className="tl-sep">•</span>}
                <span className="tl-period">{exp.period}</span>
                {exp.location && <>
                  <span className="tl-sep">•</span>
                  <span className="tl-location">{exp.location}</span>
                </>}
              </div>

              <ul className="tl-list">
                {exp.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
