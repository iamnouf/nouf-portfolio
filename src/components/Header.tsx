"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import SnapContainer from "./SnapContainer";

export default function Header() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);

  // Close on ESC or click outside
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onClickOutside = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false);
            }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, []);

  return (
    
    <header className="navbar">
      <div className="nav-inner container">
        <Link href="/" className="brand">
          &lt; Nouf Portfolio /&gt;
        </Link>

        {/* Desktop links */}
        <nav className="links" aria-label="Primary" >
          <Link href="/" id="home">.Home</Link>
          <Link href="/about" id="about">.About Me</Link>
          <Link href="/skills" id="skills">.Skills</Link>
          <Link href="/projects" id="project">.My Work</Link>
          <Link href="/contact" id="contact">.Contact Me</Link>
        </nav>

        {/* Hamburger (mobile) */}
        <button
          className="menu-btn"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Backdrop */}
      {open && <div className="menu-overlay" onClick={() => setOpen(false)} />}

      {/* Mobile panel */}
      <nav
        ref={panelRef}
        className={`mobile-menu ${open ? "open" : ""}`}
        aria-label="Mobile Primary"
      >
        <Link href="/" id="home" onClick={() => setOpen(false)}>.Home</Link>
        <Link href="/about" id="about" onClick={() => setOpen(false)}>.About Me</Link>
        <Link href="/skills" id="skills" onClick={() => setOpen(false)}>.Skills</Link>
        <Link href="/projects" id="project" onClick={() => setOpen(false)}>.My Work</Link>
        <Link href="/contact" id="contact" onClick={() => setOpen(false)}>.Contact Me</Link>
      </nav>
    </header>
    
  );
}
