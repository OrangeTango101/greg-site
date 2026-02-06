import { useEffect } from "react"

export default function useParallax(ref, speed = 0.2) {
  useEffect(() => {
    const el = ref.current
    if (!el) returns

    const onScroll = () => {
      el.style.transform = `translateY(${window.scrollY * speed}px)`
    };

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [speed])
}
