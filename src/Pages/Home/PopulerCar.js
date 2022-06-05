import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Car from './Car';
const PopulerCar = () => {
   
    return (
        <div className='populer-car mt-2 pb-5'>
            <div className='container'>
                <h1 className='my-5 text-uppercase'>-Populer Categorious</h1>
                <Row xs={1} md={2} lg={3} className="g-4">
                    <Col className='my-3 card-col'>
                        <div className='d-flex justify-content-center mx-2 car-items-head ' >
                            <div className='car-about'>
                                <p>Car Name : Corolla Altis Hybrid</p>
                                <ul>
                                    <li>Company Name : TOYOTA</li>
                                    <li>Car Conditon : New</li>
                                </ul>
                                <button className='show-all'>More TOYOTA Car</button>
                            </div>
                            <div className='car-img'>
                                <img className='w-100 rounded' src="https://toyota.com.bd/media/images/altis_front.width-1920.png" />
                            </div>
                        </div>
                    </Col>
                    <Col className='my-3 card-col'>
                        <div className='d-flex justify-content-center mx-2 car-items-head ' >
                            <div className='car-about'>
                                <p>Car Name : Honda Motor Series j</p>
                                <ul>
                                    <li>Company Name : HONDA MOTOS</li>
                                    <li>Car Conditon : New </li>
                                </ul>
                                <button className='show-all'>More honda motos Car</button>
                            </div>
                            <div className='car-img'>
                                <img className='w-100 rounded' src="https://www.freepnglogos.com/uploads/honda-car-png/honda-car-upcoming-new-honda-cars-india-new-honda-3.png" />
                            </div>
                        </div>
                    </Col>
                    <Col className='my-3 card-col'>
                        <div className='d-flex justify-content-center mx-2 car-items-head ' >
                            <div className='car-about'>
                                <p>Car Name : VW polo Aries</p>
                                <ul>
                                    <li>Company Name : volkswagen</li>
                                    <li>Car Conditon : New</li>
                                </ul>
                                <button className='show-all'>More VOLKSWAGEN Car </button>
                            </div>
                            <div className='car-img'>
                                <img className='w-100 rounded' src="https://c8.alamy.com/comp/W17PN7/brussels-belgium-jan-2019-volkswagen-vw-polo-at-brussels-motor-show-sixth-generation-typ-aw-mqb-a0-platform-produced-by-volkswagen-group-W17PN7.jpg" />
                            </div>
                        </div>
                    </Col>
                    <Col className='my-3 card-col'>
                        <div className='d-flex justify-content-center mx-2 car-items-head ' >
                            <div className='car-about'>
                                <p>Car Name : Tata Businnes vertical series</p>
                                <ul>
                                    <li>Company Name : TATA</li>
                                    <li>Car Conditon : New</li>
                                </ul>
                                <button className='show-all'>More TATA Car</button>
                            </div>
                            <div className='car-img'>
                                <img className='w-100 rounded' src="https://www.tata.com/content/dam/tata/images/verticals/desktop/hexa_card_desktop_362x362.jpg" />
                            </div>
                        </div>
                    </Col>
                    <Col className='my-3 card-col'>
                        <div className='d-flex justify-content-center mx-2 car-items-head ' >
                            <div className='car-about'>
                                <p>Car Name : Mazda MAZDA6</p>
                                <ul>
                                    <li>Company Name : Mazda</li>
                                    <li>Car Conditon : New </li>
                                </ul>
                                <button className='show-all'>More MAZDA Car</button>
                            </div>
                            <div className='car-img'>
                                <img className='w-100 rounded' src="https://images.hgmsites.net/med/2021-mazda-mazda6-sport-auto-angular-front-exterior-view_100780481_m.jpg" />
                            </div>
                        </div>
                    </Col>
                    <Col className='my-3 card-col'>
                        <div className='d-flex justify-content-center mx-2 car-items-head ' >
                            <div className='car-about'>
                                <p>Car Name : JAC series j 2022</p>
                                <ul>
                                    <li>Company Name : JAC</li>
                                    <li>Car Conditon : New</li>
                                </ul>
                                <button className='show-all'>More JAC Car</button>
                            </div>
                            <div className='car-img'>
                                <img className='w-100 rounded' src="https://www.carmodelslist.com/wp-content/uploads/2017/01/JAC-S3-car-model.jpg" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default PopulerCar;