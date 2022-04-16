import { Container } from "@mui/material"
import { AlertTitle } from '@mui/material';
import Button from '@mui/material/Button'
import Alert from '../reusable/Alert';
import Box from '@mui/material/Box';
import { saveLikedFormSubmission } from "../../service/accessAPI";

export default function AlertService({alerts, setAlerts, getLikedFormSubmissions}) {

    function closeAlert(index) {
        // special case. if alerts length is 1, remove the only alert
        if (alerts.length === 1) {
            setAlerts([])
            return
        }

        const newAlerts = alerts.splice(index, 1)
        setAlerts(newAlerts)
    }

    const alertsList = alerts.map((formSubmission, index) => {
        return (<Alert severity="info" key={formSubmission.id}
            action = {
            <>
                <Button color="inherit" size="small" onClick={async() => {
                    try {
                        closeAlert(index)
                        await saveLikedFormSubmission(formSubmission)
                        await getLikedFormSubmissions()
                        console.log('submission liked')
                    } catch(e) {
                        console.log('error occured:', e)
                    }
                }}>
                LIKE
                </Button>
                <Button color="inherit" size="small" onClick={() => {
                    closeAlert(index)
                }}>
                X
                </Button>
            </>
        }>
            <AlertTitle>You have a new Submission!</AlertTitle>
            {formSubmission.data.firstName} {formSubmission.data.lastName} <span sx={{fontSize: 12}}>{formSubmission.data.email}</span>
        </Alert>)
    })

    return (
        <Container sx={{
            bottom: 0,
            right: 0,
            maxHeigth: '1200px',
            height: 'calc(100%-64px)',
            maxWidth: '500px',
            width: '60%',
            marginRight: 0,
            position: 'absolute',
        }}>
            <Box>
                {alertsList}
            </Box>
        </Container>
    )
}