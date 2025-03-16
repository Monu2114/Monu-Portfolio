import About from "../components/about";
import Footer from "../components/footer";
import Projects from "./projects/page";
import Skills from "../components/skills";
export default function Home() {
  return (
    <div className=" h-screen">
      <About />
      <Projects />
      {/* Footer */}
      <Skills />
      <Footer />
    </div>
  );
}
