import React from 'react';

const LooksCar = () => {
    return (
        <div className='d-flex my-2'>
            <div className='lookCar-items me-2'>
                <img className='' src='https://i.pinimg.com/originals/8f/95/6f/8f956f7ad2ff32b2a95bf26f5acbb789.jpg' alt='addvities photos'></img>
                <div className='looks-car-abus'>
                    <h3>Parado Z10 Supper Offer</h3>
                    <h4 className='offer-btn'>Sale up to <span className='text-warning'>30%</span>  Off</h4>
                </div>
            </div>
            <div className='lookCar-items'>
                <img className='' src='https://stimg.cardekho.com/images/carexteriorimages/930x620/Toyota/Toyota-Land-Cruiser-Prado/6322/front-left-side-47.jpg' alt='addvities photos'></img>
                <div className='looks-car-abus'>
                    <h3>Parado X10 Supper Offer</h3>
                    <h4 className='offer-btn'>Sale up to <span className='text-warning'>40%</span> Off</h4>
                </div>
            </div>
        </div>
    );
};

export default LooksCar;