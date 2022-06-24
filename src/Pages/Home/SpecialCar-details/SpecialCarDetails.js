import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query'
import IsLoading from '../../Hooks/IsLoading';
import ReactImageMagnify from 'react-image-magnify';
import './SpecialCar-details.css'
const SpecialCarDetails = () => {
    const { id } = useParams()
    const  valueRef = useRef()
    const [add , setAdd] = useState(1)
    const url = `http://localhost:5000/specialCar/${id}`
    const { isLoading, error, data, refetch } = useQuery('aboutCar', () =>
        fetch(url)
            .then(res => res.json()
            )

    )
    if (isLoading) {
        return <IsLoading></IsLoading>
    }
    let showError;
    if (error) {
        showError = error
    }

    const { img, brand, model , description, topSpeed , production ,  bodyStyle, length , width , height, price  } = data
    const handleIcrement =() =>{
        setAdd( add + 1)
    }
    const handleLow =() =>{
        setAdd( add - 1)
    }
    return (
        <div className='Special-single'>
            <div className='container'>
                <div className='row p-3 mt-3'>
                    <div className='col-lg-6 col-md-6 '>
                        <div className='product-img'>
                            <ReactImageMagnify className='magnifi-img' {...{
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
                               
                                 <button disabled={add <= 1} onClick={handleLow} className=' btn btn-primary  count-btn'> - </button>   <input className='count-number' type="text" value={add} ></input>  <button disabled={add > 2} className=' btn btn-primary count-btn  '  onClick={handleIcrement} > + </button> 
                               
                            </div>
                            <div className='price-container '>
                                <p className=' add-price'> $ {price}</p>
                                <p className=' px-4 add-cart text-white ' >Add To Cart</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6 '>
                        <div className='car-about w-100 py-2 '>                            

                            <div class="list-group   w-100 px-2  mb-3">
                               
                                <li  class="list-group-item list-group-item-action text-justify"><b>Car Name :</b> <span className='main-details'>{model}</span>  </li>
                                <li  class="list-group-item list-group-item-action text-justify"><b>Car Brand :</b> <span className='main-details'>{brand}</span>  </li>
                                <li  class="list-group-item list-group-item-action text-justify"><b>Description :</b> <span className='main-details'>{description}</span>   </li>
                                <li  class="list-group-item list-group-item-action text-justify"><b>Top Spreed :</b> <span className='main-details'>{topSpeed}</span>  </li>
                                <li  class="list-group-item list-group-item-action text-justify"><b>Production :</b> <span className='main-details'>{production}</span>  </li>
                                <li  class="list-group-item list-group-item-action text-justify"><b>Body style :</b> <span className='main-details'>{bodyStyle}</span>   </li>
                                <li  class="list-group-item list-group-item-action text-justify"><b> Length :</b> <span className='main-details'>{length}</span>  </li>
                                <li  class="list-group-item list-group-item-action text-justify"><b>width :</b> <span className='main-details'>{width}</span>  </li>
                                <li  class="list-group-item list-group-item-action text-justify"><b>Height :</b> <span className='main-details'>{height}</span>  </li>
                               
                               
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>

        </div>
    );
};

export default SpecialCarDetails;