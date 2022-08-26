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
          {/* <Carousel fade>
            <Carousel.Item>
              <img
                className="d-block w-100 full-height"
                src="https://i.pinimg.com/564x/d5/5f/92/d55f9254d763bd7319a00e4eed808f10.jpg"
                alt="First slide"
              />
              <Carousel.Caption className='carousel-caption-item'>
                <button className='slide-btn'>Shop Now</button>
                <h3>Black Lamborghini</h3>
                <p>This is looking awesome.This body color is black</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 full-height"
                src="https://www.esquireme.com/cloud/2021/09/09/bugatti-la-voiture-noire-car-design_dezeen_2364_hero-1.jpg"
                alt="Second slide"
              />

              <Carousel.Caption className='carousel-caption-item'>
                <button className='slide-btn'>Shop Now</button>
                <h3>Black Vugati</h3>
                <p>This is looking beautifully.This body color is black</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 full-height"
                src="https://www.supercars.net/blog/wp-content/uploads/2022/01/lamborghini-aventador-lp-780-4-ultimae.jpg"
                alt="Third slide"
              />

              <Carousel.Caption className='carousel-caption-item'>
                <button className='slide-btn'>Shop Now</button>
                <h3>Silver Lamborghini</h3>
                <p>This is looking good.This body is is silver</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel> */}
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