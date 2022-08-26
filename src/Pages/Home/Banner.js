import React from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { Carousel } from 'react-bootstrap';
import banner1 from '../image/banner/banner-1.1.jpg'
import banner2 from '../image/banner/banner-1.jpg'
import banner3 from '../image/banner/banner-2.jpg'
import slide from '../image/banner/zoom-banner-2.jpg'
import slide2 from '../image/banner/zoome-banner-3.jpg'
import slide3 from '../image/banner/royel-royse.jpg'

const Banner = () => {
  const images = [slide, slide2, slide3];

  const zoomOutProperties = {
    duration: 2000,
    transitionDuration: 500,
    infinite: true,
    indicators: false,
    scale: 0.4,
    arrows: false
  };

  return (
    <div className='banner-header'>
      <div className='row'>
        <div className='col-lg-3 d-none d-lg-block '>
          <div className='row'>
            <img className='w-100 half-img mb-4' src={banner1} alt='banner-img' />
          </div>
          <div className='row'>
            <img className='w-100 half-img' src={banner2} alt='banner-img' />
          </div>
        </div>
        <div className='col-lg-3 d-none d-lg-block '>
          <img className='w-100  full-height' src={banner3} alt='banner-img' />
        </div>
        <div className='col-lg-6'>         
          <div className="slide-container">
            <Zoom className="zoom-img" {...zoomOutProperties}>
              {images.map((each, index) => (
                <img className='w-100  full-height' key={index}  src={each} />
              ))}
            </Zoom>
          </div>
        </div>
      </div>

    </div>



  );
};

export default Banner;