import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
// import Projects from "./components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import "./CSS/App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      {/* <Project /> */}
      <Contact />
      <Footer />
    </>
  );
}

export default App;