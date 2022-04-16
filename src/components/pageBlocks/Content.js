import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ListItem, List } from '@mui/material';


export default function Content({ likedFormSubmissions }) {

  const formSubmissionsList = 
    <List>
      {likedFormSubmissions.length > 0 && likedFormSubmissions.map(likedFormSubmission => {
        return (<ListItem key={likedFormSubmission.id}><Typography fontSize=".8rem"> liked form submission: {likedFormSubmission.data.email}</Typography></ListItem>)})}
    </List>

  return (
    <Box sx={{marginTop: 3}}>
      <Typography variant="h4">Liked Form Submissions</Typography>
      {formSubmissionsList}
    </Box>
  );
}
