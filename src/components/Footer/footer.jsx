import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaArrowUp,
} from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="top-section">
        <div className="info">
          <p>
            <FaMapMarkerAlt /> Address: Setopul, Maitidevi, Kathmandu, Nepal
          </p>
          <p>
            <FaEnvelope /> Email:{" "}
            <a href="mailto:hello@techylads.com.np">hello@techylads.com.np</a>
          </p>
          <p>
            <FaPhone /> Contact No.:{" "}
            <a href="tel:+9779851240433">+977 9851240433</a>
          </p>
        </div>
        <div className="go-to-top">
          <button onClick={scrollToTop}>
            <FaArrowUp /> Go to Top
          </button>
        </div>
      </div>
      <div className="bottom-section">
        <p>All Rights Reserved © 2023 Techy Lads Solution.</p>
        <div className="social">
          <a
            href="https://www.facebook.com/"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://x.com/"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
