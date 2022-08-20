import React from 'react';
import ModalImage from "react-modal-image";
import './About.css'

const About = () => {
    return (
        <div>
            <section className='banner-sec '>

                <div className='banner-overflow'>
                    <h1 className='about-title '>About Us</h1>
                    <p className='about-para text-warning'>Our company is best car service company . Our servic so good. Our cars quality are best </p>
                    <button className='btn btn-warning p-3 fw-bold text-white my-3'>Submit Now</button>
                </div>
            </section>
            <section className='skill-team my-5 '>
                <div className='container'>
                    <div className="row">
                        <div className="col-12 text-center">
                            <h1 className='skill-title'>Skilled Team</h1>
                            <p>Our Team membars so friendly .They are very smart . The team members work is so fast </p>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-2">
                            <div className="team-membar">
                                <img className="team-membar-img" src="https://media.istockphoto.com/photos/man-with-crossed-arms-isolated-on-gray-background-picture-id1171169099?b=1&k=20&m=1171169099&s=170667a&w=0&h=cGg7Lzrw41hB5eLyvA9G3V_AZwVDOeuUGipLQ-yKVyw=" alt="" />
                                <div className='team-absulate'>

                                    <div>
                                        <h5 className=''>Alimul Hasan <br />
                                            <span> Car testar </span>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-2">
                            <div className="team-membar">
                                <img className="team-membar-img" src="https://media.istockphoto.com/photos/cheerful-handsome-young-man-i-glasses-is-showing-direction-and-with-picture-id940470596?b=1&k=20&m=940470596&s=612x612&w=0&h=m_JR1qgAY495lTJ80TKfo4KdY4vgFrRzBpbgd9VhSV8=" alt="" />
                                <div className='team-absulate'>

                                    <div>
                                        <h5>Jakir Khan<br />
                                            <span>Manager  </span>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-2">
                            <div className="team-membar">
                                <img className="team-membar-img" src="https://media.istockphoto.com/photos/satisfied-mature-man-smiling-picture-id1152601910?b=1&k=20&m=1152601910&s=170667a&w=0&h=yPX7ZJET5G4qw3VEI1592TEs5LDHJmR1FlsReiSKTIw=" alt="" />
                                <div className='team-absulate'>

                                    <div>
                                        <h5>Akij Khan<br />
                                            <span>Seo  </span>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='show-car'>
                <h1 className='my-4 text-center text-primary'>More Cars</h1>
                <div className='show-car-body'>
                    <div>
                        <ModalImage className="car-img" 
                            small={'https://images.unsplash.com/photo-1494905998402-395d579af36f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'}
                            large={"https://images.unsplash.com/photo-1494905998402-395d579af36f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"}
                            alt="Car Photo"
                        />;
                    </div>
                    <div>
                        <ModalImage className="car-img"
                            small={"https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"}
                            large={"https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"}
                            alt="Car Photo"
                        />;
                    </div>
                    <div>
                        <ModalImage className="car-img"
                            small={"https://images.unsplash.com/photo-1550355291-bbee04a92027?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"}
                            large={"https://images.unsplash.com/photo-1550355291-bbee04a92027?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"}
                            alt="Car Photo"
                        />;
                    </div>
                    <div>
                        <ModalImage className="car-img"
                            small={"https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"}
                            large={"https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"}
                            alt="Car Photo"
                        />;
                    </div>
                    <div>
                        <ModalImage className="car-img"
                            small={"https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"}
                            large={"https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"}
                            alt="Car Photo"
                        />;
                    </div>
                    <div>
                        <ModalImage className="car-img"
                            small={"https://images.unsplash.com/photo-1541443131876-44b03de101c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"}
                            large={"https://images.unsplash.com/photo-1541443131876-44b03de101c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"}
                            alt="Car Photo"
                        />;
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;