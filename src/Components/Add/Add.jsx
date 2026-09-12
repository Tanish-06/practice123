import React from 'react'
import './Add.css'
import createNote from '../CreateNote/CreateNote'

const Add = ({ ShowCreateNote ,darkMode}) => {
   


  return (
    <div className={darkMode ? "add dark-mode" : "add"}>
      <button onClick={() => ShowCreateNote(true)}> Create Note</button>
    </div>
  )
}

export default Add
