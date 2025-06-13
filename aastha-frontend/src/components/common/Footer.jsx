import React from 'react'
import LogoBlack from '../../assets/images/logo-white.png'

const Footer = () => {
    return (
        <footer className='py-5 text-white'>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 pb-4">
                        <img src={LogoBlack} alt="Loogo" width={150} />
                        <div className='pt-3 pe-5'>Lorem ipsum dolor, sit amet consectetur </div>
                    </div>
                    <div className="col-md-3 pb-4">
                        <h2 className='mb-3'>Categries</h2>
                        <ul>
                            <li>
                                <a href="">Kids</a>
                            </li>
                            <li>
                                <a href="">Women</a>
                            </li>
                            <li>
                                <a href="">Men</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3 pb-4">
                        <h2 className='mb-3'>Quick Links</h2>
                        <ul>
                            <li>
                                <a href="">Login</a>
                            </li>
                            <li>
                                <a href="">Register</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3 pb-4">
                        <h2 className='mb-3'>Get in Touch</h2>
                        <ul>
                            <li>
                                <a href="">+91 9064040128</a>
                            </li>
                            <li>
                                <a href="">info@aasthacreations.com</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-12 text-center pt-5">
                        <p>&copy; 2025 All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
