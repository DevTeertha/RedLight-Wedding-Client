import React, { useContext } from 'react';
import firebase from "firebase/app";
import './NavBar.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { myContext } from '../../../../App';
import Popup from 'reactjs-popup';

const NavBar = () => {
    const { userInfoState, isAdminState } = useContext(myContext);
    const [userInfo, setUserInfo] = userInfoState;
    const [isAdmin, setIsAdmin] = isAdminState;
    const { isSignIn, name, img } = userInfo;

    const handleLogOut = () => {
        firebase.auth().signOut().then(() => {
            setUserInfo({
                isSignIn: false,
                name: "",
                email: "",
                img: ""
            });
            setIsAdmin(false);
            console.log("Sign Out Successful");
            localStorage.clear();
        }).catch((error) => {
            // An error happened.
        });
    }
    return (
        <div className="py-3">
            <Navbar className="row nav" expand="md">
                <Navbar.Brand className="w-50 font-weight-bold"><Link className="text-white text-decoration-none" to="/"><span className="text-dark">RedLight</span><span className="text-warning"> Wedding</span></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="nav-bar-menu" />
                <Navbar.Collapse id="nav-bar-menu">
                    <Nav className="font-weight-bold ml-auto">
                        <Nav.Link className="pt-3 pr-3">
                            <Link className="link text-white" to="/">Home</Link>
                        </Nav.Link>
                        <Nav.Link className="pt-3 pr-3 ml-md-2">
                            <Link className="link text-white" to="/about">About</Link>
                        </Nav.Link>
                        <Nav.Link className="pt-3 pr-3 ml-md-2">
                            <Link className="link text-white" to="/projects">Projects</Link>
                        </Nav.Link>
                        <Nav.Link className="pt-3 pr-3 ml-md-2">
                            <Link className="link text-white" to="/dashboard">Dashboard</Link>
                        </Nav.Link>
                        {
                            isAdmin &&
                            <Nav.Link className="pt-3 pr-3 ml-md-2">
                                <Link className="link text-white" to="/admin">Admin</Link>
                            </Nav.Link>
                        }
                        {
                            isSignIn ?
                                <Popup trigger={
                                    <div className="profile-trigger mt-1">
                                        <img className="profile-image w-100 p-1" src={img} alt="" />
                                    </div>
                                }
                                    position="bottom">
                                    <div className="bg-white p-3 text-center">
                                        <img style={{ height: '100px', width: '100px' }} className="profile-image p-1 border" src={img} alt="profile-image" />
                                        <h5 className="text-dark font-weight-bold">{name}</h5>
                                        <button onClick={handleLogOut} className="btn btn-outline-danger w-100 mt-4">Log Out?</button>
                                    </div>
                                </Popup>
                                :
                                <Nav.Link className="pt-3 pr-3 ml-md-2">
                                    <Link className="link text-white" to="/login">Login</Link>
                                </Nav.Link>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavBar;