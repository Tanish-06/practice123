import React from "react";
import logo from "../../assets/IMAGES/logo.jpg";
import "./Navbar.css";
const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <>
      <div className={darkMode ? "navbar dark" : "navbar"}>
        <div className={darkMode ? "logo dark" : "logo"}>
          <img src={logo} alt="Logo" />
          <h2>My Notes App</h2>
        </div>

        <div className={darkMode ? "dark-mode-toggle-container dark" : "dark-mode-toggle-container"}>
            <button
          onClick={() => setDarkMode((prev) => !prev)}
          className={darkMode ? "dark-mode-toggle dark" : "dark-mode-toggle"}
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
        </div>
      
      </div>
    </>
  );
};

export default Navbar;
