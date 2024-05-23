import React from 'react';
import { TextField, Button } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import { useProductsSelector } from '../../redux/selectors';

export const SearchBar = ({ onSearch }) => {
  const products = useProductsSelector();
  const options = products.suggestions.map((item) => item.label);
  
  return (
    <>
      <Autocomplete
        options={options}
        renderInput={(params) => (
          <TextField {...params} label="Search" variant="outlined" style={{ display: 'flex', justifyContent: 'center', margin: '0 auto', maxWidth: '500px' }} />
        )}
        noOptionsText={"Ничего не найдено"}
      />
      <Button variant="contained" onClick={onSearch} style={{ display: 'flex', justifyContent: 'center', margin: '0 auto' }}>
        Поиск
      </Button>
    </>
  );
};

// export const SearchBar = ({ value, onChange, onSearch }) => {
//   return (
//     <>
//       <TextField
//         label="Введите название"
//         fullWidth
//         variant="outlined"
//         value={value}
//         onChange={onChange}
//       />
//       <Button variant="contained" onClick={onSearch}>
//         Поиск
//       </Button>
//     </>
//   );
// };
