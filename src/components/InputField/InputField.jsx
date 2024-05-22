import React, { useState } from 'react';
import { Card, CardContent, Grid, TextField, Typography } from '@mui/material';

import { fakeCard } from '../../data/fakeCard';
import { useDebounce } from '../../hooks/index';

export const InputField = () => {
  const [inputValue, setInputValue] = useState('');

  const debouncedInputValue = useDebounce(inputValue, 500);

  const filteredData = debouncedInputValue
    ? fakeCard.filter((item) =>
        item.title.toLowerCase().includes(debouncedInputValue.toLowerCase()),
      )
    : fakeCard;

  const handleChange = (event) => {
    setInputValue(event.target.value);
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
      <Grid
        container
        spacing={3}>
        {filteredData.length > 0 ? (
          filteredData.slice(0, 30).map((item) => (
            <Grid
              item
              xs={12}
              sm={5}
              md={4}
              lg={3}
              key={item.id}>
              <Card>
                <CardContent>
                  <Typography>{item.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Grid
            item
            xs={12}>
            <Card>
              <CardContent>
                <img
                  // eslint-disable-next-line no-undef
                  src={
                    'https://w7.pngwing.com/pngs/336/743/png-transparent-error-404-404-error.png'
                  }
                  alt="Not Found"
                  style={{ maxWidth: '100%' }}
                />
              </CardContent>
            </Card>
          </Grid>
        )}
      </Grid>
    </>
  );
};

//TODO сделать кнопку, показать больше
/*сделать Suggest и роутер
Сделать согласно ТЗ подсказки - при вводе в инпут можно показывать какие-то саджесты,
например первых 5 результатов и при клике на саджест сразу перенаправлять пользователя на страницу с единицей информации.

Когда пользователь заполнил поле поиска и нажал Найти,
можно перебросить пользователя на урл /search?queryParams,
чтобы удобно работать с поиском и перезагрузками этой страницы. Либо можете построить процесс поиска как-нибудь по-другому на ваше усмотрение.
Это зависит от АПИ, которое вы выбрали.
*/
