import React from 'react';
import Alicia from '../../../../img/alicia.jpg'
import David from '../../../../img/david.jpg'
import Robert from '../../../../img/robert.jpg'
import OurTeamCard from './OurTeamCard';

const ourTeamData = [
    {
        id: "1",
        name: "Alicia Franco",
        post: "Photographer",
        location: "Dhaka , Bangladesh",
        img: Alicia
    },
    {
        id: "2",
        name: "David Guetta",
        post: "Cinematographer",
        location: "Dhaka , Bangladesh",
        img: David
    },
    {
        id: "3",
        name: "Robert Son",
        post: "Stage Decorator",
        location: "Dhaka , Bangladesh",
        img: Robert
    }
]

const OurTeam = () => {
    return (
        <div className="projects-container bg-danger py-5">
            <div className="container">
                <div className="project-title">
                    <h2 className="font-weight-bold text-center text-white">Our <span className="text-warning">Team</span></h2>
                </div>
                <div className="project-card-container">
                    <div className="row py-5">
                        {
                            ourTeamData.map(td => <OurTeamCard key={td.id} team={td}></OurTeamCard>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;