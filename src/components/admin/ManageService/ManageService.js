import React, { useEffect, useContext } from 'react';
import ManageServiceCard from '../ManageServiceCard/ManageServiceCard';
import { myContext } from '../../../App';
import SnackBar from '../SnackBar/SnackBar';
import Loader from 'react-loader-spinner';

const ManageService = () => {
    const { loadingState, serviceState } = useContext(myContext);
    const [service, setService] = serviceState;
    const [loading] = loadingState;

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setService(data)
            })
            .catch(err => console.log(err))
    }, [service.length])
    return (
        <div className="container-fluid">
            <h2 className="font-weight-bold p-4 mt-4">Manage Services</h2>
            <div className="manage-service-container p-4 bg-white border form">
                {
                    loading.deleteSpinner ? <Loader
                        className="text-center py-5 my-5"
                        type="Oval"
                        color="#F32013"
                        height={100}
                        width={100}
                    /> :
                        <div className="row">
                            {service.length === 0 &&
                                <h4 className="ml-4 text-secondary">No Services Found</h4>
                            }
                            {
                                service.map(sr => <ManageServiceCard key={sr._id} service={sr}></ManageServiceCard>)
                            }
                        </div>

                }
                <SnackBar></SnackBar>
            </div>
        </div>
    );
};

export default ManageService;