import React from 'react';
import './Home.css'
import bgimg from '../image/banner/royel-royse.jpg'
import { Form } from 'react-bootstrap';

const FindCar = () => {
    return (
        <div className='findcar-main mt-3' style={{ backgroundImage: `url(${bgimg})` }} >

            
                <div className='fincar-overflow'>
                    <h1 className='findcar-title '>Find  cars for your journey</h1>
                    <div className='container'>
                        <div className='row mt-5'>
                            <div className='col-12 text-center'>

                                <p>Please fill out the following options. Fill in the correct options </p>
                            </div>
                            <div className='col-lg-3 col-6 mb-4'>
                                <div>
                                    <Form.Select aria-label="Default select example">
                                        <option>Select Country</option>
                                        <option value="1">Bangladesh</option>
                                        <option value="2">India</option>
                                        <option value="3">Pakistan</option>
                                    </Form.Select>
                                </div>
                            </div>
                            <div className='col-lg-3 col-6 mb-4'>
                                <div>
                                    <Form.Select aria-label="Default select example ">
                                        <option>Select Car</option>
                                        <option value="1">BMW</option>
                                        <option value="2">Lamborghini</option>
                                        <option value="3">Vugati</option>
                                    </Form.Select>
                                </div>
                            </div>
                            <div className='col-lg-3 col-6'>
                                <div>
                                    <Form.Select aria-label="Default select example ">
                                        <option>Select your position</option>
                                        <option value="1">JOb</option>
                                        <option value="2">Study</option>
                                        <option value="3">Others</option>
                                    </Form.Select>
                                </div>
                            </div>
                            <div className='col-lg-3 col-6'>
                                <div>
                                    <Form.Select aria-label="Default select example">
                                        <option>Select your favourite car color</option>
                                        <option value="1">Black</option>
                                        <option value="2">Silver</option>
                                        <option value="3">Diamone</option>
                                    </Form.Select>
                                </div>
                            </div>
                            <div className='col-12 text-center'>
                                <button className='slide-btn mt-4'>Submit now</button>
                            </div>
                        </div>
                    </div>
                </div>
            
        </div>
    );
};

export default FindCar;