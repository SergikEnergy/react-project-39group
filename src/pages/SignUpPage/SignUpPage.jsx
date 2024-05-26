import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { Alert, FormControl, Input, InputLabel, Snackbar, Typography } from '@mui/material';

import { useAuthContext } from '@/hooks/useAuthContext';

import { emailValidationRegexp } from '../../data/emailValidation';
import { auth } from '../../firebase/index';
import { APP_PATHS } from '../../route/paths';

import { StyledForm, StyledMain, StyledPaper, StyledSubmit } from './SignUpPage.styles';

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailOut, setEmailOut] = useState(false);
  const [passwordOut, setPasswordOut] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [open, setOpen] = useState(false);
  const [registrationError, setRegistrationError] = useState(false);

  const navigate = useNavigate();
  const addAuthInfo = useAuthContext();

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 6) {
      setPasswordError('Слишком короткий пароль');
    } else if (!e.target.value.length) {
      setPasswordError('Слишком короткий пароль');
    } else {
      setPasswordError('');
    }
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
    if (!emailValidationRegexp.test(String(e.target.value).toLowerCase())) {
      setEmailError('Некорректный email');
    } else {
      setEmailError('');
    }
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'email':
        setEmailOut(true);
        break;
      case 'password':
        setPasswordOut(true);
        break;
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const data = await createUserWithEmailAndPassword(auth, email, password);
      setOpen(true);
      if (data) {
        addAuthInfo.setUser(email);
        setTimeout(() => {
          navigate('/');
        }, 1500);
      }
    } catch (error) {
      setRegistrationError(true);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const handleRegistrationError = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setRegistrationError(false);
  };

  return (
    <StyledMain>
      <StyledPaper>
        <Typography
          component="h1"
          variant="h5">
          Регистрация
        </Typography>
        <StyledForm onSubmit={handleRegister}>
          <FormControl
            margin="normal"
            required
            fullWidth>
            <InputLabel htmlFor="name">Имя</InputLabel>
            <Input
              id="name"
              name="name"
              autoComplete="off"
              autoFocus
            />
          </FormControl>
          <FormControl
            margin="normal"
            required
            fullWidth>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input
              onChange={(e) => emailHandler(e)}
              value={email}
              onBlur={(e) => blurHandler(e)}
              id="email"
              name="email"
              autoComplete="off"
            />
          </FormControl>
          {emailOut && emailError && <div style={{ color: 'red' }}>{emailError}</div>}
          <FormControl
            margin="normal"
            required
            fullWidth>
            <InputLabel htmlFor="password">Пароль</InputLabel>
            <Input
              onChange={(e) => passwordHandler(e)}
              value={password}
              onBlur={(e) => blurHandler(e)}
              id="password"
              name="password"
              autoComplete="off"
            />
          </FormControl>
          {passwordOut && passwordError && <div style={{ color: 'red' }}>{passwordError}</div>}
          <StyledSubmit
            type="submit"
            fullWidth
            variant="contained"
            color="primary">
            Зарегистрироваться
          </StyledSubmit>
          <Link to={APP_PATHS.SIGN_IN}>
            <StyledSubmit
              type="button"
              fullWidth
              variant="contained"
              color="secondary">
              Вернуться к логину
            </StyledSubmit>
          </Link>
          <Snackbar
            open={open}
            autoHideDuration={4000}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}>
            <Alert
              onClose={handleClose}
              severity="success">
              Вы успешно зарегистрировались
            </Alert>
          </Snackbar>
          <Snackbar
            open={registrationError}
            autoHideDuration={4000}
            onClose={handleRegistrationError}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}>
            <Alert
              onClose={handleRegistrationError}
              severity="error">
              Ошибка регистрации
            </Alert>
          </Snackbar>
        </StyledForm>
      </StyledPaper>
    </StyledMain>
  );
};

export default SignUpPage;
