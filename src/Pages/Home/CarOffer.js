import React from 'react';
import Countdown from 'react-countdown';
import './CarOffer.css'
import bg from '../image/roll-logo.jpg'
const CarOffer = () => {

    return (
        <div  className='offer-header'>
            <div className='d-flex justify-content-center pt-5 pb-4 align-items-center'>
                <p className='line-order'></p>
                <h1 className='text-warning font-bold offer-title'>Special Car Offer</h1>
                <p className='line-order'></p>
            </div>
             <div className='text-center'>
             <Countdown className='text-danger display-3' date={Date.now() + 100000000} />
             <h4 className='text-white mt-3'>This offer is for a limited time. Quickly buy your favorite car</h4>
             </div>
            <div className='container my-5'>
            <div className='d-flex '>
                <div className='offer-left' style={{ backgroundImage: `url(${bg})` }}>
                    <div className='offer-left-overflow text-center pt-5 px-3'>
                        <h3 className='text-warning'>Special Offer</h3>
                        <h1 className='text-white'>Rolls-Royse</h1>
                        <h2 className='text-warning'>Just Fast Select your car</h2>
                    </div>
                </div>
                <div className='offer-right'>
                    
                </div>
            </div>
            </div>
           
        </div>
    );
};

export default CarOffer;