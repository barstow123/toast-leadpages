import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import AlertContainer from './components/reusable/containers/AlertContainer'
import { onMessage, fetchLikedFormSubmissions } from './service/mockServer';

import Header from './components/pageBlocks/Header';
import Content from './components/pageBlocks/Content';

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
      </Container>
      <AlertContainer alerts={alerts}/>
    </>
  );
}

export default App;
