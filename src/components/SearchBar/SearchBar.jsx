import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';

import { setSearchProducts } from '../../redux/actions';
import { useProductsSelector } from '../../redux/selectors';

export const SearchBar = () => {
  const dispatch = useDispatch();
  const products = useProductsSelector();
  const history = useNavigate();
  const options = products.suggestions.map((item) => item.label);
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = () => {
    const sortedProducts = products.products.filter((product) =>
      product.title.toLowerCase().includes(searchValue.toLowerCase()),
    );
    if (sortedProducts.length === 0) {
      history('/not-found');
    }
    dispatch(setSearchProducts(sortedProducts));
  };

  const handleAutocompleteChange = (event, value) => {
    if (value) {
      const card = products.products.find((product) => product.title === value);
      setSearchValue(value);
      history(`/card/${card.id}`);
    }
  };

  return (
    <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
      <Autocomplete
        options={options}
        style={{ width: '50%' }}
        onChange={handleAutocompleteChange}
        renderInput={(params) => (
          <TextField
            onChange={handleInputChange}
            {...params}
            label="Search"
            variant="outlined"
            type="text"
            style={{ marginRight: '10px' }}
          />
        )}
        noOptionsText={'Ничего не найдено'}
      />
      <Button
        variant="contained"
        onClick={handleSearch}>
        Найти
      </Button>
    </div>
  );
};
