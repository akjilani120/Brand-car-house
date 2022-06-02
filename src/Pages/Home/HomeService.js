import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckFast,  faDollyBox , faHeadset, faCreditCard } from '@fortawesome/free-solid-svg-icons';

const HomeService = () => {
    return (
        <div className='home-service-main py-5'>
            <div className='container'>
                
                    <div className='row'>
                    <div className='col-lg-3 col-6'>
                        <div  className='service-item p-3'>
                            <p className='service-icon-head'> <span className='service-number' >01</span> <FontAwesomeIcon className='service-icon' icon={faTruckFast} /> </p>
                            <h4>Free Shipping <span className='text-warning '>.</span> </h4>
                            <p  className='service-details'>Free world wide shipping on all area order</p>
                            <p className='service-details'>about $ 100</p>
                        </div>
                    </div>
                    <div className='col-lg-3 col-6 mb-3'>
                        <div  className='service-item p-3'>
                            <p className='service-icon-head'> <span className='service-number' >02</span> <FontAwesomeIcon className='service-icon' icon={faDollyBox } /> </p>
                            
                            <h4>7 Days Easy Returns <span className='text-warning '>.</span> </h4>
                            <p  className='service-details'>Product Any fault with in 7 days for an</p>
                            <p className='service-details'>to 7 days week</p>
                        </div>
                    </div>
                    <div className='col-lg-3 col-6'>
                        <div  className='service-item p-3'>
                            <p className='service-icon-head'> <span className='service-number' >03</span> <FontAwesomeIcon className='service-icon' icon={ faHeadset } /> </p>
                            <h4>24/7 Friendly support  </h4>
                            <p  className='service-details'>Our support team always ready for you</p>
                            <p className='service-details'>to 7 days week</p>
                        </div>
                    </div>
                    <div className='col-lg-3 col-6'>
                        <div  className='service-item p-3'>
                            <p className='service-icon-head'> <span className='service-number' >04</span> <FontAwesomeIcon className='service-icon' icon={faCreditCard} /> </p>
                            <h4>Payment Secure<span className='text-warning '>.</span> </h4>
                            <p  className='service-details'>We ensure 100% secure your payment with online</p>
                            <p className='service-details'>Payment</p>
                        </div>
                    </div>
                </div>
               
                
            </div>
        </div>
    );
};

export default HomeService;