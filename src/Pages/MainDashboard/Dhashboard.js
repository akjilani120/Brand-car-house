import React from 'react';
import './Dhashboard.css'
import { Link, Outlet } from 'react-router-dom';
const Dhashboard = () => {
    return (
        <div className='dashboard-header d-lg-flex'>
            <div className='navbar-side'> 
               <div>
                  <p>Menu</p>
                  <ul>
                    <p>Dashboard</p>
                    <li><Link className='dash-item' to="/mainDashboard">Ecommerce</Link></li>
                    <li>Sass</li>
                    <li>Crypto </li>
                  </ul>                
                  
               </div>
            </div>
            <div className='show-dashboard'>
                    <Outlet/>
            </div>
        </div>
    );
};

export default Dhashboard;