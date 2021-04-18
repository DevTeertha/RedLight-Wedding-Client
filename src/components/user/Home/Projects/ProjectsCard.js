import React from 'react';
import { Card } from 'react-bootstrap';

const ProjectsCard = (props) => {
    const { title, location, img } = props.project;
    return (
        <div className="col-md-4 p-3">
            <Card>
                <Card.Img className="p-2" variant="top" src={img} />
                <Card.Body className="text-center">
                    <Card.Title className="font-weight-bold"> {title} </Card.Title>
                    <Card.Text> {location} </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ProjectsCard;