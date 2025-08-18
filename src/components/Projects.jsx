// src/components/Projects.jsx
import { motion } from "framer-motion";

const projects = [
  {
    title: "Copacetic – Build Your Vocab",
    img: "/images/Vocab.png",
    link: "https://buildyourvocab.netlify.app/"
  },
  {
    title: "Hotel Management Application",
    img: "/images/Hotel.png",
    link: "https://www.youtube.com/watch?v=rybHyttDmk4&ab_channel=NeelmaniBhardwaj"
  },
  {
    title: "Job Portal Project",
    img: "/images/jobportal.png",
    link: "https://job-portal-project-6tlj.onrender.com/api-doc/"
  },
  {
    title: "Neel Lifts",
    img: "/images/neellifts.png",
    link: "https://neellifts.netlify.app/"
  },
  {
    title: "Event Management App",
    img: "/images/event.png",
    link: "https://www.youtube.com/watch?v=7TTZraUTWdg&ab_channel=NeelmaniBhardwaj"
  },
  {
    title: "X.com Twitter Clone",
    img: "/images/twitter.png",
    link: "https://bhar007-neel.github.io/X.com-Twitter-clone-using-Tailwind/"
  },
  {
    title: "Alien Invasion 2",
    img: "/images/alien.png",
    link: "https://www.youtube.com/watch?v=dhRSaQINJB0&ab_channel=NeelmaniBhardwaj"
  }
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white py-16 px-6"
    >
      <div className="container mx-auto">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-violet-400 mb-8">
          Projects
        </h2>

        {/* Back button */}
        <div className="flex justify-center mb-6">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="px-5 py-2 bg-violet-600 text-white rounded-lg shadow hover:bg-violet-700 transition"
          >
            ⬅ Back to Home
          </button>
        </div>

        {/* Scrollable project list */}
        <div
          className="max-h-[75vh] overflow-y-auto p-2 
                     scrollbar-thin scrollbar-thumb-violet-500 
                     scrollbar-track-gray-700"
        >
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800 shadow-lg rounded-xl overflow-hidden 
                           hover:shadow-violet-500/30 transition block"
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white">
                    {project.title}
                  </h3>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
