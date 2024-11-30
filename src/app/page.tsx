import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProjectSection from "@/components/ProjectSection";
import Skills from "@/components/Skills";
import Image from "next/image";
import NavBar from "../components/NavBar"

export default function Home() {
  return (
    <div className="bg-black">
      <NavBar/>
      {/* <Navbar/> */}
      <Hero/>
      <About/>
      <ProjectSection/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  );
}
