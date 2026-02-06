import { useEffect, useRef } from "react";

export default function useParallax(ref, speed = 0.2, ease = 0.1) {
  const targetY = useRef(0);
  const currentY = useRef(0);
  const rafId = useRef(null);
  const running = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => {
      // Ease toward the target
      currentY.current +=
        (targetY.current - currentY.current) * ease;

      el.style.transform = `translateY(${currentY.current}px)`;

      if (running.current) {
        rafId.current = requestAnimationFrame(update);
      }
    };

    const onScroll = () => {
      targetY.current = window.scrollY * speed;

      if (!running.current) {
        running.current = true;
        rafId.current = requestAnimationFrame(update);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      running.current = false;
      window.removeEventListener("scroll", onScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [ref, speed, ease]);
}
