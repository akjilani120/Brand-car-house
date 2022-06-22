import React from 'react';
const SpecialCarSub = ({ car, hanldeDetails }) => {

    const {img, model, price, description, brand,  _id} = car
    return (
            <div className=' d-flex  mx-auto '>
                 <div className='spe-items'>
                    <img src={img} />
                 <div className='spe-items-body'>
                    <div className='d-flex justify-content-between'>
                    <h4>Car Name : {model}</h4>
                    <p className='spe-price'>Price : $ {price}</p>
                    </div>
                    <h5>Brand Name : {brand}</h5>
                    <p><b>Short Discription</b> : {description.slice(0, 120)}</p>
                    <div className=''><button onClick={()=>hanldeDetails(_id)} className='spe-details-btn btn btn-warning'>about Details</button></div>
                 </div>
                </div>
               
           </div>
       
    );
};

export default SpecialCarSub;