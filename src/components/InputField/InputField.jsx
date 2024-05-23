import React, { useState, useEffect } from 'react';
import { SearchBar } from './SearchBar';
import { SuggestionList } from './SuggestionList';
import { SearchResults } from './SearchResults';
import { NoFound } from './NoFound';
import { fakeCard } from '../../data/fakeCard';
import { useProductsSelector } from '../../redux/selectors';
import { useDebounce } from '../../hooks';
import { useDispatch } from 'react-redux';
import { getProductsWithSearch } from '../../redux/actions/productsActions';

export const InputField = () => {
  const dispatch = useDispatch();
  const products = useProductsSelector(); // продукты 
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState(fakeCard);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  const getProductsWithDebounce = () => {
    dispatch(getProductsWithSearch(inputValue))
  }

  // const debounce = useDebounce(getProductsWithDebounce, 10000)
  // console.log(debounce)

  
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

// Функция для 

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
      {/* <SuggestionList suggestions={filteredSuggestions} inputValue={inputValue}/> */}
      {/* {suggestions.length > 0 ? (
        <SearchResults suggestions={suggestions} />
      ) : (
        <NoFound />
      )} */}
    </>
  );
};

//TODO
/*сделать Suggest и роутер
при клике на саджест сразу перенаправлять пользователя на страницу с единицей информации.

Когда пользователь заполнил поле поиска и нажал Найти,
можно перебросить пользователя на урл /search?queryParams,
чтобы удобно работать с поиском и перезагрузками этой страницы. Либо можете построить процесс поиска как-нибудь по-другому на ваше усмотрение.
Это зависит от АПИ, которое вы выбрали.
*/
//////////////////////////////////////////////////////////////
/**/
