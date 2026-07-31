import { motion } from "motion/react";
import { ExternalLink, FolderGit2 } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "VPS Edge Gateway",
      description:
        "Public edge for my self-hosted services — Pangolin (Traefik + Gerbil) reverse proxy, CrowdSec intrusion detection, TLS via Let's Encrypt. SSH locked down to Tailscale only. Being codified in Terraform.",
      tech: ["Docker", "Pangolin/Traefik", "CrowdSec", "Tailscale", "Terraform"],
      link: "https://pangolin.technoob.me",
    },
    {
      title: "Self-Hosted Search",
      description:
        "My own SearXNG instance running on the VPS with a Valkey cache — the search backend behind everything I do, with no third-party search trackers.",
      tech: ["Docker", "SearXNG", "Valkey"],
      link: "https://searx.debnerd.in",
    },
    {
      title: "Homelab Docs",
      description:
        "Documentation of my self-hosting journey — what I built, what broke, and what I learned. The failures are the whole point.",
      tech: ["Markdown", "Obsidian"],
      link: "https://github.com/D3B-0x0/homelab",
    },
    {
      title: "Dotfiles",
      description:
        "Version-controlled configuration for my daily-driver Linux setup — Zsh, Hyprland, and tooling, synced declaratively via a single script.",
      tech: ["Bash", "Zsh", "Git"],
      link: "https://github.com/D3B-0x0/dotfiles",
    },
    {
      title: "Immich",
      description:
        "Self-hosted photo backup with a Tailscale sidecar and no host ports exposed — ~64GB of photos and growing, reachable only over my tailnet.",
      tech: ["Docker Compose", "PostgreSQL", "Tailscale"],
      link: "https://github.com/D3B-0x0",
    },
    {
      title: "This Website",
      description:
        "Started as a Figma export, rewritten to say what I actually do. A project I'm continuously improving as I learn.",
      tech: ["React", "Vite", "Tailwind"],
      link: "https://github.com/D3B-0x0/D3B-0x0.github.io",
    },
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-6" style={{ color: "var(--ctp-text)" }}>
            Projects
          </h2>
          <div className="h-1 w-20 mb-12" style={{ backgroundColor: "var(--ctp-blue)" }} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="p-6 rounded-lg transition-all duration-200 hover:scale-[1.02] group"
                style={{ backgroundColor: "var(--ctp-mantle)" }}
              >
                <div className="flex items-start justify-between mb-4">
                  <FolderGit2 className="w-8 h-8" style={{ color: "var(--ctp-blue)" }} />
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-70 hover:opacity-100 transition-opacity"
                  >
                    <ExternalLink className="w-5 h-5" style={{ color: "var(--ctp-subtext0)" }} />
                  </a>
                </div>

                <h3 className="text-xl font-semibold mb-3" style={{ color: "var(--ctp-text)" }}>
                  {project.title}
                </h3>

                <p className="mb-4 leading-relaxed" style={{ color: "var(--ctp-subtext0)" }}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded text-sm font-mono"
                      style={{
                        backgroundColor: "var(--ctp-surface0)",
                        color: "var(--ctp-text)",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
