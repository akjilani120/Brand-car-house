import {  toast } from 'react-toastify';
import { signOut } from 'firebase/auth';
import React from 'react';
import auth from '../../firebase.init';

const AdminRow = ({user , index , refetch}) => {
  const {email ,  role} = user;
  const handleAdmin =() =>{
    const url = `https://powerful-falls-58401.herokuapp.com/user/admin/${email}`;
    fetch(url , {
        method:"PUT",
        headers:{
            "authorization": `Bearer ${localStorage.getItem("accessToken")}`
        }
    })
    .then(res => {
        if (res.status === 401 || res.status === 403) {
            alert("Fobidden Access. Please Login then come back this page")
            // signOut(auth)
            // localStorage.removeItem("accessToken")
        }
        return res.json()
    })
    .then(data => {
        if(data.modifiedCount > 0){
            refetch()    
            toast("Successfully  made an admin")
           }
    })
  }
    return (
        <tr className=''>
            <th scope="row">{index+ 1}</th>
            <td>{email}</td>
            <td>{ role !=="admin" &&
                <button onClick={ handleAdmin} className='btn btn-warning text-white'> Admin</button>
                }</td>
            
        </tr>

    );
};

export default AdminRow;