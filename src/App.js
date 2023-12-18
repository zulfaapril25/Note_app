import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Home } from './pages/Home';
import { Navigation } from './components/Navigation'
import { AddNote } from './pages/AddNote';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Container, CssBaseline } from '@mui/material';
import { deleteNote } from './utils/network';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('accessToken'));
  const [user, setUser] = useState(null);
  const [notesData, setNotesData] = useState(() => {
    const storedNotes = localStorage.getItem('notesData');
    return storedNotes ? JSON.parse(storedNotes) : [
      { id: 1, title: 'Meeting', createdAt: '2023-11-11', body: 'Discuss project updates.' },
      { id: 2, title: 'Shopping List', createdAt: '2023-11-12', body: 'Milk, eggs, bread.' },
      { id: 3, title: 'Drakor List', createdAt: '2023-11-13', body: 'Descendants of the Sun, The Heirs, School 2013.' },
      { id: 4, title: 'Tugas List', createdAt: '2023-11-14', body: 'Makalah Bisnis, Analisis Aplikasi, Presentasi KAP.' },
      { id: 5, title: 'Movie List', createdAt: '2023-11-15', body: 'Saranjana, Di Ambang Kematian, Sijjin, Dannur.' },
    ];
  });
 

  const addNote = (newNote) => {
    setNotesData((prevNotes) => {
      const updatedNotes = [...prevNotes, newNote];
      localStorage.setItem('notesData', JSON.stringify(updatedNotes));
      return updatedNotes;
    });
  };

  const onLogin = (userData) => {
    setIsLoggedIn(true);
    setUser(userData);
    console.log('User logged in:', userData);
    window.location.href = '/';
  };
  

  const handleDelete = async (id) => {
    try {
      const response = await deleteNote(id);

      if (!response.error) {
        setNotesData((prevNotes) => {
          const updatedNotes = prevNotes.filter((note) => note.id !== id);
          localStorage.setItem('noteData', JSON.stringify(updatedNotes));
          return updatedNotes;
        });
      } else {
        console.error('Failed to delete note:', response.error);
      }
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };

  return (
    <Router>
      <Container component="main" maxWidth="lg">
        <CssBaseline />

        <Routes>
          <Route path="/" element={isLoggedIn ? <Home notes={notesData} setNotesData={setNotesData} user={user} handleDelete={handleDelete} /> : <Navigation to="/login" />}/>
          <Route path="/add" element={isLoggedIn ? <AddNote onAddNote={addNote} user={user} /> : <Navigation to="/login" />}/>
          <Route path="/login" element={<Login onLogin={onLogin} setUser={setUser} />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
