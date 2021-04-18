import React, { useEffect, useContext } from 'react';
import TestimonialCard from './TestimonialCard';
import { myContext } from '../../../../App';

const Testimonials = () => {
    const { testimonialState } = useContext(myContext);
    const [testimonial, setTestimonial] = testimonialState;
    useEffect(()=>{
        fetch('https://radiant-earth-05632.herokuapp.com/reviews')
        .then(res=>res.json())
        .then(data=>setTestimonial(data))
        .catch(err=>console.log(err))
    },[testimonial.name])
    return (
        <div style={{backgroundColor: 'whitesmoke'}} className="testimonial-container py-5">
            <div className="container">
                <div className="testimonial-title">
                    <h2 className="font-weight-bold text-center text-dark"><span className="text-danger">Testimonials</span></h2>
                </div>
                <div className="testimonial-card-container">
                    <div className="row py-5">
                        {
                            testimonial.map(td=> <TestimonialCard key={td._id} testimonial={td}></TestimonialCard> )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;