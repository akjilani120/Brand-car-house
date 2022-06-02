import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import Car from './Car';
const PopulerCar = () => {
    const [cars, setCars] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/populerCar")
            .then(res => res.json())
            .then(data => setCars(data))
    }, [cars])
    return (
        <div className='populer-car mt-2 pb-5'>
           <div className='container'>
           <h1 className='my-5 text-uppercase'>-Populer Categorious</h1>
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    cars.map( car => <Car key={car.id} car={car}></Car>)
                }
            </Row>
           </div>
        </div>
    );
};

export default PopulerCar;