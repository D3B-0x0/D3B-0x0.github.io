import { motion } from "motion/react";
import { Github, Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-6" style={{ color: "var(--ctp-text)" }}>
            Get in Touch
          </h2>
          <div className="h-1 w-20 mb-12 mx-auto" style={{ backgroundColor: "var(--ctp-blue)" }} />

          <p className="text-lg mb-12 max-w-2xl mx-auto" style={{ color: "var(--ctp-subtext0)" }}>
            Interested in discussing infrastructure, cloud architecture, or potential collaboration? 
            Feel free to reach out through GitHub.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="https://github.com/D3B-0x0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-lg transition-all duration-200 hover:scale-105 w-full sm:w-auto justify-center"
              style={{
                backgroundColor: "var(--ctp-blue)",
                color: "var(--ctp-base)",
              }}
            >
              <Github className="w-5 h-5" />
              <span className="font-medium">D3B-0x0</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16 pt-8 border-t"
            style={{ borderColor: "var(--ctp-surface0)" }}
          >
            <p className="font-mono text-sm" style={{ color: "var(--ctp-subtext0)" }}>
              © 2026 Deb (ghost). Built with modern web technologies.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
