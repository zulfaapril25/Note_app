 
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiHome, FiPlusCircle, FiLogOut } from 'react-icons/fi';

const Navigation = ({isLoggedIn}) => {
  const navigate = useNavigate();
  const iconSize = 24;

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    navigate('/login');
  };

  const linkStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    margin: '0 10px', // Adjust the margin as needed
  };

  return (
    <div style={linkStyle}>
      <Link to="/">
        <FiHome size={iconSize}/>
      </Link>
      {isLoggedIn ? (
        <>
          <Link to="/add">
            <FiPlusCircle size={iconSize}/>
          </Link>
          <FiLogOut size={iconSize} onClick={handleLogout} style={{ cursor: 'pointer' }} />
        </>
       ): (
        <>
        <Link to="/login">
          <span>Login</span>
        </Link>
        <Link to="/register">
          <span>Register</span>
        </Link>
        </>
      )}
    </div>
  );
};

export { Navigation };
