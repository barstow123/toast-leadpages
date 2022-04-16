import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import AlertService from './components/pageBlocks/AlertService'
import { onMessage, fetchLikedFormSubmissions } from './service/accessAPI';

import Header from './components/pageBlocks/Header';
import Content from './components/pageBlocks/Content';

function App() {


  /*
    NOTES

    1.) Redux store could be implemented to allow app data (such as toasts) to be accessed via hooks, instead of passed through props

    2.) global constants could be provided via next.js. for example, the path to api calls could be a global constant. not to mention
          SSR provides very significant performance improvements at scale

  */

  const [alerts, setAlerts] = useState([])
  const [likedFormSubmissions, setLikedFormSubmissions] = useState([])

  useEffect(() => {
    getLikedFormSubmissions()
  }, [])

  onMessage(formSubmission => {
    addAlert(formSubmission)
  })

  function addAlert(alert) {
    setAlerts([...alerts, alert])
  }

  async function getLikedFormSubmissions() {
    try {
      const submissionsResponse = await fetchLikedFormSubmissions()
      setLikedFormSubmissions(submissionsResponse.formSubmissions)
    } catch(e) {
      console.log('error occured getting liked form submissions:', e)
    }
  }

  return (
    <>
      <Header />
      <Container>
        <Content likedFormSubmissions={likedFormSubmissions}/>
      </Container>
      <AlertService alerts={alerts} setAlerts={setAlerts} getLikedFormSubmissions={getLikedFormSubmissions}/>
    </>
  );
}

export default App;
