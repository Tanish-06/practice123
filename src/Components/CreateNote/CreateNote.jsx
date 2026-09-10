import React from "react";
import "./CreateNote.css";
import { useState } from "react";
import { useEffect } from "react";

const CreateNote = ({ ShowCreateNote, setNotes , editIndex, notes }) => {

  const [title, settitle] = useState("");
   const [content, setcontent] = useState("");

  useEffect(() => {
  if (editIndex !== null) {
    settitle(notes[editIndex].title);
    setcontent(notes[editIndex].content);
  }
}, [editIndex, notes]);
  return (
    <div className="create-note">
      <h2>
  {editIndex !== null ? "Edit Note" : "Create New Note"}
</h2>

      <input
        type="text"
        placeholder="Enter note title"
        value={title}
        onChange={(e) => settitle(e.target.value)}
      />

      <textarea
        placeholder="Write your note..."
        value={content}
        onChange={(e) => setcontent(e.target.value)}
      ></textarea>

      <div className="buttons">
        <button onClick={() => ShowCreateNote(false)}>Cancel</button>




       <button
  onClick={() => {
    if (editIndex !== null) {

      // UPDATE EXISTING NOTE
      setNotes((prevNotes) =>
        prevNotes.map((note, index) =>
          index === editIndex
            ? {
                title: title,
                content: content,
              }
            : note
        )
      );

    } else {

      // CREATE NEW NOTE
      const newNote = {
        title: title,
        content: content,
      };
      setNotes((prevNotes) => [...prevNotes, newNote]);
    }
    ShowCreateNote(false);
  }}
>
  {editIndex !== null ? "Update Note" : "Save Note"}
</button>



      </div>
    </div>
  );
};

export default CreateNote;


