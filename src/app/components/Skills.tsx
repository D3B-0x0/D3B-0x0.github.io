import { motion } from "motion/react";

export function Skills() {
  const skillCategories = [
    {
      category: "Operating Systems",
      skills: ["Linux (Fedora, Debian, Arch)", "System Hardening"],
    },
    {
      category: "Containerization",
      skills: ["Docker", "Docker Compose", "Kubernetes", "Podman"],
    },
    {
      category: "Virtualization",
      skills: ["Proxmox VE", "KVM/QEMU", "VMware", "LXC/Vbox"],
    },
    {
      category: "Cloud Platforms",
      skills: ["AWS", "GCP", "Infrastructure as Code", "Self Hosted Cloud Technologies"],
    },
    {
      category: "Networking",
      skills: ["TCP/IP", "VLANs", "VPN/Tunnels", "Network Security", "OpenWrt/pfsense"],
    },
    {
      category: "Automation & Tools",
      skills: ["Ansible", "n8n", "Git", "CI/CD Pipelines"],
    },
    {
      category: "Self-Hosting",
      skills: ["Reverse Proxies", "DNS", "Monitoring", "Backup Solutions"],
    },
    {
      category: "Databases",
      skills: ["PostgreSQL", "MySQL", "Redis", "sqlite"],
    },
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-6" style={{ color: "var(--ctp-text)" }}>
            Skills
          </h2>
          <div className="h-1 w-20 mb-12" style={{ backgroundColor: "var(--ctp-blue)" }} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="p-6 rounded-lg"
                style={{ backgroundColor: "var(--ctp-mantle)" }}
              >
                <h3
                  className="font-mono text-sm mb-4 font-semibold tracking-wide"
                  style={{ color: "var(--ctp-blue)" }}
                >
                  {category.category.toUpperCase()}
                </h3>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-start gap-2"
                      style={{ color: "var(--ctp-subtext0)" }}
                    >
                      <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "var(--ctp-lavender)" }} />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
