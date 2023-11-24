import React, { useState } from 'react';
import { Notes } from '../components/Notes';
import { Navigation } from '../components/Navigation';
import { Container, Typography, Divider, TextField, Box } from '@mui/material';

const Home = (props) => {
  const { notes, setNotesData } = props;
  const [searchTitle, setSearchTitle] = useState('');

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchTitle.toLowerCase())
  );

  const handleDeleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotesData(updatedNotes);
    localStorage.setItem('notesData', JSON.stringify(updatedNotes));
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
          <Navigation />
        </Box>
      </Box>

      <TextField
        label="Search by Title"
        variant="outlined"
        fullWidth
        margin="normal"
        onChange={(e) => setSearchTitle(e.target.value)}
      />

      {filteredNotes.map((note, index) => (
        <div key={note.id}>
          <Notes 
          title={note.title} 
          createdAt={note.createdAt} 
          body={note.body}
          onDelete={() => handleDeleteNote(index)} />
          <Divider />
        </div>
      ))}
    </Container>
  );
};

export { Home };
