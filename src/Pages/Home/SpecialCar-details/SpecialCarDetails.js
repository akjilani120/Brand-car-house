import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query'
import IsLoading from '../../Hooks/IsLoading';
import ReactImageMagnify from 'react-image-magnify';
import './SpecialCar-details.css'
const SpecialCarDetails = () => {
    const { id } = useParams()
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

    const {img , brand} = data
    console.log(data)
    return (
        <div className='Special-single'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-7 col-md-7 p-3'>
                        <div className='product-img'>
                            <ReactImageMagnify {...{
                                smallImage: {
                                    alt: 'Wristwatch by Ted Baker London',
                                    isFluidWidth: true,
                                    src:img
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
                            
                        </div>
                    </div>
                    <div className='col-lg-5 col-md-5'></div>
                    <div className='col-12'></div>
                </div>
            </div>

        </div>
    );
};

export default SpecialCarDetails;