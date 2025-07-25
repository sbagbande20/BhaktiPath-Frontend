// src/components/Header.jsx
import React from 'react';
import logo from '../assets/images/HomePageImage.jpg'; // adjust path based on your structure

const Header = () => {
  const headerStyle = {
    backgroundColor: '#f2ebd5',
    padding: '4px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '4px', // minimal vertical gap
  };

  const logoStyle = {
    width: '80px',
    height: '60px',
    objectFit: 'contain',
  };

  const titleContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  };

  const titleStyle = {
    color: 'brown',
    fontFamily: 'BPreeti, sans-serif',
    fontSize: '20px',
    fontWeight: 'bold',
    margin: 0,
  };

  const svgStyle = {
    verticalAlign: 'middle',
  };

  return (
    <div style={headerStyle}>
      <img src={logo} alt="Logo" style={logoStyle} />

      <div style={titleContainerStyle}>
        <svg width="20" height="24" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" style={svgStyle}>
          <polygon points="20,0 28,8 28,64 20,56" fill="#4E1F00" />
          <polygon points="36,0 44,8 44,64 36,56" fill="#4E1F00" />
        </svg>

        <h1 style={titleStyle}>श्री गुरुदेव दत्तपीठ</h1>

        <svg width="20" height="24" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" style={svgStyle}>
          <polygon points="20,0 28,8 28,64 20,56" fill="#4E1F00" />
          <polygon points="36,0 44,8 44,64 36,56" fill="#4E1F00" />
        </svg>
      </div>
    </div>
  );
};

export default Header;
