import * as React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Imagen1 from "./img/8530163.jpg";
import Imagen2 from "./img/8505980.jpg";

const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath: Imagen1
  },
  {
    label: 'Bird',
    imgPath:Imagen2
  },
  {
    label: 'Bali, Indonesia',
    imgPath:Imagen1
  },
  {
    label: 'Goč, Serbia',
    imgPath:Imagen2
  },
];


const CarouselActividades: React.FunctionComponent = () => {
  return (
    <Carousel
      axis="horizontal"
      showStatus={false}
      showThumbs={false}
      transitionTime={500}
      autoPlay={true}
      infiniteLoop={true}
      interval={2000}
    >
      {images.map((step, index) => (
        <div key={step.label} style={{ width: '100%',display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src={step.imgPath} style={{ width: '100%', height: 'auto', objectFit: 'contain'}} />
        </div>
      ))}
    </Carousel>
  )
}

export default CarouselActividades;
