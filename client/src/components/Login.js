import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
//import { Link as RouterLink } from "react-router-dom";
// import validator from 'validator'
import { UserContext } from "../context/UserContext";
import { regexPassword } from "../utils";

import {
  Paper,
  Container,
  //Link,
  Stack,
  Button,
  Box,
  //Divider,
  Avatar,
  //Typography,
  TextField,
  FilledInput,
  InputAdornment,
  IconButton,
  InputLabel,
  FormControl,
  FormHelperText,
} from "@mui/material";
import {
  Face as FaceIcon,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
//import theme from '../theme'

function Login() {
  const navigate = useNavigate();
  const { login } = useContext(UserContext);

  const [values, setValues] = useState({
    email: "",
    password: "",
    showPassword: false,
  });

  const [errors, setErrors] = useState({
    email: false,
    password: false,
    fetchError: false,
    fetchErrorMsg: "",
  });

  const handleChange = (fieldName) => (event) => {
    const currValue = event.target.value;
    let isCorrectValue =
      fieldName === "email" ? true : regexPassword.test(currValue);

    setErrors((prev) => ({ ...prev, [fieldName]: !isCorrectValue }));
    setValues((prev) => ({ ...prev, [fieldName]: currValue }));
  };

  const handleShowPassword = () => {
    setValues((prev) => ({
      ...prev,
      showPassword: !prev.showPassword,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!values.email || !values.password) {
      return setErrors((prev) => ({
        ...prev,
        fetchError: true,
        fetchErrorMsg: "Email and password are required.",
      }));
    }

    // Store login session locally
    login(values.email);
    
    // Reset form
    setValues({ email: "", password: "", showPassword: false });

    // Navigate to dashboard
    navigate("/");
  };

  return (
    <>
      <Container sx={{ marginTop: "calc(100vh - 40%)" }} maxWidth="xs">
        <Paper elevation={6}>
          <Container
            maxWidth="sm"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: "20px",
            }}
          >
            <Avatar
              sx={{
                width: 80,
                height: 80,
                bgcolor: "whitesmoke", //theme.palette.primary.main,
                boxShadow: "0px 0px 8px rgba(131,153,167,0.99)",
              }}
            >
              <FaceIcon sx={{ fontSize: 70 }} />
            </Avatar>
            <h2>Login</h2>
          </Container>
          <Stack
            component="form"
            onSubmit={handleSubmit}
            noValidate
            spacing={6}
            sx={{ bgcolor: "#908986", padding: "40px" }}
          >
            <TextField
              variant="filled"
              type="email"
              label="Email"
              value={values.email}
              onChange={handleChange("email")}
              error={errors.email}
              helperText={errors.email && "Please insert a valid email address"}
            />

            <FormControl variant="filled">
              <InputLabel htmlFor="password-field">Password</InputLabel>
              <FilledInput
                id="password-field"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange("password")}
                error={errors.password}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleShowPassword}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                variant="contained"
                size="large"
                type="submit"
                disabled={errors.email || errors.password}
                sx={{
                  minWidth: "70%",
                }}
              >
                Login
              </Button>
            </Box>
            {errors.fetchError && (
              <FormHelperText error>{errors.fetchErrorMsg}</FormHelperText>
            )}
          </Stack>
        </Paper>
      </Container>
    </>
  );
}

export default Login;
