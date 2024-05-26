/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button, FormControl, Input, InputLabel, Paper, Typography } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import { Alert, Snackbar } from '@mui/material';

import { useAuthContext } from '@/hooks/useAuthContext';

import { auth } from '../../firebase/index';
import { APP_PATHS } from '../../route/paths';

const styles = (theme) => ({
  main: {
    width: 'auto',
    display: 'block',
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.up(400 + theme.spacing(3) * 2)]: {
      width: 450,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    border: 'solid 1px gray',
    marginTop: theme.spacing(12),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing(4)}px ${theme.spacing(4)}px ${theme.spacing(17)}px`,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(10),
  },
  submit: {
    marginTop: theme.spacing(5),
  },
});

const LoginPage = (props) => {
  const { classes } = props;

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
    <main className={classes.main}>
      <Paper className={classes.paper}>
        <Typography
          component="h1"
          variant="h5">
          Логин
        </Typography>
        <form
          onSubmit={handleSubmit}
          className={classes.form}>
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
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}>
            Вход
          </Button>
          <Link to={APP_PATHS.SIGN_UP}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}>
              Регистрация
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
        </form>
      </Paper>
    </main>
  );
};

export default withStyles(styles)(LoginPage);
