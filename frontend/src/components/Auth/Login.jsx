import * as React from 'react';
import { useState } from 'react';
import { message} from 'antd';
import { notification } from 'antd';

import { Link, useNavigate } from 'react-router-dom';
import { storeUser } from './helper';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import PersonIcon from '@mui/icons-material/Person';
import { API, baseURL } from '../../api/apirequest';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" to="">
        Aventuras
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Login() {
  const initialUser = { password: '', identifier: '' };
  const [user, setUser] = useState(initialUser);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  const [errors, setErrors] = useState({
    identifier: '', // Error message for email field
    password: '',   // Error message for password field
  });

  const handleUserChange = ({ target }) => {
    const { name, value } = target;
    setUser((currentUser) => ({
      ...currentUser,
      [name]: value,
    }));

    // Clear the error message for the field being changed
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleLogin = async () => {
    try {
      if (user.identifier && user.password) {
        setLoading(true); // Start the loading state

        const { data } = await API.post('/api/auth/local/', user);
        if (data.jwt) {
          storeUser(data);
          setUser(initialUser);

          if (data.user.email === 'admin@gmail.com') {
            localStorage.setItem('isAdmin', true);
            navigate('/admin/dashboard');
            handleLoginSuccess('LoggedIn as Admin Successful');
          } else {
            navigate('/');
            handleLoginSuccess('Login Successful');
          }

          setTimeout(() => {
            window.location.reload();
          }, 1000);
        }
      } else {
        // Set error messages for empty fields
        setErrors((prevErrors) => ({
          ...prevErrors,
          identifier: user.identifier ? '' : 'Email is required.',
          password: user.password ? '' : 'Password is required.',
        }));
      }
    } catch (error) {
      // Handle login error
      handleLoginError(error);
    } finally {
      setLoading(false); // End the loading state
    }
  };

  // Function to handle login success
  function handleLoginSuccess(message) {
    notification.success({
      message: message,
      duration: 2,
    });
  }

  // Function to handle login error
  function handleLoginError(error) {
    if (error.response && error.response.data && error.response.data.message) {
      const errorMessage = error.response.data.message[0].messages[0].message;
      setErrors((prevErrors) => ({
        ...prevErrors,
        identifier: errorMessage, // Display error message for the identifier field
      }));
    } else {
      notification.error({
        message: 'Login Failed',
        description: 'Invalid credentials. Please try again !',
        duration: 2,
      });
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        component="main"
        sx={{ height: 'auto', padding: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <CssBaseline />

        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
              <PersonIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <Box sx={{ mt: 1 }}>
              <TextField
                type="email"
                name="identifier"
                value={user.identifier}
                onChange={handleUserChange}
                margin="normal"
                required
                fullWidth
                label="Email Address"
                error={Boolean(errors.identifier)} // Set error state based on whether there's an error message
                helperText={errors.identifier}
              />

              <TextField
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={user.password}
                onChange={handleUserChange}
                label="Enter Password"
                margin="normal"
                required
                fullWidth
                autoFocus
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                error={Boolean(errors.password)} // Set error state based on whether there's an error message
                helperText={errors.password}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleLogin}
                disabled={loading} // Disable the button while loading
              >
                {loading ? 'Logging in...' : 'Login'}
              </Button>
              <Grid container>
                <Grid item>
                  <Link to="/register" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
