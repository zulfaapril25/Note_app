import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { addNote } from '../utils/network';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

const AddNote = ({ onAddNote }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [isLoggedIn] = useState([]);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    setIsButtonDisabled(!(title.trim() !== '' && body.trim() !== ''));
  }, [title, body]);

  // ...

const handleAddNote = async () => {
  try {
    const response = await addNote({ title, body });
    if (!response.error) {
      onAddNote(response.data);
      navigate('/');
    } else if (response.code === 401) {
      console.error('Unauthorized error:', response);
    } else {
      console.error('Add note error:', response.code, response.data);
    }
  } catch (error) {
    console.error('Add note error:', error);
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
        label="Title"
        variant="outlined"
        fullWidth
        margin="normal"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        label="Body"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        margin="normal"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleAddNote}
        disabled={isButtonDisabled}
      >
        Submit
      </Button>
      </Container>
  );
};

export { AddNote };
