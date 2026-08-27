import { motion } from "motion/react";
import { Github, Mail, Linkedin, AtSign } from "lucide-react";

function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" />
    </svg>
  );
}

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
                color: "var(--ctp-base)",
                backgroundColor: "var(--ctp-mauve)",
                ["--tilt" as string]: "1deg",
                cursor: "pointer",
              }}
              onClick={() => {
                navigator.clipboard.writeText('@pingnoob');
                alert('Discord handle copied to clipboard!');
              }}
              title="Click to copy Discord handle: @pingnoob"
            >
              <DiscordIcon className="w-5 h-5" />
              @pingnoob
            </span>
            <a
              href="https://www.linkedin.com/in/deb69420/"
              target="_blank"
              rel="noopener noreferrer"
              className="sticker inline-flex px-8 py-4 text-sm"
              style={{
                color: "var(--ctp-base)",
                backgroundColor: "var(--ctp-blue)",
                ["--tilt" as string]: "-0.5deg",
              }}
            >
              <Linkedin className="w-5 h-5" />
              deb69420
            </a>
            <a
              href="https://mastodon.social/@deb69420"
              target="_blank"
              rel="noopener noreferrer"
              className="sticker inline-flex px-8 py-4 text-sm"
              style={{
                color: "var(--ctp-base)",
                backgroundColor: "var(--ctp-peach)",
                ["--tilt" as string]: "0.5deg",
              }}
            >
              <AtSign className="w-5 h-5" />
              @deb69420
            </a>
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
            © {new Date().getFullYear()} Deb (ghost). Built with React, Vite & Tailwind.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
