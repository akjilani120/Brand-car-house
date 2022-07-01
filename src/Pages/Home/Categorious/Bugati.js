import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import BugattisCar from './BugattisCar';

const Bugati = () => {
    const [bugatis , setBugatis] = useState([])
    useEffect(() =>{
        fetch("http://localhost:5000/bugatti")
        .then( res => res.json())
        .then(data => setBugatis(data))
    } ,[bugatis])
    return (
        <div className='px-5'>
        <Row xs={2} md={3} lg={4} className="g-4">
          {
              bugatis.map( bugatti => <BugattisCar bugatti ={bugatti} key={bugatti._id}></BugattisCar> )
          }
        </Row>
    </div>
    );
};

export default Bugati;