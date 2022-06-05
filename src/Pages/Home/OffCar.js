import React from 'react';
import { Card, Col } from 'react-bootstrap';

const OffCar = ({car}) => {
    const {img , model , mainPrice, offerPrice, percentance} = car
    return (
        <Col>
        <Card className='card-main'>
            <img className='card-img'  src={img} />
            <p  className=' percentance-head' > <span className='percentance p-2 '>{percentance}</span> </p>
            <Card.Body className='m-0 px-2'>
                <Card.Title> {model}</Card.Title>
                <Card.Text>
                    <div className='d-flex justify-content-between'>
                        <p> <span className='offer-price'> ${offerPrice}</span> <span className='main-price'> ${mainPrice}</span> </p>
                        <p><button className='buy-btn'>Buy </button></p>
                    </div>
                </Card.Text>
            </Card.Body>
        </Card>
    </Col>
    );
};

export default OffCar;