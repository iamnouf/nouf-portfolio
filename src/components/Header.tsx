// Instead of writing the same HTML in every page, you write it once in a component file, and then reuse it everywhere.

import Link from "next/link";

export default function Header() {
  return (
    <header style={{ padding: "20px", display: "flex", gap: "50px" }}>

      <div className="brand">&lt; Nouf Portfolio /&gt;</div>

        <Link href="/" id="home">.Home</Link>
        <Link href="/about" id="about">.About Me</Link>
        <Link href="/skills" id="skills">.Skills</Link>
        <Link href="/projects" id="project">.My Work</Link>
        <Link href="/contact" id="contact">.Contact Me</Link>

    </header>
  );
}
