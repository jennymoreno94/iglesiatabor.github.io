import * as React from 'react';
import { Grid, Card, CardContent, Typography, CardMedia, CardActions, Button, IconButton, } from '@mui/material';
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
      <Card style={{ marginTop: '20px', height: '100%', backgroundColor:'#edf3ff',border:'1px solid #7d8dfc' }}>
        <CardMedia 
          sx={{ height: 300 }}
          image={imgPath}
          title={titulo}
        />
        <CardContent >
          <Typography gutterBottom variant="h5" component="div" style={{ color: "#8b2636"}}>
          <strong>{titulo}</strong>  
          </Typography>
          <Typography variant="body2" style={{ color: "#a52b3a"}} >
            {descripcion}
          </Typography>
        </CardContent>
        <CardActions disableSpacing  >
          <IconButton aria-label="googlemeet" href={`${linkConexionMeet}`} sx={{ "&:hover": { backgroundColor: "rgb(223 74 74 / 20%)" ,color:"#d5444b"}}}>
            <Videocam />
          </IconButton >
          <IconButton aria-label="youtube" href={`${linkConexionYoutube}`} sx={{ "&:hover": { backgroundColor: "rgb(223 74 74 / 20%)" ,color:"#d5444b"}}} style={{
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