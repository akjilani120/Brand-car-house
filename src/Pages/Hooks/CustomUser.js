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
            "content-type" :"application/json",
            "authorization": `Bearer ${localStorage.getItem("accessToken")}`
        },
        body : JSON.stringify(currentEmail)
     })
     .then(res => res.json())
     .then(data => {
        console.log(data)
        const accessToken = data?.token
       console.log(accessToken)
        if(accessToken){
           
            localStorage.setItem("accessToken" , accessToken)            
        }
        setAddUser(data)
    })
     
   }   

    return [addUser]
};

export default CustomUser;