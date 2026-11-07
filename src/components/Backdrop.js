import React, {useEffect, useRef} from "react";
import {prefersReducedMotion} from "../hooks/useInView";

// Fixed aurora + dot grid + cursor spotlight. Only transforms animate (GPU-cheap).
export default function Backdrop() {
  const spot = useRef(null);

  useEffect(() => {
    const fine =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(pointer: fine)").matches;
    if (!fine || prefersReducedMotion()) return undefined;
    let raf = 0;
    let x = 0;
    let y = 0;
    const move = e => {
      x = e.clientX;
      y = e.clientY;
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        if (spot.current) {
          spot.current.style.transform = `translate3d(${x - 320}px, ${
            y - 320
          }px, 0)`;
          spot.current.style.opacity = "1";
        }
      });
    };
    window.addEventListener("pointermove", move, {passive: true});
    return () => {
      window.removeEventListener("pointermove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="backdrop" aria-hidden="true">
      <i className="blob blob-1" />
      <i className="blob blob-2" />
      <i className="blob blob-3" />
      <div className="dots" />
      <div className="spot" ref={spot} />
    </div>
  );
}
