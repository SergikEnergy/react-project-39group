import React, { useState } from 'react';

import { SearchBar } from './SearchBar';

export const InputField = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <>
      <SearchBar value={inputValue} />
    </>
  );
};
