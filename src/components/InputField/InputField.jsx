import React, { useState } from 'react';
import { SearchBar } from './SearchBar';
import { SuggestionList } from './SuggestionList';
import { SearchResults } from './SearchResults';
import { NoFound } from './NoFound';
import { fakeCard } from '../../data/fakeCard';

export const InputField = () => {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState(fakeCard);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

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

  const handleReturn = () => {
    setInputValue('');
    setSuggestions(fakeCard);
    setFilteredSuggestions([]);
  };

  return (
    <>
      <SearchBar value={inputValue} onChange={handleChange} onSearch={searchChange} />
      <SuggestionList suggestions={filteredSuggestions} />
      {suggestions.length > 0 ? (
        <SearchResults suggestions={suggestions} />
      ) : (
        <NoFound handleReturn={handleReturn} />
      )}
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
