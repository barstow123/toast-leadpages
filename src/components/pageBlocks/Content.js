import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


export default function Content({ likedFormSubmissions }) {

  return (
    <Box sx={{marginTop: 3}}>
      <Typography variant="h4">Liked Form Submissions</Typography>


      <Typography variant="body1" sx={{fontStyle: 'italic', marginTop: 1}}>
      {likedFormSubmissions.length && likedFormSubmissions.map(likedFormSubmission => {
        return (<Typography key={likedFormSubmission.id} variant="body1">liked form submission: {likedFormSubmission.id}</Typography>)
      })}
      </Typography>
    </Box>
  );
}
