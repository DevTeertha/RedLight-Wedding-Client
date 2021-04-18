import React, { useContext, useState } from 'react';
import './AddService.css'
import { Form, Spinner } from 'react-bootstrap';
import { myContext } from '../../../App';
import axios from 'axios';
import SnackBar from '../SnackBar/SnackBar';
import { Snackbar } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

const AddService = () => {
    const { openState, loadingState, addServiceState } = useContext(myContext);
    const [addService, setAddService] = addServiceState;
    const [imageURL, setImageURL] = useState("");
    const [image, setImage] = useState("");
    const [loading, setLoading] = loadingState;
    const [open, setOpen] = openState;

    const handleImageUpload = (e) => {
        const imageData = new FormData();
        imageData.set('key', '1b13afeea921d1f7a1ed17c2503cbf55');
        imageData.append('image', e.target.files[0]);

        setLoading({ uploadImageSpinner: true });
        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(res => {
                setImage(e.target.files[0].name);
                newAddService.img = res.data.data.display_url;
                setLoading({ uploadImageSpinner: false });
                setAddService(newAddService);
            })
    }

    let newAddService = { ...addService }
    const handleAddService = (e) => {
        newAddService[e.target.name] = e.target.value;
        setAddService(newAddService);
    }

    const handleSubmitAddService = (e) => {
        if (newAddService.title === "" || newAddService.price === "" || newAddService.description === "" || newAddService.img === "") {
            setOpen({ isWarning: true, warningMsg: "Please Wait and Try Again!" });
        }
        else {
            fetch('http://localhost:5000/addService', {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(addService)
            })
                .then(res => res.json())
                .then(data => {
                    e.target.reset();
                    setAddService({
                        title: "",
                        price: "",
                        description: "",
                        img: ""
                    })
                    setImageURL("");
                    setImage("");
                    setOpen({ isOpen: true, massage: "Service Added Successfully" });
                })
                .catch(err => console.log(err))
        }
        e.preventDefault();
    }

    const handleWarningClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen({ isWarning: false });
    }

    return (
        <div>
            <div className="container">
                <h2 className="font-weight-bold mt-5 ml-5">Add Service</h2>
                <div className="border bg-white responsive-container">
                    <Form onSubmit={handleSubmitAddService} className="p-4">
                        <Form.Group>
                            <Form.Label>Title</Form.Label>
                            <Form.Control name="title" onBlur={handleAddService} type="text" placeholder="Service Title"></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Price</Form.Label>
                            <Form.Control name="price" onBlur={handleAddService} type="number" placeholder="$ Price"></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Description</Form.Label>
                            <Form.Control name="description" onBlur={handleAddService} type="text" placeholder="Description"></Form.Control>
                        </Form.Group>
                        {
                            loading.uploadImageSpinner ?
                                <label className="text-white btn disabled bg-dark">
                                    <Spinner animation="border" variant="danger" size="sm" />Loading...
                            </label>
                                :
                                <Form.Group>
                                    <input onChange={handleImageUpload} type="file" className="d-none" id="inputGroupFile01" />
                                    <label className="btn btn-dark" htmlFor="inputGroupFile01"> Choose file</label>
                                    {
                                        image ? <label className="ml-2"> {image} </label> :
                                            <label className="ml-2">No Image</label>
                                    }
                                </Form.Group>
                        }
                        <button type="submit" className="btn btn-danger w-100 py-2">Add Now</button>
                    </Form>
                    <SnackBar></SnackBar>
                    <Snackbar onClose={handleWarningClose} open={open.isWarning} autoHideDuration={3000}>
                        <Alert onClose={handleWarningClose} severity="warning">
                            {open.warningMsg}
                        </Alert>
                    </Snackbar>
                </div>
            </div>
        </div>
    );
};

export default AddService;