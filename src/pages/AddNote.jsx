import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

const AddNote = ({ onAddNote }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    setIsButtonDisabled(!(title.trim() !== '' && body.trim() !== ''));
  }, [title, body]);

  const handleSubmit = () => {
    const newNote = {
      id: Date.now(),
      title,
      createdAt: new Date().toLocaleDateString(),
      body,
    };

    onAddNote(newNote);
    navigate('/');
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
        onClick={handleSubmit}
        disabled={isButtonDisabled}
      >
        Submit
      </Button>
      </Container>
  );
};

export { AddNote };
