import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./7thmonth.css";

const localLoveSong = `${import.meta.env.BASE_URL}WhatsApp Audio 2026-06-05 at 1.43.26 PM.mpeg`;

const floatingHearts = Array.from({ length: 18 }, (_, index) => ({
  id: index,
  left: `${(index * 11 + 7) % 100}%`,
  top: `${(index * 17 + 13) % 100}%`,
  size: 12 + (index % 4) * 6,
  delay: `${(index % 6) * 0.75}s`,
  duration: `${12 + (index % 5) * 2}s`,
}));

const loveStats = [
  { value: "7", label: "beautiful months", icon: "bi-suit-heart-fill" },
  { value: "endless", label: "reasons to smile", icon: "bi-infinity" },
  { value: "100%", label: "my heart", icon: "bi-heart-fill" },
];

const rosePetals = Array.from({ length: 14 }, (_, index) => ({
  id: index,
  left: `${(index * 9 + 6) % 100}%`,
  top: `${(index * 13 + 4) % 100}%`,
  delay: `${(index % 7) * 0.5}s`,
  duration: `${10 + (index % 4) * 1.4}s`,
  size: 10 + (index % 3) * 4,
}));

const reasons = [
  {
    title: "Your smile",
    text: "It turns ordinary days into something softer, brighter, and impossible to forget.",
    icon: "bi-stars",
  },
  {
    title: "Your voice",
    text: "Even a few words from you can calm my heart and make the whole world feel lighter.",
    icon: "bi-chat-dots-fill",
  },
  {
    title: "Your kindness",
    text: "The way you care makes love feel easy, warm, and beautifully real.",
    icon: "bi-flower1",
  },
  {
    title: "Our moments",
    text: "Every laugh, every late-night talk, and every tiny memory has become a treasure.",
    icon: "bi-camera-fill",
  },
];

const moments = [
  {
    title: "The first hello",
    detail: "The moment everything began to feel a little more magical.",
    icon: "bi-heart-fill",
  },
  {
    title: "Comfort days",
    detail: "The small conversations that slowly became home.",
    icon: "bi-moon-stars-fill",
  },
  {
    title: "Shared dreams",
    detail: "The plans, the hopes, and the future we keep building together.",
    icon: "bi-gift-fill",
  },
  {
    title: "Forever mood",
    detail: "A love that keeps glowing, growing, and getting more beautiful.",
    icon: "bi-infinity",
  },
  {
    title: "Gentle support",
    detail: "The days when your care made everything easier to carry.",
    icon: "bi-sun-fill",
  },
  {
    title: "Dreaming together",
    detail: "The future started to feel softer because we were imagining it side by side.",
    icon: "bi-stars",
  },
  {
    title: "Seven-month glow",
    detail: "A reminder that what we have is still growing and still full of wonder.",
    icon: "bi-heart-fill",
  },
];

const promises = [
  "I will keep choosing you, gently and always.",
  "I will protect your peace and celebrate your dreams.",
  "I will keep making room for more laughter, more memories, and more love.",
];

const letterCards = [
  {
    title: "What you mean to me",
    text: "You are my favorite hello, my safest calm, and the most beautiful part of my every day.",
  },
  {
    title: "How I feel",
    text: "Seven months later, my heart still gets excited by the thought of you, your smile, and your touch.",
  },
];

