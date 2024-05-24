import React from 'react';
import { Card, CardMedia, IconButton, CardContent, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

export const CardItem = ({ item }) => {
  return (
    <Card>
      <CardMedia component="img" height="200" image={item.imageUrl} alt="Image" />
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
  );
};
