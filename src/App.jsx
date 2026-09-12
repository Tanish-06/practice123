import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import SearchSection from "./Components/SearchSection/SearchSection";
import {useState} from "react";
const App = () => {
  const [darkMode, setDarkMode] = useState(false);
 
 
  return (
   < div className={darkMode ? "app dark" : "app"}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <SearchSection darkMode={darkMode} setDarkMode={setDarkMode} />

    </div>
  );
};

export default App;
