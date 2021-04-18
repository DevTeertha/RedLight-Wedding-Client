import React, { useContext, useEffect } from 'react';
import ServiceCard from './ServiceCard';
import { myContext } from '../../../../App';

const Services = () => {
    const { serviceState } = useContext(myContext);
    const [service, setService] = serviceState;
    useEffect(() => {
        fetch('https://radiant-earth-05632.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setService(data))
            .catch(err => console.log(err))
    }, [service.length]);

    return (
        <div className="services-container bg-danger">
            <div className="container py-5">
                <div className="project-title">
                    <h2 className="font-weight-bold text-center text-white">Our <span className="text-warning">Services</span></h2>
                </div>
                <div className="row py-5">
                    {
                        service.map(sd => <ServiceCard key={sd._id} service={sd}></ServiceCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;