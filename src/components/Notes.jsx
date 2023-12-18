import React from 'react';
import { Card, CardContent, Typography, Box, Grid, Divider, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
//import { deleteNote } from '../utils/network';

const Notes = (props, onDelete) => {
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

  const handleDelete = () => {
    // Ensure onDelete is a function before calling it
    if (props.onDelete && typeof props.onDelete === 'function') {
      props.onDelete();
    }
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
          <IconButton aria-label="delete" color="error" onClick={handleDelete}>
            <DeleteIcon />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};

export { Notes };
