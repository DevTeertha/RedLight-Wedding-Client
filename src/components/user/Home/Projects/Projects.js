import React from 'react';
import './Projects.css';
import ProjectsCard from './ProjectsCard';
import project1 from '../../../../img/project1.jpg';
import project2 from '../../../../img/project2.jpg';
import project3 from '../../../../img/project3.jpg';

const projectsData = [
    {
        id: "1",
        title: "Lightings",
        location: "Dhaka , Bangladesh",
        img: project1
    },
    {
        id: "2",
        title: "Stages",
        location: "Dhaka , Bangladesh",
        img: project2
    },
    {
        id: "3",
        title: "Venue",
        location: "Dhaka , Bangladesh",
        img: project3
    }
]

const Projects = () => {
    return (
        <div className="projects-container py-5">
            <div className="container">
                <div className="project-title">
                    <h2 className="font-weight-bold text-center text-dark">Our <span className="text-danger">Projects</span></h2>
                </div>
                <div className="project-card-container">
                    <div className="row py-5">
                        {
                            projectsData.map(pd=> <ProjectsCard key={pd.key} project={pd}></ProjectsCard>  )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;