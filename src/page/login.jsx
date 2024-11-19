import { Box, Button, Card, Stack, TextField } from "@mui/material"

const Login = () => {
    return (
    <Box>
        <p>login</p>
        <Card sx={{mt:5, width:'20%'}}>
            <p style={{textAlign:'center'}}>Login form</p>

            <Stack direction={'column'} mt={2} mb={2} spacing={2}>
                <TextField  variant="outlined" placeholder="Masukan Nama"></TextField>
                <TextField  variant="outlined" placeholder="Masukan Password"></TextField>
            </Stack>
            <Box display={'flex'} justifyContent={'center'}>
            <Button variant="outlined" color="primary">Login</Button>
            </Box>
        </Card>
    </Box>
    )
}

export default Login