import { useEffect, useState } from "react";
/**
 * Hook that will return a boolean true 
 *
 * @export
 * @param {number} scrollThreshold
 * @returns
 */
export function useHandleScroll(scrollThreshold: number) {
  const [scrolled, setScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const isScrolled = window.scrollY > scrollThreshold;
      if (isScrolled !== scrolled) {
        setScrolled(!scrolled);
      }
    };

    document.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      // clean up the event handler when the component unmounts
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);
  return [scrolled, scrollY] as const;
}
