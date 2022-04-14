import { useState, useEffect } from 'react';
import { addWord, deleteWord, getWords, updateWord } from './api/actions';
import { v4 as uuidv4 } from "uuid";
import './App.css';
import Header from './components/Header';
import WordList from './components/WordList';

function App() {

  const [words, setWords] = useState([]);
  const [wordText, setWordText] = useState('');

  const addWordHandler = async () => {
    if(!wordText || wordText === '')
      return
    const newWord = { id: uuidv4(), word: wordText}
    const response = await addWord(newWord).catch(error => console.error(error))
    if(response) {
      setWords([...words, response]) 
      setWordText('')
    }    
  }

  const editWordHandler = async (id, word) => {
    const response = await updateWord({id, word}).catch(error => console.error(error))
    words.find(word => word.id === id).word = response.word
    setWords([...words])
  }

  const deleteWordHandler = async id => {
    const response = await deleteWord(id).catch(error => console.error(error))
    setWords([...words.filter(word => word.id !== id)])
  }

  const getWordsHandler = async () => {
    const retrievedWords = await getWords()
    setWords([...retrievedWords]);
  }

  useEffect(() => {
    getWordsHandler()
  }, [])
  

  return (
    <div className="container">
      <Header />
      <div className='add-word'>
        <input type="text" placeholder='Enter Word...' value={wordText} onChange={e => setWordText(e.target.value)}/>
        <button onClick={() => addWordHandler()}>Add</button>
      </div>
      <WordList words = {words} deleteWord = {deleteWordHandler} editWord = {editWordHandler} />
    </div>
  );
}

export default App;
