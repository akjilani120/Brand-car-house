import React from 'react';
import Countdown from 'react-countdown';
import './CarOffer.css'
const CarOffer = () => {

    return (
        <div  className='offer-header'>
            <div className='d-flex justify-content-center py-5 align-items-center'>
                <p className='line-order'></p>
                <h1 className='text-warning font-bold offer-title'>Special Car Offer</h1>
                <p className='line-order'></p>
            </div>
            <Countdown className='text-primary display-3' date={Date.now() + 100000000} />
            <h1> I am car offer</h1>
        </div>
    );
};

export default CarOffer;