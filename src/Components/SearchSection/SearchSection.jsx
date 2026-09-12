
import React from "react";

import Search from "../Search/Search";
import Add from "../Add/Add";
import "./SearchSection.css";
import { useState } from "react";
import CreateNote from "../CreateNote/CreateNote";
import NoteCard from "../NoteCard/NoteCard";

const SearchSection = () => {
  const [showCreateNote, setShowCreateNote] = useState(false);
  const [notes, setnotes] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const editNote = (index) => {
    setEditIndex(index);
    setShowCreateNote(true);
  };


  const deleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setnotes(updatedNotes);
  };


  const filteredNotes = notes
  .map((note, index) => ({
    note,
    originalIndex: index,
  }))
  .filter(
    ({ note }) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.content.toLowerCase().includes(searchTerm.toLowerCase())
  );



  return (

    <div className="search-section">

     <div className="top-section">
  <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
  <Add
    ShowCreateNote={(value) => {
      setEditIndex(null);
      setShowCreateNote(value);
    }}
  />
</div>

    {showCreateNote && (
  <CreateNote
    ShowCreateNote={setShowCreateNote}
    setNotes={setnotes}
    editIndex={editIndex}
    notes={notes}
    setEditIndex={setEditIndex}
  />
)}

      {!showCreateNote && (
  <div className="notes-container">
    {filteredNotes.length > 0 ? filteredNotes.map(({ note, originalIndex }) => (
      <NoteCard
        key={originalIndex}
        note={note}
        index={originalIndex}
        deleteNote={deleteNote}
        editNote={editNote}
      />
    )) : (
      (searchTerm==="")?
        <p className="no-notes">No notes available.</p>
     :
      <p className="no-notes">No notes found.</p>
      
    )}
  </div>
)}
    </div>
  );
};

export default SearchSection;
