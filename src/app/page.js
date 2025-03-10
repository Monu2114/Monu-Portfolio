import About from "./about/page";
import Contact from "./contact/page";
import Projects from "./projects/page";
export default function Home() {
  return (
    <div className=" h-screen">
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
