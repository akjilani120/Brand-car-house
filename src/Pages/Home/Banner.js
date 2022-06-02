import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../image/banner/banner-1.1.jpg'
import banner2 from '../image/banner/banner-1.jpg'
import banner3 from '../image/banner/banner-2.jpg'
const Banner = () => {
  return (
    <div className='banner-header'>
      <div className='row'>
        <div className='col-lg-3'>
          <div className='row'>
            <img className='w-100 half-img mb-4'  src={banner1} alt='banner-img'/>
          </div>
          <div className='row'>
          <img  className='w-100 half-img'  src={banner2} alt='banner-img'/>
          </div>
        </div>
        <div className='col-lg-3'>
        <img className='w-100  full-height'  src={banner3  } alt='banner-img'/>
        </div>
        <div className='col-lg-6'>
          <Carousel fade>
            <Carousel.Item>
              <img
                className="d-block w-100 full-height"
                src="https://i.pinimg.com/564x/d5/5f/92/d55f9254d763bd7319a00e4eed808f10.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 full-height"
                src="https://www.esquireme.com/cloud/2021/09/09/bugatti-la-voiture-noire-car-design_dezeen_2364_hero-1.jpg"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 full-height"
                src="https://www.supercars.net/blog/wp-content/uploads/2022/01/lamborghini-aventador-lp-780-4-ultimae.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>

    </div>



  );
};

export default Banner;