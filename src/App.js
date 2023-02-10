
import { useEffect, useState } from 'react';
import './App.css';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';
function App() {
  const [notes, setNotes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(()=> {
    const saveNotes = JSON.parse(localStorage.getItem('ata-notes'))

    if(saveNotes){
      setNotes(saveNotes)
    }
  },[])

  useEffect(()=> {
    localStorage.setItem('data-notes', JSON.stringify(notes))
  },[notes])



  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes)
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  return (
    <div className={(darkMode === true? 'dark-mode': "none" )}>
      <div className="container">
        <Header handelToggleDarkMode={setDarkMode} />
        <Search handelSearchNote={setSearchText} />
        <NotesList
          note={notes.filter((note) => note.text.toLowerCase().includes(searchText))}
          handleAddNote={addNote}
          handelDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
}

export default App;
