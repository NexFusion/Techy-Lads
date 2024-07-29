import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Programs from "./components/Programs/programs";
import Title from "./components/Title/title";
import About from "./components/About/about";
import Works from "./components/Works/works";
import Path from "./components/Path/path";
import Testimonials from "./components/Testimonials/testimonials";
import Footer from "./components/Footer/footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <About />
        <Title title="WHY CHOOSE US" />
        <Programs />
        <Title title="OUR WORKS" />
        <Works />
        <Title title="FORGING OUR PATH" />
        <Path />
        <Testimonials />
        <Footer />
      </div>
    </div>
  );
};

export default App;
