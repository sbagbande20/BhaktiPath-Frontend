import React from 'react'; 
import { Box, Typography } from '@mui/material';

const HeroSection = () => {
  return (
   <Box
  sx={{
    height: '100vh',
    marginTop: '64px', // adjust based on navbar height
    backgroundImage: 'url(/HomePageImage.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    textShadow: '1px 1px 4px rgba(0,0,0,0.7)',
  }}
>
  <Typography variant="h3">Welcome to the Website</Typography>


    
      <Typography variant="h4">
       दिगंबरा दिगंबरा श्रीपाद वल्लभ दिगंबरा 

      </Typography>
   </Box>
  );
};

export default HeroSection;
