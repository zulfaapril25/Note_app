import './App.css';
import { Home } from "./pages/Home";
import { Container, CssBaseline } from '@mui/material';


function App() {
  const notesData = [
  { id: 1, title: 'Meeting', createdAt: '2023-11-11', body: 'Discuss project updates.' },
  { id: 2, title: 'Shopping List', createdAt: '2023-11-12', body: 'Milk, eggs, bread.' },
  { id: 3, title: 'Drakor List', createdAt: '2023-11-13', body: 'Descendants of the Sun, The Heirs, School 2013.' },
  { id: 4, title: 'Tugas List', createdAt: '2023-11-14', body: 'Makalah Bisnis, Analisis Aplikasi, Presentasi KAP.' },
  { id: 5, title: 'Movie List', createdAt: '2023-11-15', body: 'Saranjana, Di Ambang Kematian, Sijjin, Dannur.' },
];
  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <Home notes={notesData}/>
      </Container>
  );
}

export default App;
