import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar , faMessage , faFileLines , faBusinessTime , faEnvelope , faInbox , faProjectDiagram , faWifi , faUserLock , faAtlas, faBreadSlice , faCheckCircle} from '@fortawesome/free-solid-svg-icons'
import './MainDashboard.css'
import { Link, Outlet } from 'react-router-dom';
const Dhashboard = () => {
    return (
        <div className='main-dashboard'>
            <div className=''>
            
            <div className=''>
                    <Outlet/>
            </div>
        </div>
        </div>
    );
};

export default Dhashboard;