import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,  faMessage } from '@fortawesome/free-solid-svg-icons';
import './Blog.css'
import bg from '../image/Blog/hero2.png'
const Blog = () => {
    return (
       <div>
         <section className='header-sec'>
         <div className='blog-main' style={{ 
            backgroundImage: `url(${bg})` 
          }}>
            <h1 className='blog-title'> Blog</h1>
        </div>
         </section>
         <section>
            <div className="blog-body-part">
                <div className="container">
                    <div className="row py-5">
                        <div className="col-lg-8">
                            <div className="blog card">
                                <img className='card-img' src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2Fyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                                <div className="card-body">
                                <h2>Car part for new 35-store office</h2>
                                <p>A car is a wheeled motor vehicle that is used for transportation. Most definitions of cars say that they run primarily on roads, seat one to eight people, have four wheels, and mainly transport people instead of</p>
                                <p className='icon-pera'><span className='blog-first-icon m'><FontAwesomeIcon className='blog-icon  me-2' icon={faUser } />Travel , Lifestyle </span> <span className='ms-3'><FontAwesomeIcon className='blog-icon me-2' icon={faMessage } /> 3 comments </span></p>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-4">

                        </div>
                    </div>
                   
                </div>
            </div>
         </section>
       </div>
    );
};

export default Blog;