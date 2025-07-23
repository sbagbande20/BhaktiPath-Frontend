import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div">
          {t('title')}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
