import React, { useContext } from 'react';
import {
    CardElement,
    useStripe,
    useElements
} from "@stripe/react-stripe-js";
import { Form } from 'react-bootstrap';
import { myContext } from '../../../../App';
import Loader from 'react-loader-spinner';

const PaymentForm = () => {
    const { serviceState, userInfoState, bookInfoState, loadingState } = useContext(myContext);
    const [bookInfo, setBookInfo] = bookInfoState;
    const [service] = serviceState;
    const [userInfo] = userInfoState;
    const [loading, setLoading] = loadingState;
    const { name, email } = userInfo;
    let newBookInfo = { ...bookInfo }

    const cardStyle = {
        style: {
            base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                    color: '#aab7c4',
                },
            },
            invalid: {
                color: '#9e2146',
            },
        },
    }

    const stripe = useStripe();
    const elements = useElements();

    const handlePaymentMethod = (e) => {
        newBookInfo.paymentMethod = e.target.value;
        setBookInfo(newBookInfo);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (bookInfo.name === "") {
            bookInfo.name = name;
        }
        if (bookInfo.email === "") {
            bookInfo.email = email;
        }
        const { description, price, img } = service.find(sd => sd.title === bookInfo.serviceName);
        const cardElement = elements.getElement(CardElement);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: cardElement
        });
        if (!error) {
            if (bookInfo.serviceName === "" || bookInfo.paymentMethod === "") {
                alert("Please Select Your Service And Payment Method!")
            }
            else {
                setLoading({ bookingSpinner: true });
                fetch('https://radiant-earth-05632.herokuapp.com/bookNow', {
                    method: "POST",
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ ...bookInfo, cardInfo: paymentMethod, serviceInfo: { description, price } })
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data) {
                            setBookInfo({
                                name: "",
                                email: "",
                                serviceName: "",
                                status: "pending"
                            })
                            event.target.reset();
                            setLoading({ bookingSpinner: false });
                            alert("Your Booking has been sent.");
                        }
                    })
                    .catch(err => console.log(err))
            }
        }
        else {
            console.log(error);
        }
    };

    return loading.bookingSpinner ? <Loader
        className="text-center py-5 my-5"
        type="Oval"
        color="#F32013"
        height={100}
        width={100}
    /> : (
            <form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label className="font-weight-bold text-secondary">Pay With</Form.Label>
                    <div>
                        <div class="form-check">
                            <input value="Credit Card" onChange={handlePaymentMethod} class="form-check-input" value="Credit-Card" type="radio" name="paymentMethod" id="flexRadioDefault1" />
                            <label class="form-check-label" for="flexRadioDefault1"> Credit Card</label>
                        </div>
                        <div class="form-check">
                            <input value="Paypal" onChange={handlePaymentMethod} class="form-check-input" value="Paypal" type="radio" name="paymentMethod" id="paypal" />
                            <label class="form-check-label" for="paypal"> Paypal</label>
                        </div>
                    </div>
                </Form.Group>
                <CardElement className="mt-4" options={cardStyle} />
                <button className="mt-4 btn btn-success w-100" type="submit" disabled={!stripe}>Book Now</button>
            </form>
        );
};

export default PaymentForm;