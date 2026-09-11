
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

  const editNote = (index) => {
    setEditIndex(index);
    setShowCreateNote(true);
  };

  const deleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setnotes(updatedNotes);
  };

  return (
    <div className="search-section">

     <div className="top-section">
  <Search />
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
    {notes.map((note, index) => (
      <NoteCard
        key={index}
        note={note}
        index={index}
        deleteNote={deleteNote}
        editNote={editNote}
      />
    ))}
  </div>
)}
    </div>
  );
};

export default SearchSection;
