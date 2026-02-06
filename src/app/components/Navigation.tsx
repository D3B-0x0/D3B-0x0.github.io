import { motion } from "motion/react";
import { useState, useEffect } from "react";

export function Navigation() {
  const [activeSection, setActiveSection] = useState("hero");

  const navItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", ...navItems.map((item) => item.id)];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const sectionId of sections) {
        const element =
          sectionId === "hero"
            ? document.querySelector("section")
            : document.getElementById(sectionId);

        if (element) {
          const { offsetTop, offsetHeight } = element as HTMLElement;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
      style={{ backgroundColor: "var(--ctp-base)" }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <a
          href="#"
          className="font-mono font-semibold text-lg"
          style={{ color: "var(--ctp-blue)" }}
        >
          ghost@infra
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="relative font-medium transition-all duration-200"
              style={{
                color:
                  activeSection === item.id
                    ? "var(--ctp-blue)"
                    : "var(--ctp-subtext0)",
              }}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeSection"
                  className="absolute -bottom-1 left-0 right-0 h-0.5"
                  style={{ backgroundColor: "var(--ctp-blue)" }}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </div>

        <a
          href="https://github.com/D3B-0x0"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block px-4 py-2 rounded transition-all duration-200 hover:scale-105"
          style={{
            backgroundColor: "var(--ctp-surface0)",
            color: "var(--ctp-text)",
          }}
        >
          GitHub
        </a>
      </div>
    </motion.nav>
  );
}
