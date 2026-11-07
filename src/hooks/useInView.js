import {useEffect, useRef, useState} from "react";

export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  typeof window.matchMedia === "function" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// One shared observer for every reveal on the page keeps this cheap.
let observer = null;
const callbacks = new WeakMap();

function getObserver() {
  if (!observer) {
    observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          const cb = callbacks.get(entry.target);
          observer.unobserve(entry.target);
          callbacks.delete(entry.target);
          if (cb) cb();
        });
      },
      {threshold: 0.12, rootMargin: "0px 0px -6% 0px"}
    );
  }
  return observer;
}

// Calls cb once when el first scrolls into view. Returns a cleanup function.
export function observeOnce(el, cb) {
  if (!el) return () => {};
  if (typeof IntersectionObserver === "undefined") {
    cb();
    return () => {};
  }
  const io = getObserver();
  callbacks.set(el, cb);
  io.observe(el);
  return () => {
    io.unobserve(el);
    callbacks.delete(el);
  };
}

export function useInView() {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => observeOnce(ref.current, () => setSeen(true)), []);
  return [ref, seen];
}
