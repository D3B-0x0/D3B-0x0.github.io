import { motion } from "motion/react";
import { Github, Mail, MessageCircle } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="max-w-3xl w-full mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="eyebrow mb-3 block" style={{ color: "var(--ctp-peach)" }}>
            say hi
          </span>
          <h2 className="display text-5xl md:text-6xl mb-8" style={{ color: "var(--ctp-text)" }}>
            Get in Touch
          </h2>

          <p className="text-lg mb-14 max-w-2xl mx-auto leading-relaxed" style={{ color: "var(--ctp-subtext0)" }}>
            I'm a student building toward a career in cloud and SRE. If you've got advice,
            corrections, or just want to talk infrastructure — reach out.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col sm:flex-row gap-5 justify-center items-center"
          >
            <a
              href="https://github.com/D3B-0x0"
              target="_blank"
              rel="noopener noreferrer"
              className="sticker inline-flex px-8 py-4 text-sm"
              style={{
                color: "var(--ctp-base)",
                backgroundColor: "var(--ctp-blue)",
                ["--tilt" as string]: "-1deg",
              }}
            >
              <Github className="w-5 h-5" />
              D3B-0x0
            </a>
            <a
              href="mailto:d3b@tutamail.com"
              className="sticker inline-flex px-8 py-4 text-sm"
              style={{
                color: "var(--ctp-crust)",
                backgroundColor: "var(--ctp-green)",
                ["--tilt" as string]: "0.5deg",
              }}
            >
              <Mail className="w-5 h-5" />
              d3b@tutamail.com
            </a>
            <span
              className="sticker inline-flex px-8 py-4 text-sm"
              style={{
                color: "var(--ctp-text)",
                backgroundColor: "var(--ctp-mauve)",
                ["--tilt" as string]: "1deg",
              }}
            >
              <MessageCircle className="w-5 h-5" />
              @pingnoob
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-20 pt-8 border-t"
          style={{ borderColor: "var(--ctp-surface0)" }}
        >
          <p className="font-mono text-sm" style={{ color: "var(--ctp-subtext0)" }}>
            © 2026 Deb (ghost). Built with React, Vite &amp; Tailwind.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
