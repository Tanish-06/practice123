import React from 'react'
import './Add.css'
import createNote from '../CreateNote/CreateNote'

const Add = ({ ShowCreateNote }) => {
   


  return (
    <div className="add">
      <button onClick={() => ShowCreateNote(true)}> Create Note</button>
    </div>
  )
}

export default Add
