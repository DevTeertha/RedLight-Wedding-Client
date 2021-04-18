import React from 'react';
import './Footer.css'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook , faTwitterSquare , faInstagram } from '@fortawesome/free-brands-svg-icons';

const facebook = <FontAwesomeIcon icon={faFacebook} />
const twitter = <FontAwesomeIcon icon={faTwitterSquare} />
const instagram = <FontAwesomeIcon icon={faInstagram} />
const location = <FontAwesomeIcon icon={faMapMarkerAlt} />

const Footer = () => {
    return (
        <div className="bg-danger border">
            <div className="container pt-5">
                <div className="row text-white">
                    <div className="col-md-3">
                        <p className="mt-3"> {location} H#136 (12th Floor), Road #04,<br/> Dhaka, Bangladesh</p>
                    </div>
                    <div className="col-md-3">
                        <h4>Company</h4>
                        <Link to="/" className="text-white">About</Link>
                        <br/>
                        <Link to="/" className="text-white">Project</Link>
                        <br/>
                        <Link to="/" className="text-white">Our Team</Link>
                        <br/>
                        <Link to="/" className="text-white">Terms Condition</Link>
                    </div>
                    <div className="col-md-3 responsive-margin">
                        <h4>Quick Links</h4>
                        <Link to="/" className="text-white">Quick Links</Link>
                        <br/>
                        <Link to="/" className="text-white">Rentals</Link>
                        <br/>
                        <Link to="/" className="text-white">Sales</Link>
                        <br/>
                        <Link to="/" className="text-white">Contact</Link>
                    </div>
                    <div className="col-md-3 responsive-margin">
                        <h4>Social Media</h4>
                        <div className="social-icons">
                            <li className="icon">
                                <a className="facebook" href="https://www.facebook.com">{facebook}</a>
                            </li>
                            <li className="icon twitter ml-4">
                                <a className="text-info" href="https://www.twitter.com">{twitter}</a>
                            </li>
                            <li className="icon ml-4">
                                <a className="instagram" href="https://www.instagram.com">{instagram}</a>
                            </li>
                        </div>
                    </div>
                </div>
                <p className="mt-5 text-dark text-center">Copyright RedLight Wedding {(new Date()).getFullYear()} </p>
            </div>
        </div>
    );
};

export default Footer;