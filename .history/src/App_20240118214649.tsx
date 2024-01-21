import * as React from 'react';
import CarouselActividades from './CarouselActividades';
import {Card, CardContent, Grid, Typography } from '@mui/material';
import Reuniones from './Reuniones';

const reuniones = [
  {
    tiulo: 'Lunes y Miercoles',
    imgPath: 'https://th.bing.com/th/id/OIP.qCT6t2bmSGH8ui2admUXggHaE7?rs=1&pid=ImgDetMain',
    descripcion: 'Palabra viva y oración',
    linkConexionMeet: 'https://meet.google.com/eeg-tenz-rfd',
  },
  {
    tiulo: 'Martes de Pizarrón',
    imgPath: 'https://th.bing.com/th/id/OIP.qCT6t2bmSGH8ui2admUXggHaE7?rs=1&pid=ImgDetMain',
    descripcion: 'Estudio de la Doctrina',
    linkConexionMeet: 'https://meet.google.com/eeg-tenz-rfd',
    linkConexionYoutube: 'https://www.youtube.com/@ejercitotabor'
  },
  {
    tiulo: 'Jueves de Metamorfosis',
    imgPath: 'https://th.bing.com/th/id/OIP.qCT6t2bmSGH8ui2admUXggHaE7?rs=1&pid=ImgDetMain',
    descripcion: 'Estudio de la Doctrina',
    linkConexionMeet: 'https://meet.google.com/eeg-tenz-rfd',
    linkConexionYoutube: 'https://www.youtube.com/@ejercitotabor'
  },
  {
    tiulo: 'Viernes de Devocional',
    imgPath: 'https://th.bing.com/th/id/OIP.qCT6t2bmSGH8ui2admUXggHaE7?rs=1&pid=ImgDetMain',
    descripcion: 'Aprendiendo juntos como estudiar la biblia',
    linkConexionMeet: 'https://meet.google.com/eeg-tenz-rfd',
  },
  {
    tiulo: 'Sábado de Jovenes',
    imgPath: 'https://th.bing.com/th/id/OIP.qCT6t2bmSGH8ui2admUXggHaE7?rs=1&pid=ImgDetMain',
    descripcion: 'Formación biblica de Jovenes',
    linkConexionMeet: 'https://meet.google.com/eeg-tenz-rfd',
  },
  {
    tiulo: 'Domingo Palabra Viva',
    imgPath: 'https://th.bing.com/th/id/OIP.qCT6t2bmSGH8ui2admUXggHaE7?rs=1&pid=ImgDetMain',
    descripcion: 'Culto Domingo',
    linkConexionMeet: 'https://meet.google.com/eeg-tenz-rfd',
    linkConexionYoutube: 'https://www.youtube.com/@ejercitotabor'
  },
];

const App: React.FunctionComponent = () => {
  return (
    <Grid alignItems="center" container spacing={2} justifyContent="center">
      <Grid item xs={12}>

      </Grid>
      <Grid item xs={12}>
        <CarouselActividades />
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Grid alignItems="center" container spacing={2} justifyContent="space-between">
              <Grid item lg={4} xs={12}>
                <Typography gutterBottom variant="h5" component="div">
                  Reuniones
                </Typography>
              </Grid>
              <Grid item lg={12} xs={12}>
                <Grid alignItems="center" container spacing={2} justifyContent="space-between">
                  {reuniones.map((reunion, index) => (
                    <Grid item lg={4} xs={12} key={index}>
                      <Reuniones titulo={reunion.tiulo} imgPath={reunion.imgPath} descripcion={reunion.descripcion} linkConexionMeet={reunion.linkConexionMeet} linkConexionYoutube={reunion.linkConexionYoutube} />
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default App;
