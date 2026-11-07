import React, {useEffect, useRef} from "react";
import {observeOnce, useInView} from "../hooks/useInView";
import useCountUp from "../hooks/useCountUp";

// Springy scroll-reveal. Variants: up | left | right | pop
export function Reveal({
  as: Tag = "div",
  variant = "up",
  delay = 0,
  className = "",
  children,
  ...rest
}) {
  const ref = useRef(null);
  useEffect(
    () =>
      observeOnce(ref.current, () => {
        if (ref.current) ref.current.classList.add("in");
      }),
    []
  );
  return (
    <Tag
      ref={ref}
      className={`reveal reveal-${variant} ${className}`}
      style={{"--d": `${delay}ms`}}
      {...rest}
    >
      {children}
    </Tag>
  );
}

// 3D tilt that follows the mouse, with a light-sweep glow.
export function Tilt({
  as: Tag = "div",
  max = 8,
  className = "",
  children,
  ...rest
}) {
  const ref = useRef(null);
  const raf = useRef(0);

  useEffect(() => () => cancelAnimationFrame(raf.current), []);

  const onMove = e => {
    if (e.pointerType !== "mouse" || !ref.current) return;
    const el = ref.current;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => {
      el.style.setProperty("--rx", `${((0.5 - py) * max).toFixed(2)}deg`);
      el.style.setProperty("--ry", `${((px - 0.5) * max).toFixed(2)}deg`);
      el.style.setProperty("--mx", `${(px * 100).toFixed(1)}%`);
      el.style.setProperty("--my", `${(py * 100).toFixed(1)}%`);
    });
  };

  const onLeave = () => {
    cancelAnimationFrame(raf.current);
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  };

  return (
    <Tag
      ref={ref}
      className={`tilt ${className}`}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      {...rest}
    >
      {children}
    </Tag>
  );
}

// Wrapper that gently pulls its child toward the cursor.
export function Magnetic({children, strength = 0.3, className = ""}) {
  const ref = useRef(null);
  const raf = useRef(0);

  useEffect(() => () => cancelAnimationFrame(raf.current), []);

  const onMove = e => {
    if (e.pointerType !== "mouse" || !ref.current) return;
    const el = ref.current;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width / 2)) * strength;
    const y = (e.clientY - (r.top + r.height / 2)) * strength;
    cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => {
      el.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(
        1
      )}px, 0)`;
    });
  };

  const onLeave = () => {
    cancelAnimationFrame(raf.current);
    if (ref.current) ref.current.style.transform = "";
  };

  return (
    <span
      ref={ref}
      className={`magnetic ${className}`}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
    >
      {children}
    </span>
  );
}

// Number that counts up when scrolled into view.
export function Counter({value, suffix = ""}) {
  const [ref, seen] = useInView();
  const n = useCountUp(value, seen);
  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}
