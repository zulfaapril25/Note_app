import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { AddNote } from './pages/AddNote';
import { Container, CssBaseline } from '@mui/material';

function App() {
  const [notesData, setNotesData] = useState(() => {
    // Mengambil data catatan dari localStorage saat aplikasi dimuat
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
      // Menyimpan data catatan ke localStorage setelah menambahkan catatan baru
      localStorage.setItem('notesData', JSON.stringify(updatedNotes));
      return updatedNotes;
    });
  };

  return (
    <Router>
      <Container component="main" maxWidth="lg">
        <CssBaseline />

        <Routes>
          <Route path="/" element={<Home notes={notesData} setNotesData={setNotesData}/>} />
          <Route path="/add" element={<AddNote onAddNote={addNote} />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
