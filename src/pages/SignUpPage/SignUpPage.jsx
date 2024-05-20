import React, { useState } from 'react';
import { Typography, Paper, Button, FormControl, Input, InputLabel } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/index';

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

export const SignUpPage = (props) => {
  const { classes } = props;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailOut, setEmailOut] = useState(false);
  const [passwordOut, setPasswordOut] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

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
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(String(e.target.value).toLowerCase())) {
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
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      console.log('User Success');
    } catch (error) {
      console.log(error.message);
    }
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
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}>
            Вернуться к логину
          </Button>
        </form>
      </Paper>
    </main>
  );
};

export default withStyles(styles);
