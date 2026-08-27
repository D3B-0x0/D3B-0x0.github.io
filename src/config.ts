export const SITE = {
  github: "D3B-0x0",
  email: "d3b@tutamail.com",
  discord: "@pingnoob",
  linkedin: "deb69420",
  mastodon: "@deb69420",
  domain: "aboutme.debnerd.in",
  projects: [
    {
      title: "Self-Hosted Control Plane",
      description: "My own Tailscale-compatible mesh control plane — headscale with Headplane as the management UI. Devices (laptop, phone, VPS, tablet) join my tailnet with zero third-party coordination servers. Google OIDC single sign-on, ACLs enforced in the database. Replaced a commercial mesh VPN provider entirely.",
      tech: ["Headscale", "Headplane", "Tailscale", "OIDC"],
      link: "https://headscale.debnerd.in",
    },
    {
      title: "Self-Hosted Git Forge",
      description: "My own Forgejo instance with DinD-based CI/CD runners, Google & GitHub OIDC login, and push mirroring to GitHub. Friends can sign up and push code — a full self-hosted alternative to GitHub.",
      tech: ["Forgejo", "Docker-in-Docker", "CI/CD", "OIDC"],
      link: "https://git.debnerd.in",
    },
    {
      title: "VPS Edge Gateway",
      description: "Public edge for my self-hosted services — Caddy reverse proxy, CrowdSec intrusion detection and WAF (firewall + Docker log analysis), TLS via Let's Encrypt.",
      tech: ["Docker", "Caddy", "CrowdSec"],
      link: "https://blog.debnerd.in",
    },
    {
      title: "Self-Hosted Search",
      description: "My own SearXNG instance running on the VPS with a Valkey cache — the search backend behind everything I do, with no third-party search trackers.",
      tech: ["Docker", "SearXNG", "Valkey"],
      link: "https://searx.debnerd.in",
    },
    {
      title: "Homelab Blog",
      description: "Documentation of my self-hosting journey — what I built, what broke, and what I learned. The failures are the whole point.",
      tech: ["Astro", "Markdown", "GitHub Pages"],
      link: "https://blog.debnerd.in/",
    },
    {
      title: "IT-Tools",
      description: "A collection of handy developer utilities — encoders, converters, generators — self-hosted at tools.debnerd.in.",
      tech: ["Docker", "Vue.js"],
      link: "https://tools.debnerd.in",
    },
    {
      title: "Dotfiles",
      description: "Version-controlled configuration for my daily-driver Linux setup — Zsh, Hyprland, and tooling, synced declaratively via a single script.",
      tech: ["Bash", "Zsh", "Git"],
      link: "https://git.debnerd.in/d3b/dotfiles",
    },
    {
      title: "Immich",
      description: "Self-hosted photo backup with a Tailscale sidecar and no host ports exposed — terabytes of photos and growing, reachable only over my tailnet.",
      tech: ["Docker Compose", "PostgreSQL", "Tailscale"],
      link: "https://blog.debnerd.in",
    },
    {
      title: "This Website",
      description: "Started as a Figma export, rewritten to say what I actually do. Hosted on Forgejo, deployed to GitHub Pages.",
      tech: ["React", "Vite", "Tailwind"],
      link: "https://git.debnerd.in/d3b/website",
    },
  ],
}