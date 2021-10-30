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
                            <h2 className='ms-3 text-white'>Random Health Care</h2>
                        </div>
                        <p className=" text-white">A perfect way for your stable future.</p>
                        <div className='d-flex'>
                            <p className='foo-icon dark-text'><i className="fab fa-facebook"></i></p>
                            <p className='foo-icon dark-text'><i className="fab fa-instagram-square"></i></p>
                            <p className='foo-icon dark-text'><i className="fab fa-twitter-square"></i></p>
                        </div>
                    </div>
                    {/*==================== 2nd part ================================*/}
                    <div>
                        <h3 className=" text-white">Contact us</h3>
                        <h5 className=" text-white"><i className="fas dark-text fa-phone"></i> +8801943475</h5>
                        <h5 className=" text-white"><i className="far dark-text fa-envelope"></i> university@random.edu.bd</h5>
                        <h5 className=" text-white"><i className="fas dark-text fa-globe"></i> web@random.com</h5>
                    </div>
                    {/*==================== newsLetter ================================*/}
                    <div className="mx-2">
                        <h3 className="text-white">Join Our NewsLetter</h3>
                        <input type="email" placeholder="@Email" className="px-2 py-2 my-2 w-100 border-0 rounded " />
                        <br />
                        <button className="primary-btn px-5 py-2 rounded text-white fw-bold">Subscribe</button>
                    </div>
                </div>

            </Container>
            <p className='copyright text-white mb-0 pb-0'> &copy; copyright 2021 Random Health Care Center. All rights reserved</p>
        </footer>
    );
};

export default Footer;