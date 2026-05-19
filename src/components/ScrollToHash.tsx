import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHash = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there is a hash (e.g., #blossom-moments), scroll to it
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 150);
        return () => clearTimeout(timer);
      }
      return;
    }

    // Map specific paths to their target section IDs
    const pathElementMap: Record<string, string> = {
      "/about": "about",
      "/contact": "contact",
    };

    const targetId = pathElementMap[pathname];
    if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 150);
        return () => clearTimeout(timer);
      } else {
        // Retry scrolling in case the DOM isn't fully ready yet on direct landing
        const timer = setTimeout(() => {
          const el = document.getElementById(targetId);
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 300);
        return () => clearTimeout(timer);
      }
    } else {
      // Scroll to top for other page loads or /
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToHash;
