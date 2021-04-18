import React, { useContext } from 'react';
import logo from '../../../img/logo.png';
import { Link, useHistory } from 'react-router-dom';
import { googleSignIn } from '../Firebase/FirebaseAuth';
import { myContext } from '../../../App';

const Login = () => {
    const { userInfoState, isAdminState } = useContext(myContext);
    const [userInfo, setUserInfo] = userInfoState;
    const [setIsAdmin] = isAdminState;
    let history = useHistory();

    const checkAdmin = (email) => {
        fetch(`http://localhost:5000/isAdmin?email=${email}`)
            .then(resonse =>resonse.json())
            .then(data =>setIsAdmin(data))
            .catch(err=>console.log(err))
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(res => {
                const { displayName, email, photoURL } = res;
                checkAdmin(email);
                let newUserInfo = { ...userInfo }
                newUserInfo = {
                    isSignIn: true,
                    name: displayName,
                    email: email,
                    img: photoURL
                }
                localStorage.setItem('currentUser', JSON.stringify(newUserInfo));
                setUserInfo(newUserInfo);
                history.replace("/");
            })
            .catch(err => console.log(err))
    }


    return (
        <div style={{ height: '100vh' }} className="bg-light">
            <div style={{ height: '100%' }} className="container">
                <div className="loginbox-container w-50 mx-auto p-4">
                    <Link style={{ textDecoration: 'none' }} to="/">
                        <h1 className="text-center">
                            <img className="w-25" src={logo} alt="Logo" />
                            <span className="text-danger">Red</span>
                            <span className="text-warning">Light</span><span className="text-danger" style={{ fontSize: '0.4em' }}>Wedding</span>
                        </h1>
                    </Link>
                    <h2 style={{ marginTop: '6em' }} className="text-dark text-center">Login With</h2>

                    <button
                        onClick={handleGoogleSignIn}
                        style={{ borderRadius: '3em' }}
                        className="btn btn-outline-danger w-100 mt-3">
                        Continue With Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;