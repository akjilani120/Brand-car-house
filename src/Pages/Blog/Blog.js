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
                            <div className="col-lg-8 col-md-8">
                                <BlogShow/>
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
                                    <RecentPosts/>
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
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;