import React from "react";
import Head from "./components/Head/Head";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Head />
      <Nav />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </>
  );
};

export default App;
