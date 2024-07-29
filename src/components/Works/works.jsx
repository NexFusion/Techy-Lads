import React from "react";
import "./works.css";
const Works = () => {
  return (
    <div className="works">
      <div className="work">
        <a
          href="https://actnepal.com/en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="src/assets/Actnepal.jpg" alt="ACT NEPAL" />
          <h3>ACT NEPAL</h3>
          <p>
            Simplifying Nepal's legal landscape with acts, regulations, FAQs,
            forums, and summaries.
          </p>
        </a>
      </div>

      <div className="work">
        <a
          href="https://austclean.com.au/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="src/assets/Ausclean.jpg" alt="" />
          <h3>AUSCLEAN CLUB</h3>
          <p>Sparkling homes, hassle-free cleaning.</p>
        </a>
      </div>
      <div className="work">
        <a
          href="https://aviyantaedu.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="src/assets/aviyanta.jpg" alt="" />
          <h3>AVIYANTA EDUCATION</h3>
          <p>Guiding students for quality education abroad.</p>
        </a>
      </div>
      <div className="work">
        <a
          href="https://diversifiedllc.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="src/assets/Diversifiedllc.png" alt="" />
          <h3>DIVERSIFIED LLC</h3>
          <p>Unleashing potential for widespread happiness.</p>
        </a>
      </div>
    </div>
  );
};

export default Works;
