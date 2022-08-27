import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationPin, faPhone, } from '@fortawesome/free-solid-svg-icons';
import "./Contact.css"
const Contact = () => {
    return (
        <div className='contact-main-part'>
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
                <div className="col-md-8 ">
                    <div className="contract-right  m-5">
                        <h1 className='my-3'>Level up your brand</h1>
                        <p>You can reach us anytime via <a href="">hi@untitledui.com</a></p>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Name</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Your Name"/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Email</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="you@company.com"/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Phone number</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Your Name"/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">How can we help</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Tell us a little about the project'></textarea>
                        </div>
                        <div class="mb-3">
                           <button className='btn btn-primary text-center w-100 fw-bold'>Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;