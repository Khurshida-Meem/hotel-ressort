import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo.png';
import './Header.css'

const Header = () => {
    const { firebaseContext } = useAuth();
    const { user, logOut } = firebaseContext;

    return (
        <div>
            <Navbar className='menubar' expand="lg">
                <Container>
                    <Navbar.Brand href="#">
                        <img
                            src={logo}
                            width="50px"
                            height="50px"
                            alt="hotel ressort logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle className="border-0 " aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="ms-auto d-lg-flex align-items-center">

                            <NavLink className="navlinks  me-3 pb-2" to='/home'>Home</NavLink>
                            {
                                !user ? <NavLink className="navlinks  me-3 pb-2" to='/signin'>Sign In</NavLink> :
                                    <div className="d-lg-flex align-items-center">
                                        <NavLink className="navlinks  me-3 pb-2" to='/my_booking'>My Bookings</NavLink>
                                        <NavLink className="navlinks  me-3 pb-2" to='/manage_bookings'>Manage All Bookings</NavLink>
                                        <NavLink className="navlinks  me-3 pb-2" to='/add_service'>Add New Service</NavLink>
                                        <p className=" pb-2 mt-3">{!user.displayName ? user.email : user.displayName}</p>
                                        <button className="border-0 secondary-btn text-white fw-bold ms-3 py-1 rounded" onClick={logOut}>Logout</button>
                                    </div>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;