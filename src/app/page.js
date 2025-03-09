import About from "./about/page";
import Contact from "./contact/page";
import Projects from "./projects/page";
export default function Home() {
  return (
    <div className="bg-black">
      <About />
      <Contact />
      <Projects />
    </div>
  );
}
