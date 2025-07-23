// File: src/components/LanguageSwitcher.jsx
import React from 'react';
import { Button, ButtonGroup, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Box sx={{ textAlign: 'center', mt: 2 }}>
      <ButtonGroup variant="outlined">
        <Button onClick={() => changeLanguage('en')}>English</Button>
        <Button onClick={() => changeLanguage('hi')}>हिंदी</Button>
        <Button onClick={() => changeLanguage('mr')}>मराठी</Button>
      </ButtonGroup>
    </Box>
  );
};

export default LanguageSwitcher;