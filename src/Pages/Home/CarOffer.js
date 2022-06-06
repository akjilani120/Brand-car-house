import React, { useEffect, useState } from 'react';
import Countdown from 'react-countdown';
import './CarOffer.css'
import bg from '../image/roll-logo.jpg'
import { Row } from 'react-bootstrap';
import OffCar from './OffCar';
const CarOffer = () => {
    const [cars , setCars] = useState([])
    useEffect(() =>{
        fetch("https://powerful-falls-58401.herokuapp.com/offerCar")
        .then(res => res.json())
        .then(data => setCars(data))
    } ,[cars])
    return (
        <div className='offer-header mb-2'>
            <div className='d-flex justify-content-center pt-5 pb-4 align-items-center'>
                <p className='line-order'></p>
                <h1 className='text-warning font-bold offer-title'>Special Car Offer</h1>
                <p className='line-order'></p>
            </div>
            <div className='text-center'>
                <Countdown className='text-danger display-3' date={Date.now() + 100000000} />
                <h4 className='text-white mt-3'>This offer is for a limited time. Quickly buy your favorite car</h4>
            </div>
            <div className=' my-5'>
                <div className='d-flex '>
                    <div className='offer-left d-none d-lg-block' style={{ backgroundImage: `url(${bg})` }}>
                        <div className='offer-left-overflow text-center pt-5 px-3'>
                            <h3 className='text-warning'>Special Offer</h3>
                            <h1 className='text-white'>Rolls-Royse</h1>
                            <h2 className='text-warning'>Just Fast Select your car</h2>
                        </div>
                    </div>
                    <div className='offer-right text-center '>
                        <Row xs={1} md={2} lg={3} className="g-4">
                            {
                             cars.map(car => <OffCar car ={car} key={car._id}></OffCar>)
                            }
                        </Row>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CarOffer;