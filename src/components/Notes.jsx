import React from 'react';
import { Card, CardContent, Typography, Box, Grid, Divider } from '@mui/material';

const Notes = (props) => {
    const cardStyle = {
        backgroundColor: 'lightblue', marginBottom: 20, padding:5
      };

  return (
    <Card style={cardStyle}>
      <CardContent>
      <Grid container justifyContent="space-between" alignItems="center">
          <Typography variant="h5">{props.title}</Typography>
          <Typography variant="subtitle2" color="textSecondary">
            {props.createdAt}
          </Typography>
        </Grid>
        <Divider style={{ margin: '2px', backgroundColor: '#000', height: '1px'}} />
        <Box mt={6}></Box>
        <Typography>{props.body}</Typography>
      </CardContent>
    </Card>
  );
};

export {Notes};
