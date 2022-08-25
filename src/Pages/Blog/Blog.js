import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMessage } from '@fortawesome/free-solid-svg-icons';
import './Blog.css'
import bg from '../image/Blog/hero2.png'
const Blog = () => {
    return (
        <div>
            <section className='header-sec'>
                <div className='blog-main' style={{
                    backgroundImage: `url(${bg})`
                }}>
                    <h1 className='blog-title'>Car Blogs</h1>
                </div>
            </section>
            <section>
                <div className="blog-body-part">
                    <div className="container">
                        <div className="row py-5">
                            <div className="col-lg-8 col-md-8">
                                <div className="blog card">
                                    <img className='w-100' src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2Fyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                                    <div className='blog-date'>
                                        <h4 className='text-white'>25 Jan</h4>
                                    </div>
                                    <div className="card-body">
                                        <h2>Car for new 35-store office</h2>
                                        <p>A car is a wheeled motor vehicle that is used for transportation. Most definitions of cars say that they run primarily on roads, seat one to eight people, have four wheels, and mainly transport people instead of</p>
                                        <p className='icon-pera'><span className='blog-first-icon m'><FontAwesomeIcon className='blog-icon  me-2' icon={faUser} />Travel , Lifestyle </span> <span className='ms-3'><FontAwesomeIcon className='blog-icon me-2' icon={faMessage} /> 3 comments </span></p>
                                    </div>
                                </div>
                                <div className="blog card">
                                    <img className='w-100' src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                                    <div className='blog-date'>
                                        <h4 className='text-white'>25 Jan</h4>
                                    </div>
                                    <div className="card-body">
                                        <h2>Car for new 36-store office</h2>
                                        <p>A car is a wheeled motor vehicle that is used for transportation. Most definitions of cars say that they run primarily on roads, seat one to eight people, have four wheels, and mainly transport people instead of</p>
                                        <p className='icon-pera'><span className='blog-first-icon m'><FontAwesomeIcon className='blog-icon  me-2' icon={faUser} />Travel , Lifestyle </span> <span className='ms-3'><FontAwesomeIcon className='blog-icon me-2' icon={faMessage} /> 3 comments </span></p>
                                    </div>
                                </div>
                                <div className="blog card">
                                    <img className='w-100' src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2Fyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                                    <div className='blog-date'>
                                        <h4 className='text-white'>25 Jan</h4>
                                    </div>
                                    <div className="card-body">
                                        <h2>Car  for new 37-store office</h2>
                                        <p>A car is a wheeled motor vehicle that is used for transportation. Most definitions of cars say that they run primarily on roads, seat one to eight people, have four wheels, and mainly transport people instead of</p>
                                        <p className='icon-pera'><span className='blog-first-icon m'><FontAwesomeIcon className='blog-icon  me-2' icon={faUser} />Travel , Lifestyle </span> <span className='ms-3'><FontAwesomeIcon className='blog-icon me-2' icon={faMessage} /> 5 comments </span></p>
                                    </div>
                                </div>
                                <div className="blog card">
                                    <img className='w-100' src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2Fyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                                    <div className='blog-date'>
                                        <h4 className='text-white'>25 Jan</h4>
                                    </div>
                                    <div className="card-body">
                                        <h2>Car part for new 38-store office</h2>
                                        <p>A car is a wheeled motor vehicle that is used for transportation. Most definitions of cars say that they run primarily on roads, seat one to eight people, have four wheels, and mainly transport people instead of</p>
                                        <p className='icon-pera'><span className='blog-first-icon m'><FontAwesomeIcon className='blog-icon  me-2' icon={faUser} />Travel , Lifestyle </span> <span className='ms-3'><FontAwesomeIcon className='blog-icon me-2' icon={faMessage} /> 3 comments </span></p>
                                    </div>
                                </div>
                                <div className="blog card">
                                    <img className='w-100' src="https://images.unsplash.com/photo-1462396881884-de2c07cb95ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                                    <div className='blog-date'>
                                        <h4 className='text-white'>25 Jan</h4>
                                    </div>
                                    <div className="card-body">
                                        <h2>Car part for new 39-store office</h2>
                                        <p>A car is a wheeled motor vehicle that is used for transportation. Most definitions of cars say that they run primarily on roads, seat one to eight people, have four wheels, and mainly transport people instead of</p>
                                        <p className='icon-pera'><span className='blog-first-icon m'><FontAwesomeIcon className='blog-icon  me-2' icon={faUser} />Travel , Lifestyle </span> <span className='ms-3'><FontAwesomeIcon className='blog-icon me-2' icon={faMessage} /> 3 comments </span></p>
                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-4 col-md-4">
                                <div className="search-card">
                                    <div className="card p-lg-5 p-3">
                                        <div class="input-group">
                                            <input type="text" class="form-control blog-search-input" aria-label="Dollar amount (with dot and two decimal places)" />
                                            <span class="input-group-text bg-primary text-white">Search</span>

                                        </div>
                                        <button className='btn btn-outline-primary text-center p-3 my-3'>Search</button>
                                    </div>
                                </div>
                                <div className='Category-list my-5'>
                                    <div class="card" >
                                        <ul class="list-group list-group-flush">
                                            <li class="list-group-item "><h3 className='my-3'>Categories</h3></li>
                                            <li class="list-group-item my-2">BMW Cars (15) </li>
                                            <li class="list-group-item my-2">Porado Cars (45) </li>
                                            <li class="list-group-item my-2">Toyota Cars (25) </li>
                                            <li class="list-group-item my-2">Merchris bench Cars (35) </li>
                                            <li class="list-group-item my-2">Royal Royals Cars (55) </li>
                                            <li class="list-group-item my-2">Vugati Cars (65) </li>
                                            <li class="list-group-item my-2">Lamborghini Cars (175) </li>
                                           
                                        </ul>
                                    </div>
                                </div>
                                <div className="post-list">
                                <div class="card" >
                                        <ul class="list-group list-group-flush">
                                            <li class="list-group-item "><h3 className='my-3'>Recent Posts</h3></li>
                                            <li class="list-group-item my-2 d-flex align-items-center">
                                                <div className="list-img-part"><img className='list-img' src="https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="Recen photos" /></div>
                                                <div className="list-title-part ms-3">
                                                    <h6 className='mb-0'>The car from Canada</h6>
                                                    <p className='m-1'>24 August 2022</p>
                                                </div>
                                            </li>                                           
                                            <li class="list-group-item my-2 d-flex align-items-center">
                                                <div className="list-img-part"><img className='list-img' src="https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="Recen photos" /></div>
                                                <div className="list-title-part ms-3">
                                                    <h6 className='mb-0'>The car from Canada</h6>
                                                    <p className='m-1'>24 August 2022</p>
                                                </div>
                                            </li>                                           
                                            <li class="list-group-item my-2 d-flex align-items-center">
                                                <div className="list-img-part"><img className='list-img' src="https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="Recen photos" /></div>
                                                <div className="list-title-part ms-3">
                                                    <h6 className='mb-0'>The car from Canada</h6>
                                                    <p className='m-1'>24 August 2022</p>
                                                </div>
                                            </li>                                           
                                            <li class="list-group-item my-2 d-flex align-items-center">
                                                <div className="list-img-part"><img className='list-img' src="https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="Recen photos" /></div>
                                                <div className="list-title-part ms-3">
                                                    <h6 className='mb-0'>The car from Canada</h6>
                                                    <p className='m-1'>24 August 2022</p>
                                                </div>
                                            </li>                                           
                                            <li class="list-group-item my-2 d-flex align-items-center">
                                                <div className="list-img-part"><img className='list-img' src="https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="Recen photos" /></div>
                                                <div className="list-title-part ms-3">
                                                    <h6 className='mb-0'>The car from Canada</h6>
                                                    <p className='m-1'>24 August 2022</p>
                                                </div>
                                            </li>                                           
                                           
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;