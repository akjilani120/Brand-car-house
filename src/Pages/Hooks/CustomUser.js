import React, { useEffect, useState } from 'react';

const CustomUser = (user) => {
    const [addUser , setAddUser] = useState("");
    const email = user?.user?.email;
    
   if(email){   
    const currentEmail = {
        email : email
    }
     fetch(`http://localhost:5000/user/${email}`,{
        method:"PUT",
        headers:{
            "content-type" :"application/json"
        },
        body : JSON.stringify(currentEmail)
     })
     .then(res => res.json())
     .then(data => {
        const accessToken = data?.token
       
        if(accessToken){
           
            localStorage.setItem("accessToken" , accessToken)            
        }
        setAddUser(data)
    })
     
   }   

    return [addUser]
};

export default CustomUser;