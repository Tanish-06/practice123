import React from 'react'
import './NoteCard.css'
const NoteCard = ({ note,Index,deleteNote,editNote }) => {
  return (
    <div className="note-card">
      <h3>{note.title}</h3>
      <p>{note.content}</p>

      <button onClick={()=>{deleteNote(Index)}} className="delete-button">Delete</button>
      <button  onClick={()=>{editNote(Index)}} className="edit-button">Edit</button>
    </div>
  )
}

export default NoteCard
