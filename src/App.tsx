import MainLayout from "./components/Layout/MainLayout";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Certifications from "./components/Certifications/Certifications";
// import Blog from "./components/Blog/Blog";

function App() {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      {/* <Blog /> */}
      <Contact />
      <Footer />
    </MainLayout>
  );
}

export default App;
