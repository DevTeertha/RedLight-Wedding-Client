import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import headerCover from '../../../../img/image1.jpg';

const Header = () => {
    return (
        <div className="header-container bg-danger">
            <div className="navbar-container container">
                <NavBar></NavBar>
            </div>
            <div className="header-main-container d-flex align-items-center container py-5 h-75 mt-5">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="header-content my-5">
                            <h1 style={{ fontSize: '3em' }} className="font-weight-bold text-white">Plan Your Best<br />Wedding</h1>
                            <p className="text-warning font-weight-bold">Makes Your Perfect Wedding Program</p>
                            <Link to="/dashboard" className="btn btn-dark px-5">Hire Now</Link>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="header-cover">
                            <img className="w-100" src={headerCover} alt="headercover" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;