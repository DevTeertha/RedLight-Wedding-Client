import React, { useContext, useEffect } from 'react';
import { myContext } from '../../../App';
import Loader from "react-loader-spinner";

const EventList = () => {
    const { bookInfoState, bookingListState, loadingState } = useContext(myContext);
    const [bookingList, setBookingList] = bookingListState;
    const [bookInfo, setBookInfo] = bookInfoState;
    const [loading, setLoading] = loadingState;

    useEffect(() => {
        setLoading({ eventLoadSpinner: true })
        fetch('https://radiant-earth-05632.herokuapp.com/bookings')
            .then(res => res.json())
            .then(data => {
                setLoading({ eventLoadSpinner: false })
                setBookingList(data)
            })
    }, [])

    const handleStatusChange = (e, { _id, name, email, serviceName }) => {
        const statusUpdate = { ...bookInfo };
        statusUpdate.id = _id;
        statusUpdate.name = name;
        statusUpdate.email = email;
        statusUpdate.serviceName = serviceName;
        statusUpdate.status = e.target.value;
        setBookInfo(statusUpdate);

        fetch('https://radiant-earth-05632.herokuapp.com/updateStatus', {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bookInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                alert("Updated Successfully!")
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h2 className="font-weight-bold p-4 mt-4">Event List</h2>
            <div className="table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl">
                {
                    loading.eventLoadSpinner ?
                        <Loader
                            className="text-center py-5 my-5"
                            type="Oval"
                            color="#F32013"
                            height={100}
                            width={100}
                        /> :
                        <table class="table table-striped">
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col"> Name</th>
                                    <th scope="col">Email ID</th>
                                    <th scope="col">Services</th>
                                    <th scope="col">Pay With</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {bookingList.length === 0 &&
                                    <h2 className="ml-4 mt-4 text-secondary">No Events</h2>
                                }
                                {
                                    bookingList.map(list => {
                                        const { _id, name, email, serviceName, status, paymentMethod } = list;
                                        return (
                                            <tr key={_id}>
                                                <td scope="row">{name}</td>
                                                <td>{email}</td>
                                                <td>{serviceName}</td>
                                                <td>{paymentMethod}</td>
                                                <td>
                                                    <select defaultValue={status} onChange={(e) => handleStatusChange(e, { _id, name, email, serviceName })} className="custom-select">
                                                        <option value="pending"> Pending</option>
                                                        <option value="done">Done</option>
                                                        <option value="on going">On going</option>
                                                    </select>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                }
            </div>
        </div>
    );
};

export default EventList;