import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { myContext } from '../../../App';
import SnackBar from '../SnackBar/SnackBar';

const ManageServiceCard = ({ service }) => {
    const { _id , title, description, img } = service;

    const { loadingState , openState } = useContext(myContext);
    const [open, setOpen] = openState;
    const [loading, setLoading] = loadingState;

    const handleDeleteService = () =>{
        setLoading({ deleteSpinner: true })
        fetch(`https://radiant-earth-05632.herokuapp.com/deleteService/${_id}`,{
            method: 'DELETE'
        })
        .then(res=>{
            setLoading({ deleteSpinner: false })
            setOpen({isOpen:true,massage:"Deleted Successfully"})
        })
    }
    return (
        <div className="col-md-12 col-sm-12 col-lg-6 p-3">
            <Card className="p-4">
                <div className="d-flex">
                    <div>
                        <Card.Img style={{ height: '100px', width: '100px', borderRadius:'50%' }} variant="top" src={`data:image/jpeg;base64,${img.img}`} />
                    </div>
                    <div className="ml-3">
                        <Card.Title className="font-weight-bold m-0 text-danger"> {title} </Card.Title>
                        <Card.Text className="mt-2"> {description} </Card.Text>
                    </div>
                </div>
                <div className="d-flex mt-3">
                    <button className="btn btn-success w-50">Update</button>
                    <button onClick={()=>handleDeleteService(_id)} className="btn btn-danger w-50 ml-3">Delete</button>
                </div>
            </Card>
        </div>
    );
};

export default ManageServiceCard;