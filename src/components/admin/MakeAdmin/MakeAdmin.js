import React, { useContext } from 'react';
import { Form } from 'react-bootstrap';
import { myContext } from '../../../App';
import SnackBar from '../SnackBar/SnackBar';

const MakeAdmin = () => {
    const { openState , makeAdminState } = useContext(myContext);
    const [open, setOpen] = openState;
    const [makeAdmin, setMakeAdmin] = makeAdminState;

    const handleSetMakeAdmin = (e) => {
        setMakeAdmin(e.target.value);
    }

    const handleMakeAdmin = (e) => {
        fetch('http://localhost:5000/makeAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: makeAdmin })
        })
            .then(res => res.json())
            .then(data => {
                setOpen({isOpen:true,massage:"New Admin Successfully Added"});
                setMakeAdmin("");
            })
            .catch(err => console.log(err))
        e.target.reset();
        e.preventDefault();
    }
    return (
        <div className="container mt-5">
            <div>
                <h2 className="font-weight-bold">Make Admin</h2>
            </div>
            <div style={{ height: '30vh' }} className="mt-3">
                <div className="responsive-container border pr-5 pt-5 pb-5 p-3">
                    <Form onSubmit={handleMakeAdmin}>
                        <label className="font-weight-bold">Email</label>
                        <div class="input-group mb-3">
                            <input onBlur={handleSetMakeAdmin} type="email" class="form-control" placeholder="Enter Email" />
                            <div class="input-group-append ml-2">
                                <button type="submit" class="btn btn-outline-danger">Submit</button>
                            </div>
                        </div>
                    </Form>
                    <SnackBar />
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;