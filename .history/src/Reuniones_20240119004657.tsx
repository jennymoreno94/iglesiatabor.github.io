import * as React from 'react';
import { Grid, Card, CardContent, Typography, CardMedia, CardActions, Button, IconButton } from '@mui/material';
import YouTube from '@mui/icons-material/YouTube';
import Videocam from '@mui/icons-material/Videocam';

interface IInformacionReunion {
  titulo: string,
  imgPath: string,
  descripcion: string,
  linkConexionMeet: string,
  linkConexionYoutube?: string
}


const Reuniones: React.FunctionComponent<IInformacionReunion> = ({ titulo, imgPath, descripcion, linkConexionMeet, linkConexionYoutube }) => {
  return (
    <Grid item xs={12}>
      <Card style={{ marginTop: '20px', height: '100%', backgroundColor:'#edf3ff' }}>
        <CardMedia 
          sx={{ height: 300 }}
          image={imgPath}
          title={titulo}
        />
        <CardContent style={{border:'1px solid ##7d8dfc'}}>
          <Typography gutterBottom variant="h5" component="div">
            {titulo}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {descripcion}
          </Typography>
        </CardContent>
        <CardActions disableSpacing  style={{border:'1px solid ##7d8dfc'}}>
          <IconButton aria-label="googlemeet" href={`${linkConexionMeet}`}>
            <Videocam />
          </IconButton>
          <IconButton aria-label="youtube" href={`${linkConexionYoutube}`} style={{
            visibility: (linkConexionYoutube !== undefined && linkConexionYoutube !== "") ? 'visible' : 'hidden'
          }}>
            <YouTube />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>


  )
}

export default Reuniones;