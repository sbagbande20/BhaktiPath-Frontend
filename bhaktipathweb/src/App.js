import logo from './logo.svg';
import './App.css';
import { CssBaseline, Container } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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
import Register from './admin/Register';
import Login from './admin/Login';
import Dashboard from './admin/Dashboard'; // create next
import PrivateRoute from './routes/PrivateRoute'; // create this

function PublicLayout({ children }) {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <HeroBanner />
      {children}
    </>
  );
}

function AdminLayout({ children }) {
  return (
    <>
      <CssBaseline />
      {/* Add AdminSidebar/Header here if needed */}
      {children}
    </>
  );
}

// function App() {
//   return (
//     <LanguageProvider>
//       <Router>
//         <CssBaseline />
//         <Navbar />
//         <HeroBanner />

//         <Routes>
//           {/* Public routes */}
//           <Route path="/" element={<HomePage />} />
//           <Route path="/institute" element={<Institute />} />
//           <Route path="/facilities" element={<Facilities />} />
//           <Route path="/festivals" element={<Festivals />} />
//           <Route path="/initiatives" element={<Initiatives />} />
//           <Route path="/schedule" element={<Schedule />} />
//           <Route path="/committee" element={<Committee />} />
//           <Route path="/tourism" element={<Tourism />} />
//           <Route path="/gallery" element={<Gallery />} />

//           {/* Admin routes */}
//           <Route path="/admin/register" element={<Register />} />
//           <Route path="/admin/login" element={<Login />} />
//           <Route
//             path="/admin/dashboard"
//             element={
//               <PrivateRoute>
//                 <Dashboard />
//               </PrivateRoute>
//             }
//           />
//         </Routes>
//       </Router>
//     </LanguageProvider>
//   );
// }

function RoutesWithLayout() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  const Layout = isAdmin ? AdminLayout : PublicLayout;

  return (
    <Layout>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/institute" element={<Institute />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/festivals" element={<Festivals />} />
        <Route path="/initiatives" element={<Initiatives />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/committee" element={<Committee />} />
        <Route path="/tourism" element={<Tourism />} />
        <Route path="/gallery" element={<Gallery />} />

        {/* Admin Routes */}
        <Route path="/admin/register" element={<Register />} />
        <Route path="/admin/login" element={<Login />} />
        <Route
          path="/admin/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </Layout>
  );
}

function App() {
  return (
    <LanguageProvider>
      <Router>
        <RoutesWithLayout />
      </Router>
    </LanguageProvider>
  );
}
export default App;