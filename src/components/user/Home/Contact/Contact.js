import React from 'react';
import './Contact.css';
import { Button, Form } from 'react-bootstrap';

const Contact = () => {
    return (
        <div style={{ backgroundColor: 'whitesmoke' }} className="testimonial-container py-5">
            <div className="container">
                <div className="testimonial-title">
                    <h2 className="font-weight-bold text-center text-dark"><span className="text-danger">Connect</span> With Us</h2>
                </div>
                <div className="d-flex justify-content-center">
                    <Form className="contact-form border p-5 my-4 bg-white">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Your Full Name" />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter Your Email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Phone No</Form.Label>
                            <Form.Control type="text" placeholder="Enter Your Phone Number" />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Massage</Form.Label>
                            <Form.Control rows="4" as="textarea" type="text" placeholder="Enter Your Massage" />
                        </Form.Group>

                        <Button variant="danger" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Contact;