import React, { useState } from "react";
import "./loginmodal.css";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons

const LoginModal = ({ closeModal, onLogin, onLogout, loggedIn }) => {
  const [view, setView] = useState("login");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleLogin = () => {
    onLogin();
    closeModal();
  };

  const handleSignup = () => {
    onLogin();
    closeModal();
  };

  const handleLogout = () => {
    onLogout();
    closeModal();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (view === "login") {
      handleLogin();
    } else {
      handleSignup();
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={closeModal}>
          &times;
        </button>
        {loggedIn ? (
          <div className="welcome-container">
            <h2 className="welcome-message">You're already logged in!</h2>
            <p>Please log out if you wish to switch accounts.</p>
            <button className="btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <div className="form-container">
            <h2 className="welcome-message">
              {view === "login" ? "Welcome to Login" : "Join Us Today"}
            </h2>
            <form onSubmit={handleSubmit}>
              {view === "login" ? (
                <>
                  <div className="form-group">
                    <label htmlFor="login-email">Email Address:</label>
                    <input
                      type="email"
                      id="login-email"
                      name="email"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="login-password">Password:</label>
                    <div className="password-container">
                      <input
                        type={passwordVisible ? "text" : "password"}
                        id="login-password"
                        name="password"
                        required
                      />
                      <button
                        type="button"
                        className="password-toggle"
                        onClick={togglePasswordVisibility}
                      >
                        {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="form-group">
                    <label htmlFor="signup-name">Full Name:</label>
                    <input type="text" id="signup-name" name="name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="signup-email">Email Address:</label>
                    <input
                      type="email"
                      id="signup-email"
                      name="email"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="signup-password">Password:</label>
                    <div className="password-container">
                      <input
                        type={passwordVisible ? "text" : "password"}
                        id="signup-password"
                        name="password"
                        required
                      />
                      <button
                        type="button"
                        className="password-toggle"
                        onClick={togglePasswordVisibility}
                      >
                        {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                      </button>
                    </div>
                  </div>
                </>
              )}
              <button type="submit" className="btn btn-full">
                Continue
              </button>
            </form>
            <div className="toggle-buttons">
              <button
                className={`toggle-btn ${view === "login" ? "active" : ""}`}
                onClick={() => setView("login")}
              >
                Login
              </button>
              <button
                className={`toggle-btn ${view === "signup" ? "active" : ""}`}
                onClick={() => setView("signup")}
              >
                Signup
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginModal;
