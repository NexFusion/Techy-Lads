import React from "react";
import "./Hero.css";
import { scroller } from "react-scroll";

const Hero = () => {
  const handleClick = () => {
    scroller.scrollTo("about", {
      smooth: true,
      offset: -100,
      duration: 500,
    });
  };

  return (
    <div className="hero">
      <div className="hero-text">
        <h1 className="hero-title">TechyLads</h1>
        <p className="hero-subtitle">Where Technology Meets Vision</p>
        <button className="get-started-btn" onClick={handleClick}>
          <span>Get Started</span>
        </button>
      </div>
    </div>
  );
};

export default Hero;
