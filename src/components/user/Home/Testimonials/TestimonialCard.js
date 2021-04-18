import React from 'react';
import { Card } from 'react-bootstrap';

const TestimonialCard = ({ testimonial }) => {
    const { name, role, description, img } = testimonial;
    return (
        <div className="col-md-4 p-3">
            <Card className="p-4">
                <div className="d-flex">
                    <div>
                        <Card.Img style={{ height: '50px', width: '50px', borderRadius: '50%' }} variant="top" src={img} />
                    </div>
                    <div className="ml-3">
                        <Card.Title className="font-weight-bold m-0"> {name} </Card.Title>
                        <Card.Text > {role} </Card.Text>
                    </div>
                </div>
                <Card.Text className="mt-2"> {description} </Card.Text>
            </Card>
        </div>
    );
};

export default TestimonialCard;