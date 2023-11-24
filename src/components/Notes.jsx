import React from 'react';
import { Card, CardContent, Typography, Box, Grid, Divider, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';


const Notes = (props) => {
  const cardStyle = {
    backgroundColor: 'lightblue',
    marginBottom: 20,
    padding: 5,
    width: '100%'
  };

  const contentStyle = {
    display: 'box',
    flexDirection: 'column',
  };

  const buttonContainerStyle = {
    marginLeft: '95%', 
  };

  return (
    <Card style={cardStyle}>
      <CardContent style={contentStyle}>
        <Grid container justifyContent="space-between" alignItems="center">
          <Typography variant="h5">{props.title}</Typography>
          <Typography variant="subtitle2" color="textSecondary">
            {props.createdAt}
          </Typography>
        </Grid>
        <Divider style={{ margin: '2px', backgroundColor: '#000', height: '1px' }} />
        <Box mt={6}></Box>
        <Typography>{props.body}</Typography>
        <Box style={buttonContainerStyle}>
          <IconButton aria-label="delete" color="error" onClick={props.onDelete}>
            <DeleteIcon />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};

export { Notes };
