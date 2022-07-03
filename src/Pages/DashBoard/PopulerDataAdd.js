import React from 'react';
import {  toast } from 'react-toastify';
const PopulerDataAdd = () => {
   
    const handlePopulerData =(event) =>{
        event.preventDefault()        
        const img = event.target.image.value
        const model = event.target.model.value
        const brand = event.target.brand.value
        const condition = event.target.condtion.value
        const price = event.target.price.value
        const classtype = event.target.classtype.value
        const bodystyle = event.target.bodystyle.value
        const carLength = event.target.length.value
        const carWidth = event.target.width.value
        const carHeight = event.target.height.value
        const description = event.target.description.value
       
       const populerCar ={
        img ,
        model ,
        brand ,
        Condition : condition ,
        price ,
        classtype ,
        bodystyle, 
        length : carLength,
         width : carWidth,
        height: carHeight,
        description
       }
       fetch('http://localhost:5000/populerCar' , {
        method:"POST", 
        headers:{
            "content-type" : "application/json",
          
        },
        body : JSON.stringify(populerCar)

       })
       .then(res => res.json())
       .then(data  => {
        toast("Populer Categorious car Data Add")
        
       })
    }
    return (
        <div className='sign-header' >
            <div className='sign-overflow d-flex justify-content-center align-items-center'>
                <div className='sign-model populer-car-add'>
                    <h3 className='text-center signUp-title  mb-5'>Populer Categorious Car Data Add </h3>
                    <div className='form-head'>
                        <form onSubmit={handlePopulerData} >                         
                            
                           <div className='input-items '>                            
                           <input type="text"   placeholder='Image Link' name='image' required />                          
                           </div>

                              <div className='input-items '>                                
                              <input type="text" placeholder='Model' name='model' required />                          
                             
                              </div>
                              <div className='input-items '>                                
                              <input type="text" placeholder='Brand' name='brand' required />                          
                             
                              </div>
                              <div className='input-items '>                                
                              <input type="text" placeholder='Condtion' name='condtion' required />                             
                             
                              </div>
                              <div className='input-items '>                                
                              <input type="text" placeholder='Price' name='price' required />                             
                             
                              </div>
                              <div className='input-items '>                                
                              <input type="text" placeholder='Class type' name='classtype' required />                             
                             
                              </div>
                              <div className='input-items '>                                
                              <input type="text" placeholder='Body Style' name='bodystyle' required />                             
                             
                              </div>
                              <div className='input-items '>                                
                              <input type="text" placeholder='Length' name='length' required />                             
                             
                              </div>
                              <div className='input-items '>                                
                              <input type="text" placeholder='Width' name='width' required />                             
                             
                              </div>
                              <div className='input-items '>                                
                              <input type="text" placeholder='Height' name='height' required />                             
                             
                              </div>
                              <div className='input-items '>                                
                              <input type="text" placeholder='Description' name='description' required />                             
                             
                              </div>
                              
                            <input className='btn btn-warning px-5 py-2 text-white fw-bold mb-4 mt-4 submit-btn' type="submit" value="Submit" />
                        </form>
                    </div>
                   
                    
                </div>
            </div>
           
        </div>
    );
};

export default PopulerDataAdd;