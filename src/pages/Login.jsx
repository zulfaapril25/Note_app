import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { login, putAccessToken } from '../utils/network';
import { Container, TextField, Button, Typography, Box } from '@mui/material';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();


  const handleLogin = async () => {
    try {
      const response = await login({ username, password });
  
      if (response && response.data) {
        console.log('Access Token:', response.data);
        putAccessToken(response.data.token);
        onLogin(response.data.user);
        navigate('/');
      } else {
        setError('Invalid username or password');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('An unexpected error occurred');
    }
  };
  

  const handleRegisterLink = () => {
    navigate('/register');
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
          LOGIN
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
        onClick={handleLogin}
      >
        Login
      </Button>
      <Typography variant="body2" style={{ marginTop: '10px' }}>
        Tidak punya akun?{' '}
        <Link to="/register" onClick={handleRegisterLink}>
          Daftar Sekarang
        </Link>
      </Typography>

    </Container>
  );
};

export { Login };
