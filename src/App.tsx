import * as React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://imagenesdepaisajes.org/wp-content/uploads/2016/07/imagenes-grandes-de-paisajes-monta%C3%B1as.jpg',
  },
];


const App: React.FunctionComponent = () => {
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
        <div key={step.label} style={{ width: '100%', height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src={step.imgPath} style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
        </div>
      ))}
    </Carousel>
  )
}

export default App;
