import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import specialBg from '../image/spcial-bg/specialbg.jpg'
import './specialCar.css'
import SpecialCarSub from './SpecialCarSub';
const SpecialCar = () => {
    const [cars, setCars] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        fetch("https://powerful-falls-58401.herokuapp.com/specialCar")
            .then(res => res.json())
            .then(data => setCars(data))
    }, [cars])
    
    return (
        <div className='spe-header' style={{ backgroundImage: `url(${specialBg})` }}>
            <div className='spe-overflow'>
                <div className='container'>
                    <div className='row spe-collection'>
                        <div className='col-12'>
                            <div className='spe-title text-white py-5 text-center'>
                                <h1>Update and Special Car collection</h1>
                                <p>Contact us if you want to get the best of all the cars from this company</p>
                            </div>
                        </div>
                        {
                        cars.map(car => <SpecialCarSub car={car} key={car._id} ></SpecialCarSub>)
                        }
                    </div>
                    
                </div>
            </div>

        </div>
    );
};

export default SpecialCar;