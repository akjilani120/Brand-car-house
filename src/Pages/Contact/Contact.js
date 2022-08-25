import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationPin, faPhone, } from '@fortawesome/free-solid-svg-icons';
import "./Contact.css"
const Contact = () => { 
    return (
        <div className=''>
            <div className='row'>
                <div className="col-md-4">
                    <div className="contract-left p-5">
                        <h1>Get in touch</h1>
                        <p>We'love to hear from your. Our friendly team is alwa</p>
                        <div className='d-flex my-4'>
                            <div><FontAwesomeIcon className='contact-icon  me-2' icon={faEnvelope} /></div>
                            <div className='ms-3'><h4>Chat to us</h4>
                            <p className='m-0'>Our friendly team is here to help</p>
                            <p className='m-0'>abdulkaderprofile.com</p>
                            </div>
                        </div>
                        <div className='d-flex my-4'>
                            <div><FontAwesomeIcon className='contact-icon  me-2' icon={faLocationPin} /></div>
                            <div className='ms-3'><h4>Office</h4>
                            <p>Come say hello at our  office HQ</p>
                            <p className='m-0'>100 Smith Streel</p>
                            <p className='m-0'>Collingwwod VIC 3066 AU</p>
                            </div>
                        </div>
                        <div className='d-flex my-4'>
                            <div><FontAwesomeIcon className='contact-icon  me-2' icon={faPhone} /></div>
                            <div className='ms-3'><h4>Phone</h4>
                            <p className='m-0'>Mon-Fri From 8am to 5pm</p>
                            <p className='m-0'>+8801795849068</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="contract-right p-4">
                        <h1 className='my-3'>Level up your brand</h1>
                        <p>You canreach us anytime via <a href="">hi@untitledui.com</a></p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;