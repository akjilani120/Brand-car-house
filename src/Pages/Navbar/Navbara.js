import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser } from '@fortawesome/free-solid-svg-icons';
import './Navbara.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';


const Navbara = () => {
    const [user] = useAuthState(auth)
    
    const logOut =() =>{
        signOut(auth)
        localStorage.removeItem("accessToken")
    }
    
    return (
      <div className='navbar-main'  >         
            <Navbar  collapseOnSelect expand="lg" className='navigat'  sticky='top' >
            <Container>
                <Navbar.Brand className='d-lg-none' href="#home"> <h2 className='Navbar-title '> <span className='ak'>B</span>rand <span className='ak'>C</span>ar <span className='ak'>H</span>ouse </h2></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link > <Link className="nav-item-link" to="/">Home</Link></Nav.Link>
                        <Nav.Link > <Link className="nav-item-link" to="/about">About </Link></Nav.Link>
                        <Nav.Link > <Link className="nav-item-link" to="/blog">Blogs</Link></Nav.Link>
                        <Nav.Link > <Link className="nav-item-link" to="/contact">Contact Us </Link></Nav.Link>
                        <Nav.Link > <Link className="nav-item-link" to="/carFinace">Car Finace </Link></Nav.Link>
                        <Nav.Link > <Link className="nav-item-link" to="/carFinace">Use Car </Link></Nav.Link>
                        <Nav.Link > <Link className="nav-item-link" to="/Service">Service </Link></Nav.Link>



                    </Nav>
                    <Nav>
                        <Nav.Link > 
                            <div className='login-items'>
                            { user ? <div   className='btn btn-dark logout-head'> {user.displayName}
                            <div className='logout-details'>
                                <ul>
                                    <Link className='view-profile' to="/profileDashboard"> <li >View Profile</li></Link>
                                    <Link className='view-profile' to="/myOrder"> <li >My Order</li></Link>
                                     <li onClick={logOut}> Log Out</li>
                                </ul>
                            </div>
                            </div> :
                           <Link className="nav-login" to="/login"> <p><FontAwesomeIcon className='user-icon' icon={faUser} />
                            login
                            </p> </Link>}
                           
                            </div>
                            
                            
                        </Nav.Link>
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
      </div>
    );
};

export default Navbara;