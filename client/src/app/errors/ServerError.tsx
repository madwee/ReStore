import { Container, Divider, Paper, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

export default function ServerError (){
    const {state} = useLocation();
    return(
        <Container component={Paper}>
            {state?.error ? (
                <>
                <Typography gutterBottom variant='h3' color='secondary' pt={3}>
                    {state.error.title}
                </Typography>
                <Divider />
                <Typography variant="body1" py={3} style={{wordWrap:'break-word'}}>
                    {state.error.detail || 'Internal server error'}
                </Typography>
                </>
            ) : (
                 <Typography variant='h5'>Server error</Typography>
            )}
           

        </Container>
    )
}