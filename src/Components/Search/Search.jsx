import React from 'react'
import './Search.css'
const Search = ({ searchTerm, setSearchTerm, darkMode, setDarkMode }) => {
  return (
   <div className={darkMode ? "search dark-mode" : "search"}>
      <input 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search your notes..."
      />
     {searchTerm && (<button className="clear-button" onClick={() => setSearchTerm('')}>clear</button>)}
      
    </div>
  )
}

export default Search
