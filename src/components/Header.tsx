"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      {/* Brand */}
      <div className="brand">&lt; Nouf Portfolio /&gt;</div>

      {/* Desktop links */}
      <nav className="links">
        <Link href="/" id="home">.Home</Link>
        <Link href="/about" id="about">.About Me</Link>
        <Link href="/skills" id="skills">.Skills</Link>
        <Link href="/projects" id="project">.My Work</Link>
        <Link href="/contact" id="contact">.Contact Me</Link>
      </nav>

      {/* Hamburger button */}
      <button
        className="menu-btn"
        aria-label="Toggle menu"
        onClick={() => setOpen(!open)}
      >
        <span />
        <span />
        <span />
      </button>

      {/* Mobile dropdown */}
      <nav className={`mobile-menu ${open ? "open" : ""}`}>
        <Link href="/" onClick={() => setOpen(false)}>.Home</Link>
        <Link href="/about" onClick={() => setOpen(false)}>.About Me</Link>
        <Link href="/skills" onClick={() => setOpen(false)}>.Skills</Link>
        <Link href="/projects" onClick={() => setOpen(false)}>.My Work</Link>
        <Link href="/contact" onClick={() => setOpen(false)}>.Contact Me</Link>
      </nav>
    </header>
  );
}
