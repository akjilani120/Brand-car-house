import React, { useEffect, useState } from 'react';

const CustomUser = (user) => {
   
    const [addUser , setAddUser] = useState("");
    const email = user?.user?.email;
    

   if(email){   
    
     fetch(`https://powerful-falls-58401.herokuapp.com/user/${email}`,{
        method:"PUT",
        headers:{
            "content-type" :"application/json"
           
        },
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