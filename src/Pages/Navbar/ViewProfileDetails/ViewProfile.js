import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const ViewProfile = () => {
    const [user] = useAuthState(auth)
   
    return (
        <div>
            <div>
                <h3>Profile</h3>

            </div>
            <hr></hr>
            <div className='profile-head-part'>
            <div className='profile-img'>
                <img src={user.reloadUserInfo.photoUrl} alt="Profile img"></img>
            </div>
            <div className='profile-about'>

                <p className=''>
                    <label>Full Name :</label> <br></br>
                    <span>{user.displayName}</span>
                </p>
                <p className=''>
                    <label>Email Address :</label> <br></br>
                    <span>{user.email}</span>
                </p>
            </div>
            </div>
        </div>
    );
};

export default ViewProfile;