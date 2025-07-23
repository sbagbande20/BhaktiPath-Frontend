import React from 'react';
import { CssBaseline, Container, Box, Typography } from '@mui/material';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import WelcomeSection from '../components/WelcomeSection';
import ActivitiesSection from '../components/ActivitiesSection';
import AboutDattaGuru from '../components/AboutDattaGuru';
import VisitInfo from '../components/VisitInfo';
import Footer from '../components/Footer';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <>
      <CssBaseline />
      <Header />
      <HeroSection />
      <Container maxWidth="lg">
        <Box my={5}>
          <WelcomeSection />
        </Box>
        <Box my={5}>
          <ActivitiesSection />
        </Box>
        <Box my={5}>
          <AboutDattaGuru />
        </Box>
        <Box my={5}>
          <VisitInfo />
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default HomePage;
