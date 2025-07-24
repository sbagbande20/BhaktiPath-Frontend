import React from 'react';
import { FaPhoneAlt, FaClock, FaMapMarkerAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Topbar = () => {
  return (
    <div style={styles.topbar}>
      <div style={styles.left}>
       
         <span style={styles.title}>
  <svg
    width="20"
    height="24"
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    style={{ verticalAlign: 'middle', marginRight: '4px' }}
  >
    <polygon points="20,0 28,8 28,64 20,56" fill="#4E1F00" />
    <polygon points="36,0 44,8 44,64 36,56" fill="#4E1F00" />
  </svg>श्री क्षेत्र देवगड
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

        
        <div style={{ marginLeft: '4rem', display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
        <span style={styles.item}>
          <FaPhoneAlt style={styles.icon} />
          <a href="tel:+917796203111">+91 7796203111</a> 
        </span>

        <span style={styles.item}>
          <FaClock style={styles.icon} />
          दररोज सकाळी ०६:०० ते रात्री १०:००
        </span>

        <span style={styles.item}>
          <FaMapMarkerAlt style={styles.icon} />
          श्री गुरुदेव दत्तपीठ देवगड , तालुका नेवासा, जिल्हा अहमदनगर, महाराष्ट्र 414603
        </span>
      </div>

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
    title: {
    fontFamily: 'Raleway, Helvetica, Arial, sans-serif',
    fontSize: '22px',
    fontWeight: 900,
    lineHeight: '24px',
    color: '#4E1F00',
  },
  topbar: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#EAA64D',
    padding: '0.5rem 1rem',
    fontSize: '0.9rem',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  
  left: {
    display: 'flex',
    gap: '1rem',
    alignItems: 'center',
    flexWrap: 'wrap',
    
  },

  item: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.3rem',
    color: 'black'
  },
  icon: {
    color: 'white',
    fontSize: '1rem',
    marginRight: '12px',
    cursor: 'pointer'
  },
   right: {
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
    marginLeft: '7.5rem' 
  }
};

export default Topbar;
