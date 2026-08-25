import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "Self-Hosted Control Plane",
      description:
        "My own Tailscale-compatible mesh control plane — headscale with Headplane as the management UI. Devices (laptop, phone, VPS, tablet) join my tailnet with zero third-party coordination servers. Google OIDC single sign-on, ACLs enforced in the database. Replaced a commercial mesh VPN provider entirely.",
      tech: ["Headscale", "Headplane", "Tailscale", "OIDC"],
      link: "https://headscale.debnerd.in",
    },
    {
      title: "Self-Hosted Git Forge",
      description:
        "My own Forgejo instance with DinD-based CI/CD runners, Google & GitHub OIDC login, and push mirroring to GitHub. Friends can sign up and push code — a full self-hosted alternative to GitHub.",
      tech: ["Forgejo", "Docker-in-Docker", "CI/CD", "OIDC"],
      link: "https://git.debnerd.in",
    },
    {
      title: "VPS Edge Gateway",
      description:
        "Public edge for my self-hosted services — Caddy reverse proxy, CrowdSec intrusion detection and WAF (firewall + Docker log analysis), TLS via Let's Encrypt.",
      tech: ["Docker", "Caddy", "CrowdSec"],
      link: "https://caddyserver.com",
    },
    {
      title: "Self-Hosted Search",
      description:
        "My own SearXNG instance running on the VPS with a Valkey cache — the search backend behind everything I do, with no third-party search trackers.",
      tech: ["Docker", "SearXNG", "Valkey"],
      link: "https://searx.debnerd.in",
    },
    {
      title: "Homelab Blog",
      description:
        "Documentation of my self-hosting journey — what I built, what broke, and what I learned. The failures are the whole point.",
      tech: ["Astro", "Markdown", "GitHub Pages"],
      link: "https://blog.debnerd.in/",
    },
    {
      title: "IT-Tools",
      description:
        "A collection of handy developer utilities — encoders, converters, generators — self-hosted at tools.debnerd.in.",
      tech: ["Docker", "Vue.js"],
      link: "https://tools.debnerd.in",
    },
    {
      title: "Dotfiles",
      description:
        "Version-controlled configuration for my daily-driver Linux setup — Zsh, Hyprland, and tooling, synced declaratively via a single script.",
      tech: ["Bash", "Zsh", "Git"],
      link: "https://git.debnerd.in/d3b/dotfiles",
    },
    {
      title: "Immich",
      description:
        "Self-hosted photo backup with a Tailscale sidecar and no host ports exposed — terabytes of photos and growing, reachable only over my tailnet.",
      tech: ["Docker Compose", "PostgreSQL", "Tailscale"],
      link: "https://immich.app",
    },
    {
      title: "This Website",
      description:
        "Started as a Figma export, rewritten to say what I actually do. Hosted on Forgejo, deployed to GitHub Pages.",
      tech: ["React", "Vite", "Tailwind"],
      link: "https://git.debnerd.in/d3b/website",
    },
  ];

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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
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
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
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
