import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Faculty from "./components/Faculty";
import University from "./components/University";
import Colleges from "./components/Colleges";
import Courses from "./components/Courses";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Faculty />
      <University />
      <Colleges />
      <Courses />
      <Contact />
    </>
  );
}