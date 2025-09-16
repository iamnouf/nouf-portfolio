"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FiAtSign } from "react-icons/fi";

type Status = { type: "idle" | "loading" | "success" | "error"; msg?: string };

export default function ContactSection() {
  const [status, setStatus] = useState<Status>({ type: "idle" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim();
    const botField = (form.elements.namedItem("website") as HTMLInputElement).value; // honeypot

    if (botField) return; // bots will fill hidden field

    if (!name || !email || !message) {
      setStatus({ type: "error", msg: "Please fill all fields." });
      return;
    }

    setStatus({ type: "loading" });

    // OPTION A — Formspree (uncomment & put your endpoint):
    // const res = await fetch("https://formspree.io/f/XXXXXXXX", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ name, email, message }),
    // });

    // OPTION B — Next.js route (/api/contact)
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    if (res.ok) {
      setStatus({ type: "success", msg: "Thanks! I’ll get back to you soon." });
      form.reset();
    } else {
      const { error } = await res.json().catch(() => ({ error: "" }));
      setStatus({
        type: "error",
        msg: error || "Something went wrong. Please try again.",
      });
    }
  }

  return (

     <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Let’s Connect</h2>
      <p className="contact-sub">
I’m open to new opportunities, collaborations, and creative projects.  <br />
Feel free to reach out!        
      </p>

     <div className="contact-socials" >
          <a href="mailto:your@email.com" >
          <img src="/icons/email.png" alt="email" width="30" height="30" />
          </a>
          <a href="https://www.linkedin.com/in/your-handle" target="_blank"  rel="noreferrer">
          <img src="/icons/linkedin.png" alt="linkedin" width="30" height="30" />

          </a>
          <a href="https://github.com/your-handle" target="_blank" rel="noreferrer">
          <img src="/icons/github.png" alt="github" width="30" height="30" />

          </a>
        </div>

   
      <form onSubmit={onSubmit} className="contact-form" noValidate>
        {/* honeypot — hidden to humans */}
        <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hp" />

        <input
          name="name"
          type="text"
          placeholder="Your Full Name ✨"
          className="field"
          aria-label="Your full name"
        />
        <input
          name="email"
          type="email"
          placeholder="example@email.com ✉️"
          className="field"
          aria-label="Your email"
        />
        <textarea
          name="message"
          rows={6}
          placeholder="Great things start with a simple message"
          className="field area"
          aria-label="Your message"
        />
        <button
          className="btn-gradient"
          type="submit"
          disabled={status.type === "loading"}
        >
          {status.type === "loading" ? "SENDING…" : "SUBMIT"}
        </button>

        {status.type === "error" && <p className="form-msg error">{status.msg}</p>}
        {status.type === "success" && <p className="form-msg success">{status.msg}</p>}
      </form>
    </section>
    </motion.section>
  );
}
