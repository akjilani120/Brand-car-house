import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';

import { useQuery } from 'react-query'
import IsLoading from '../Hooks/IsLoading';
import PopulerCarSub from './PopulerCarSub';
const PopulerCar = () => {
   
    const { isLoading, error, data} = useQuery('populerCar', () =>
        fetch("http://localhost:5000/populerCar", {
            method: "GET",
            
        })
            .then(res => res.json()
            )

    )
    if (isLoading) {
        return <IsLoading></IsLoading>
    }
    let showError;
    if (error) {
        showError = error
    }


    return (
        <div className='populer-car mt-2 pb-5'>
            <div className='container'>
                <h1 className='my-5 text-uppercase'>-Populer Categorious</h1>
                <Row xs={1} md={2} lg={2} className="g-4">
                    {
                        data.map(car => <PopulerCarSub car={car} key={car._id}></PopulerCarSub>)
                    }
                    
                </Row>
                <h1>{ showError}</h1>
            </div>
        </div>
    );
};

export default PopulerCar;