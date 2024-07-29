import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import menu_icon from "../../assets/menu-icon.png";
import LoginModal from "../LoginModal/loginmodal";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 230) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMobileMenu(!mobileMenu);
  const toggleLoginModal = () => setShowLoginModal(!showLoginModal);

  const handleLogin = () => {
    setLoggedIn(true);
    setShowLoginModal(false);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setShowLoginModal(false);
  };

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <a
        href="https://techylads.com.np/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h1 className="logo">TechyLads</h1>
      </a>
      <ul className={mobileMenu ? "show-mobile-menu" : "hide-mobile-menu"}>
        <li>
          <Link
            to="hero"
            smooth={true}
            offset={0}
            duration={500}
            onClick={() => setMobileMenu(false)}
          >
            HOME
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            offset={-100}
            duration={500}
            onClick={() => setMobileMenu(false)}
          >
            ABOUT US
          </Link>
        </li>
        <li>
          <Link
            to="program"
            smooth={true}
            offset={-160}
            duration={500}
            onClick={() => setMobileMenu(false)}
          >
            SERVICES
          </Link>
        </li>
        <li>
          <Link
            to="works"
            smooth={true}
            offset={-135}
            duration={500}
            onClick={() => setMobileMenu(false)}
          >
            PRODUCT
          </Link>
        </li>
        <li>
          <Link
            to="footer"
            smooth={true}
            offset={0}
            duration={500}
            onClick={() => setMobileMenu(false)}
          >
            CONTACT US
          </Link>
        </li>
        <li>
          <button className="btn" onClick={toggleLoginModal}>
            {loggedIn ? "LOGOUT" : "LOGIN"}
          </button>
        </li>
      </ul>
      <img
        src={menu_icon}
        alt="Menu Icon"
        className="menu-icon"
        onClick={toggleMenu}
      />
      {showLoginModal && (
        <LoginModal
          closeModal={toggleLoginModal}
          onLogin={handleLogin}
          onLogout={handleLogout}
          loggedIn={loggedIn}
        />
      )}
    </nav>
  );
};

export default Navbar;
