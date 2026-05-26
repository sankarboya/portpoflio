import React, { useEffect } from "react";
import "./portfolio.css";

const projects = [
  {
    title: "Fake Store",
    type: "E-commerce",
    description:
      "Product listing, category browsing, details pages, and API loading states built with React Router and Axios.",
    tech: ["React", "Router", "Axios", "Bootstrap"],
    icon: "bi-bag-check",
  },
  {
    title: "Food Delivery",
    type: "Ordering App",
    description:
      "Restaurant browsing, cart flow, checkout screens, authentication pages, and a clean ordering experience.",
    tech: ["React", "Context", "CSS", "Forms"],
    icon: "bi-cup-hot",
  },
  {
    title: "Weather App",
    type: "Live Dashboard",
    description:
      "Weather search interface with responsive cards, forecast details, and a focused information layout.",
    tech: ["React", "API", "Bootstrap", "UX"],
    icon: "bi-cloud-sun",
  },
];

const skills = [
  { name: "React JS", icon: "bi-atom" },
  { name: "JavaScript", icon: "bi-filetype-js" },
  { name: "CSS3", icon: "bi-filetype-css" },
  { name: "Bootstrap", icon: "bi-bootstrap-fill" },
  { name: "Responsive UI", icon: "bi-phone-flip" },
  { name: "React Router", icon: "bi-signpost-split" },
  { name: "API Integration", icon: "bi-cloud-arrow-down" },
  { name: "Form Handling", icon: "bi-ui-checks" },
];

const highlights = [
  { label: "Clean Code", icon: "bi-braces" },
  { label: "Fast UI", icon: "bi-lightning-charge-fill" },
  { label: "Web App", icon: "bi-laptop-fill" },
];

const educationItems = [
  {
    title: "SSC",
    place: "ZP High School",

    year: "10th Standard",
    description:
      "Completed secondary school education with a strong academic foundation.",
    icon: "bi-book-fill",
  },
  {
    title: "Intermediate",
    place: "Sri Satya Sai Jr College",

    year: "12th Standard",
    description:
      "Completed intermediate education and continued building problem-solving and technical basics.",
    icon: "bi-mortarboard-fill",
  },
  {
    title: "Graduation",
    place: "Sri Rama Krishna Degree College Name",
    year: "Bachelor Degree",
    description:
      "Completed graduation while improving frontend development skills through React projects.",
    icon: "bi-buildings-fill",
  },
];

const activityLevels = [
  1, 2, 3, 4, 2, 0, 1, 3, 4, 4, 2, 1, 0, 2, 3, 1, 4, 3, 2, 1, 0, 3, 4, 2,
  1, 4, 3, 0, 2, 4, 1, 3, 2, 4, 4, 1, 0, 2, 3, 4, 2, 1,
];

const interviewCards = [
  {
    title: "Pixel-perfect UI",
    text: "I care about spacing, colors, mobile layout, hover states, and readable screens.",
    icon: "bi-bounding-box-circles",
  },
  {
    title: "API-ready mindset",
    text: "I can connect React pages with API data, loading states, errors, and reusable components.",
    icon: "bi-diagram-3-fill",
  },
  {
    title: "Project ownership",
    text: "I keep improving pages until they feel complete, clean, and easy for users to understand.",
    icon: "bi-rocket-takeoff-fill",
  },
];

