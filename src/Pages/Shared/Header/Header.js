import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo.png';
import home from '../../../images/house-solid.svg';
import userImg from '../../../images/user-solid.svg';
import logoutImg from '../../../images/arrow-right-from-bracket-solid.svg';
import './Header.css';

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
                            <img src={home} alt="" height='15px' />
                            <NavLink className="navlink-home  me-4" to='/home'>Home</NavLink>
                            {
                                !user ? <NavLink className="navlinks  me-3" to='/signin'>Sign In</NavLink> :
                                    <div className="d-lg-flex align-items-center">
                                        <img src={userImg} alt="" height='15px' />
                                        <NavDropdown title={!user.displayName ? user.email : user.displayName} id="basic-nav-dropdown">
                                            <NavLink className="navlinks" to='/my_booking'>My Bookings</NavLink>
                                            <NavDropdown.Divider />
                                            <NavLink className="navlinks py-1" to='/manage_bookings'>Manage All Bookings</NavLink>
                                            <NavDropdown.Divider />
                                            <NavLink className="navlinks py-1" to='/add_service'>Add New Service</NavLink>
                                            <NavDropdown.Divider />
                                            <button className="border-0 secondary-btn text-white fw-bold ms-3 py-1 rounded" onClick={logOut}>Logout <img src={logoutImg} alt="" height='15px' /></button>
                                        </NavDropdown>
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