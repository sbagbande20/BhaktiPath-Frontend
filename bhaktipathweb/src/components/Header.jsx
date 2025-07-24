import React from 'react';

const Header = () => {
  const headerStyle = {
    backgroundColor: '#f2ebd5',
    padding: '8px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // center logo and title
  };

  const logoStyle = {
    width: '100px',
    height: '80px',
    objectFit: 'contain',
    marginBottom: '8px',
  };

  const titleContainerStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const titleStyle = {
    color: 'brown',
    fontFamily: 'BPreeti, sans-serif',
    fontSize: '24px',
    fontWeight: 'bold',
    margin: '0 8px', // space between SVGs
  };

  const svgStyle = {
    verticalAlign: 'middle',
  };

  return (
    <div style={headerStyle}>
      <img src="/HomePageImage.jpg" alt="Logo" style={logoStyle} />

      <div style={titleContainerStyle}>
        {/* Left SVG */}
        <svg
          width="20"
          height="24"
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg"
          style={svgStyle}
        >
          <polygon points="20,0 28,8 28,64 20,56" fill="#4E1F00" />
          <polygon points="36,0 44,8 44,64 36,56" fill="#4E1F00" />
        </svg>

        {/* Title */}
        <h1 style={titleStyle}>श्री गुरुदेव दत्तपीठ</h1>

        {/* Right SVG */}
        <svg
          width="20"
          height="24"
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg"
          style={svgStyle}
        >
          <polygon points="20,0 28,8 28,64 20,56" fill="#4E1F00" />
          <polygon points="36,0 44,8 44,64 36,56" fill="#4E1F00" />
        </svg>
      </div>
    </div>
  );
};

export default Header;
