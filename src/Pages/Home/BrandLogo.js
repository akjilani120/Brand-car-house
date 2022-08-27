import React from 'react';
import Slider from "react-slick";
import img1 from '../image/brand-logo/bentley-logo.png'
import img2 from '../image/brand-logo/bmw-logo.png'
import img3 from '../image/brand-logo/brand-1.png'
import img4 from '../image/brand-logo/brand-2.png'
import img5 from '../image/brand-logo/brand-3.png'
import img6 from '../image/brand-logo/brand-4.png'
import img7 from '../image/brand-logo/brand-5.png'
import img8 from '../image/brand-logo/brand-6.png'
import img9 from '../image/brand-logo/porsche-logo.png'
import img10 from '../image/brand-logo/corvette-logo.png'
import img11 from '../image/brand-logo/volkswagen-logo.png'
import img12 from '../image/brand-logo/ferrari-logo.png'
import img13 from '../image/brand-logo/ford-logo.png'
import img14 from '../image/brand-logo/jeep-logo.png'
import img15 from '../image/brand-logo/mercedes-benz-logo.png'
import img16 from '../image/brand-logo/mazda-logo.png'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const BrandLogo = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <div className='p-lg-5 p-3 brand-main my-2'>
                     <h1 className='text-warning text-center mt-2 mb-5'>Select Your Favourite Brand</h1>
             <Slider className='mb-4  px-3' {...settings}>
          <div>
            <img className='logo-slide-img' src={img1} alt="slide image" />
          </div>
          <div>
            <img className='logo-slide-img' src={img2} alt="slide image" />
          </div>
          <div>
            <img className='logo-slide-img' src={img3} alt="slide image" />
          </div>
          <div>
            <img className='logo-slide-img' src={img4} alt="slide image" />
          </div>
          <div>
            <img className='logo-slide-img' src={img5} alt="slide image" />
          </div>
          <div>
            <img className='logo-slide-img' src={img6} alt="slide image" />
          </div>
          <div>
            <img className='logo-slide-img' src={img7} alt="slide image" />
          </div>
          <div>
            <img className='logo-slide-img' src={img8} alt="slide image" />
          </div>
          <div>
            <img className='logo-slide-img' src={img9} alt="slide image" />
          </div>
          <div>
            <img className='logo-slide-img' src={img10} alt="slide image" />
          </div>
         
          <div>
            <img className='logo-slide-img' src={img11} alt="slide image" />
          </div>
          <div>
            <img className='logo-slide-img' src={img12} alt="slide image" />
          </div>
          <div>
            <img className='logo-slide-img' src={img13} alt="slide image" />
          </div>
          <div>
            <img className='logo-slide-img' src={img14} alt="slide image" />
          </div>
          <div>
            <img className='logo-slide-img' src={img15} alt="slide image" />
          </div>
          <div>
            <img className='logo-slide-img' src={img16} alt="slide image" />
          </div>
        </Slider>
        </div>
    );
};

export default BrandLogo;