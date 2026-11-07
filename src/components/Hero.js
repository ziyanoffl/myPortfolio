import React, {useEffect, useState} from "react";
import {greeting, socialMediaLinks, stats, techStack} from "../portfolio";
import {Counter, Magnetic, Reveal, Tilt} from "./Motion";
import {prefersReducedMotion} from "../hooks/useInView";

const BARS = [38, 62, 48, 80, 58, 92, 70, 54, 84];

function AnimatedName({text}) {
  let i = 0;
  return (
    <span className="name" aria-hidden="true">
      {text.split(" ").map((word, w) => (
        <span className="word" key={w}>
          {word.split("").map((ch, c) => (
            <span className="hl" style={{"--i": i++}} key={c}>
              <span className="hl-i">{ch}</span>
            </span>
          ))}
        </span>
      ))}
    </span>
  );
}

function RoleRotator({roles}) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (roles.length < 2 || prefersReducedMotion()) return undefined;
    const t = setInterval(() => setIdx(i => (i + 1) % roles.length), 2600);
    return () => clearInterval(t);
  }, [roles.length]);

  return (
    <p className="roles" aria-live="polite">
      <span className="roles-prefix">I'm a</span>
      <span className="role" key={idx}>
        {roles[idx]}
      </span>
    </p>
  );
}

function DashboardCard() {
  const bi = techStack.experience[0];
  const R = 34;
  const C = 2 * Math.PI * R;
  return (
    <Tilt className="dash glass" max={6} aria-hidden="true">
      <div className="dash-bar">
        <i />
        <i />
        <i />
        <span>kpi-dashboard</span>
      </div>
      <div className="dash-kpis">
        {stats.slice(0, 3).map(s => (
          <div className="kpi" key={s.label}>
            <b>
              <Counter value={s.value} suffix={s.suffix} />
            </b>
            <small>{s.label}</small>
          </div>
        ))}
      </div>
      <div className="dash-body">
        <div className="chart">
          {BARS.map((h, i) => (
            <span key={i} className="bar" style={{"--h": `${h}%`, "--i": i}} />
          ))}
        </div>
        <div className="donut">
          <svg viewBox="0 0 80 80">
            <circle className="track" cx="40" cy="40" r={R} />
            <circle
              className="arc"
              cx="40"
              cy="40"
              r={R}
              strokeDasharray={C}
              style={{"--c": C, "--to": C * (1 - bi.percent / 100)}}
            />
          </svg>
          <span>{bi.percent}%</span>
          <small>BI</small>
        </div>
      </div>
      <svg className="spark" viewBox="0 0 200 40" preserveAspectRatio="none">
        <path d="M0 30 C 20 8, 35 36, 60 20 S 100 4, 125 22 S 170 34, 200 6" />
      </svg>
      <span className="chip chip-1">SQL</span>
      <span className="chip chip-2">Python</span>
      <span className="chip chip-3">Power BI</span>
      <span className="chip chip-4">Tableau</span>
    </Tilt>
  );
}

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          {greeting.isHireable && (
            <Reveal variant="pop" className="badge">
              <span className="pulse-dot" /> Open to opportunities
            </Reveal>
          )}
          <h1 aria-label={`${greeting.intro} ${greeting.username}`}>
            <Reveal as="span" variant="up" delay={100} className="intro">
              {greeting.intro}
            </Reveal>
            <AnimatedName text={greeting.username} />
          </h1>
          <RoleRotator roles={greeting.roles} />
          <Reveal as="p" delay={500} className="lead">
            {greeting.subTitle}
          </Reveal>
          <Reveal delay={650} className="cta">
            <Magnetic>
              <a className="btn btn-primary" href="#contact">
                Let's talk <i className="fas fa-arrow-right" />
              </a>
            </Magnetic>
            {greeting.resumeLink && (
              <Magnetic>
                <a
                  className="btn btn-ghost"
                  href={greeting.resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-file-arrow-down" /> Resume
                </a>
              </Magnetic>
            )}
          </Reveal>
          <Reveal delay={800} className="socials">
            {socialMediaLinks.github && (
              <a
                href={socialMediaLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <i className="fab fa-github" />
              </a>
            )}
            {socialMediaLinks.linkedin && (
              <a
                href={socialMediaLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in" />
              </a>
            )}
            {socialMediaLinks.gmail && (
              <a href={`mailto:${socialMediaLinks.gmail}`} aria-label="Email">
                <i className="fas fa-envelope" />
              </a>
            )}
          </Reveal>
        </div>
        <Reveal variant="pop" delay={350} className="hero-visual">
          <DashboardCard />
        </Reveal>
      </div>
      <a href="#about" className="scroll-cue" aria-label="Scroll down">
        <span />
      </a>
    </section>
  );
}
