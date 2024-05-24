export const ActiveNavLink = ({ isActive }) => ({
  color: isActive ? 'rgb(224,99,204)' : 'rgb(25, 118, 210)',
  textDecoration: 'none',
  letterSpacing: '0.02857em',
  textTransform: 'uppercase',
  fontFamily: 'Arial',
  fontSize: '0.875rem',
  padding: '5px 15px',
  borderRadius: '4px',
  border: isActive ? '1px solid rgb(224,99,204, 0.5)' : '1px solid rgba(25, 118, 210, 0.5)',
});
