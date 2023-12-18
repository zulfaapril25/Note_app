import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { Notes } from '../components/Notes';
import { Navigation } from '../components/Navigation';
import { getAccessToken, getUserLogged, getNotes, deleteNote } from '../utils/network';
import { Container, Typography, Divider, TextField, Box} from '@mui/material';

const Home = (props) => {
  const { notes, setNotesData } = props;
  const [searchTitle, setSearchTitle] = useState('');
  const [isLoggedIn] = useState([]);
  const navigate = useNavigate();

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchTitle.toLowerCase())
  );


  useEffect(() => {
    (async () => {
      try {
        const token = getAccessToken();
        console.log('Token:', token);

  
        if (!token || token === "") {
          console.log('Token is undefined. Redirecting to login page...');
          navigate('/login');
          return;
        }
        const userResponse = await getUserLogged();
        
        console.log(userResponse)
        if (userResponse.data) {
          const notesResponse = await getNotes();
          
          if (!notesResponse.error) {
            setNotesData(notesResponse.data);
          } else {
            console.error('Error fetching notes:', notesResponse);
          }
        } else {
          console.log('User is not logged in. Redirecting to login page...');
          navigate('/login');
        }
      } catch (error) {
        console.error('Unexpected error fetching notes and user info:', error);
      }
    })();
  }, [setNotesData, navigate]);
  
  
  const handleDelete = async (noteId) => {
    try {
      const response = await deleteNote(noteId);
      if (!response.error) {
        setNotesData((prevNotes) => prevNotes.filter((note) => note.id !== noteId));
      } else {
        console.error('Error deleting note:', response);
      }
    } catch (error) {
      console.error('Unexpected error deleting note:', error);
    }
  };


  return (
    <Container
      maxWidth="lg"
      className="mt-5"
      sx={{
        backgroundColor: '#f5f5f5',
        padding: 3,
        borderRadius: 8,
      }}
    >
      <Box sx={{ textAlign: 'center', marginBottom: 2 }}>
        <Typography
          variant="h4"
          component="div"
          className="bg-second bg-gradient text-white rounded p-1"
          sx={{
            backgroundColor: '#001f3f',
            color: 'common.white',
            borderRadius: 2,
            padding: 1,
          }}
        >
          NOTES
        </Typography>

        <Box sx={{ marginTop: 2 }}>
          <Navigation isLoggedIn={isLoggedIn}/>
        </Box>
      </Box>

      <TextField
        label="Search by Title"
        variant="outlined"
        fullWidth
        margin="normal"
        onChange={(e) => setSearchTitle(e.target.value)}
      />

      {filteredNotes.map((note) => (
        <div key={note.id}>
          <Notes
            title={note.title}
            createdAt={note.createdAt}
            body={note.body}
            id={note.id}
            onDelete={() => handleDelete(note.id)}
          />
          <Divider />
        </div>
      ))}
    </Container>
  );
};

export { Home };
