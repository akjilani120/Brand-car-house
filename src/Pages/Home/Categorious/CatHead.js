import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './CatHead.css'
const CatHead = () => {
    return (
        <div className='categorious-head'>
            <h>I am categorious</h>
            <di><Link to="/home">Lamborghini</Link> <Link to="/home/bmw">BMW</Link> <Link to="/home/bugati">Lamborghini</Link>  </di>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default CatHead;