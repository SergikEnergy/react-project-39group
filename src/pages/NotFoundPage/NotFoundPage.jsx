import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardContent } from '@mui/material';

export const NotFoundPage = () => {
  return (
    <>
      <Button
        variant="contained"
        style={{ display: 'flex', justifyContent: 'center', margin: '0 auto' }}
        component={Link}
        to="/main">
        На Главную
      </Button>
      <Card>
        <CardContent>
          <img
            src={require('../../components/InputField/167965-OVVF50-3.jpg').default}
            alt="Not Found"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </CardContent>
      </Card>
    </>
  );
};
