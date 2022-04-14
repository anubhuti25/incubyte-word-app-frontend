import React from "react";
import WordItem from "./WordItem";

const WordList = ({ words, deleteWord, editWord }) => {
  return (
    <div className="word-list">
      {words?.map((word) => (
        <WordItem key={word.id} word = {word} deleteWord = {deleteWord} editWord = {editWord} />
      ))}
    </div>
  );
};

export default WordList;
