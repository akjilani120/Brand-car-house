import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div>
        <div className='footer pb-3'>
            <div className=''>
                <div className="footer-overflow pt-5">
                    <div className="footer-number">
                        <div className="logo">
                        <h2 className='Navbar-title '> <span className='ak'>B</span>rand <span className='ak'>C</span>ar <span className='ak'>H</span>ouse </h2>
                        </div>
                        <p className='text-white'>Our Car house is the best Store.It has  update car and best car.Our service is best service</p>
                        <hr className='bg-white mt-3' />
                    </div>
                    <div className="footer-number">
                        <h4 className='text-white '>Shop info</h4>
                        <div className='text-white d-flex text-center'>
                            <p className='p-0 m-0'>Address:</p>
                            <p className='ms-2 p-0 m-0'>955 East Avenu. Sector 9 Russel Squire.UK</p>
                        </div>
                        <hr className='bg-white' />
                        <div className='text-white d-flex text-center p-0 m-0'>
                            <p className='p-0 m-0'> Email : <span className='ms-3'>abdulkaderjilani@gmail.com</span>. </p>
                        </div>
                        <hr className='bg-white' />
                        <div className='text-white d-flex text-center'>
                            <p className='p-0 m-0'>Hours :</p>
                            <p className='ms-3 p-0 m-0'>Mon - Fri (9am- 6pm)</p>

                        </div>
                    </div>
                    <div className="footer-number">
                        <h4>Service</h4>
                        <ul>
                            <li>BMW</li>
                            <li>Lamborghini</li>
                            <li>Rolls Rolyes</li>
                            <li>TATA</li>
                            <li>Bugatti</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div>

        </div>
        <div className="last-footer">
            <p className='text-center text-white'>Copyright &copy; 2016  All right reserved by ak jilani</p>
        </div>
    </div>
       
    );
};

export default Footer;