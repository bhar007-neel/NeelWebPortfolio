import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-violet-900 to-black flex flex-col-reverse xl:flex-row items-center justify-center lg:px-24 px-6 relative overflow-hidden">
      {/* Left section */}
      <div className="flex-1 flex flex-col items-start justify-center text-left z-10 max-w-2xl">
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            delay: 0.8,
            duration: 1.5,
          }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 text-white"
        >
          Building fast <br /> Reliable Results
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            delay: 1.2,
            duration: 1.5,
          }}
          className="text-lg md:text-xl lg:text-2xl text-purple-200 leading-relaxed"
        >
          Hi, I’m <span className="font-semibold text-white">Neel Bhardwaj</span> 👋 A Computer Science
          student at the University of Ottawa. I love building projects that
          combine creativity and technology — from full-stack applications to
          data analysis dashboards. Currently, I’m sharpening my skills in
          React, Node.js, and DevOps, while exploring AI and backend
          engineering.
        </motion.p>

        {/* Call to Action */}
        <motion.a
          href="#projects"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="mt-8 px-6 py-3 rounded-xl bg-violet-600 text-white font-bold hover:bg-violet-700 transition-all"
        >
          View My Work
        </motion.a>
      </div>

      {/* Right section with Spline */}
      <div className="flex-1 flex justify-center items-center w-full">
        <div className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] lg:w-[550px] lg:h-[550px]">
          <Spline scene="https://prod.spline.design/yIFajhlKahCCTtik/scene.splinecode" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