export function Portfolio() {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [hasMusicError, setHasMusicError] = useState(false);
  const audioRef = useRef(null);

  const stopLoveMusic = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }

    setIsMusicPlaying(false);
  };

  const playLoveMusic = async () => {
    if (!audioRef.current) {
      return;
    }

    setHasMusicError(false);
    audioRef.current.volume = 0.74;
    await audioRef.current.play();
    setIsMusicPlaying(true);
  };

  const toggleMusic = async () => {
    if (isMusicPlaying) {
      stopLoveMusic();
      return;
    }

    try {
      await playLoveMusic();
    } catch {
      setHasMusicError(true);
      stopLoveMusic();
    }
  };

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

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const heroSection = document.querySelector(".hero-section");
    const stageFrame = document.querySelector(".stage-frame");
    let handleMouseMove = null;
    let resetHeroMotion = null;

    if (heroSection && stageFrame && !prefersReducedMotion) {
      handleMouseMove = event => {
        const { clientX, clientY } = event;
        const { innerWidth, innerHeight } = window;
        const normalizedX = clientX / innerWidth - 0.5;
        const normalizedY = clientY / innerHeight - 0.5;
        const bgX = 50 + normalizedX * 16;
        const bgY = 50 + normalizedY * 12;

        heroSection.style.backgroundPosition = `${bgX}% ${bgY}%`;
        stageFrame.style.setProperty("--tilt-x", `${normalizedX * 18}deg`);
        stageFrame.style.setProperty("--tilt-y", `${normalizedY * -14}deg`);
        stageFrame.style.setProperty("--float-x", `${normalizedX * 12}px`);
        stageFrame.style.setProperty("--float-y", `${normalizedY * 10}px`);
      };

      resetHeroMotion = () => {
        heroSection.style.backgroundPosition = "50% 50%";
        stageFrame.style.setProperty("--tilt-x", "0deg");
        stageFrame.style.setProperty("--tilt-y", "0deg");
        stageFrame.style.setProperty("--float-x", "0px");
        stageFrame.style.setProperty("--float-y", "0px");
      };

      heroSection.addEventListener("mousemove", handleMouseMove);
      heroSection.addEventListener("mouseleave", resetHeroMotion);
    }

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateProgress);

      if (heroSection && handleMouseMove && resetHeroMotion) {
        heroSection.removeEventListener("mousemove", handleMouseMove);
        heroSection.removeEventListener("mouseleave", resetHeroMotion);
      }

      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  return (
    <main className="love-page">
      <audio
        ref={audioRef}
        src={localLoveSong}
        loop
        preload="auto"
        onEnded={() => setIsMusicPlaying(false)}
        onError={() => {
          setHasMusicError(true);
          setIsMusicPlaying(false);
        }}
      />
      <div className="scroll-progress" aria-hidden="true" />
      <div className="ambient ambient-a" aria-hidden="true" />
      <div className="ambient ambient-b" aria-hidden="true" />
      <div className="ambient ambient-c" aria-hidden="true" />

      <section className="hero-section" id="home">
        <div className="floating-hearts" aria-hidden="true">
          {floatingHearts.map(heart => (
            <span
              className="floating-heart"
              key={heart.id}
              style={{
                left: heart.left,
                top: heart.top,
                "--heart-size": `${heart.size}px`,
                "--heart-delay": heart.delay,
                "--heart-duration": heart.duration,
              }}
            >
              <i className="bi bi-heart-fill" />
            </span>
          ))}
        </div>

        <div className="floating-petals" aria-hidden="true">
          {rosePetals.map(petal => (
            <span
              className="floating-petal"
              key={petal.id}
              style={{
                left: petal.left,
                top: petal.top,
                "--petal-delay": petal.delay,
                "--petal-duration": petal.duration,
                "--petal-size": `${petal.size}px`,
              }}
            >
              <i className="bi bi-flower1" />
            </span>
          ))}
        </div>

        <div className="container">
          <div className="hero-grid">
            <motion.div
              className="hero-copy reveal"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="eyebrow">7th Month Love Anniversary</p>
              <h1 className="hero-title">Happy 7 Months, My Love</h1>
              <p className="hero-description">
                Seven months of your laughter, your softness, and the way your love
                makes every ordinary moment feel warm, safe, and unforgettable.
              </p>

              <div className="hero-pill-row" aria-label="Love highlights">
                {loveStats.map(stat => (
                  <span className="hero-pill" key={stat.label}>
                    <i className={`bi ${stat.icon}`} />
                    <strong>{stat.value}</strong>
                    <small>{stat.label}</small>
                  </span>
                ))}
              </div>

              <div className="hero-actions">
                <a className="btn btn-lg btn-love-primary" href="#moments">
                  <i className="bi bi-stars" />
                  See Our Moments
                </a>
                <a className="btn btn-lg btn-love-secondary" href="#promise">
                  <i className="bi bi-envelope-fill" />
                  Read My Promise
                </a>
                <button
                  type="button"
                  className={`btn btn-lg btn-love-music ${isMusicPlaying ? "is-playing" : ""}`}
                  onClick={toggleMusic}
                >
                  <i className={`bi ${isMusicPlaying ? "bi-pause-fill" : "bi-music-note-beamed"}`} />
                  {isMusicPlaying ? "Pause Our Love Song" : "Play Our Love Song"}
                </button>
              </div>

              <div className="music-caption">
                <i className="bi bi-speaker-fill" />
                <span>
                  {hasMusicError
                    ? "Song file not found. Check the file inside public."
                    : isMusicPlaying
                      ? "Your love song is floating through the page."
                      : "Tap play to hear your love song for us."}
                </span>
              </div>

              <p className="romantic-line">
                You are my favorite place, my sweetest thought, and the reason my
                heart feels like it&apos;s glowing.
              </p>
            </motion.div>

            <div className="hero-stage reveal">
              <div className="stage-frame">
                <div className="halo halo-one" aria-hidden="true" />
                <div className="halo halo-two" aria-hidden="true" />
                <div className="halo halo-three" aria-hidden="true" />

                <motion.div
                  className="center-love"
                  initial={{ scale: 0.88, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  whileHover={{ rotateX: -10, rotateY: 10, scale: 1.03 }}
                >
                  <i className="bi bi-suit-heart-fill" />
                  <strong>7 Months</strong>
                  <span>Of us, and still blooming</span>
                </motion.div>

                {moments.slice(0, 3).map((moment, index) => (
                <motion.article
                  className={`memory-card memory-${index + 1}`}
                  key={moment.title}
                  initial={{ opacity: 0, y: 24, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.12 + 0.15 }}
                  whileHover={{ rotateX: -14, rotateY: 10, scale: 1.04 }}
                >
                    <span className="moment-icon" aria-hidden="true">
                      <i className={`bi ${moment.icon}`} />
                    </span>
                    <h3>{moment.title}</h3>
                    <p>{moment.detail}</p>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block intro-strip">
        <div className="container">
          <motion.div
            className="intro-panel reveal"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <div>
              <p className="eyebrow">A little glow from our story</p>
              <h2>Every day with you feels like a softer, sweeter kind of forever.</h2>
            </div>
            <p>
              This page is my little love letter to the warmth, gentleness, and
              magic you bring into my life. Seven months in, and you still make my
              world feel brand new.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-block" id="reasons">
        <div className="container">
          <motion.div
            className="section-heading reveal"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <p className="eyebrow">Why I adore you</p>
            <h2>Little things that make you unforgettable</h2>
          </motion.div>

          <div className="reason-grid">
            {reasons.map((reason, index) => (
              <motion.article
                className="reason-card reveal"
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.12 }}
                whileHover={{ rotateX: -12, rotateY: 10, scale: 1.03 }}
              >
                <div className="reason-icon">
                  <i className={`bi ${reason.icon}`} />
                </div>
                <h3>{reason.title}</h3>
                <p>{reason.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block moments-section" id="moments">
        <div className="container">
          <motion.div
            className="section-heading reveal"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
              <p className="eyebrow">Seven steps of us</p>
              <h2>The sweetest moments that shaped our seven months</h2>
            </motion.div>

          <div className="moment-grid">
            {moments.map((moment, index) => (
              <motion.article
                className="moment-card reveal"
                key={moment.title}
                initial={{ opacity: 0, y: 32, rotateX: 8 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
                whileHover={{ rotateX: -10, rotateY: 8, scale: 1.03 }}
              >
                <div className="moment-number">0{index + 1}</div>
                <i className={`bi ${moment.icon}`} />
                <h3>{moment.title}</h3>
                <p>{moment.detail}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block promise-section" id="promise">
        <div className="container">
          <div className="promise-grid">
            <motion.div
              className="love-note reveal"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="eyebrow">Love note</p>
              <h2>Seven months later, my heart still reaches for you first.</h2>
              <p>
                You make love feel gentle, bright, and beautifully alive. If I could
                fold all our sweetest moments into one feeling, it would still look
                like your smile.
              </p>

              <div className="signature-card">
                <i className="bi bi-suit-heart-fill" />
                <div>
                  <strong>Forever yours</strong>
                  <span>With all my heart, today and always</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="promise-card reveal"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <p className="eyebrow">My promise</p>
              <h3>What I will keep giving you</h3>
              <ul className="promise-list">
                {promises.map(item => (
                  <li key={item}>
                    <i className="bi bi-heart-fill" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <div className="letter-grid">
              {letterCards.map((card, index) => (
                <motion.article
                  className="letter-card reveal"
                  key={card.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.12 }}
                  whileHover={{ rotateX: -10, rotateY: 8, scale: 1.03 }}
                >
                  <i className="bi bi-stars" />
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-block finale-section">
        <div className="container">
          <motion.div
            className="finale-card reveal"
            initial={{ opacity: 0, y: 36, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            >
              <p className="eyebrow">Always us</p>
            <h2>Here&apos;s to the next month, and every beautiful forever after it.</h2>
            <p>
              I hope this page feels like a little love letter, glowing with color,
              tenderness, and the kind of romance that belongs only to us.
            </p>

            <div className="hero-actions finale-actions">
              <a className="btn btn-lg btn-love-primary" href="#home">
                <i className="bi bi-arrow-up-circle-fill" />
                Back to Top
              </a>
              <a className="btn btn-lg btn-love-secondary" href="#promise">
                <i className="bi bi-heart-fill" />
                Read Again
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
