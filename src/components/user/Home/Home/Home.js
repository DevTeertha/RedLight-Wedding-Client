import React from 'react';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import Footer from '../Footer/Footer';
import OurTeam from '../OurTeam/OurTeam';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Projects></Projects>
            <Services></Services>
            <Testimonials></Testimonials>
            <OurTeam></OurTeam>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;