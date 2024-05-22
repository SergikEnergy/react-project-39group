import React from 'react';
import { TextField, Button } from '@mui/material';

export const SearchBar = ({ value, onChange, onSearch }) => {
  return (
    <>
      <TextField
        label="Введите название"
        fullWidth
        variant="outlined"
        value={value}
        onChange={onChange}
      />
      <Button variant="contained" onClick={onSearch}>
        Поиск
      </Button>
    </>
  );
};
