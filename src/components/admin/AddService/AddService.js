import React, { useContext, useState } from 'react';
import './AddService.css'
import { Form } from 'react-bootstrap';
import { myContext } from '../../../App';
import SnackBar from '../SnackBar/SnackBar';
import { Snackbar } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

const AddService = () => {
    const { openState, loadingState, addServiceState } = useContext(myContext);
    const [addService, setAddService] = addServiceState;
    const [image, setImage] = useState("");
    const [file, setFile] = useState(null);
    const [loading, setLoading] = loadingState;
    const [open, setOpen] = openState;

    const handleImageUpload = (e) => {
        setImage(e.target.files[0].name);
        setFile(e.target.files[0]);
    }

    let newAddService = { ...addService }
    const handleAddService = (e) => {
        newAddService[e.target.name] = e.target.value;
        setAddService(newAddService);
    }

    const handleSubmitAddService = (e) => {

        if (addService.title === "" || addService.price === "" || addService.description === "" || file === null) {
            setOpen({ isWarning: true, warningMsg: "Please Fill The Form Properly!" });
        }
        else {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('title', addService.title);
            formData.append('price', addService.price);
            formData.append('description', addService.description);

            setLoading({ addServiceSpinner: true })
            fetch('http://localhost:5000/addService', {
                method: "POST",
                body: formData
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
                    setFile(null);
                    setImage("");
                    setLoading({ addServiceSpinner: false });
                    setOpen({ isOpen: true, massage: "Service Added Successfully" });
                })
                .catch(err => console.log(err))
        }
        e.preventDefault();
    }

    const handleWarningClose = (event, reason) => {
        if (reason === 'clickable') {
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
                        <Form.Group>
                            <input onChange={handleImageUpload} type="file" className="d-none" id="inputGroupFile01" />
                            <label className="btn btn-dark" htmlFor="inputGroupFile01"> Choose file</label>
                            {
                                image ? <label className="ml-2"> {image} </label> :
                                    <label className="ml-2">No Image</label>
                            }
                        </Form.Group>
                        {
                            loading.addServiceSpinner ?
                                <button class="btn btn-danger w-100 py-2" type="button" disabled>
                                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                    Loading...
                                </button>
                                :
                                <button type="submit" className="btn btn-danger w-100 py-2">Add Now</button>
                        }
                    </Form>
                    <SnackBar></SnackBar>
                    <Snackbar onClose={handleWarningClose} open={open.isWarning} autoHideDuration={2000}>
                        <Alert onClose={handleWarningClose} severity="error">
                            {open.warningMsg}
                        </Alert>
                    </Snackbar>
                </div>
            </div>
        </div>
    );
};

export default AddService;