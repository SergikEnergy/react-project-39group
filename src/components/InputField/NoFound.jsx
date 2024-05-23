import React from 'react';
import { Card, Button, CardContent } from '@mui/material';
import { Grid } from '@material-ui/core';

export const NoFound = ({ handleReturn }) => {
  return (
    <Grid item xs={12}>
      <Card>
        <Button variant="contained" onClick={handleReturn}>
          Вернуться
        </Button>
        <CardContent>
          <img
            src={require('./167965-OVVF50-3.jpg').default}
            alt="Not Found"
            style={{ maxWidth: '100%' }}
          />
        </CardContent>
      </Card>
    </Grid>
  );
};
