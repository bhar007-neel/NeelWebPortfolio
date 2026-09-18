// src/components/Experience.jsx
import { motion as Motion } from "framer-motion";
import nokiaLogo from "../assets/images/Nokia.svg";
import dndLogo from "../assets/images/DND.svg";
import eggFarmersLogo from "../assets/images/EggFarmers.png";
import sanminaLogo from "../assets/images/Sanmina.png";
import alstomLogo from "../assets/images/Alstom.png";
import loblawsLogo from "../assets/images/loblaws.png";

const experiences = [
  {
    company: "Nokia",
    role: "Event-Driven Automation Intern",
    date: "September 2026 – Present",
    logo: nokiaLogo,
  },
  {
    company: "Department of National Defence",
    role: "Software Developer",
    date: "January 2026 – August 2026",
    logo: dndLogo,
  },
  {
    company: "Egg Farmers of Canada",
    role: "Data Analyst Intern",
    date: "May 2025 – Present",
    logo: eggFarmersLogo,
  },
  {
    company: "Sanmina",
    role: "Electromechanical Technician",
    date: "2022 – 2023",
    logo: sanminaLogo,
  },
  {
    company: "Alstom",
    role: "Electromechanical Technician",
    date: "2021 – 2022",
    logo: alstomLogo,
  },
  {
    company: "Loblaws",
    role: "Front-End Supervisor",
    date: "2020 – Present",
    logo: loblawsLogo,
  },
];

const Experience = () => {
  const scrollToHome = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="experience"
      className="relative isolate overflow-hidden bg-[#050507] py-24 text-white sm:py-32"
    >
      <div className="absolute -right-24 top-32 -z-10 h-96 w-96 rounded-full bg-violet-700/10 blur-3xl" />
      <div className="section-container">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="eyebrow">My journey</span>
            <h2 className="section-title">Experience across industries.</h2>
            <p className="section-copy">
              Building software, automation, and technical solutions in
              telecommunications, public service, agriculture, and
              manufacturing.
            </p>
          </div>
          <button
            onClick={scrollToHome}
            className="shrink-0 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-gray-300 transition hover:border-violet-400/30 hover:text-white"
          >
            Back to top ↑
          </button>
        </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {experiences.map((exp, index) => (
              <Motion.div
                key={`${exp.company}-${exp.date}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
                whileHover={{ y: -5 }}
                className="group relative flex min-h-64 flex-col items-start overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.035] p-6 shadow-xl shadow-black/10 transition hover:border-violet-400/30 hover:bg-white/[0.055]"
              >
                <div className="absolute right-5 top-5 text-xs font-medium text-gray-500">
                  {String(index + 1).padStart(2, "0")}
                </div>
                {exp.logo ? (
                  <div className="mb-6 flex h-14 w-full max-w-44 items-center justify-center rounded-xl bg-white p-2.5 shadow-sm">
                    <img
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                ) : (
                  <div
                    aria-hidden="true"
                    className="h-16 min-w-16 px-3 mb-4 rounded-lg bg-violet-600 flex items-center justify-center text-lg font-bold"
                  >
                    {exp.initials}
                  </div>
                )}
                <h3 className="text-lg font-semibold tracking-tight text-white">
                  {exp.company}
                </h3>
                <p className="mt-1 text-sm font-medium text-violet-300">
                  {exp.role}
                </p>
                <div className="mt-auto pt-6">
                  <span className="rounded-full border border-white/[0.08] bg-black/20 px-3 py-1.5 text-xs text-gray-400">
                    {exp.date}
                  </span>
                </div>
              </Motion.div>
            ))}
          </div>
      </div>
    </section>
  );
};

export default Experience;
