// components/HeroSection.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import Slider from 'react-slick';
import { motion } from 'framer-motion';

const images = [
  require('../assets/images/HomePageImage.jpg'),
  // require('../assets/images/maharaj.jpg'),
  // require('../assets/images/Shadhalu.jpg'),
  // require('../assets/images/Tourist.jpg'),
  // require('../assets/images/1.jpg'),
];

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    arrows: false,
    pauseOnHover: false,
    cssEase: 'ease-in-out',
  };

  return (
    <Box
      sx={{
        width: '100%',
        marginTop: 0,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Box sx={{ width: { xs: '95%', md: '80%', lg: '90%' , xl: '90%' } }}>
        <Slider {...settings}>
          {images.map((src, index) => (
            <Box
              key={index}
              sx={{
                width: '100%',
                height: { xs: '75vh', md: '90vh' },
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                border: '8px solid #dfad28',
                borderRadius: '24px',
                boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
              }}
            >
              <motion.div
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 5, ease: 'easeOut' }}
                style={{
                  width: '100%',
                  height: '100%',
                }}
              >
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top center',
                    filter: 'brightness(0.85)',
                    borderRadius: '16px',
                  }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  background: 'rgba(0,0,0,0.5)',
                  padding: '1.5rem 3rem',
                  borderRadius: '20px',
                  color: '#fff',
                  textAlign: 'center',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
                }}
              >
                <Typography
                  variant="h3"
                  fontWeight="bold"
                  sx={{ fontFamily: 'Poppins, sans-serif', mb: 1 }}
                >
                  Welcome to the Website
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  दिगंबरा दिगंबरा श्रीपाद वल्लभ दिगंबरा
                </Typography>
              </motion.div>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default HeroSection;
