import { motion } from "motion/react";

const accentColors = [
  "var(--ctp-blue)",
  "var(--ctp-lavender)",
  "var(--ctp-pink)",
  "var(--ctp-mauve)",
  "var(--ctp-sapphire)",
  "var(--ctp-green)",
  "var(--ctp-peach)",
  "var(--ctp-teal)",
];

export function Skills() {
  const skillCategories = [
    {
      category: "Operating Systems",
      skills: ["Fedora (daily driver)", "Debian", "Linux server basics"],
    },
    {
      category: "Shell & Scripting",
      skills: ["Bash", "Zsh", "systemd", "Git"],
    },
    {
      category: "Containerization",
      skills: ["Docker", "Docker Compose", "Tailscale sidecar networking"],
    },
    {
      category: "Cloud & IaC",
      skills: ["DigitalOcean", "Cloudflare"],
    },
    {
      category: "Networking",
      skills: ["Tailscale / WireGuard", "Headscale (self-hosted control plane)", "Reverse proxies", "DNS (Cloudflare)", "CrowdSec"],
    },
    {
      category: "Self-Hosting",
      skills: ["Immich", "Vaultwarden", "SearXNG", "Forgejo", "Docker-in-Docker CI/CD"],
    },
    {
      category: "Databases",
      skills: ["PostgreSQL", "Redis / Valkey", "SQLite"],
    },
    {
      category: "Languages",
      skills: ["Bash", "C (coursework)", "Java (coursework)", "Python (learning)"],
    },
  ];

  let stickerIndex = 0;

  return (
    <section id="skills" className="px-6 py-24">
      <div className="max-w-6xl w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="eyebrow mb-3 block" style={{ color: "var(--ctp-pink)" }}>
            tools of the trade
          </span>
          <h2 className="display text-5xl md:text-6xl mb-14" style={{ color: "var(--ctp-text)" }}>
            Skills
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <h3
                className="eyebrow mb-4 flex items-center gap-3"
                style={{ color: accentColors[index % accentColors.length] }}
              >
                {category.category}
                <span className="h-px flex-1" style={{ backgroundColor: "var(--ctp-surface0)" }} />
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => {
                  const color = accentColors[stickerIndex % accentColors.length];
                  stickerIndex++;
                  return (
                    <span
                      key={skill}
                      className="sticker inline-flex"
                      style={{
                        color: "var(--ctp-crust)",
                        backgroundColor: color,
                        ["--tilt" as string]: `${((stickerIndex % 4) - 1.5) * 1.2}deg`,
                      }}
                    >
                      {skill}
                    </span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
