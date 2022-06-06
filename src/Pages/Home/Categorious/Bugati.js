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
        <Row xs={1} md={2} lg={3} className="g-4">
          {
              bugatis.map( bugatti => <BugattisCar bugatti ={bugatti} key={bugatti._id}></BugattisCar> )
          }
        </Row>
    </div>
    );
};

export default Bugati;