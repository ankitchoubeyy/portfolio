import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProjectSection from "@/components/ProjectSection";
import Skills from "@/components/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black">
      <Navbar/>
      <Hero/>
      <About/>
      <ProjectSection/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  );
}
