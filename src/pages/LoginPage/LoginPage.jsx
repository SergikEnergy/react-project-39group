import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Alert, FormControl, Input, InputLabel, Snackbar, Typography } from '@mui/material';

import { useAuthContext } from '@/hooks/useAuthContext';

import { auth } from '../../firebase/index';
import { APP_PATHS } from '../../route/paths';

import { StyledForm, StyledMain, StyledPaper, StyledSubmit } from './LoginPage.styles';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [open, setOpen] = useState(false);
  const [loginError, setLoginError] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const addAuthInfo = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await signInWithEmailAndPassword(auth, email, password);
      setOpen(true);
      if (data) {
        addAuthInfo.setUser(email);
        location.state?.from?.pathname ? navigate(location.state?.from?.pathname) : navigate('/');
      }
    } catch (error) {
      setLoginError(true);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const handleLoginError = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setLoginError(false);
  };

  return (
    <StyledMain>
      <StyledPaper>
        <Typography
          component="h1"
          variant="h5">
          Логин
        </Typography>
        <StyledForm onSubmit={handleSubmit}>
          <FormControl
            margin="normal"
            required
            fullWidth>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              name="email"
              autoComplete="off"
              autoFocus
            />
          </FormControl>
          <FormControl
            margin="normal"
            required
            fullWidth>
            <InputLabel htmlFor="password">Пароль</InputLabel>
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              name="password"
              autoComplete="off"
            />
          </FormControl>
          <StyledSubmit
            type="submit"
            fullWidth
            variant="contained"
            color="primary">
            Вход
          </StyledSubmit>
          <Link to={APP_PATHS.SIGN_UP}>
            <StyledSubmit
              type="button"
              fullWidth
              variant="contained"
              color="secondary">
              Регистрация
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
            <Alert severity="success">Вы успешно вошли в систему</Alert>
          </Snackbar>
          <Snackbar
            open={loginError}
            autoHideDuration={4000}
            onClose={handleLoginError}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}>
            <Alert
              onClose={handleLoginError}
              severity="error">
              Неверно введён логин или пароль
            </Alert>
          </Snackbar>
        </StyledForm>
      </StyledPaper>
    </StyledMain>
  );
};

export default LoginPage;
