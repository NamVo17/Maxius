"use client"

import { useState, useEffect, useRef } from "react"

export function useAnimations() {
  const [heroAnimated, setHeroAnimated] = useState(false)
  const observerRef = useRef<IntersectionObserver | null>(null)
  const animatedElementsRef = useRef<Set<Element>>(new Set())

  useEffect(() => {
    const setupAnimations = () => {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !animatedElementsRef.current.has(entry.target)) {
              entry.target.classList.remove(
                "opacity-0",
                "translate-y-10",
                "-translate-x-10",
                "translate-x-10",
                "translate-y-5",
              )
              entry.target.classList.add("opacity-100", "translate-y-0", "translate-x-0")
              animatedElementsRef.current.add(entry.target)
            }
          })
        },
        {
          threshold: 0.1,
          rootMargin: "0px 0px -50px 0px",
        },
      )

      const animatedElements = document.querySelectorAll(".animate-on-scroll")
      animatedElements.forEach((el) => {
        if (observerRef.current) {
          observerRef.current.observe(el)
        }
      })
    }

    const triggerHeroAnimations = () => {
      setTimeout(() => setHeroAnimated(true), 300)
    }

    const timer = setTimeout(setupAnimations, 100)
    triggerHeroAnimations()

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
      clearTimeout(timer)
    }
  }, [])

  return { heroAnimated }
}
