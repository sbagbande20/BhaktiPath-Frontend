import logo from './logo.svg';
import './App.css';
import { CssBaseline, Container } from '@mui/material';

import HeroBanner from './components/HeroSection';
import Topbar from './components/Topbar';
import Header from './components/Header';
import Navbar from './components/Navbar';
// import GuruSection from './components/GuruSection';
// import AboutTemple from './components/AboutTemple';
// import Footer from './components/Footer';


function App() {
   return (
    <>
      <CssBaseline />
      <Topbar />
      <Header />
      <Navbar/>

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
