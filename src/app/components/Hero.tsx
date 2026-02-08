import { motion } from "motion/react";
import { Terminal } from "lucide-react";
import profileImage from "../../assets/me.jpg";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col md:flex-row items-center gap-12"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <div
              className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden ring-4 ring-offset-4"
              style={{
                ringColor: "var(--ctp-blue)",
                backgroundColor: "var(--ctp-mantle)",
              }}
            >
              <img
                src={profileImage}
                alt="Debjoity - Infrastructure Engineer"
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </motion.div>

          {/* Content */}
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <Terminal className="w-8 h-8" style={{ color: "var(--ctp-blue)" }} />
              <span className="font-mono text-sm" style={{ color: "var(--ctp-subtext0)" }}>
                ghost@linoox:~$
              </span>
            </div>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-6xl md:text-7xl font-bold mb-4"
              style={{ color: "var(--ctp-text)" }}
            >
              Debjoity
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-3"
            >
              <p className="text-xl md:text-2xl" style={{ color: "var(--ctp-subtext0)" }}>
                Infrastructure Engineer/Student
              </p>
              <p className="text-lg max-w-2xl" style={{ color: "var(--ctp-subtext1)" }}>
                Building resilient cloud infrastructure, automating datacenter operations, 
                and architecting scalable container platforms. Love self-hosting
                and opensource projects.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex gap-4 pt-4"
            >
              <a
                href="https://github.com/D3B-0x0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-200 hover:scale-105"
                style={{
                  backgroundColor: "var(--ctp-blue)",
                  color: "var(--ctp-base)",
                }}
              >
                <span className="font-medium">View GitHub</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-200 hover:scale-105"
                style={{
                  backgroundColor: "var(--ctp-surface0)",
                  color: "var(--ctp-text)",
                }}
              >
                <span className="font-medium">Get in Touch</span>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
