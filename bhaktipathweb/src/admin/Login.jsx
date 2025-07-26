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
import { Link, useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/images/BackgroungImage.jpg';
import logoImage from '../assets/images/HomePageImage.jpg';
import { loginAdmin } from '../api/auth'; // ✅ Your login API here

const LoginCard = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  const validate = () => {
    const newErrors = {};
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!formData.email.includes('@')) newErrors.email = 'Enter a valid email';

    if (!formData.password.trim()) newErrors.password = 'Password is required';
    else if (formData.password.length < 6) newErrors.password = 'Minimum 6 characters required';

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
      console.log('Sending login:', formData);
      const res = await loginAdmin(formData); // ⬅️ API integration
      setSnackbar({ open: true, message: 'Login successful!', severity: 'success' });
      setFormData({ email: '', password: '' });

      // ⬅️ Optional: Redirect after success
      setTimeout(() => navigate('/admin/dashboard'), 1500);
    } catch (err) {
      const msg = err?.response?.data?.error || 'Invalid email or password';
      setSnackbar({ open: true, message: msg, severity: 'error' });
    }
  };

  const handleClose = () => setSnackbar({ ...snackbar, open: false });

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
        opacity: 1,
      }}
    >
      <Card
        sx={{
          width: isMobile ? '100%' : 400,
          p: 2,
          borderRadius: 5,
          textAlign: 'center',
          boxShadow: 6,
          background: 'linear-gradient(to bottom right, #f7f0ff, #e2d4f5)',
        }}
      >
        <CardContent sx={{ p: 0 }}>
          <img src={logoImage} alt="Logo" style={{ width: 50, height: 50, marginBottom: 8 }} />

          <Typography variant="h5" fontWeight={600} gutterBottom color="primary">
            Admin Login
          </Typography>

          <form onSubmit={handleSubmit} noValidate>
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
              margin="dense"
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
              margin="dense"
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
                '&:hover': { backgroundColor: '#926dcb' },
              }}
            >
              Login
            </Button>
          </form>

          <Typography variant="body2" mt={2}>
            New admin?{' '}
            <Link to="/admin/register" style={{ color: '#7b52ab', fontWeight: 600 }}>
              Register now
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

export default LoginCard;
