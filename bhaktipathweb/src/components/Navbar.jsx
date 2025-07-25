// src/components/Navbar.js
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Stack,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  Box,
  Menu,
  MenuItem,
} from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import PublicIcon from '@mui/icons-material/Public';
import { useLanguage } from '../context/LanguageContext'; // adjust path if needed

const translations = {
  mr: [
    { text: 'मुखपृष्ठ', path: '/' },
    { text: 'संस्थान', path: '/institute' },
    { text: 'सुविधा', path: '/facilities' },
    { text: 'उत्सव', path: '/festivals' },
    { text: 'उपक्रम', path: '/initiatives' },
    { text: 'दिनचर्या', path: '/schedule' },
    { text: 'समिति', path: '/committee' },
    { text: 'पर्यटन', path: '/tourism' },
    { text: 'चलचित्र', path: '/gallery' },
  ],
  en: [
    { text: 'Home', path: '/' },
    { text: 'Institute', path: '/institute' },
    { text: 'Facilities', path: '/facilities' },
    { text: 'Festivals', path: '/festivals' },
    { text: 'Initiatives', path: '/initiatives' },
    { text: 'Schedule', path: '/schedule' },
    { text: 'Committee', path: '/committee' },
    { text: 'Tourism', path: '/tourism' },
    { text: 'Gallery', path: '/gallery' },
  ],
  hi: [
    { text: 'होम', path: '/' },
    { text: 'संस्थान', path: '/institute' },
    { text: 'सुविधाएँ', path: '/facilities' },
    { text: 'त्योहार', path: '/festivals' },
    { text: 'पहल', path: '/initiatives' },
    { text: 'कार्यक्रम', path: '/schedule' },
    { text: 'समिति', path: '/committee' },
    { text: 'पर्यटन', path: '/tourism' },
    { text: 'गेलरी', path: '/gallery' },
  ],
};

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  // const [language, setLanguage] = useState('mr');
  const { language, setLanguage } = useLanguage();
  const [anchorEl, setAnchorEl] = useState(null);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const toggleDrawer = (open) => () => setDrawerOpen(open);

  const menuItems = translations[language];

  const handleLanguageClick = (event) => setAnchorEl(event.currentTarget);
  const handleLanguageClose = (lang) => {
    setAnchorEl(null);
    if (lang) setLanguage(lang);
  };

  const LanguageSwitcher = (
    <>
      <IconButton color="inherit" onClick={handleLanguageClick}>
        <PublicIcon />
      </IconButton>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => handleLanguageClose(null)}>
        <MenuItem onClick={() => handleLanguageClose('mr')}>मराठी</MenuItem>
        <MenuItem onClick={() => handleLanguageClose('hi')}>हिंदी</MenuItem>
        <MenuItem onClick={() => handleLanguageClose('en')}>English</MenuItem>
      </Menu>
    </>
  );

  const NavButtons = (
    <Stack
      direction="row"
      spacing={language === 'en' ? 1 : 2}
      sx={{
        flexWrap: 'wrap',
        justifyContent: 'center',
        width: '100%',
      }}
    >
      {menuItems.map((item) => (
        <Button
          key={item.path}
          component={Link}
          to={item.path}
          sx={{
            fontWeight: 600,
            fontFamily: 'Poppins, sans-serif',
            fontSize: '1rem',
            color: '#000',
            borderRadius: '8px',
            textTransform: 'none',
            px: 2,
            '&:hover': {
              backgroundColor: 'rgba(0,0,0,0.05)',
              transform: 'scale(1.05)',
            },
            transition: 'all 0.3s ease-in-out',
          }}
        >
          {item.text}
        </Button>
      ))}
    </Stack>
  );

  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#dfad28', boxShadow: 'none' }}>
      <Toolbar sx={{ justifyContent: 'space-between', px: 1 }}>
        {isSmallScreen ? LanguageSwitcher : (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, whiteSpace: 'nowrap', }}>
            <svg width="20" height="24" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              <polygon points="20,0 28,8 28,64 20,56" fill="#4E1F00" />
              <polygon points="36,0 44,8 44,64 36,56" fill="#4E1F00" />
            </svg>
            <h1 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 'bold', color: '#4E1F00' }}>
              श्री गुरुदेव दत्तपीठ
            </h1>
            <svg width="20" height="24" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              <polygon points="20,0 28,8 28,64 20,56" fill="#4E1F00" />
              <polygon points="36,0 44,8 44,64 36,56" fill="#4E1F00" />
            </svg>
          </Box>
        )}

        {!isSmallScreen && NavButtons}

        {isSmallScreen ? (
          <IconButton onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
        ) : LanguageSwitcher}

        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={toggleDrawer(false)}
          PaperProps={{ sx: { width: '100%', backgroundColor: '#dfad28' } }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}>
            {LanguageSwitcher}
            <IconButton onClick={toggleDrawer(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            {menuItems.map((item) => (
              <ListItem
                button
                key={item.path}
                component={Link}
                to={item.path}
                onClick={toggleDrawer(false)}
              >
                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={{
                    fontSize: '1.4rem',
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 600,
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}
