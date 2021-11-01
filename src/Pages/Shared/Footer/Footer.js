import React from 'react';
import './Footer.css';
import { Container } from 'react-bootstrap';
import logo from '../../../images/logo.png';

const Footer = () => {
    return (
        <footer className='footer py-5 mt-5'>
            <Container>
                <div className='d-lg-flex justify-content-between align-items-center'>
                    {/*==================== 1st part ================================*/}
                    <div>
                        <div className='d-flex align-items-center'>
                            <img src={logo} alt="" width='50px' />
                            <h2 className='ms-3'>Hotel Ressort</h2>
                        </div>
                        <p>A perfect Vacation is waiting for you.</p>
                        <div className='d-flex'>
                            <p className='foo-icon'><i className="fab fa-facebook"></i></p>
                            <p className='foo-icon'><i className="fab fa-instagram-square"></i></p>
                            <p className='foo-icon '><i className="fab fa-twitter-square"></i></p>
                        </div>
                    </div>
                    {/*==================== 2nd part ================================*/}
                    <div>
                        <h3>Contact us</h3>
                        <h5><i className="fas fa-phone"></i> +8801943475</h5>
                        <h5><i className="far fa-envelope"></i> hotel@ressort.bd</h5>
                        <h5><i className="fas fa-globe"></i> web@ressort.com</h5>
                    </div>
                    {/*==================== newsLetter ================================*/}
                    <div className="mx-2">
                        <h3 >Join Our NewsLetter</h3>
                        <input type="email" placeholder="@Email" className="px-2 py-2 my-2 w-100 border-0 rounded " />
                        <br />
                        <button className="secondary-btn px-5 py-2 rounded fw-bold">Subscribe</button>
                    </div>
                </div>

            </Container>
            <p className='copyright mb-0 pb-0'> &copy; copyright 2021 Hotel Ressort. All rights reserved</p>
        </footer>
    );
};

export default Footer;