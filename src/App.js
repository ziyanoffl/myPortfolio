import React, {useEffect, useMemo} from "react";
import "./App.css";
import Backdrop from "./components/Backdrop";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import {
  About,
  Contact,
  Education,
  Experience,
  Footer,
  Marquee,
  Projects,
  Skills
} from "./components/Sections";
import {greeting, projects} from "./portfolio";
import {useLocalStorage} from "./hooks/useLocalStorage";

function systemPrefersDark() {
  return typeof window.matchMedia === "function"
    ? window.matchMedia("(prefers-color-scheme: dark)").matches
    : true;
}

export default function App() {
  const [isDark, setIsDark] = useLocalStorage("isDark", systemPrefersDark());

  useEffect(() => {
    document.documentElement.dataset.theme = isDark ? "dark" : "light";
  }, [isDark]);

  const links = useMemo(
    () =>
      [
        {id: "home", label: "Home"},
        {id: "about", label: "About"},
        {id: "skills", label: "Skills"},
        {id: "experience", label: "Experience"},
        {id: "education", label: "Education"},
        projects.items.length && {id: "projects", label: "Projects"},
        {id: "contact", label: "Contact"}
      ].filter(Boolean),
    []
  );

  return (
    <>
      <Backdrop />
      <Nav
        links={links}
        isDark={isDark}
        onToggleTheme={() => setIsDark(!isDark)}
        brand={greeting.username}
      />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
