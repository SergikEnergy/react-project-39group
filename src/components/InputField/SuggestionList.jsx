import React from 'react';
import { useDebounce } from '../../hooks';

export const SuggestionList = ({ suggestions, inputValue }) => {
    const debouncedSuggestions = useDebounce(suggestions, 2000);
    const debouncedInputValue = useDebounce(inputValue, 2000);
// здесь не нужен debaunce
    return (
      <>
        <ul>
          {(debouncedSuggestions.length === 0 && debouncedInputValue.length > 0)? (
            <li>Ничего не найдено :(</li>
          ) : (
            debouncedSuggestions.map((suggestion, index) => (
              <li key={index}>{suggestion.title}</li>
            ))
          )}
        </ul>
      </>
    );
  }
