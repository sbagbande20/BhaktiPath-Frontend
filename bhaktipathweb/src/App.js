import logo from './logo.svg';
import './App.css';
import { CssBaseline, Container } from '@mui/material';
import Header from './components/Header';
import HeroBanner from './components/HeroSection';
// import GuruSection from './components/GuruSection';
// import AboutTemple from './components/AboutTemple';
// import Footer from './components/Footer';


function App() {
   return (
    <>
      <CssBaseline />
      <Header />
      <HeroBanner />
      {/* <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <GuruSection />
        <AboutTemple />
      </Container>
      <Footer /> */}
    </>
  );
}

export default App;
