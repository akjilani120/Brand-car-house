import React from 'react';
import {  Outlet } from 'react-router-dom';
import CustomLink from '../../Hooks/CustomLink';
import './CatHead.css'
const CatHead = () => {
    return (
        <div className='categorious-head py-5'>       
          
            <div className='d-flex justify-content-center align-items-center'>
                <p className='line-order cate-line'></p>
                <h5 className='text-warning font-bold cate-list'>
                    <span  className='cate-items mx-2' ><CustomLink to="/">Lamborghini</CustomLink></span>
                     <span  className='cate-items mx-2' > <CustomLink to="/bugatti">Bugatti</CustomLink></span>
                      <span className='cate-items mx-2'  ><CustomLink to="/bmw">BMW</CustomLink></span>
                     </h5>
                <p className='line-order cate-line'></p>
            </div>
            <div className='mt-3 px-3 '>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default CatHead;