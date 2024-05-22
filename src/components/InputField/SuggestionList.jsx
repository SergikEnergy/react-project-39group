import React from 'react';

export const SuggestionList = ({ suggestions }) => {
  return (
    <ul>
      {suggestions.map((suggestion, index) => (
        <li key={index}>{suggestion.title}</li>
      ))}
    </ul>
  );
};
