import MUIAlert from '@mui/material/Alert';

export default function Alert(props) {
    return <MUIAlert {...props} sx={{margin: '10px 0', height: '66px', width: '100%', position: 'relative'}} />
}