import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";
import emailjs from "emailjs-com";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const [contactFormOpen, setContactFormOpen] = useState(false);
  const openContactForm = () => setContactFormOpen(true);
  const closeContactForm = () => setContactFormOpen(false);

  // ✅ EmailJS form submission
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_caa1poi",   // 🔹 
        "template_9omkqz9",  // 🔹 Replace with EmailJS Template ID
        e.target,
        "Obf3ThuZtArJDiExK"    // 🔹 Replace with EmailJS Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully ✅");
          closeContactForm();
        },
        (error) => {
          console.log(error.text);
          alert("❌ Failed to send message, please try again.");
        }
      );
  };

  return (
    <header className="absolute w-full z-50 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo/Name */}
        <motion.div
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
          <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-gray-500 to-gray-700 flex items-center justify-center text-purple-600 font-bold text-xl mr-3">
            N
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent">
            Neel Bhardwaj
          </span>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="lg:flex hidden space-x-8 items-center">
          {[
            { name: "Home", link: "#home" },
            { name: "Projects", link: "#projects" },
            {
              name: "Certifications",
              link: "https://www.linkedin.com/in/neelmani-bhardwaj-b690a52b8/details/certifications/",
              external: true,
            },
            { name: "Experience", link: "#experience" },
            // 🔹 Removed Contact
          ].map((item, index) => (
            <motion.a
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
              className="relative text-gray-800 dark:text-gray-200 hover:text-violet-600 dark:hover:text-violet-400 font-medium transition-colors duration-300 group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-600 group-hover:w-full transition-all duration-300"></span>
            </motion.a>
          ))}
        </nav>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Social Icons */}
          <div className="md:flex hidden items-center space-x-4">
            <motion.a
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3, duration: 0.8 }}
              href="https://github.com/Bhar007-neel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300"
            >
              <FiGithub className="w-6 h-6" />
            </motion.a>
            <motion.a
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3, duration: 0.8 }}
              href="https://www.linkedin.com/in/neelmani-bhardwaj-b690a52b8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300"
            >
              <FiLinkedin className="w-6 h-6" />
            </motion.a>
          </div>

          {/* Hire Me */}
          <motion.button
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
            className="hidden md:inline-flex px-4 py-2 rounded-xl bg-gradient-to-r from-gray-500 to-gray-100 text-violet-700 font-bold hover:from-violet-600 hover:to-purple-700 hover:text-white transition-all duration-500"
          >
            Hire Me :)
          </motion.button>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleMenu}
              className="text-gray-300"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? "auto" : 0,
        }}
        transition={{ duration: 0.8 }}
        className="md:hidden overflow-hidden bg-white dark:bg-gray-900 shadow-lg px-4 py-5 space-y-5"
      >
        <nav className="flex flex-col space-y-3">
          {[
            { name: "Home", link: "#home" },
            { name: "Projects", link: "#projects" },
            {
              name: "Certifications",
              link: "https://www.linkedin.com/in/neelmani-bhardwaj-b690a52b8/details/certifications/",
              external: true,
            },
            { name: "Experience", link: "#experience" },
            // 🔹 Removed Contact
          ].map((item) => (
            <a
              onClick={toggleMenu}
              key={item.name}
              href={item.link}
              {...(item.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="text-gray-300 font-medium py-2"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex space-x-5">
            <a href="https://github.com/Bhar007-neel" target="_blank">
              <FiGithub className="w-6 h-6 text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/neelmani-bhardwaj-b690a52b8"
              target="_blank"
            >
              <FiLinkedin className="w-6 h-6 text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300" />
            </a>
          </div>
          <button
            onClick={() => {
              toggleMenu();
              openContactForm();
            }}
            className="mt-4 block w-full px-4 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-violet-400 font-bold text-white"
          >
            Hire Me :)
          </button>
        </div>
      </motion.div>

      {/* Contact Form Modal */}
      {contactFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white text-black p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Contact Me</h2>
            <form className="space-y-4" onSubmit={sendEmail}>
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                className="w-full px-3 py-2 border rounded"
                required
              />
              <input
                type="email"
                name="reply_to"
                placeholder="Your Email"
                className="w-full px-3 py-2 border rounded"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                className="w-full px-3 py-2 border rounded"
                rows="4"
                required
              />
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={closeContactForm}
                  className="px-4 py-2 bg-gray-400 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-violet-600 text-white rounded"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
