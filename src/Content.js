import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {fetchLikedFormSubmissions} from './service/mockServer'


export default function Content() {

  useEffect(() => {
    getFormSubmissions()
  }, [])

  async function getFormSubmissions() {
    const submissionsResponse = await fetchLikedFormSubmissions()
    const likedFormSubmissions = submissionsResponse.formSubmissions
    console.log('liked form submisions', likedFormSubmissions)
  }


  return (
    <Box sx={{marginTop: 3}}>
      <Typography variant="h4">Liked Form Submissions</Typography>

      <Typography variant="body1" sx={{fontStyle: 'italic', marginTop: 1}}>
        TODO: List of liked submissions here (delete this line)
      </Typography>
    </Box>
  );
}
