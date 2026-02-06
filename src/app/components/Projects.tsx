import { motion } from "motion/react";
import { ExternalLink, FolderGit2 } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "Homelab Infrastructure",
      description:
        "Production-grade homelab running on Proxmox with automated deployments, monitoring, and backup solutions. Includes containerized services, network segmentation, and disaster recovery.",
      tech: ["Proxmox", "Docker", "Ansible", "Prometheus"],
      link: "https://github.com/D3B-0x0",
    },
    {
      title: "Self-Hosted Platform",
      description:
        "Complete self-hosted infrastructure stack including CI/CD, container registry, monitoring, logging, and collaborative tools. Designed for privacy and full data ownership.",
      tech: ["GitLab", "Harbor", "Grafana", "ELK Stack"],
      link: "https://github.com/D3B-0x0",
    },
    {
      title: "Network Automation Framework",
      description:
        "Automated network configuration and management system for datacenter environments. Handles VLAN provisioning, firewall rules, and network monitoring at scale.",
      tech: ["Python", "Netmiko", "YAML", "pfSense API"],
      link: "https://github.com/D3B-0x0",
    },
    {
      title: "Infrastructure as Code",
      description:
        "Terraform modules and Ansible playbooks for deploying multi-cloud infrastructure. Includes automated provisioning, configuration management, and compliance checks.",
      tech: ["Terraform", "Ansible", "AWS", "Azure"],
      link: "https://github.com/D3B-0x0",
    },
    {
      title: "Container Orchestration Lab",
      description:
        "Kubernetes cluster setup with service mesh, automated certificate management, and GitOps deployment workflows. Includes monitoring, logging, and backup automation.",
      tech: ["Kubernetes", "Helm", "ArgoCD", "Istio"],
      link: "https://github.com/D3B-0x0",
    },
    {
      title: "Datacenter Monitoring Suite",
      description:
        "Comprehensive monitoring and alerting system for physical and virtual infrastructure. Tracks performance metrics, logs, and provides real-time dashboards.",
      tech: ["Prometheus", "Grafana", "Telegraf", "Alert Manager"],
      link: "https://github.com/D3B-0x0",
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
