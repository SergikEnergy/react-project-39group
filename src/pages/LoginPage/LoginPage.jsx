import React, { useState } from 'react';
import { Typography, Paper, Button, FormControl, Input, InputLabel } from '@material-ui/core';
import { Snackbar, Alert } from '@mui/material';
import './LoginPage.styles';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/index';

export const LoginPage = (props) => {
  const { classes } = props;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [open, setOpen] = useState(false);
  const [loginError, setLoginError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setOpen(true);
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
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}>
            Регистрация
          </Button>
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
