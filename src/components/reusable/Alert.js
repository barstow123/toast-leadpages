import MUIAlert from '@mui/material/Alert';

export default function Alert(props) {
    return <MUIAlert {...props} sx={{height: '60px', width: '100%', position: 'relative'}}></MUIAlert>
}