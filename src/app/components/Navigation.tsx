import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault();
    setMenuOpen(false);
    window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", ...navItems.map((item) => item.id)];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);

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

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 backdrop-blur-md"
      style={{
        backgroundColor: "color-mix(in srgb, var(--ctp-base) 82%, transparent)",
        borderBottom: "1px solid var(--ctp-surface0)",
      }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <a
          href="#hero"
          onClick={() => setMenuOpen(false)}
          className="sticker inline-flex"
          style={{
            color: "var(--ctp-base)",
            backgroundColor: "var(--ctp-blue)",
            ["--tilt" as string]: "-1.5deg",
          }}
        >
          ghost
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="eyebrow transition-colors duration-200"
              style={{
                color:
                  activeSection === item.id
                    ? "var(--ctp-blue)"
                    : "var(--ctp-subtext0)",
              }}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="https://github.com/D3B-0x0"
            target="_blank"
            rel="noopener noreferrer"
            className="sticker inline-flex"
            style={{
              color: "var(--ctp-text)",
              backgroundColor: "var(--ctp-surface0)",
              ["--tilt" as string]: "1deg",
            }}
          >
            GitHub
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="sticker inline-flex md:hidden p-2.5"
          style={{
            color: "var(--ctp-text)",
            backgroundColor: "var(--ctp-surface0)",
            ["--tilt" as string]: "0deg",
          }}
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden overflow-hidden"
          >
            <div
              className="mt-4 rounded-lg border p-4 flex flex-col gap-1"
              style={{
                backgroundColor: "var(--ctp-mantle)",
                borderColor: "var(--ctp-surface0)",
              }}
            >
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className="eyebrow px-3 py-3 rounded-md transition-colors"
                  style={{
                    color:
                      activeSection === item.id
                        ? "var(--ctp-blue)"
                        : "var(--ctp-subtext0)",
                    backgroundColor:
                      activeSection === item.id
                        ? "color-mix(in srgb, var(--ctp-blue) 12%, transparent)"
                        : "transparent",
                  }}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="https://github.com/D3B-0x0"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="eyebrow px-3 py-3 rounded-md mt-1"
                style={{
                  color: "var(--ctp-base)",
                  backgroundColor: "var(--ctp-blue)",
                }}
              >
                GitHub
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
