import React, { useState } from "react";
import { IconContext } from "react-icons";
import { FaEdit, FaTrash, FaCheck, FaTimes } from "react-icons/fa";

const WordItem = ({ word, deleteWord, editWord }) => {
  const [wordInput, setWord] = useState("");
  const [editMode, setEditMode] = useState(false);

  const deleteHandler = () => {
    deleteWord(word.id);
  };

  const editHandler = () => {
    editWord(word.id, wordInput);
    setEditMode(!editMode);
  };

  return (
    <div className="card">
      <div className="content">
        {editMode ? (
          <input
            type="text"
            value={wordInput}
            onChange={(e) => setWord(e.target.value)}
          />
        ) : (
          word.word
        )}
      </div>
      <div className="icon">
        {editMode ? (
          <IconContext.Provider value={{ color: "green" }}>
            <FaCheck onClick={editHandler} />
          </IconContext.Provider>
        ) : (
          <IconContext.Provider value={{ color: "green" }}>
            <FaEdit
              onClick={() => {
                setEditMode(!editMode);
                setWord(word.word);
              }}
            />
          </IconContext.Provider>
        )}

        {editMode ? (
          <IconContext.Provider value={{ color: "red" }}>
            <FaTimes onClick={() => setEditMode(!editMode)} />
          </IconContext.Provider>
        ) : (
          <IconContext.Provider value={{ color: "red" }}>
            <FaTrash onClick={deleteHandler} />
          </IconContext.Provider>
        )}
      </div>
    </div>
  );
};

export default WordItem;
