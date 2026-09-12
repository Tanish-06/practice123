import React from "react";
import logo from "../../assets/IMAGES/logo.jpg";
import "./Navbar.css";
const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" />
          <h2>My Notes App</h2>
        </div>

        <div className="dark-mode-toggle-container">
            <button
          onClick={() => setDarkMode((prev) => !prev)}
          className="dark-mode-toggle"
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
        </div>
      
      </div>
    </>
  );
};

export default Navbar;
