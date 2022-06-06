
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import BmwCar from './BmwCar';
const Bmw = () => {
    const [bmws , setBmws] = useState([])
    useEffect(() =>{
        fetch("http://localhost:5000/bmw")
        .then( res => res.json())
        .then(data => setBmws(data))
    } ,[bmws])
    return (
        <div className='px-5'>
        <Row xs={1} md={2} lg={3} className="g-4">
          {
              bmws.map( bmw => <BmwCar bmw ={bmw} key={bmw._id}></BmwCar> )
          }
        </Row>
    </div>
    );
};

export default Bmw;