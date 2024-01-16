import * as React from 'react';
import CarouselActividades from './CarouselActividades';
import {Grid, Paper, Typography, styled } from '@mui/material';
import Reuniones from './Reuniones';

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  maxWidth: 400,
  color: theme.palette.text.primary,
}));


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
    <Grid container>
      <Grid item xs={12}>
        <CarouselActividades />
      </Grid>
      <StyledPaper
        sx={{
          my: 1,
          mx: 'auto',
          p: 2,
        }}
      >
        <Grid container wrap="nowrap" spacing={2}>

          <Grid item>
            <Typography gutterBottom variant="h5" component="div">
              Reuniones
            </Typography>
            <Grid container spacing={{ xs: 1, md: 3}} >
              {reuniones.map((reunion, index) => (
                <Grid item xs={2} sm={4} md={4} key={index}>
                  <Reuniones titulo={reunion.tiulo} imgPath={reunion.imgPath} descripcion={reunion.descripcion} linkConexionMeet={reunion.linkConexionMeet} linkConexionYoutube={reunion.linkConexionYoutube} />
                </Grid>
              ))}

            </Grid>

          </Grid>
        </Grid>
      </StyledPaper>

    </Grid>

  )
}

export default App;
