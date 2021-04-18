import React, { useContext } from 'react';
import { Form } from 'react-bootstrap';
import { myContext } from '../../../../App';

const Review = () => {
    const { reviewState , userInfoState } = useContext(myContext);
    const [userInfo] = userInfoState;
    const [review , setReview] = reviewState;

    const handleReviewSet = (e) => {
        review[e.target.name] = e.target.value;
        setReview(review);
    }
    const handleReviewSubmit = (e) => {
        e.preventDefault();
        if(typeof review.name==='undefined'){
            review.name = userInfo.name;
        }
        const { img } = userInfo;
        review.img = img;
        setReview(review);
        fetch('http://localhost:5000/addReview',{
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(review)
        })
        .then(res=>res.json())
        .then(data=>{
            setReview({});
            e.target.reset();
            alert("Review Successfully Post");
        })
    }
    return (
        <div>
            <h2 className="font-weight-bold mt-5 ml-3">Review</h2>
            <div className="border my-3 p-3 bg-white">
                <Form onSubmit={handleReviewSubmit} className="w-50">
                    <Form.Group>
                        <Form.Control name="name" onBlur={handleReviewSet} defaultValue={userInfo.name} type="text" placeholder="Your Name"></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control name="role" onBlur={handleReviewSet} type="text" placeholder="Role (ex: Admin , Manager etc...)"></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <textarea name="description" onBlur={handleReviewSet} className="form-control" type="text" placeholder="Description"></textarea>
                    </Form.Group>
                    <button type="text" className="btn btn-danger">Post</button>
                </Form>
            </div>
        </div>
    );
};

export default Review;