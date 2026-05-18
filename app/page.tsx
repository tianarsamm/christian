import Hero from "../components/Hero/page";
import About from "../components/About/page";
import Experience from "../components/Experience/page";
import Projects from "../components/Projects/page";
import Skills from "../components/Skills/page";
import Contact from "../components/Contact/page";
import Footer from "../components/Footer/page";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black font-sans">

      {/* Hero: full-width, no container constraints */}
      <Hero />

      {/* All sections full-width — each component handles its own padding */}
      <main className="w-full">
        <About />
        <Skills />
        <Experience />
        <Projects />
        {/* <Skills /> */}
        <Contact />
        {/* <Footer /> */}
      </main>

    </div>
  );
}