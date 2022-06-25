import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const LamborCar = ({lam}) => {
    const navigate = useNavigate()
    const {img , model , price, _id} = lam
    const handleNavigate =(id) =>{
        navigate(`/lamborghiniCarDetails/${id}`)
    }
    return (
        <Col className=''>
        <Card className='lam-card'>
            <Card.Img  className='lam-img' src={img} />
            <Card.Body>
                <Card.Title>Car Name : {model} </Card.Title>
                <Card.Text >
                  <div className=''>
                  <div className='d-flex justify-content-between align-items-center '>
                        <p> <span className='offer-price'> Price : ${price}</span>  </p>
                        <p><button onClick={()=> handleNavigate(_id)} className='buy-btn'>Buy </button></p>
                    </div>
                  </div>
                </Card.Text>
            </Card.Body>
        </Card>
    </Col>
    );
};

export default LamborCar;