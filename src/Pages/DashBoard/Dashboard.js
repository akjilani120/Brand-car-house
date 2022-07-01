import React from 'react';
import { Link ,Outlet } from 'react-router-dom';
import CustomProfileLink from '../Hooks/CustomProfileLink';
import './Dashboard.css'
const Dashboard = () => {
    return (
        <div>
            
            <div className="dashboard-main">
                <div className="dashboard-nav">
                  <ul>
                    <li><CustomProfileLink className="dashboard-custom" to="/dashboard">  <span className='text-white'>Admin </span>  </CustomProfileLink></li>
                    <li><CustomProfileLink className="dashboard-custom" to="/dashboard/populer"> <span className='text-white'> Populer Car Data</span> </CustomProfileLink></li>
                  </ul>
                  
                    
                 
                </div>
                <div className="dashboard-display">
                <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;