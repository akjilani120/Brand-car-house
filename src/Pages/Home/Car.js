import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Car = ({car}) => {
    const {img , name, company , Condition} = car
    return (
        <Col className='my-3 card-col'>
      <div  className='d-flex justify-content-center mx-2 car-items-head ' >
        <div className='car-about'>
         <p>Car Name : {name}</p>
         <ul>
          <li>Company Name : {company}</li>
          <li>Car Conditon : {Condition}</li>
         </ul>
         <button className='show-all'>Shop All</button>
        </div>
        <div className='car-img'>
          <img className='w-100 rounded' src={img} />
        </div>
      </div>
    </Col>
    );
};

export default Car;