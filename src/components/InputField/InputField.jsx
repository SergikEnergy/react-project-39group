import React, { useState } from 'react';
import { TextField, Grid, Card, CardContent, Typography, Button, CardMedia } from '@mui/material';
import { fakeCard } from '../../data/fakeCard';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

export const InputField = () => {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState(fakeCard); // переименовать
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
        item.title.toLowerCase().includes(inputText.toLowerCase()),
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
      <TextField
        label="Введите название"
        fullWidth
        variant="outlined"
        value={inputValue}
        onChange={handleChange}
      />
      <Button
        variant="contained"
        onClick={searchChange}>
        Поиск
      </Button>
      <ul>
        {filteredSuggestions.map((suggestion, index) => (
          <li key={index}>{suggestion.title}</li>
        ))}
      </ul>
      <Grid
        container
        spacing={3}>
        {suggestions.length > 0 ? (
          suggestions.slice(0, 15).map((item) => (
            <Grid
              item
              xs={12}
              sm={5}
              md={4}
              lg={3}
              key={item.id}>
              <Card>
              <CardMedia
                component="img"
                height="200"
                image={item.imageUrl}
                alt="Image"
                />
                <IconButton aria-label="like">
                  <ThumbUpIcon />
                </IconButton>
                <IconButton aria-label="favorite">
                  <FavoriteIcon />
                </IconButton>
                <CardContent>
                  <Typography>{item.title}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <>
            <Grid
              item
              xs={12}>
              <Card>
                <Button
                  variant="contained"
                  onClick={handleReturn}>
                  Вернуться
                </Button>
                <CardContent>
                  <img
                    // eslint-disable-next-line no-undef
                    src={require('./167965-OVVF50-3.jpg').default}
                    alt="Not Found"
                    style={{ maxWidth: '100%' }}
                  />
                </CardContent>
              </Card>
            </Grid>
          </>
        )}
      </Grid>
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
