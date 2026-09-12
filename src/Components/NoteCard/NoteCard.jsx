import React from 'react'
import './NoteCard.css'
const NoteCard = ({ note,index,deleteNote,editNote,darkMode }) => {
  return (
    <div className={darkMode ? "note-card dark-mode" : "note-card"}>
      <h3>{note.title}</h3>
      <p>{note.content}</p>

      <button onClick={()=>{deleteNote(index)}} className="delete-button">Delete</button>
      <button  onClick={()=>{editNote(index)}} className="edit-button">Edit</button>
    </div>
  )
}

export default NoteCard
