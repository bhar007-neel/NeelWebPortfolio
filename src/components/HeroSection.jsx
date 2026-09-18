import { motion as Motion } from "framer-motion";
import Spline from "@splinetool/react-spline";
import { FiArrowUpRight, FiCode, FiMail } from "react-icons/fi";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen items-center overflow-hidden bg-[#050507] pb-20 pt-28"
    >
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_20%,rgba(124,58,237,0.2),transparent_32%),radial-gradient(circle_at_85%_30%,rgba(76,29,149,0.18),transparent_28%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />

      <div className="section-container flex flex-col items-center gap-12 lg:flex-row lg:gap-6">
      {/* Left section */}
      <div className="z-10 flex max-w-3xl flex-1 flex-col items-start justify-center text-left">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="eyebrow"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_#34d399]" />
          Available for opportunities
        </Motion.div>
        <Motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            delay: 0.8,
            duration: 1.5,
          }}
          className="mb-6 text-5xl font-bold leading-[0.98] tracking-[-0.045em] text-white sm:text-6xl lg:text-6xl xl:text-8xl"
        >
          Building reliable
          <span className="block bg-gradient-to-r from-violet-300 via-violet-500 to-fuchsia-400 bg-clip-text text-transparent">
            digital products.
          </span>
        </Motion.h1>

        <Motion.p
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            delay: 1.2,
            duration: 1.5,
          }}
          className="max-w-2xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8"
        >
          Hi, I’m <span className="font-semibold text-white">Neel Bhardwaj</span>,
          a Computer Science student at the University of Ottawa. I create
          thoughtful full-stack experiences and automation systems that turn
          complex problems into clear, dependable solutions.
        </Motion.p>

        {/* Call to Action */}
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-3 font-semibold text-white shadow-xl shadow-violet-950/50 transition hover:-translate-y-0.5 hover:bg-violet-500"
          >
            View My Work
            <FiArrowUpRight />
          </a>
          <a
            href="mailto:neelmanibhardwaj003@gmail.com"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 font-semibold text-gray-200 backdrop-blur transition hover:-translate-y-0.5 hover:border-violet-400/40 hover:bg-white/[0.08]"
          >
            <FiMail />
            Get in touch
          </a>
        </Motion.div>

        <Motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="mt-10 flex items-center gap-3 text-sm text-gray-500"
        >
          <FiCode className="text-violet-400" />
          React · Node.js · DevOps · Automation
        </Motion.div>
      </div>

      {/* Right section with Spline */}
      <div className="flex w-full flex-1 items-center justify-center">
        <div className="relative h-[310px] w-[310px] sm:h-[400px] sm:w-[400px] lg:h-[420px] lg:w-[420px] xl:h-[500px] xl:w-[500px]">
          <div className="absolute inset-6 rounded-full bg-violet-600/20 blur-3xl" />
          <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] shadow-2xl shadow-violet-950/30 backdrop-blur-sm">
          <Spline scene="https://prod.spline.design/yIFajhlKahCCTtik/scene.splinecode" />
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default HeroSection;
