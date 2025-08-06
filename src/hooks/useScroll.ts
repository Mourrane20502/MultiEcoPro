import { useState, useEffect } from "react";

export default function useScroll() {
  const [scrolledPast50, setScrolledPast50] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolledPast50(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return {scrolledPast50};
}
