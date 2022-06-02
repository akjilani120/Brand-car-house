import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { faHeartCirclePlus, faBoxOpen } from '@fortawesome/free-solid-svg-icons';
const NavbarHeader = () => {
    return (
        <div className='Nav-header p-0 m-0'>
            <div className='container'>
                <div className='header-main d-flex justify-content-between text-center  align-items-center '  >
                    <div className='head-title head-item d-lg-block d-none'>
                        <h2 className='Navbar-title '> <span className='ak'>B</span>rand <span className='ak'>C</span>ar <span className='ak'>H</span>ouse </h2>
                    </div>
                    <div className='head-item search-title'>
                        <InputGroup >
                            <FormControl className="search-input"
                                placeholder='Search Your car'
                                aria-describedby="basic-addon2"
                            />
                            <Button className='search-btn' id="button-addon2">
                                Search
                            </Button>
                        </InputGroup>
                    </div>
                    <div className='head-item icon-title d-flex text-center text-center py-3 align-items-center '>
                       <p className='icon-border'>  <Link className="nav-item-link  link-icon" to='/love'><span><FontAwesomeIcon className='header-icon' icon={faHeartCirclePlus} /></span></Link></p>
                       <p> <Link className="nav-item-link link-icon" to='/myOrder'><span><FontAwesomeIcon className='header-icon' icon={faBoxOpen } /></span> 
                        
                        </Link></p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default NavbarHeader;