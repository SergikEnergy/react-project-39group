import React from 'react';
import { Grid } from '@mui/material';
import { CardItem } from './CardItem';

export const SearchResults = ({ suggestions }) => {
  return (
    <Grid container spacing={3}>
      {suggestions.slice(0, 15).map((item) => (
        <Grid item xs={12} sm={5} md={4} lg={3} key={item.id}>
          <CardItem item={item} />
        </Grid>
      ))}
    </Grid>
  );
};
