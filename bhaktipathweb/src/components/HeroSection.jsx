import React from 'react';
import { Box, Typography } from '@mui/material';

const HeroSection = () => {
  return (
    <Box sx={{ height: 300, backgroundColor: '#ececec', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Typography variant="h4">Welcome to Shri Gurudev Datta Pith</Typography>
    </Box>
  );
};

export default HeroSection;