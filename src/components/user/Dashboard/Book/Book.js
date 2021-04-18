import React, { useContext } from 'react';
import { Form } from 'react-bootstrap';
import PaymentMain from '../PaymentGatway/PaymentMain';
import { myContext } from '../../../../App';

const Book = () => {
    const { serviceState , userInfoState , bookInfoState } = useContext(myContext);
    const [bookInfo, setBookInfo] = bookInfoState;
    const [service] = serviceState;
    const [userInfo] = userInfoState;
    const { name , email } = userInfo;
    let newInfo = {...bookInfo}

    const handleSelected = (e) => {
        newInfo[e.target.name] = e.target.value;
        setBookInfo(newInfo);
    }
    const handleChange = (e) =>{
        newInfo[e.target.name] = e.target.value;
        setBookInfo(newInfo);
    }

    return (
        <div className="container mt-5">
            <div className="makeadmin-header">
                <h2 className="font-weight-bold">Book</h2>
            </div>
            <div className="makeadmin-content border my-3 p-3 bg-white">
                <div className="form-container w-50 ml-5 my-5">
                    <Form>
                        <Form.Group>
                            <Form.Label className="font-weight-bold">Name</Form.Label>
                            <Form.Control value={name} name="name" onBlur={handleChange} type="text" placeholder="Name" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="font-weight-bold">Email</Form.Label>
                            <Form.Control value={email} name="email" onBlur={handleChange} type="email" placeholder="Email" disabled />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="font-weight-bold">Service Name</Form.Label>
                            <Form.Control defaultValue={bookInfo.serviceName} name="serviceName" onChange={handleSelected} as="select">
                                <option value="">Choose</option>
                                {
                                    service.map(sr=><option value={sr.title}>{sr.title} (${sr.price})</option>)
                                }
                            </Form.Control>
                        </Form.Group>
                    </Form>
                    <PaymentMain></PaymentMain>
                </div>
            </div>
        </div>
    );
};

export default Book;