import React, {useEffect, useRef, useState} from "react";

export default function Nav({links, isDark, onToggleTheme, brand}) {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const bar = useRef(null);
  const nav = useRef(null);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const p = max > 0 ? h.scrollTop / max : 0;
      if (bar.current) bar.current.style.transform = `scaleX(${p.toFixed(4)})`;
      if (nav.current)
        nav.current.classList.toggle("scrolled", h.scrollTop > 24);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, {passive: true});
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return undefined;
    const io = new IntersectionObserver(
      entries =>
        entries.forEach(e => {
          if (e.isIntersecting) setActive(e.target.id);
        }),
      {rootMargin: "-45% 0px -50% 0px"}
    );
    links.forEach(l => {
      const el = document.getElementById(l.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [links]);

  return (
    <header className="nav" ref={nav}>
      <div className="progress" ref={bar} />
      <div className="nav-inner">
        <a href="#home" className="brand" aria-label="Back to top">
          <span className="brand-mark">{brand.charAt(0)}</span>
          <span className="brand-name">{brand}</span>
        </a>
        <nav className={`nav-links ${open ? "open" : ""}`} aria-label="Primary">
          {links.map(l => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={active === l.id ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          className="icon-btn"
          onClick={onToggleTheme}
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
          <span className={`theme-icon ${isDark ? "is-dark" : ""}`}>
            <i className="fas fa-sun" />
            <i className="fas fa-moon" />
          </span>
        </button>
        <button
          type="button"
          className="icon-btn menu-btn"
          onClick={() => setOpen(o => !o)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          <i className={open ? "fas fa-xmark" : "fas fa-bars"} />
        </button>
      </div>
    </header>
  );
}
