import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import Experience from "./components/Expierence";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <Projects />
        <Experience />
      </main>
      <footer className="border-t border-white/[0.08] bg-[#050507] py-8 text-sm text-gray-500">
        <div className="section-container flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p>© {new Date().getFullYear()} Neel Bhardwaj</p>
          <a
            href="mailto:neelmanibhardwaj003@gmail.com"
            className="transition hover:text-violet-300"
          >
            neelmanibhardwaj003@gmail.com
          </a>
        </div>
      </footer>
    </>
  );
}

