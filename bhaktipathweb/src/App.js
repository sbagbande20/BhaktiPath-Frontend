import logo from './logo.svg';
import './App.css';
import { CssBaseline, Container } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroBanner from './components/HeroSection';
import Topbar from './components/Topbar';
import Header from './components/Header';
import Navbar from './components/Navbar';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import HomePage from './pages/HomePage';
import Institute from './pages/Institute';
import Facilities from './pages/Facilities';
import Festivals from './pages/Festivals';
import Initiatives from './pages/Initiatives';
import Schedule from './pages/Schedule';
import Committee from './pages/Committee';
import Tourism from './pages/Tourism';
import Gallery from './pages/Gallery';
import { LanguageProvider } from './context/LanguageContext';

function App() {
   return (
    <LanguageProvider>
    <Router>
      <CssBaseline />
      <Navbar />
      <HeroBanner />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/institute" element={<Institute />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/festivals" element={<Festivals />} />
        <Route path="/initiatives" element={<Initiatives />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/committee" element={<Committee />} />
        <Route path="/tourism" element={<Tourism />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
    </LanguageProvider>
  );
}

export default App;