import * as React from 'react';
import { useState } from "react";

import { message} from 'antd';
import { notification } from 'antd';
import axios from "axios";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { storeUser } from "./helper";

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {API} from '../../api/apirequest';

import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import PersonAddIcon from '@mui/icons-material/PersonAdd';
function Copyright(props) {
    return (
        <Typography variant="body2"
            color="text.secondary"
            align="center" {...props}>

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

export default function Register() {
    const initialUser = { email: "", password: "", username: "" };
    const [user, setUser] = useState(initialUser);
    const navigate = useNavigate();
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});
    
   
    

    const handleUserChange = ({ target }) => {
        const { name, value } = target;
        setUser((currentUser) => ({
            ...currentUser,
            [name]: value,
        }));
    
        // Clear the error message for the field being changed
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: "",
        }));
    };
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    };

    const signUp = async () => {
        try {
            if (!user.username) {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    username: "Username is required.",
                }));
            }
            if (!user.email) {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    email: "Email is required.",
                }));
            }
            if (!user.password) {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    password: "Password is required.",
                }));
            }
    
            if (user.username && user.email && user.password) {
                const res = await API.post('/api/auth/local/register', user);
                if (!!res) {

                    setUser(initialUser);
                    navigate("/login");
                    notification.success({
                        message: 'User Registered Successful',
                        // description: 'You have successfully logged in.',
                        
                        duration: 2, // Duration in seconds (adjust as needed)
                      });
                }
            }
        } 
        catch (error) {
            if (error.response && error.response.data && error.response.data.error) {
              const errorMessage = error.response.data.error.message;
              const validationErrors = error.response.data.error.details.errors;
          
              // Handle case where email or username is already taken
              if (errorMessage === "Email or Username are already taken") {
                handleRegistrationError(errorMessage);
                return;
              }
          
              // Handle other validation errors
              const newErrors = constructNewErrors(validationErrors);
              setErrors(newErrors);
          
              // Handle specific error conditions
              const usernameError = validationErrors.find(
                (errorItem) => errorItem.path[0] === "username"
              );
              const passwordError = validationErrors.find(
                (errorItem) => errorItem.path[0] === "password"
              );
          
              if (usernameError && usernameError.message.includes("at least 3 characters")) {
                // Handle username too short error
                handleUsernameTooShortError(usernameError.message);
              }
          
              if (passwordError && passwordError.message.includes("at least 6 characters")) {
                // Handle password too short error
                handlePasswordTooShortError(passwordError.message);
              }
          
              handleRegistrationError(errorMessage);
            }
          }
          
          // Function to handle username too short error
          function handleUsernameTooShortError(errorMessage) {
            // Update your state or perform other actions to handle this error
          }
          
          // Function to handle password too short error
          function handlePasswordTooShortError(errorMessage) {
            // Update your state or perform other actions to handle this error
          }
          
          
          // Function to display error notification
          function handleRegistrationError(errorMessage) {
            notification.error({
              message: 'User Registration Failed!',
              description: errorMessage,
              duration: 2,
            });
          }
          
          // Function to construct error object for input fields
          function constructNewErrors(validationErrors) {
            const newErrors = {};
          
            validationErrors.forEach((errorItem) => {
              const field = errorItem.path[0];
              newErrors[field] = errorItem.message;
            });
          
            return newErrors;
          }
          
        // catch (error) {
        //     if (error.response && error.response.data && error.response.data.error) {
        //         const errorMessage = error.response.data.error.message;
        //         const validationErrors = error.response.data.error.details.errors;
    
        //         // Handle case where email or username is already taken
        //         if (errorMessage === "Email or Username are already taken") {
        //             notification.error({
        //                 message: 'User Registration Failed!',
        //                 description: errorMessage,
        //                 duration: 2,
        //             });
    
        //             return;
        //         }
    
        //         // Handle other validation errors
        //         const newErrors = {};
    
        //         validationErrors.forEach((errorItem) => {
        //             const field = errorItem.path[0];
        //             newErrors[field] = errorItem.message;
        //         });
    
        //         setErrors(newErrors);
    
        //         notification.error({
        //             message: 'User Registration Failed!',
        //             description: errorMessage,
        //             duration: 2,
        //         });
    
        //         console.log(errorMessage);
        //     }
        // }
    };
    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main"
                sx={{ height: 'auto', padding: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <CssBaseline />
                {/* <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        /> */}
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
                            <PersonAddIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign Up
                        </Typography>
                        <Box sx={{ mt: 1 }}>


                            <TextField
                                type="text"
                                name="username"
                                value={user.username}
                                onChange={handleUserChange}

                                label="Enter Username"
                                margin="normal"
                                required
                                fullWidth

                                autoFocus

                                error={submitted && !user.username}
    helperText={submitted && !user.username ? errors.username : ""}
                            />
                            <TextField
                                type="email"
                                name="email"
                                value={user.email}
                                onChange={handleUserChange}
                                margin="normal"
                                required
                                fullWidth
                                label="Enter Email Address"
                            // autoComplete="email"
                            // autoFocus

                            error={submitted && !user.email}
                            helperText={submitted && !user.email ? errors.email : ""}
                            />

{/* type="password" */}
                            <TextField
                            type={showPassword?'text':'password'}
                                name="password"
                                value={user.password}
                                onChange={handleUserChange}

                                label="Enter Password"
                                margin="normal"
                                required
                                fullWidth

                                error={submitted && !user.password}
                                helperText={submitted && !user.password ? errors.password : ""}

                                // autoFocus
                                InputProps={{
                                    endAdornment:  <InputAdornment position="end">
                                    <IconButton
                                      aria-label="toggle password visibility"
                                      onClick={handleClickShowPassword}
                                      onMouseDown={handleMouseDownPassword}
                                      edge="end"
                                    >
                                      {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                  </InputAdornment>,
                                  }}
                            />
    
                            {/* <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
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
            }
            label="Password"
            
          />
        </FormControl> */}

                            {/* <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            /> */}
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                // onClick={signUp}
                                onClick={() => {
                                    setSubmitted(true);
                                    signUp();
                                }}
                            
                            >
                                Register
                            </Button>
                            <Grid container>
                                {/* <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid> */}
                                <Grid item>
                                    <Link to="/login" variant="body2">
                                        {"Already have an account? Login"}
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