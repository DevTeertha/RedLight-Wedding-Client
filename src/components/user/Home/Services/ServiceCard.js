import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AnimationWrapper } from 'react-hover-animation';
import { myContext } from '../../../../App';

const ServiceCard = ({service}) => {
    const { title, price, description, img } = service;
    const { bookInfoState } = useContext(myContext);
    const [bookInfo , setBookInfo] = bookInfoState;
    let newInfo = {...bookInfo};

    const handleBookNow = (title) => {
        newInfo.serviceName = title;
        setBookInfo(newInfo);
    }

    return (
        <div className="col-md-4 p-3">
            <AnimationWrapper animationConfig={{
                duration: 500,
            }}>
                <Link onClick={()=>handleBookNow(title)} className="text-decoration-none text-dark" to="/dashboard" >
                    <Card>
                        <Card.Img className="p-2 img-fluid" variant="top" src={img} />
                        <Card.Body className="text-center">
                            <Card.Title className="font-weight-bold"> {title} </Card.Title>
                            <Card.Text className="text-danger font-weight-bold"> ${price} </Card.Text>
                            <Card.Text>{description}</Card.Text>
                        </Card.Body>
                    </Card>
                </Link>
            </AnimationWrapper>
        </div >
    );
};

export default ServiceCard;