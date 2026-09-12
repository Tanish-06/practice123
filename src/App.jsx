import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import SearchSection from "./Components/SearchSection/SearchSection";
import {useState} from "react";
const App = () => {
  const [darkMode, setDarkMode] = useState(false);
 
 
  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <SearchSection darkMode={darkMode} setDarkMode={setDarkMode} />

    </>
  );
};

export default App;
