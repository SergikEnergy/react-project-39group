import React from 'react';
import { Card, CardContent } from '@mui/material';

export const NotFoundPage = () => {
  return (
    <Card>
      <CardContent>
        <img
          src={require('../../components/InputField/167965-OVVF50-3.jpg').default}
          alt="Not Found"
          style={{ maxWidth: '100%' }}
        />
      </CardContent>
    </Card>
  )
};
