import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../utils/network';
import { Container, TextField, Button, Typography, Box } from '@mui/material';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
    const response = await register({ username, password });
    if (!response.error) {
      navigate('/login');
    } else {
      setError('Registration failed');
    }
  } catch (error) {
    // Tampilkan kesalahan ke konsol untuk pemecahan masalah
    console.error('Error in handleRegister:', error);
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
          REGISTER
        </Typography>
      </Box>

      <TextField
        label="Username"
        variant="outlined"
        fullWidth
        margin="normal"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        fullWidth
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && (
        <Typography color="error" gutterBottom>
          {error}
        </Typography>
      )}
      <Button
        variant="contained"
        color="primary"
        onClick={handleRegister}
      >
        Register
      </Button>
    </Container>
  );
};

export { Register };