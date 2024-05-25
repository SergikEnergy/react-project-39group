import React from 'react';
import { TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';

import { useProductsSelector } from '../../redux/selectors';

export const SearchBar = () => {
  const products = useProductsSelector();
  const options = products.suggestions.map((item) => item.label);

  const handleInputChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <Autocomplete
      options={options}
      renderInput={(params) => (
        <TextField
          onChange={handleInputChange}
          {...params}
          label="Search"
          variant="outlined"
          type="text"
          style={{ display: 'flex', justifyContent: 'center', margin: '0 auto', maxWidth: '500px' }}
        />
      )}
      noOptionsText={'Ничего не найдено'}
    />
  );
};
