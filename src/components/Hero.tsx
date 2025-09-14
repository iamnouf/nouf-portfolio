
export default function Hero() {
  return (
    <section  className="hero parallax">

        {/* decorative art on the right */}
        <div className="hero-art" aria-hidden="true"></div>


      <div className="container">
        <p className="kicker">Hi there 👋</p>

        <h1 className="title">I’m Nouf Alghamdi</h1>
        <h2 className="subtitle">Quality Assurance & Software Engineer</h2>

        <p className="lead">
          I make apps work, look great, and feel smooth. With a mix of QA
          expertise and a passion for design, I focus on building digital
          products that are reliable, user-friendly, and visually engaging. From
          testing and debugging to crafting clean interfaces, I enjoy turning
          ideas into real experiences that people love to use.
          
        </p>

        <div className="actions">
          <button className="btn primary" >
            Let’s Work Together 🚀
          </button>
          <button className="btn linear" >
            Download CV 📄
          </button>
        </div>

        <div className="socials">
          <a href="mailto:your@email.com">
          <img src="/icons/email.png" alt="email" width="30" height="30" />
          </a>
          <a href="https://www.linkedin.com/in/your-handle" target="_blank">
          <img src="/icons/linkedin.png" alt="linkedin" width="30" height="30" />

          </a>
          <a href="https://github.com/your-handle" target="_blank">
          <img src="/icons/github.png" alt="github" width="30" height="30" />

          </a>
        </div>
      </div>
    </section>
  );
}
