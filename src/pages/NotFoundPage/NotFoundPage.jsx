import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardContent, Typography } from '@mui/material';

import Img_404 from '../../images/404.jpg';

import './NotFoundPage.css';

export const NotFoundPage = () => (
  <div className="wrapper__not-found">
    <Typography
      variant="h4"
      style={{ zIndex: 3, color: 'rgb(36, 1, 161)' }}
      component="h3"
      align="center">
      Извините, страница не найдена!
    </Typography>
    <Button
      variant="contained"
      className="button__not-found"
      component={Link}
      to="/main">
      На Главную
    </Button>
    <Card className="card__not-found">
      <CardContent>
        <img
          className="image__not-found"
          src={Img_404}
          alt="Not Found"
        />
      </CardContent>
    </Card>
  </div>
);
