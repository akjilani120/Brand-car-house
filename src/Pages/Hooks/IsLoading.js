import React from 'react';
import {Rings } from  'react-loader-spinner'
const IsLoading = () => {
    return (
        <div className='d-flex justify-content-center align-items-center' style={{height:"100vh"}}>
            <div className="">
            <Rings color="#00BFFF" height={100} width={100} />
            </div>
        </div>
    );
};

export default IsLoading;