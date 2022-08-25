import React from 'react';

import './Blog.css'
import bg from '../image/Blog/hero2.png'
import RecentPosts from './RecentPosts';
import BlogShow from './BlogShow';
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
                            <div className="col-lg-7 col-md-8">
                                <BlogShow />
                            </div>
                            <div className="col-lg-5 col-md-4">
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
                                    <RecentPosts />
                                </div>
                                <div className='Tag-could-part my-5'>
                                    <div class="card" >
                                        <ul class="list-group list-group-flush">
                                            <li class="list-group-item "><h3 className='my-3'>Tag Coulds</h3></li>
                                            <li class="list-group-item my-2 tag-list">
                                                <p className='list-pera'>Style Car</p>
                                                <p className='list-pera'>Travel Car</p>
                                                <p className='list-pera'>Business Car</p>
                                                <p className='list-pera'>Update Car</p>
                                                <p className='list-pera'>Latest Car</p>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                                <div className="intra-fed">
                                    <div className="card">
                                        <h3 className='m-3'>Instragram Feeds</h3>
                                        <hr />
                                        <div className='card-body'>
                                            <p className='d-flex'>
                                                <img className='intra-img' src="https://images.unsplash.com/photo-1539788816080-8bdd722d8c22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fGNhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                                                <img className='intra-img' src="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fGNhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                                                <img className='intra-img' src="https://images.unsplash.com/photo-1626668893632-6f3a4466d22f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGNhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                                            </p>
                                            <p className='d-flex'>
                                                <img className='intra-img' src="https://images.unsplash.com/photo-1588258219511-64eb629cb833?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGNhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                                                <img className='intra-img' src="https://images.unsplash.com/photo-1532581140115-3e355d1ed1de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGNhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                                                <img className='intra-img' src="https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGNhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                                            </p>
                                            <p className='d-flex'>
                                                <img className='intra-img' src="https://images.unsplash.com/photo-1534093607318-f025413f49cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fGNhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                                                <img className='intra-img' src="https://images.unsplash.com/photo-1573950940509-d924ee3fd345?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fGNhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                                                <img className='intra-img' src="https://images.unsplash.com/photo-1569240651738-2c9ec2f50f42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fGNhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="search-card my-5">
                                    <div className="card p-lg-5 p-3">
                                        <div class="input-group">
                                            <input placeholder='Email' type="text" class="form-control blog-search-input" aria-label="Dollar amount (with dot and two decimal places)" />
                                            <span class="input-group-text bg-primary text-white">Email</span>

                                        </div>
                                        <button className='btn btn-outline-primary text-center p-3 my-3'>Submit</button>
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