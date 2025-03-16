import About from "../components/about";
import Footer from "../components/footer";
import Projects from "./projects/page";
import Skills from "../components/skills";
export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground eucalyptus-pattern">
      <About />
      <Projects />
      {/* Footer */}
      <Skills />
      <Footer />
    </main>
  );
}
