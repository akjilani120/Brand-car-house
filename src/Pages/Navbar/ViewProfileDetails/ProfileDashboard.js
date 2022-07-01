import React from 'react';
import {  Outlet, Link  } from 'react-router-dom';
import CustomProfileLink from '../../Hooks/CustomProfileLink';
import './ViewProfileDetails.css'
const ProfileDashboard = () => {
    return (
        <div>
            <div className='container'>
                <div className='profileHead'>
                    <div className='row'>
                        <div className='col-lg-3  col-md-4 col-4'>
                            <div className='profile-item-list'>                             
                             <div>
                                <ul className='profile-orderlist'>
                                    <li > <CustomProfileLink className="profile-link" to="/profileDashboard">Profile</CustomProfileLink></li>
                                    <li > <CustomProfileLink className="profile-link" to="/profileDashboard/address">Address</CustomProfileLink></li>
                                    <li > <CustomProfileLink className="profile-link" to="/profileDashboard/updateProfile">Update Profile</CustomProfileLink></li>
                                    <li > <CustomProfileLink className="profile-link" to="/profileDashboard/orderHistory">Order History</CustomProfileLink></li>
                                </ul>
                             </div>
                            </div>
                        </div>
                        <div className='col-lg-8  col-md-8 col-8'>
                            <div className='profile-dashboard'>
                            <Outlet></Outlet>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileDashboard;