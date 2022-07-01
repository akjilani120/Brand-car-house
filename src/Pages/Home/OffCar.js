import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const OffCar = ({car}) => {
    const navigate = useNavigate()
    const {img , model , mainPrice, offerPrice, percentance, _id} = car
    
    const handleNavigate = (id) =>{
        navigate(`/offerCarDetails/${id}`)
    }
    return (
        <Col className='px-lg-2  px-md-2 px-5'>
        <Card className='card-main '>
            <img className='card-img'  src={img} />
            <p  className=' percentance-head' > <span className='percentance p-2 '>{percentance}</span> </p>
            <Card.Body className='m-0 px-2'>
                <Card.Title> {model}</Card.Title>
                <Card.Text>
                    <div className='d-flex justify-content-between'>
                        <p> <span className='offer-price'> ${offerPrice}</span> <span className='main-price'> ${mainPrice}</span> </p>
                        <p><button onClick={() => handleNavigate(_id)} className='buy-btn'>Buy </button></p>
                    </div>
                </Card.Text>
            </Card.Body>
        </Card>
    </Col>
    );
};

export default OffCar;