// src/components/RegisterCard.jsx
import React, { useState } from 'react';
import {
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Box,
  Snackbar,
  Alert,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/images/BackgroungImage.jpg';
import logoImage from '../assets/images/HomePageImage.jpg';
import { registerAdmin } from '../api/auth';

const RegisterCard = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  const validate = () => {
    const newErrors = {};
    if (!formData.username.trim()) newErrors.username = 'Username is required';
    if (!formData.email.includes('@')) newErrors.email = 'Valid email required';
    if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = 'Passwords do not match';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      await registerAdmin({
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });
      setSnackbar({ open: true, message: 'Registration successful!', severity: 'success' });
      setFormData({ username: '', email: '', password: '', confirmPassword: '' });
    } catch (err) {
      const errorMsg = err.response?.data?.error || 'Registration failed. Try again.';
      setSnackbar({ open: true, message: errorMsg, severity: 'error' });
    }
  };

  const handleClose = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const inputStyle = {
    borderRadius: '12px',
    backgroundColor: '#fff',
    boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.1)',
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      px={2}
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        opacity: '1',
      }}
    >
      <Card
        sx={{
          width: isMobile ? '100%' : 400,
          p: 1,
          borderRadius: 5,
          textAlign: 'center',
          boxShadow: 6,
          background: 'linear-gradient(to bottom right, #f7f0ff, #e2d4f5)',
        }}
      >
        <CardContent>
          <img
            src={logoImage}
            alt="Logo"
            style={{ width: 60, height: '50', marginBottom: 12 }}
          />

          <Typography variant="h5" fontWeight={600} gutterBottom color="primary">
            Register
          </Typography>

          <form onSubmit={handleSubmit} noValidate>
            <TextField
              fullWidth
              label="Username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              error={!!errors.username}
              helperText={errors.username}
              margin="normal"
              variant="outlined"
              sx={inputStyle}
            />
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
              margin="normal"
              variant="outlined"
              sx={inputStyle}
            />
            <TextField
              fullWidth
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              error={!!errors.password}
              helperText={errors.password}
              margin="normal"
              variant="outlined"
              sx={inputStyle}
            />
            <TextField
              fullWidth
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword}
              margin="normal"
              variant="outlined"
              sx={inputStyle}
            />
            <Button
              fullWidth
              variant="contained"
              type="submit"
              sx={{
                mt: 2,
                borderRadius: 3,
                py: 1.5,
                fontWeight: 600,
                fontSize: '1rem',
                backgroundColor: '#a58dd3',
                '&:hover': {
                  backgroundColor: '#926dcb',
                },
              }}
            >
              Register
            </Button>
          </form>

          <Typography variant="body2" mt={2}>
            Already registered?{' '}
            <Link to="/admin/login" style={{ color: '#7b52ab', fontWeight: 600 }}>
              Login here
            </Link>
          </Typography>
        </CardContent>
      </Card>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleClose} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default RegisterCard;
