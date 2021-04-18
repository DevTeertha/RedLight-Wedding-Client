import React from 'react';
import { Card } from 'react-bootstrap';

const OurTeamCard = (props) => {
    const { post, name, location, img } = props.team;
    return (
        <div className="col-md-4 p-3">
            <Card>
                <div className="pt-4 mx-auto">
                    <Card.Img style={{ borderRadius: '50%' ,height: '150px', width: '150px' , border: '1px solid gray' }} className="p-2" variant="top" src={img} />
                </div>
                <Card.Body className="text-center">
                    <Card.Title className="font-weight-bold img-fluid"> {name} </Card.Title>
                    <h6> {post} </h6>
                </Card.Body>
            </Card>
        </div>
    );
};

export default OurTeamCard;