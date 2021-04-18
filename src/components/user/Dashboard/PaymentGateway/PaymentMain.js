import React, { useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './PaymentForm';

const StripeKey = "pk_test_51Ie1r9E8HNh1LaXBUI6oEu8JKiaPQFoEeGl0ZIxbE69VjkvbpqsY34c1YfB6azCQjXiayOFURvEbm5FlEWLQS81Q006pYaM3D3";
const stripePromise = loadStripe(StripeKey);

const PaymentMain = ({bookInfo}) => {
    const [status, setStatus] = useState("ready");

    if (status === "success") {
        return <div>Congrats on your empanadas!</div>;
    }

    return (
        <div>
            <Elements stripe={stripePromise}>
                <PaymentForm
                    bookInfo={bookInfo}
                    success={() => {
                        setStatus("success");
                    }} />
            </Elements>
        </div>
    );
};

export default PaymentMain;