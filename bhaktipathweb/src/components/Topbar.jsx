// src/components/Topbar.jsx
import React from 'react';
import {
  FaPhoneAlt,
  FaClock,
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa';
import './Topbar.css';

const Topbar = () => {
  return (
    <div style={styles.topbar}>
      <div style={styles.container}>
        {/* Title */}
        <div style={styles.left}>
          {/* lg & xl screens: inline SVG version */}
<span className="title-desktop">
  <svg
    width="20"
    height="24"
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    style={{ verticalAlign: 'middle', marginRight: '4px' }}
  >
    <polygon points="20,0 28,8 28,64 20,56" fill="#4E1F00" />
    <polygon points="36,0 44,8 44,64 36,56" fill="#4E1F00" />
  </svg>
  श्री क्षेत्र देवगड
  <svg
    width="20"
    height="24"
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    style={{ verticalAlign: 'middle', marginRight: '4px' }}
  >
    <polygon points="20,0 28,8 28,64 20,56" fill="#4E1F00" />
    <polygon points="36,0 44,8 44,64 36,56" fill="#4E1F00" />
  </svg>
</span>

{/* sm & md screens: CSS-based scaling */}
<span className="title-mobile">
  <svg className="topbar-svg" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <polygon points="20,0 28,8 28,64 20,56" fill="#4E1F00" />
    <polygon points="36,0 44,8 44,64 36,56" fill="#4E1F00" />
  </svg>
  श्री क्षेत्र देवगड
  <svg className="topbar-svg" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <polygon points="20,0 28,8 28,64 20,56" fill="#4E1F00" />
    <polygon points="36,0 44,8 44,64 36,56" fill="#4E1F00" />
  </svg>
</span>

        </div>

        {/* Small screens: marquee */}
<div className="topbar-marquee mobile-only">
  <div className="marquee">
    <div className="marquee-content">
      <span style={styles.item}>
        <FaPhoneAlt style={styles.icon} />
        <a href="tel:+917796203111">+91 7796203111</a>
        &nbsp;&nbsp;
        <FaClock style={styles.icon} />
        सकाळी ०६:०० ते रात्री १०:००
        &nbsp;&nbsp;
        <FaMapMarkerAlt style={styles.icon} />
        श्री गुरुदेव दत्तपीठ देवगड, तालुका नेवासा
      </span>
    </div>
  </div>
</div>

{/* Large screens: static text */}
<div className="topbar-info desktop-only">
  <span style={styles.item}>
    <FaPhoneAlt style={styles.icon} />
    <a href="tel:+917796203111">+91 7796203111</a>
    &nbsp;&nbsp;
    <FaClock style={styles.icon} />
    सकाळी ०६:०० ते रात्री १०:००
    &nbsp;&nbsp;
    <FaMapMarkerAlt style={styles.icon} />
    श्री गुरुदेव दत्तपीठ देवगड, तालुका नेवासा
  </span>
</div>


        {/* Social icons */}
        <div style={styles.right}>
          <FaEnvelope style={styles.icon} />
          <FaFacebookF style={styles.icon} />
          <FaTwitter style={styles.icon} />
          <FaInstagram style={styles.icon} />
        </div>
      </div>
    </div>
  );
};

const styles = {
  topbar: {
    backgroundColor: '#EAA64D',
    padding: '0.5rem 1rem',
    fontSize: '0.9rem',
    width: '100%',
    overflowX: 'hidden',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'nowrap',
    gap: '1rem',
    width: '100%',
    whiteSpace: 'nowrap',
  },
  left: {
    display: 'flex',
    alignItems: 'center',
  },
  item: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.1rem',
    color: 'black',
    whiteSpace: 'nowrap',
  },
  icon: {
    color: 'white',
    fontSize: '0.9rem',
    marginRight: '4px',
    cursor: 'pointer',
  },
  right: {
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
    flexWrap: 'nowrap',
  },
};

export default Topbar;
