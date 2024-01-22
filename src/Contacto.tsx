import { Button, Grid, TextField } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';

const Contacto: React.FunctionComponent = () => {
    return (

        <Grid container spacing={1} justifyContent="center" >
            <Grid item xs={12} sm={6}>
                <Grid item xs={12} style={{ marginBottom: '1rem' }}>
                    <TextField
                        fullWidth
                        label='Nombre Apellido'
                        name="NombreApellido"
                        onChange={(event) => {

                        }}
                        required
                        //value=
                        variant="outlined"
                        inputProps={{ maxLength: 20 }}
                        id='NombreApellido'
                    />
                </Grid>
                <Grid item xs={12} style={{ marginBottom: '1rem' }}>
                    <TextField
                        fullWidth
                        label='Email'
                        name="Email"
                        onChange={(event) => {
                            if (
                                event.target.value !== '' &&
                                !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                                    event.target.value
                                )
                            )
                                return event
                        }}
                        required
                        //value=
                        variant="outlined"
                        inputProps={{ maxLength: 20 }}
                        id='Email'
                        type="email"
                    />
                </Grid>
                <Grid item xs={12} style={{ marginBottom: '1rem' }}>
                    <TextField
                        fullWidth
                        label='Peticion'
                        required
                        onChange={(event) => {

                        }}
                        name="Petición"
                        //value=
                        multiline
                        variant="outlined"
                        maxRows={6}
                        minRows={4}
                        id="peticion"
                    />
                </Grid>
                <Grid  container item xs={12} justifyContent="flex-end" style={{ marginBottom: '1rem' }} >
                    <Button variant="contained" endIcon={<SendIcon />}>
                        Enviar
                    </Button>
                </Grid>       
            </Grid>
        </Grid>
    )
}

export default Contacto;