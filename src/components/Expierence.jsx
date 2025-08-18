// src/components/Experience.jsx
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Loblaws",
    role: "Front-End Supervisor",
    date: "2025 – Present",
    logo: "/public/images/loblaws.png",
  },
  {
    company: "Egg Farmers of Canada",
    role: "Data Analyst Intern",
    date: "May 2025 – Present",
    logo: "/public/images/eggfarmers.png",
  },
  {
    company: "Sanmina",
    role: "Electromechanical Technician",
    date: "2022 – 2023",
    logo: "/public/images/sanmina.png",
  },
  {
    company: "Alstom",
    role: "Electromechanical Technician",
    date: "2021 – 2022",
    logo: "/public/images/alstom.png",
  },
];

const Experience = () => {
  const scrollToHome = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="experience"
      className="relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 px-6"
    >
      <div className="container mx-auto relative z-10">
        {/* Back button */}
        <div className="mb-8 text-left">
          <button
            onClick={scrollToHome}
            className="px-5 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition shadow-md"
          >
            ← Back to Home
          </button>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-purple-400 mb-6">
          Experience
        </h2>

        {/* Scrollable container (especially for mobile) */}
        <div
          className="max-h-[75vh] overflow-y-auto p-2 
                     scrollbar-thin scrollbar-thumb-violet-500 
                     scrollbar-track-gray-800 rounded-lg"
        >
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800 shadow-lg rounded-xl p-6 flex flex-col items-center text-center hover:shadow-2xl transition"
              >
                <img
                  src={exp.logo}
                  alt={exp.company}
                  className="h-16 mb-4 object-contain"
                />
                <h3 className="text-lg font-semibold">{exp.company}</h3>
                <p className="text-sm text-purple-400">{exp.role}</p>
                <p className="text-xs text-gray-400 mt-2">{exp.date}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
