import React from 'react';
import  { useEffect, useRef, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useQuery } from 'react-query'
import ReactImageMagnify from 'react-image-magnify';
import { useAuthState } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
import IsLoading from '../../Hooks/IsLoading';
import auth from '../../../firebase.init';
const PopularCarDetails = () => {
    const { id } = useParams()
    const valueRef = useRef()
    const navigate = useNavigate()
    const [user] = useAuthState(auth)
    const [add, setAdd] = useState(1)
    const url = `http://localhost:5000/populerCar/${id}`
    const { isLoading, error, data, refetch } = useQuery('populer', () =>
        fetch(url)
            .then(res => res.json()
            )

    )
    
   
    const handleAddCart =() =>{
       if(!user){
        navigate("/login")
       }else{
        const email = user.email
        const  product = data.model
        const totalPrice = parseInt(data.price) * add
        const productImg = data.img
        const totalProduct ={
            email,
            product,
            productImg,
            totalPrice
        }
        fetch('http://localhost:5000/orders',{
        method:"POST",
        headers:{
            "content-type" : "application/json"
        },
        body : JSON.stringify(totalProduct)

        })
        .then(res => res.json())
        .then(data => {
            toast("Your Order Success")
        })
       }
    }
    if (isLoading) {
        return <IsLoading></IsLoading>
    }
    let showError;
    if (error) {
        showError = error    }

    
    const handleIcrement = () => {
        setAdd(add + 1)
    }
    const handleLow = () => {
        setAdd(add - 1)
    }
    const { img, brand, model, description, Condition , bodyStyle, length, width, height, price, name , comment , classType } = data
    const handleComment =() =>{        
        const name = user.displayName
        const comment = valueRef.current.value;
        const headComment ={
            name:name,
            comment : comment           
        }
        const url =`http://localhost:5000/populerCar/${id}`
        fetch(url , {
            method:"PUT",
            headers:{
                "content-type" : "application/json"
            },
           body : JSON.stringify(headComment)

        })
        .then(res => res.json())
        .then(data => {
            refetch()
        })}
    return (
        <div className='Special-single'>
        <div className='container'>                
            <div className='row p-3 mt-3'>
                <div className='col-lg-6 col-md-6 '>
                    <div className='product-img offer-magnifi-img-head'>
                        <ReactImageMagnify height="500px" className='magnifi-img' {...{
                            smallImage: {
                                alt: 'Wristwatch by Ted Baker London',
                                isFluidWidth: true,
                                src: img
                            },
                            largeImage: {
                                src: img,
                                width: 1200,
                                height: 1800
                            }
                        }} />
                        <div className='card w-25 card-car '>
                            <img className='w-100' src={img}></img>
                        </div>
                        <div className='my-3'>

                            <button disabled={add <= 1} onClick={handleLow} className=' btn btn-primary  count-btn'> - </button>   <input className='count-number' type="text" value={add} ></input>  <button disabled={add > 2} className=' btn btn-primary count-btn  ' onClick={handleIcrement} > + </button>

                        </div>
                        <div className='price-container '>
                            <p className=' add-price'> $ {price}</p>
                            <p onClick={handleAddCart} className='px-4 add-cart text-white' >Add To Cart</p>
                        </div>
                    </div>
                </div>
                <div className='col-lg-6 col-md-6 '>
                    <div className='signle-car-about w-100 py-2 '>

                        <div class="list-group   w-100 px-2  mb-3">

                            <li class="list-group-item list-group-item-action text-justify"><b>Car Name :</b> <span className='main-details'>{model}</span>  </li>
                            <li class="list-group-item list-group-item-action text-justify"><b>Car Brand :</b> <span className='main-details'>{brand}</span>  </li>
                            <li class="list-group-item list-group-item-action text-justify"><b>Description :</b> <span className='main-details'>{description}</span>   </li>
                            <li class="list-group-item list-group-item-action text-justify"><b>Car Class :</b> <span className='main-details'>{classType}</span>  </li>
                            <li class="list-group-item list-group-item-action text-justify"><b>Conditon :</b> <span className='main-details'>{Condition}</span>  </li>
                            <li class="list-group-item list-group-item-action text-justify"><b>Body style :</b> <span className='main-details'>{bodyStyle}</span>   </li>
                            <li class="list-group-item list-group-item-action text-justify"><b> Length :</b> <span className='main-details'>{length}</span>  </li>
                            <li class="list-group-item list-group-item-action text-justify"><b>width :</b> <span className='main-details'>{width}</span>  </li>
                            <li class="list-group-item list-group-item-action text-justify"><b>Height :</b> <span className='main-details'>{height}</span>  </li>


                        </div>
                    </div>
                </div>

                <div className='col-12 pt-4'>
                    <hr className=' mt-4'></hr>
                    <p className='lead'>Comment</p>
                    <hr></hr>
                    { (name || comment ) &&
                        <div className='comment-show mb-4 mt-4'>
                       <div className='border border-2 p-3'>
                       <p>User name : {name}</p>
                      
                      <p> {comment}</p>
                       </div>
                    </div>}
                    <div className='comment-header'>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label lead">Message</label>
                            <textarea ref={valueRef} class="form-control" id="exampleFormControlTextarea1" rows="4" placeholder='message'></textarea>
                            <button disabled={!user} onClick={handleComment}  className='btn btn-dark fw-bold px-5 py-2 mt-3'>Submit </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ToastContainer />
    </div>
    );
};

export default PopularCarDetails;