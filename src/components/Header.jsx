import { motion as Motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";
import ContactForm from "./ContactForm";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const [contactFormOpen, setContactFormOpen] = useState(false);
  const openContactForm = () => setContactFormOpen(true);
  const closeContactForm = () => setContactFormOpen(false);

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "Projects", link: "#projects" },
    {
      name: "Certifications",
      link: "https://www.linkedin.com/in/neelmani-bhardwaj-b690a52b8/details/certifications/",
      external: true,
    },
    { name: "Experience", link: "#experience" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-black/65 px-4 shadow-2xl shadow-black/20 backdrop-blur-xl sm:px-6">
        {/* Logo/Name */}
        <Motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 25,
            delay: 0.3,
            duration: 1.2,
          }}
          className="flex items-center"
        >
          <div className="mr-3 flex h-9 w-9 items-center justify-center rounded-xl border border-violet-400/30 bg-violet-500/15 text-lg font-bold text-violet-300 shadow-inner shadow-violet-400/10">
            N
          </div>
          <span className="text-base font-semibold tracking-tight text-white sm:text-lg">
            Neel Bhardwaj
          </span>
        </Motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 rounded-xl border border-white/5 bg-white/[0.03] p-1 lg:flex">
          {navItems.map((item, index) => (
            <Motion.a
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.7 + index * 0.2,
                duration: 1.2,
              }}
              href={item.link}
              {...(item.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="rounded-lg px-4 py-2 text-sm font-medium text-gray-300 transition hover:bg-white/[0.07] hover:text-white"
            >
              {item.name}
            </Motion.a>
          ))}
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-2">
          {/* Social Icons */}
          <div className="hidden items-center gap-1 md:flex">
            <Motion.a
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3, duration: 0.8 }}
              href="https://github.com/Bhar007-neel"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="rounded-lg p-2 text-gray-400 transition hover:bg-white/[0.07] hover:text-white"
            >
              <FiGithub className="w-6 h-6" />
            </Motion.a>
            <Motion.a
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3, duration: 0.8 }}
              href="https://www.linkedin.com/in/neelmani-bhardwaj-b690a52b8"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="rounded-lg p-2 text-gray-400 transition hover:bg-white/[0.07] hover:text-white"
            >
              <FiLinkedin className="w-6 h-6" />
            </Motion.a>
          </div>

          {/* Hire Me */}
          <Motion.button
            onClick={openContactForm}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1.6,
              duration: 0.8,
              type: "spring",
              stiffness: 100,
              damping: 15,
            }}
            className="hidden items-center gap-2 rounded-xl bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-violet-900/30 transition hover:-translate-y-0.5 hover:bg-violet-500 md:inline-flex"
          >
            <FiMail />
            Hire Me
          </Motion.button>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <Motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleMenu}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="rounded-lg p-2 text-gray-300 transition hover:bg-white/10"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </Motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <Motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? "auto" : 0,
        }}
        transition={{ duration: 0.8 }}
        className="mx-auto mt-2 max-w-7xl overflow-hidden rounded-2xl border border-white/10 bg-gray-950/95 px-4 shadow-2xl backdrop-blur-xl md:hidden"
      >
        <nav className="flex flex-col gap-1 py-4">
          {navItems.map((item) => (
            <a
              onClick={toggleMenu}
              key={item.name}
              href={item.link}
              {...(item.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="rounded-xl px-3 py-2.5 text-sm font-medium text-gray-300 transition hover:bg-white/[0.07] hover:text-white"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="border-t border-white/10 pb-4 pt-4">
          <div className="flex space-x-5">
            <a href="https://github.com/Bhar007-neel" target="_blank">
              <FiGithub className="h-5 w-5 text-gray-400 transition hover:text-violet-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/neelmani-bhardwaj-b690a52b8"
              target="_blank"
            >
              <FiLinkedin className="h-5 w-5 text-gray-400 transition hover:text-violet-300" />
            </a>
          </div>
          <button
            onClick={() => {
              toggleMenu();
              openContactForm();
            }}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 px-4 py-2.5 font-semibold text-white"
          >
            <FiMail />
            Hire Me
          </button>
        </div>
      </Motion.div>

      {/* Contact Form Modal */}
      {contactFormOpen && <ContactForm closeForm={closeContactForm} />}
    </header>
  );
};

export default Header;
