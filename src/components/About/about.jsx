import React from "react";
import "./about.css";
import about_img from "../../assets/about.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="About Us" className="about-img" />
      </div>
      <div className="about-right">
        <h6>About US</h6>
        <h1>LEARN MORE ABOUT OUR EXPERTISE</h1>
        <p>
          Through our skilled IT officers, we offer IT solutions, ranging from
          penetration testing to web development and network solutions. Keeping
          your IT infrastructure up-to-date and solving various
          infrastructure-specific problems is something that we can assist you
          with.
        </p>
      </div>
    </div>
  );
};

export default About;
