import React, { useState, useEffect } from 'react';
import { SearchBar } from './SearchBar';
import { fakeCard } from '../../data/fakeCard';
import { useProductsSelector } from '../../redux/selectors';
import { useDebounce } from '../../hooks';
import { useDispatch } from 'react-redux';
import { getProductsWithSearch } from '../../redux/actions/productsActions';

export const InputField = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  const getProductsWithDebounce = () => {
    dispatch(getProductsWithSearch(inputValue))
  }

  const debounce = useDebounce(getProductsWithDebounce, 10000)
  
  const handleChange = (event) => {
    const inputText = event.target.value;
    setInputValue(inputText);

    if (inputText === '') {
      setFilteredSuggestions([]);
    } else {
      const filteredSuggestions = fakeCard
        .filter((item) => item.title.toLowerCase().includes(inputText.toLowerCase()))
        .slice(0, 5);

      setFilteredSuggestions(filteredSuggestions);
    }
  };

  const searchChange = () => {
    const inputText = inputValue;
    setInputValue(inputText);

    if (inputText === '') {
      setSuggestions([]);
    } else {
      const resultCard = fakeCard.filter((item) =>
        item.title.toLowerCase().includes(inputText.toLowerCase())
      );

      setFilteredSuggestions([]);
      setSuggestions(resultCard);
    }
  };

  return (
    <>
      <SearchBar value={inputValue} onChange={handleChange} onSearch={searchChange} />
    </>
  );
};

