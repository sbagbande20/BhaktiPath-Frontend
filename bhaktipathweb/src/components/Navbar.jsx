import React from 'react';
import { AppBar, Toolbar, Button, Stack } from '@mui/material';

const menuItems = [
  { text: 'मुखपृष्ठ', isHighlighted: false },
  { text: 'संस्थान', isHighlighted: false },
  { text: 'सुविधा', isHighlighted: false },
  { text: 'उत्सव', isHighlighted: false }, // Highlighted tab
  { text: 'उपक्रम', isHighlighted: false },
  { text: 'दिनचर्या', isHighlighted: false },
  { text: 'समिति', isHighlighted: false },
  { text: 'पर्यटन', isHighlighted: false },
  { text: 'चलचित्र', isHighlighted: false },
];

export default function Navbar() {
  return (
    <AppBar 
      position="fixed" 
      sx={{ top: 'auto', bottom: 486, backgroundColor: "#dfad28", color: '#000' }}
    >
      <Toolbar sx={{ justifyContent: 'center' }}>
        <Stack direction="row" spacing={2}>
          {menuItems.map((item, index) => (
            <Button
              key={index}
              variant={item.isHighlighted ? 'contained' : 'text'}
              sx={{
                color: item.isHighlighted ? '#fff' : '#000',
                backgroundColor: item.isHighlighted ? '#d32f2f' : 'transparent',
                fontWeight: 'bold', // <- All items bold
                borderRadius: '8px',
                px: 2,
                fontSize: '1rem',
                fontFamily: 'Poppins, sans-serif',
                '&:hover': {
                  backgroundColor: item.isHighlighted ? '#b71c1c' : '#f5f5f5',
                },
              }}
            >
              {item.text}
            </Button>
          ))}
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
