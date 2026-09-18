// src/components/Projects.jsx
import { motion as Motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import vocabImage from "../assets/images/Vocab.png";
import hotelImage from "../assets/images/Hotel.png";
import jobPortalImage from "../assets/images/jobportal.png";
import neelLiftsImage from "../assets/images/neellifts.png";
import eventImage from "../assets/images/event.png";
import twitterImage from "../assets/images/twitter.png";
import alienImage from "../assets/images/alien.png";

const projects = [
  {
    title: "Copacetic – Build Your Vocab",
    img: vocabImage,
    link: "https://buildyourvocab.netlify.app/"
  },
  {
    title: "Hotel Management Application",
    img: hotelImage,
    link: "https://www.youtube.com/watch?v=rybHyttDmk4&ab_channel=NeelmaniBhardwaj"
  },
  {
    title: "Job Portal Project",
    img: jobPortalImage,
    link: "https://job-portal-project-6tlj.onrender.com/api-doc/"
  },
  {
    title: "Neel Lifts",
    img: neelLiftsImage,
    link: "https://neellifts.netlify.app/"
  },
  {
    title: "Event Management App",
    img: eventImage,
    link: "https://www.youtube.com/watch?v=7TTZraUTWdg&ab_channel=NeelmaniBhardwaj"
  },
  {
    title: "X.com Twitter Clone",
    img: twitterImage,
    link: "https://bhar007-neel.github.io/X.com-Twitter-clone-using-Tailwind/"
  },
  {
    title: "Alien Invasion 2",
    img: alienImage,
    link: "https://www.youtube.com/watch?v=dhRSaQINJB0&ab_channel=NeelmaniBhardwaj"
  }
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative isolate overflow-hidden bg-[#08080c] py-24 text-white sm:py-32"
    >
      <div className="absolute left-1/2 top-0 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-700/10 blur-3xl" />
      <div className="section-container">
        {/* Heading */}
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="eyebrow">Selected work</span>
            <h2 className="section-title">Projects built with purpose.</h2>
            <p className="section-copy">
              A collection of full-stack applications, experiments, and
              practical tools designed to solve real problems.
            </p>
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="shrink-0 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-gray-300 transition hover:border-violet-400/30 hover:text-white"
          >
            Back to top ↑
          </button>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Motion.a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
                whileHover={{ y: -6 }}
                className="group block overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.035] shadow-xl shadow-black/10 transition hover:border-violet-400/30 hover:bg-white/[0.055]"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="h-52 w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60" />
                </div>
                <div className="flex items-center justify-between gap-4 p-5">
                  <h3 className="text-base font-semibold text-white">
                    {project.title}
                  </h3>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-gray-300 transition group-hover:border-violet-400/40 group-hover:bg-violet-500 group-hover:text-white">
                    <FiArrowUpRight />
                  </span>
                </div>
              </Motion.a>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
