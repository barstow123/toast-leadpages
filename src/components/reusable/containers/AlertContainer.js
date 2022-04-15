import { Container } from "@mui/material"
import { AlertTitle } from '@mui/material';
import Button from '@mui/material/Button'
import Alert from '../Alert';
import Box from '@mui/material/Box';

export default function AlertContainer({alerts}) {
    console.log('alerts:', alerts)
    return (
        <Container sx={{
            bottom: 0,
            right: 0,
            maxHeigth: '1200px',
            height: '100%',
            maxWidth: '500px',
            width: '30vw',
            marginRight: 0,
            position: 'absolute'
        }}>
            <Box>
                {alerts.length && alerts.map(alert =>
                    <Alert severity="info" key={alert.id}
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
            </Box>
        </Container>
    )
}