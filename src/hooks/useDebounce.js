import { useState, useEffect } from 'react';

const useDebounce = (callback, delay) => {
  const [debounceTimer, setDebounceTimer] = useState(null);

  useEffect(() => {
    return () => {
      if (debounceTimer) {
        clearTimeout(debounceTimer);
      }
    };
  }, [debounceTimer]);

  const debouncedCallback = (...args) => {
    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }
    setDebounceTimer(setTimeout(() => {
      callback(...args);
    }, delay));
  };

  return debouncedCallback;
};
