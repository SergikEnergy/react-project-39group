import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';

import { saveToHistory } from '@/redux/actions';

import { getProductsWithSearch } from '../../redux/actions';
import { useProductsSelector } from '../../redux/selectors';

export const SearchBar = (searchInitialValue) => {
  const dispatch = useDispatch();
  const products = useProductsSelector();
  const history = useNavigate();
  const options = products.suggestions.map((item) => item.label);
  const [searchValue, setSearchValue] = useState(searchInitialValue);

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = () => {
    dispatch(getProductsWithSearch(searchValue));
    dispatch(saveToHistory(searchValue));
  };

  const handleAutocompleteChange = (event, value) => {
    if (value) {
      setSearchValue(value);
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
            value={searchValue}
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
