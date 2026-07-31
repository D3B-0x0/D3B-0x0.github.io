import { motion } from "motion/react";
import { Server, Cloud, Container, Network } from "lucide-react";

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
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-6" style={{ color: "var(--ctp-text)" }}>
            About
          </h2>
          <div className="h-1 w-20 mb-12" style={{ backgroundColor: "var(--ctp-blue)" }} />

          <p className="text-lg mb-16 max-w-3xl leading-relaxed" style={{ color: "var(--ctp-subtext0)" }}>
            I'm a BCA student from Kolkata working toward cloud engineering and SRE. I learn by
            building and breaking — this site is backed by a stack I run myself: Immich for
            photos, SearXNG for search, Vaultwarden for passwords, all behind a VPS edge managed
            with Pangolin, CrowdSec, and Terraform. I prefer understanding the low level before
            trusting the high level.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {areas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-lg transition-all duration-200 hover:scale-[1.02]"
                style={{ backgroundColor: "var(--ctp-mantle)" }}
              >
                <area.icon className="w-8 h-8 mb-4" style={{ color: "var(--ctp-blue)" }} />
                <h3 className="text-xl font-semibold mb-2" style={{ color: "var(--ctp-text)" }}>
                  {area.title}
                </h3>
                <p style={{ color: "var(--ctp-subtext0)" }}>{area.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
