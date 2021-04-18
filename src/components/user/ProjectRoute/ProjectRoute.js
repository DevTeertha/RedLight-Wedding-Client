import React from 'react';
import Projects from '../Home/Projects/Projects';
import NavBar from '../Home/NavBar/NavBar';
import Footer from '../Home/Footer/Footer';

const ProjectRoute = () => {
    return (
        <div style={{ height: '100vh' }} className="bg-light">
            <div className="bg-danger">
                <div className="container">
                    <NavBar></NavBar>
                </div>
            </div>
            <div style={{height: '70%'}}>
                <div className="container">
                    <Projects></Projects>
                </div>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default ProjectRoute;