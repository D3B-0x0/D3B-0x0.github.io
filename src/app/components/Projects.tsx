import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { SITE } from "../../config";

export function Projects() {
  // Check if user prefers reduced motion
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  
  // Define motion props based on preference
  const motionProps = prefersReducedMotion 
    ? {} 
    : {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px" },
        transition: { duration: 0.5 }
      };

  // Define motion props for project items with delay
  const motionProjectProps = (index: number) => prefersReducedMotion 
    ? {} 
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-50px" },
        transition: { duration: 0.5, delay: (index % 3) * 0.08 }
      };

  const projects = SITE.projects;

  const tilts = ["-2deg", "1.5deg", "-1deg", "2deg", "-1.5deg", "1deg"];
  const tapes = [
    "var(--ctp-blue)",
    "var(--ctp-pink)",
    "var(--ctp-mauve)",
    "var(--ctp-teal)",
    "var(--ctp-peach)",
    "var(--ctp-lavender)",
  ];

  return (
    <section id="projects" className="px-6 py-24">
      <div className="max-w-6xl w-full mx-auto">
        <motion.div
          {...motionProps}
          className="mb-14"
        >
          <span className="eyebrow mb-3 block" style={{ color: "var(--ctp-blue)" }}>
            the board
          </span>
          <h2 className="display text-5xl md:text-6xl" style={{ color: "var(--ctp-text)" }}>
            Projects
          </h2>
        </motion.div>

        <div className="masonry">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              {...motionProjectProps(index)}
              className="polaroid relative"
              style={{ ["--tilt" as string]: tilts[index % tilts.length] }}
            >
              <span
                className="tape"
                style={{ backgroundColor: tapes[index % tapes.length], width: "76px" }}
              />

              <h3 className="font-semibold text-xl mb-2 pr-8" style={{ color: "var(--ctp-text)" }}>
                {project.title}
              </h3>

              <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--ctp-subtext0)" }}>
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="sticker inline-flex"
                    style={{
                      color: "var(--ctp-text)",
                      backgroundColor: "var(--ctp-surface0)",
                      ["--tilt" as string]: "0deg",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-sm font-medium transition-colors"
                style={{ color: "var(--ctp-blue)" }}
              >
                view
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
