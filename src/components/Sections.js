import React, {useState} from "react";
import {
  contactInfo,
  educationInfo,
  greeting,
  projects,
  skillsSection,
  socialMediaLinks,
  stats,
  techStack,
  workExperiences
} from "../portfolio";
import {Counter, Magnetic, Reveal, Tilt} from "./Motion";
import {useInView} from "../hooks/useInView";
import useCountUp from "../hooks/useCountUp";

function SectionHead({eyebrow, title, subtitle}) {
  return (
    <div className="section-head">
      <Reveal as="span" variant="pop" className="eyebrow">
        {eyebrow}
      </Reveal>
      <Reveal as="h2" delay={80}>
        {title}
      </Reveal>
      {subtitle && (
        <Reveal as="p" delay={160} className="sub">
          {subtitle}
        </Reveal>
      )}
    </div>
  );
}

export function Marquee() {
  const items = skillsSection.tools;
  const row = suffix =>
    items.map(t => (
      <span className="mq-item" key={`${t.name}-${suffix}`}>
        <i className={t.icon} /> {t.name}
      </span>
    ));
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {row("a")}
        {row("b")}
      </div>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHead
          eyebrow="01 — About"
          title={skillsSection.title}
          subtitle={skillsSection.subTitle}
        />
        <div className="bento">
          {skillsSection.skills.map((s, i) => (
            <Reveal key={s.title} variant="pop" delay={i * 90}>
              <Tilt className="card glass skill-card">
                <span className="icon-tile">
                  <i className={s.icon} />
                </span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </Tilt>
            </Reveal>
          ))}
        </div>
        <div className="stats">
          {stats.map((s, i) => (
            <Reveal key={s.label} variant="pop" delay={i * 90} className="stat">
              <b>
                <Counter value={s.value} suffix={s.suffix} />
              </b>
              <span>{s.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Ring({item, index}) {
  const [ref, seen] = useInView();
  const n = useCountUp(item.percent, seen, 1600);
  const R = 52;
  const C = 2 * Math.PI * R;
  return (
    <Reveal variant="pop" delay={index * 120}>
      <Tilt className="card glass ring-card">
        <div className={`ring ${seen ? "go" : ""}`} ref={ref}>
          <svg viewBox="0 0 120 120">
            <defs>
              <linearGradient id={`rg${index}`} x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="var(--a1)" />
                <stop offset="100%" stopColor="var(--a2)" />
              </linearGradient>
            </defs>
            <circle className="track" cx="60" cy="60" r={R} />
            <circle
              className="arc"
              cx="60"
              cy="60"
              r={R}
              strokeDasharray={C}
              style={{
                "--c": C,
                "--to": C * (1 - item.percent / 100),
                stroke: `url(#rg${index})`
              }}
            />
          </svg>
          <span className="ring-num">{n}%</span>
        </div>
        <h3>{item.Stack}</h3>
        <p>{item.detail}</p>
      </Tilt>
    </Reveal>
  );
}

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHead
          eyebrow="02 — Skills"
          title={techStack.title}
          subtitle="Tools I reach for and how comfortable I am with them"
        />
        <div className="rings">
          {techStack.experience.map((e, i) => (
            <Ring key={e.Stack} item={e} index={i} />
          ))}
        </div>
        <div className="chips">
          {skillsSection.tools.map((t, i) => (
            <Reveal
              as="span"
              variant="pop"
              delay={i * 45}
              className="chip-tool"
              key={t.name}
            >
              <i className={t.icon} /> {t.name}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Logo({src, name, className}) {
  return src ? (
    <img className={className} src={src} alt="" loading="lazy" />
  ) : (
    <span className={`${className} mono`} aria-hidden="true">
      {name.charAt(0)}
    </span>
  );
}

export function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHead
          eyebrow="03 — Experience"
          title={workExperiences.title}
          subtitle="Where I've been turning data into decisions"
        />
        <ol className="timeline">
          {workExperiences.experience.map((job, i) => (
            <Reveal
              as="li"
              variant={i % 2 ? "right" : "left"}
              delay={80}
              className="tl-item"
              key={job.role + job.company}
            >
              <span className="tl-dot" />
              <Tilt className="card glass tl-card" max={4}>
                <div className="tl-top">
                  <Logo
                    src={job.companylogo}
                    name={job.company}
                    className="logo"
                  />
                  <div>
                    <h3>{job.role}</h3>
                    <span className="company">{job.company}</span>
                  </div>
                  <span className="date">{job.date}</span>
                </div>
                <p>{job.desc}</p>
                {job.descBullets.length > 0 && (
                  <ul>
                    {job.descBullets.map(b => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}
              </Tilt>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <SectionHead
          eyebrow="04 — Education"
          title={educationInfo.title}
          subtitle="The foundations behind the work"
        />
        <div className="edu-grid">
          {educationInfo.schools.map((s, i) => (
            <Reveal key={s.schoolName} variant="pop" delay={i * 120}>
              <Tilt className="card glass edu-card">
                <Logo src={s.logo} name={s.schoolName} className="logo big" />
                <span className="date">{s.duration}</span>
                <h3>{s.subHeader}</h3>
                <span className="company">{s.schoolName}</span>
                <p>{s.desc}</p>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Projects() {
  if (!projects.items.length) return null;
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHead
          eyebrow="05 — Projects"
          title={projects.title}
          subtitle={projects.subTitle}
        />
        <div className="bento">
          {projects.items.map((p, i) => (
            <Reveal key={p.name} variant="pop" delay={i * 90}>
              <Tilt className="card glass skill-card">
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
                {p.tags && (
                  <div className="tags">
                    {p.tags.map(t => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                )}
                <div className="links">
                  {(p.links || []).map(l => (
                    <a
                      key={l.url}
                      href={l.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {l.name}{" "}
                      <i className="fas fa-arrow-up-right-from-square" />
                    </a>
                  ))}
                </div>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(contactInfo.email_address);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (e) {
      window.location.href = `mailto:${contactInfo.email_address}`;
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <Reveal variant="pop" className="contact glass">
          <span className="eyebrow">Contact</span>
          <h2>{contactInfo.title}</h2>
          <p className="sub">{contactInfo.subtitle}</p>
          <div className="contact-actions">
            <Magnetic>
              <button type="button" className="btn btn-primary" onClick={copy}>
                <i className={copied ? "fas fa-check" : "far fa-copy"} />{" "}
                {copied ? "Copied!" : contactInfo.email_address}
              </button>
            </Magnetic>
            <Magnetic>
              <a
                className="btn btn-ghost"
                href={`tel:${contactInfo.number.replace(/\s/g, "")}`}
              >
                <i className="fas fa-phone" /> {contactInfo.number}
              </a>
            </Magnetic>
          </div>
          <div className="socials">
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
            <a href={`mailto:${contactInfo.email_address}`} aria-label="Email">
              <i className="fas fa-envelope" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <span>
        © {new Date().getFullYear()} {greeting.username}
      </span>
      <a href="#home">
        Back to top <i className="fas fa-arrow-up" />
      </a>
    </footer>
  );
}
