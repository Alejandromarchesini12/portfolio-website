import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/skills";

export default function Home() {
  return(
    <main>
      <Hero />
      <About />      
      <Projects />
      <Skills />
      <Experience />
    </main>
  );
}
