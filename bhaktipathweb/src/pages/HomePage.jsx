// HomePage.jsx
import React, { useEffect, useState } from 'react';
import { Container, Typography, Stack, Box } from '@mui/material';
import { useLanguage } from '../context/LanguageContext';

export default function HomePage() {
  const { language } = useLanguage();
  const [data, setData] = useState({ heading: '', intro: '', features: [] });

  useEffect(() => {
    fetch(`/api/pages/home/${language}`)
      .then((res) => res.json())
      .then((content) => setData(content));
  }, [language]);

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>{data.heading}</Typography>
      <Typography variant="body1" paragraph>{data.intro}</Typography>

      <Box mt={3}>
        <Typography variant="h6" fontWeight="bold">Features:</Typography>
        <Stack spacing={1} mt={1}>
          {data.features.map((feat, idx) => (
            <Typography key={idx} variant="body1">• {feat}</Typography>
          ))}
        </Stack>
      </Box>
    </Container>
  );
}
