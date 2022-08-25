import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse , faPhone , faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Footer.css'

const Footer = () => {
    return (
        <div>
        <div className='footer pb-3'>
            <div className=''>
                <div className="footer-overflow pt-5">
                    <div className="footer-number first-footer-number">
                        <div className="logo">
                        <h2 className='Navbar-title '> <span className='ak'>B</span>rand <span className='ak'>C</span>ar <span className='ak'>H</span>ouse </h2>
                        </div>
                        <p className=''>Our Car house is the best Store.It has  update car and best car.Our service is best service</p>
                        <hr className=' mt-3' />
                        <p><span><FontAwesomeIcon className='blog-icon me-2' icon={faHouse} />:</span>  No: 58 A, your Street, Baltimore, USA 4508 </p>
                        <p><span><FontAwesomeIcon className='blog-icon me-2' icon={faPhone} />:</span>  +8801795849068 </p>
                        <p><span><FontAwesomeIcon className='blog-icon me-2' icon={ faEnvelope} />:</span>  abdulkaderjilani120@gmail.com </p>
                    </div>
                    <div className="footer-number">
                    <h5>INFORMATION</h5>
                        <ul>
                            <li>Search Terms</li>
                            <li>Advanced Search</li>
                            <li>Helps & Faqs</li>
                            <li>Store Location</li>
                            <li>Orders & Returns</li>
                            <li>Deliveries</li>
                            <li>Refund & Returns</li>
                        </ul>
                    </div>
                    <div className="footer-number">
                    <h5>OUR COMPANY</h5>
                        <ul>
                            <li>Delivery</li>
                            <li>Legal Notice</li>
                            <li>Secure payment</li>
                            <li>Store Location</li>
                            <li>Sitemap</li>
                            <li>Blog</li>
                            <li>About us</li>
                            <li>Carrers</li>
                        </ul>
                    </div>
                    <div className="footer-number">
                    <h5>OPENING TIME</h5>
                        <ul>
                            <li>Mon - Fri: 8AM - 10PM</li>
                            <li>Sat: 9AM-8PM</li>
                            <li>Suns: 14hPM-18hPM</li>
                            <li>We Work All The Holidays</li>
                            <li><h4 className='mt-3'><a href="" className='text-dark'>Download Link </a></h4></li>
                           
                           
                        </ul>
                    </div>
                   
                </div>
            </div>
        </div>
        <div>

        </div>
       
    </div>
       
    );
};

export default Footer;