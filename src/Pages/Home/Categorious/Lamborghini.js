import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import LamborCar from './LamborCar';


const Lamborghini = () => {
    const [lamborghinis, setLamborghinis] = useState([])
    useEffect(() => {
        fetch("https://powerful-falls-58401.herokuapp.com/lamborghini")
            .then(res => res.json())
            .then(data => setLamborghinis(data))
    }, [lamborghinis])
    return (
        <div className='px-5'>
            <Row xs={2} md={3} lg={4} className="g-4">
              {
                  lamborghinis.map( lam => <LamborCar lam={lam} key={lam._id}></LamborCar>)
              }
            </Row>
        </div>
    );
};

export default Lamborghini;