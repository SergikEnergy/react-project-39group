import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { Button, FormControl, Input, InputLabel, Paper, Typography } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import { Alert, Snackbar } from '@mui/material';

import { useAuthContext } from '@/hooks/useAuthContext';

import { emailValidationRegexp } from '../../data/emailValidation';
import { auth } from '../../firebase/index';
import { APP_PATHS } from '../../route/paths';

const styles = (theme) => ({
  main: {
    width: 'auto',
    display: 'block',
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.up(400 + theme.spacing(3) * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    marginTop: theme.spacing(3),
  },
});

const SignUpPage = (props) => {
  const { classes } = props;

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
        navigate('/');
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
    <main className={classes.main}>
      <Paper className={classes.paper}>
        <Typography
          component="h1"
          variant="h5">
          Регистрация
        </Typography>
        <form
          className={classes.form}
          onSubmit={handleRegister}>
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
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}>
            Зарегистрироваться
          </Button>
          <Link to={APP_PATHS.SIGN_IN}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}>
              Вернуться к логину
            </Button>
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
        </form>
      </Paper>
    </main>
  );
};

export default withStyles(styles)(SignUpPage);
