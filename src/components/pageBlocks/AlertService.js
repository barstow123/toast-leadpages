import { Container } from "@mui/material"
import { AlertTitle } from '@mui/material';
import Button from '@mui/material/Button'
import Alert from '../reusable/Alert';
import Box from '@mui/material/Box';
import { saveLikedFormSubmission } from "../../service/mockServer";
import { PinDropSharp } from "@mui/icons-material";

export default function AlertService({alerts, getLikedFormSubmissions}) {
    console.log('alerts:', alerts)
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
                {alerts.map(formSubmission => {
                    return (<Alert severity="info" key={formSubmission.id}
                        action = {
                        <>
                            <Button color="inherit" size="small" onClick={async() => {
                                await saveLikedFormSubmission(formSubmission)
                                await getLikedFormSubmissions()
                            }}>
                            LIKE
                            </Button>
                            <Button color="inherit" size="small">
                            X
                            </Button>
                        </>
                    }>
                        <AlertTitle>You have a new Submission!</AlertTitle>
                        {formSubmission.data.firstName} {formSubmission.data.lastName} <span sx={{fontSize: 12}}>{formSubmission.data.email}</span>
                    </Alert>)
                })}
            </Box>
        </Container>
    )
}