import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ListItem, List } from '@mui/material';


export default function Content({ likedFormSubmissions }) {

  return (
    <Box sx={{marginTop: 3}}>
      <Typography variant="h4">Liked Form Submissions</Typography>


      <Typography variant="body1" sx={{fontStyle: 'italic', marginTop: 1}}>
        <List>
        {likedFormSubmissions.length > 0 && likedFormSubmissions.map(likedFormSubmission => {
          return (<ListItem key={likedFormSubmission.id}> liked form submission: {likedFormSubmission.data.email}</ListItem>)
        })}
        </List>
      </Typography>
    </Box>
  );
}
