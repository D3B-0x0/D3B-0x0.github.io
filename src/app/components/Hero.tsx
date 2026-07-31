import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import profileImage from "../../assets/me.jpg";

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center px-6 pt-24 pb-16"
    >
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-14 items-center">
        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span
            className="eyebrow px-3 py-1.5 rounded-md inline-block mb-8"
            style={{ color: "var(--ctp-base)", backgroundColor: "var(--ctp-blue)", transform: "rotate(-1.5deg)" }}
          >
            ghost@void:~$
          </span>

          <h1
            className="display text-6xl md:text-7xl lg:text-8xl mb-5"
            style={{ color: "var(--ctp-text)" }}
          >
            Deb
          </h1>

          <p className="text-xl md:text-2xl mb-4 font-medium" style={{ color: "var(--ctp-text)" }}>
            Student — self-hosting &amp; cloud infrastructure enthusiast
          </p>

          <p className="text-lg max-w-xl leading-relaxed mb-10" style={{ color: "var(--ctp-subtext0)" }}>
            BCA student learning cloud infrastructure the hard way — self-hosting the
            services I use daily, running my own VPS edge, and writing down everything
            that breaks along the way. Currently learning Terraform, networking, and how
            the layers actually work.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/D3B-0x0"
              target="_blank"
              rel="noopener noreferrer"
              className="sticker inline-flex px-6 py-3 text-sm"
              style={{ color: "var(--ctp-base)", backgroundColor: "var(--ctp-blue)", ["--tilt" as string]: "-1deg" }}
            >
              View GitHub
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="sticker inline-flex px-6 py-3 text-sm"
              style={{ color: "var(--ctp-text)", backgroundColor: "var(--ctp-surface0)", ["--tilt" as string]: "1deg" }}
            >
              Get in Touch
            </a>
          </div>
        </motion.div>

        {/* Polaroid portrait */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="relative justify-self-center lg:justify-self-end w-full max-w-xs md:max-w-sm"
        >
          <span className="tape" style={{ backgroundColor: "var(--ctp-lavender)" }} />
          <div className="polaroid" style={{ ["--tilt" as string]: "2.5deg" }}>
            <div className="overflow-hidden" style={{ backgroundColor: "var(--ctp-crust)" }}>
              <img
                src={profileImage}
                alt="Deb — self-hosting & cloud infrastructure enthusiast"
                className="w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <p className="polaroid-caption">me, probably breaking my own infra</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
