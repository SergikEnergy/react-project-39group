import { Button, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledMain = styled('main')(({ theme }) => ({
  width: 'auto',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: theme.spacing(3),
  marginRight: theme.spacing(3),
  minHeight: '70vh',

  [theme.breakpoints.up(400 + theme.spacing(3) * 2)]: {
    width: 400,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}));

export const StyledPaper = styled(Paper)(({ theme }) => ({
  marginTop: theme.spacing(9),
  maxWidth: 600,
  borderRadius: '8px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: `${theme.spacing(4)} ${theme.spacing(5)} ${theme.spacing(5)}`,
}));

export const StyledForm = styled('form')(({ theme }) => ({
  width: '100%',
  marginTop: theme.spacing(1),
}));

export const StyledSubmit = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(3),
}));
