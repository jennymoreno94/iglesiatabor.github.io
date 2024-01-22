import * as React from "react";
import CarouselActividades from "./CarouselActividades";
import {  Card, CardContent, Grid, Typography } from "@mui/material";
import Reuniones from "./Reuniones";
import MenuPrincipal from "./MenuPrincipal";
import Fixed from "./Fixed";
import Reunion1 from "./img/IMG-20200616-WA0036.jpg";
import Reunion2 from "./img/IMG-20200618-WA0011.jpg";
import Reunion3 from "./img/IMG-20200621-WA0004.jpg";
import Contacto from './Contacto';

const reuniones = [
  {
    tiulo: "Martes de Pizarrón",
    imgPath:Reunion3,
    descripcion: "Estudio de la Doctrina",
    linkConexionMeet: "https://meet.google.com/eeg-tenz-rfd",
    linkConexionYoutube: "https://www.youtube.com/@ejercitotabor",
  },
  {
    tiulo: "Martes de Pizarrón",
    imgPath: Reunion1,
    descripcion: "Estudio de la Doctrina",
    linkConexionMeet: "https://meet.google.com/eeg-tenz-rfd",
    linkConexionYoutube: "https://www.youtube.com/@ejercitotabor",
  },
  {
    tiulo: "Jueves de Metamorfosis",
    imgPath: Reunion2,
    descripcion: "Estudio de la Doctrina",
    linkConexionMeet: "https://meet.google.com/eeg-tenz-rfd",
    linkConexionYoutube: "https://www.youtube.com/@ejercitotabor",
  },
  {
    tiulo: "Viernes de Devocional",
    imgPath: Reunion1,
    descripcion: "Aprendiendo juntos como estudiar la biblia",
    linkConexionMeet: "https://meet.google.com/eeg-tenz-rfd",
  },
  {
    tiulo: "Sábado de Jovenes",
    imgPath: Reunion2,
    descripcion: "Formación biblica de Jovenes",
    linkConexionMeet: "https://meet.google.com/eeg-tenz-rfd",
  },
  {
    tiulo: "Domingo Palabra Viva",
    imgPath: Reunion3,
    descripcion: "Culto Domingo",
    linkConexionMeet: "https://meet.google.com/eeg-tenz-rfd",
    linkConexionYoutube: "https://www.youtube.com/@ejercitotabor",
  },
];

const App: React.FunctionComponent = () => {
  return (
    <Grid alignItems="center" container spacing={2} justifyContent="center">
      <Grid item xs={12} style={{ backgroundColor: "#222061" }}>
        <MenuPrincipal />
      </Grid>
      <Grid item xs={12} style={{ backgroundColor: "#222061" }}>
        <CarouselActividades />
      </Grid>
      <Grid item xs={12} style={{ paddingTop: "0px" }}>
        <Card style={{ backgroundColor: "#f6f6f6" }}>
          <CardContent>
            <Grid
              alignItems="center"
              container
              spacing={2}
              justifyContent="space-between"
            >
              <Grid item lg={4} xs={12}>
                <Typography gutterBottom variant="h5" component="div" style={{ fontSize: "3.5rem" , color: "#8b2636"}} >
                  <strong>Reuniones</strong>
                </Typography>
              </Grid>
              <Grid item lg={12} xs={12}>
                <Grid
                  alignItems="center"
                  container
                  spacing={2}
                  justifyContent="space-between"
                >
                  {reuniones.map((reunion, index) => (
                    <Grid item lg={4} xs={12} key={index}>
                      <Reuniones
                        titulo={reunion.tiulo}
                        imgPath={reunion.imgPath}
                        descripcion={reunion.descripcion}
                        linkConexionMeet={reunion.linkConexionMeet}
                        linkConexionYoutube={reunion.linkConexionYoutube}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <Fixed />
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Grid container spacing={2} justifyContent="space-between">
              <Grid item lg={6} xs={12}>
                <Typography gutterBottom variant="h5" component="div">
                  Contacto
                </Typography>
              </Grid>
              <Grid container spacing={2} justifyContent="center" style={{ marginTop: '2rem' }}>
                <Contacto />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default App;
