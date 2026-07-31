import { motion } from "motion/react";
import { Server, Cloud, Container, Network, Pin } from "lucide-react";

export function About() {
  const areas = [
    {
      icon: Server,
      title: "Linux & Shell",
      description: "Daily-driver Fedora, a Debian VPS, and Zsh tooling — comfortable breaking and fixing my own systems.",
    },
    {
      icon: Cloud,
      title: "Cloud & IaC",
      description: "A DigitalOcean VPS edge (Pangolin, CrowdSec, TLS) being codified in Terraform, one service at a time.",
    },
    {
      icon: Container,
      title: "Containerization",
      description: "Docker and Compose stacks for everything I self-host — Immich, SearXNG, Vaultwarden — with Tailscale sidecars.",
    },
    {
      icon: Network,
      title: "Networking & VPN",
      description: "Tailscale/WireGuard, reverse proxies, and DNS (Technitium) — including the CGNAT gotchas learned the hard way.",
    },
  ];

  return (
    <section id="about" className="px-6 py-24">
      <div className="max-w-6xl w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="eyebrow mb-3 block" style={{ color: "var(--ctp-lavender)" }}>
            about
          </span>
          <h2 className="display text-5xl md:text-6xl mb-14" style={{ color: "var(--ctp-text)" }}>
            Building, breaking, writing it down.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start mb-16">
          {/* Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <p className="text-lg leading-relaxed" style={{ color: "var(--ctp-subtext0)" }}>
              I'm a BCA student from Durgapur working toward cloud engineering and SRE. I
              learn by building and breaking — this site is backed by a stack I run
              myself: Immich for photos, SearXNG for search, Vaultwarden for passwords,
              all behind a VPS edge managed with Pangolin, CrowdSec, and Terraform.
            </p>
            <p className="display italic text-2xl leading-snug" style={{ color: "var(--ctp-mauve)" }}>
              "I prefer understanding the low level before trusting the high level."
            </p>
          </motion.div>

          {/* Pinned sticky note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div
              className="polaroid p-6"
              style={{
                ["--tilt" as string]: "-2deg",
                backgroundColor: "var(--ctp-yellow)",
                borderColor: "color-mix(in srgb, var(--ctp-yellow) 70%, var(--ctp-crust))",
              }}
            >
              <Pin className="w-5 h-5 mb-4" style={{ color: "var(--ctp-red)" }} />
              <p className="eyebrow mb-4" style={{ color: "color-mix(in srgb, var(--ctp-crust) 70%, transparent)" }}>
                currently learning
              </p>
              <ul className="space-y-3 font-mono text-sm" style={{ color: "var(--ctp-crust)" }}>
                {[
                  "Terraform & IaC",
                  "Networking (CGNAT, WireGuard, DNS)",
                  "Docker internals",
                  "Python",
                  "How the layers actually work",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "var(--ctp-red)" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Areas as polaroids */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="polaroid relative h-full"
              style={{ ["--tilt" as string]: `${index % 2 === 0 ? 1 : -1.5}deg` }}
            >
              <span
                className="tape"
                style={{
                  backgroundColor: [
                    "var(--ctp-mauve)",
                    "var(--ctp-pink)",
                    "var(--ctp-blue)",
                    "var(--ctp-green)",
                  ][index],
                  width: "64px",
                }}
              />
              <area.icon className="w-7 h-7 mb-4" style={{ color: "var(--ctp-blue)" }} />
              <h3 className="font-semibold mb-2 text-lg" style={{ color: "var(--ctp-text)" }}>
                {area.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--ctp-subtext0)" }}>
                {area.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
