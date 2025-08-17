import { motion } from "framer-motion";

const projects = [
  {
    title: "Copacetic – Build Your Vocab",
    img: "/src/assets/images/vocab.png",
    link: "https://buildyourvocab.netlify.app/"
  },
  {
    title: "Hotel Management Application",
    img: "/src/assets/images/Hotel.png",
    link: "https://www.youtube.com/watch?v=rybHyttDmk4&ab_channel=NeelmaniBhardwaj"
  },
  {
    title: "Job Portal Project",
    img: "/src/assets/images/jobportal.png",
    link: "https://job-portal-project-6tlj.onrender.com/api-doc/"
  },
  {
    title: "Neel Lifts",
    img: "/src/assets/images/neellifts.png",
    link: "https://neellifts.netlify.app/"
  },
  {
    title: "Event Management App",
    img: "/src/assets/images/event.png",
    link: "https://www.youtube.com/watch?v=7TTZraUTWdg&ab_channel=NeelmaniBhardwaj"
  },
  {
    title: "X.com Twitter Clone",
    img: "/src/assets/images/twitter.png",
    link: "https://bhar007-neel.github.io/X.com-Twitter-clone-using-Tailwind/"
  },
  {
    title: "Alien Invasion 2",
    img: "/src/assets/images/alien.png",
    link: "https://www.youtube.com/watch?v=dhRSaQINJB0&ab_channel=NeelmaniBhardwaj"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-violet-600 mb-12">
          Projects
        </h2>

        {/* Responsive scrollable section */}
        <div className="max-h-[80vh] overflow-y-auto p-2 scrollbar-thin scrollbar-thumb-violet-500 scrollbar-track-gray-200 dark:scrollbar-track-gray-700">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="block bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition"
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
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