export function Portfolio() {
  useEffect(() => {
    const revealItems = document.querySelectorAll(".reveal");
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = pageHeight > 0 ? (scrollTop / pageHeight) * 100 : 0;

      document.documentElement.style.setProperty("--scroll-progress", `${progress}%`);
    };

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.18 }
    );

    revealItems.forEach(item => observer.observe(item));
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateProgress);
    };
  }, []);

  return (
    <main className="portfolio-page">
      <div className="scroll-progress" aria-hidden="true"></div>
      <nav className="portfolio-nav navbar navbar-expand-lg fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#home">
            <i className="bi bi-stars"></i>
            Portfolio
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#portfolioNav"
            aria-controls="portfolioNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="portfolioNav">
            <div className="navbar-nav ms-auto">
              <a className="nav-link" href="#projects">
                <i className="bi bi-kanban"></i>
                Projects
              </a>
              <a className="nav-link" href="#skills">
                <i className="bi bi-tools"></i>
                Skills
              </a>
              <a className="nav-link" href="#education">
                <i className="bi bi-mortarboard"></i>
                Education
              </a>
              <a className="nav-link" href="#contact">
                <i className="bi bi-chat-dots"></i>
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      <section className="hero-section" id="home">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-7">
              <p className="eyebrow reveal">Frontend Developer</p>
              <h1>Hi, I build clean React websites with beautiful UI.</h1>
              <p className="hero-copy reveal reveal-delay-1">
                I create responsive, modern, and user-friendly interfaces using
                React, CSS, and Bootstrap. My focus is simple: make every screen
                feel fast, useful, and polished.
              </p>
              <div className="hero-highlights reveal reveal-delay-2">
                {highlights.map(item => (
                  <span key={item.label}>
                    <i className={`bi ${item.icon}`}></i>
                    {item.label}
                  </span>
                ))}
              </div>
              <div className="hero-actions reveal reveal-delay-3">
                <a className="btn btn-primary btn-lg" href="#projects">
                  <i className="bi bi-grid-1x2-fill"></i>
                  View Work
                </a>
                <a className="btn btn-outline-light btn-lg" href="#contact">
                  <i className="bi bi-send-fill"></i>
                  Hire Me
                </a>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="profile-wrap reveal reveal-right">
                <div className="floating-icon icon-react">
                  <i className="bi bi-atom"></i>
                </div>
                <div className="floating-icon icon-code">
                  <i className="bi bi-code-slash"></i>
                </div>
                <div className="floating-icon icon-bootstrap">
                  <i className="bi bi-bootstrap-fill"></i>
                </div>
                <img
                  src={`${import.meta.env.BASE_URL}i am.jpeg`}
                  alt="Frontend developer profile"
                />
                <div className="profile-badge">
                  <i className="bi bi-palette-fill"></i>
                  <span>React</span>
                  <strong>UI Developer</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container">
          <div className="stats-grid reveal">
            <div>
              <i className="bi bi-folder-check stat-icon"></i>
              <strong>10+</strong>
              <span>Practice Projects</span>
            </div>
            <div>
              <i className="bi bi-award stat-icon"></i>
              <strong>8</strong>
              <span>Frontend Skills</span>
            </div>
            <div>
              <i className="bi bi-display stat-icon"></i>
              <strong>100%</strong>
              <span>Responsive Focus</span>
            </div>
          </div>
        </div>
      </section>

      <section className="activity-section">
        <div className="container">
          <div className="activity-panel reveal">
            <div className="activity-copy">
              <p className="eyebrow">Developer Activity</p>
              <h2>Consistent practice, real projects, better UI every day.</h2>
            </div>
            <div className="activity-board" aria-label="Coding activity grid">
              {activityLevels.map((level, index) => (
                <span
                  className={`activity-cell level-${level}`}
                  key={`${level}-${index}`}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="interview-section">
        <div className="container">
          <div className="interview-panel reveal">
            <div className="interview-copy">
              <p className="eyebrow">For Interviewers</p>
              <h2>Not just pages. I build frontend experiences with care.</h2>
              <p>
                My focus is creating interfaces that look premium, work smoothly,
                and are simple to maintain as the project grows.
              </p>
            </div>

            <div className="interview-code-card" aria-label="Frontend developer strengths">
              <div className="code-card-top">
                <span></span>
                <span></span>
                <span></span>
                <strong>frontend-profile.jsx</strong>
              </div>
              <pre>
                <code>{`const developer = {
  role: "Frontend Developer",
  stack: ["React", "CSS", "Bootstrap"],
  focus: "clean UI + responsive UX",
  readyFor: "junior frontend role"
};`}</code>
              </pre>
            </div>

            <div className="interview-card-grid">
              {interviewCards.map(card => (
                <article className="interview-card" key={card.title}>
                  <i className={`bi ${card.icon}`}></i>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-block" id="projects">
        <div className="container">
          <div className="section-heading reveal">
            <p className="eyebrow">Selected Work</p>
            <h2>Projects that show my frontend skills</h2>
          </div>
          <div className="row g-4">
            {projects.map(project => (
              <div className="col-md-6 col-xl-4" key={project.title}>
                <article className="project-card reveal">
                  <div className="project-icon">
                    <i className={`bi ${project.icon}`}></i>
                  </div>
                  <span>{project.type}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tech-list">
                    {project.tech.map(item => (
                      <small key={item}>{item}</small>
                    ))}
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block skills-section" id="skills">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-5 reveal">
              <p className="eyebrow">What I Use</p>
              <h2>React, CSS, Bootstrap, and practical UI thinking.</h2>
              <p>
                I like building interfaces that are simple to understand,
                mobile-friendly, and easy to improve as a project grows.
              </p>
            </div>
            <div className="col-lg-7 reveal reveal-right">
              <div className="skills-grid">
                {skills.map(skill => (
                  <div className="skill-pill" key={skill.name}>
                    <i className={`bi ${skill.icon}`}></i>
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block education-section" id="education">
        <div className="container">
          <div className="section-heading reveal">
            <p className="eyebrow">Education</p>
            <h2>My academic education journey</h2>
          </div>
          <div className="education-grid">
            {educationItems.map(item => (
              <article className="education-card reveal" key={item.title}>
                <div className="education-icon">
                  <i className={`bi ${item.icon}`}></i>
                </div>
                <div>
                  <span>{item.year}</span>
                  <h3>{item.title}</h3>
                  <strong>{item.place}</strong>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block experience-section">
        <div className="container">
          <div className="experience-panel reveal">
            <div>
              <p className="eyebrow">My Approach</p>
              <h2>I turn ideas into smooth, usable pages.</h2>
            </div>
            <div className="timeline">
              <div>
                <i className="bi bi-layout-text-window-reverse"></i>
                <span>Plan the layout and user flow</span>
              </div>
              <div>
                <i className="bi bi-code-slash"></i>
                <span>Build reusable React components</span>
              </div>
              <div>
                <i className="bi bi-laptop"></i>
                <span>Polish responsive design and interactions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="container">
          <div className="contact-box reveal">
            <p className="eyebrow">Contact</p>
            <h2>Let&apos;s build a beautiful frontend together.</h2>
            <p>
              I am available for React websites, portfolio pages, dashboards,
              landing pages, and UI improvements.
            </p>
            <div className="social-icons" aria-label="Portfolio social links">
              <a href="https://t.me/Sankar2608" aria-label="Telegram" target="_blank" rel="noreferrer">
                <i className="bi bi-telegram"></i>
              </a>
              <a href="https://www.linkedin.com/in/boya-sankar-1b3900255?utm_source=share_via&utm_content=profile&utm_medium=member_android" aria-label="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/itz_sankar_26_19?igsh=MTliZnowdGVuc2p4" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
            <div className="contact-actions">
              <a className="btn btn-dark btn-lg" href="mailto:boyasankar42@gmail.com">
                <i className="bi bi-envelope-fill"></i>
                Email Me
              </a>
              <a
                className="btn btn-outline-dark btn-lg"
                href="https://wa.me/916309583040"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-whatsapp"></i>
                Call Me
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
