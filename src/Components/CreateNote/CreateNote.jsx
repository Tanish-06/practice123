import React, { useEffect, useState } from "react";
import "./CreateNote.css";

const CreateNote = ({
  ShowCreateNote,
  setNotes,
  editIndex,
  notes,
  setEditIndex,
  darkMode
}) => {
  const [title, settitle] = useState("");
  const [content, setcontent] = useState("");

  useEffect(() => {
    if (editIndex !== null) {
      settitle(notes[editIndex].title);
      setcontent(notes[editIndex].content);
    } else {
      settitle("");
      setcontent("");
    }
  }, [editIndex, notes]);

  const handleSave = () => {
    if (editIndex !== null) {
      // UPDATE EXISTING NOTE

      setNotes((prevNotes) =>
        prevNotes.map((note, index) =>
          index === editIndex
            ? {
                title: title,
                content: content,
              }
            : note,
        ),
      );
    } else {
      // CREATE NEW NOTE

      const newNote = {
        title: title,
        content: content,
      };

      setNotes((prevNotes) => [...prevNotes, newNote]);
    }

    // Reset edit mode
    setEditIndex(null);

    // Close form
    ShowCreateNote(false);
  };

  const handleCancel = () => {
    // Reset edit mode
    setEditIndex(null);

    // Close form
    ShowCreateNote(false);
  };

  return (
    <div className={darkMode ? "create-note dark-mode" : "create-note"}>
      <h2>{editIndex !== null ? "Edit Note" : "Create New Note"}</h2>

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
        <button onClick={handleCancel}>Cancel</button>

        <button onClick={handleSave}>
          {editIndex !== null ? "Update Note" : "Save Note"}
        </button>
      </div>
    </div>
  );
};

export default CreateNote;
