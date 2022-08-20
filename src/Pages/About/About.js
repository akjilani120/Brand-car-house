import React from 'react';
import './About.css'

const About = () => {
    return (
        <div>
            <section className='banner-sec '>
           
                <div >
                    <h1 className='about-title '>About Us</h1>
                    <p className='about-para text-warning'>Our company is best car service company . Our servic so good. Our cars quality are best </p>
                </div>
            </section>
            <section className='skill-team my-5 '>
                <div className='container'>
                    <div className="row">
                        <div className="col-12 text-center">
                            <h1 className='skill-title'>Skilled Team</h1>
                            <p>Our Team membars so friendly .They are very smart . The team members work is so fast </p>
                        </div>
                        <div className="col-4">
                            <div className="team-membar">
                                <img className="team-membar-img" src="https://media.istockphoto.com/photos/man-with-crossed-arms-isolated-on-gray-background-picture-id1171169099?b=1&k=20&m=1171169099&s=170667a&w=0&h=cGg7Lzrw41hB5eLyvA9G3V_AZwVDOeuUGipLQ-yKVyw=" alt="" />
                                <div className='team-absulate'>
                                  
                                    <div>
                                        <h5>Alimul Hasan Ahmed<br />
                                         <span>Senior Car testar </span>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
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
                        <div className="col-4">
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
        </div>
    );
};

export default About;