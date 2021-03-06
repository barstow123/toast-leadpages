import { Container } from "@mui/material"
import { AlertTitle } from '@mui/material';
import Button from '@mui/material/Button'
import Alert from '../reusable/Alert';
import Box from '@mui/material/Box';
import { saveLikedFormSubmission } from "../../service/accessAPI";

export default function AlertService({alerts, setAlerts, getLikedFormSubmissions}) {

    function closeAlert(index) {
        setAlerts([...alerts.slice(0, index), ...alerts.slice(index+1, alerts.length)])
    }

    const alertsList = alerts.map((formSubmission, index) => {
        return (<Alert severity="info" key={formSubmission.id}
            action = {
            <>
                <Button color="inherit" size="small" data-testid="like-button" onClick={async() => {
                    closeAlert(index)
                    await saveLikedFormSubmission(formSubmission)
                    await getLikedFormSubmissions()
                }}>
                LIKE
                </Button>
                <Button color="inherit" size="small" data-testid="dismiss-button" onClick={() => {
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
            maxHeight: 'calc(100% - 64px)',
            maxWidth: '500px',
            width: '60%',
            marginRight: 0,
            position: 'absolute',
            overflowY: 'hidden'
        }}>
            <Box>
                {alertsList}
            </Box>
        </Container>
    )
}