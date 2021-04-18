import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';

const BookingListCard = ({ list }) => {
    const [statusColor, setStatusColor] = useState("danger");
    const { _id, serviceName, status, serviceInfo } = list;
    const { description, img } = serviceInfo;

    useEffect(() => {
        if(status==="done"){
            setStatusColor("success")
        }
        else if(status==="on going"){
            setStatusColor("warning")
        }
    }, [status])
    return (
        <div className="col-md-6 col-lg-6 p-3">
            <Card className="p-4">
                <div className="d-flex">
                    <div>
                        <Card.Img style={{ height: '100px', width: '100px', borderRadius: '50%' }} variant="top" src={img} />
                    </div>
                    <div className="pl-3">
                        <Card.Title className="font-weight-bold m-0 text-dark"> {serviceName} </Card.Title>
                        <Card.Text className="mt-2"> {description} </Card.Text>
                    </div>
                    <div className="text-right w-50">
                        <label className={`bg-${statusColor} text-white p-2 rounded`}> {status} </label>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default BookingListCard;