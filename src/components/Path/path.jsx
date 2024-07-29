import React from "react";
import "./path.css";

const Path = () => {
  return (
    <div className="path">
      <div className="path-box">
        <img src="src/assets/mission1.avif" alt="" />
        <h3>Our Mission</h3>
        <p>We help business owners migrate from manual to digital world.</p>
      </div>
      <div className="path-box">
        <img src="src/assets/vision1.avif" alt="" />
        <h3>Our Vision</h3>
        <p>
          We aim to make the conversion from manual to digital world more
          quality-based and user-friendly.
        </p>
      </div>
      <div className="path-box">
        <img src="src/assets/value1.avif" alt="" />
        <h3>Our Values</h3>
        <p>We value quality, trust, creativity, and leadership.</p>
      </div>
    </div>
  );
};

export default Path;
