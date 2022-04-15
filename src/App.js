import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button'
import Alert from './Alert';
import { AlertTitle } from '@mui/material';
import { onMessage, fetchLikedFormSubmissions } from './service/mockServer';

import Header from './Header';
import Content from './Content';

function App() {

  useEffect(() => {
    init()
  })

  const [alerts, setAlerts] = useState([])

  function init() {
    onMessage((formSubmission) => {
      console.log('form submission:', formSubmission)
      setAlerts([...alerts, formSubmission])
      console.log('alerts:', [...alerts, formSubmission])
    })
  }

  async function getFormSubmissions() {
    const submissionsResponse = await fetchLikedFormSubmissions()
    const likedFormSubmissions = submissionsResponse.formSubmissions
    console.log('liked form submisions', likedFormSubmissions)
  }

  return (
    <>
      <Header />
      <Container>
        <Content />
        {alerts.map(alert =>
            <Alert severity="info"
              action = {
                <>
                  <Button color="inherit" size="small">
                    LIKE
                  </Button>
                  <Button color="inherit" size="small">
                    X
                  </Button>
                </>
            }>
              <AlertTitle>You have a new Submission!</AlertTitle>
              {alert.data.firstName} {alert.data.lastName} <span sx={{fontSize: 12}}>{alert.data.email}</span>
            </Alert>
        )}
      </Container>
    </>
  );
}

export default App;
