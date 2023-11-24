import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiPlusCircle } from 'react-icons/fi';

const Navigation = () => {
  const iconSize = 24;

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
      <Link to="/add">
        <FiPlusCircle size={iconSize}/>
      </Link>
    </div>
  );
};

export { Navigation };
