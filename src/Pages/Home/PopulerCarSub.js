import React from 'react';
import { Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const PopulerCarSub = ({car}) => {
    const navigate = useNavigate()
    const {model ,brand , Condition , price , img , _id} = car
    const handleCarDetails =(id) =>{
        navigate(`/popularCarDetails/${id}`)
    }
    return (
        <Col className='my-3 card-col'>
        <div className='d-flex justify-content-center car-items-head ' >
            <div className='car-about'>
                <h6>Car Name : {model}</h6>
                <ul>
                    <li className='mb-1'>Company Name : {brand}</li>
                    <li className='mb-1'>Car Conditon :{Condition}</li>
                    <li className='mb-1'>Price : $ {price}</li>
                </ul>
                <button  onClick={() =>handleCarDetails(_id)}  className='show-all px-3 '>Buy Now</button>
            </div>
            <div className='car-img'>
                <img className='w-100 rounded' src={img} />
            </div>
        </div>
    </Col>
    );
};

export default PopulerCarSub;