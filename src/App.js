import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import AlertService from './components/pageBlocks/AlertService'
import { onMessage, fetchLikedFormSubmissions } from './service/mockServer';

import Header from './components/pageBlocks/Header';
import Content from './components/pageBlocks/Content';

function App() {


  /*
    NOTES

    1.) Redux store could be implemented to allow app data (such as toasts) to be accessed via hooks, instead of passed through props

    2.) global constants could be provided via next.js. for example, the path to api calls could be a global constant

  */

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
      <AlertService alerts={alerts}/>
    </>
  );
}

export default App;
