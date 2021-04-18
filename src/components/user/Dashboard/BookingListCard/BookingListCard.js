import React, { useState, useEffect, useContext } from 'react';
import { Card } from 'react-bootstrap';
import { myContext } from '../../../../App';

const BookingListCard = ({ list }) => {
    const { serviceState } = useContext(myContext);
    const [service] = serviceState
    const [statusColor, setStatusColor] = useState("danger");
    const { serviceName, status, serviceInfo } = list;
    const { description } = serviceInfo;
    const { img } = service.find(sr=>sr.title===serviceName);

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
                        <Card.Img style={{ height: '100px', width: '100px', borderRadius: '50%' }} variant="top" src={`data:image/jpeg;base64,${img.img}`} />
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