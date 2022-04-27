import React, { useContext, useEffect } from "react";
import { myContext } from "../../../../App";
import BookingListCard from "../BookingListCard/BookingListCard";

const BookingList = () => {
  const { userBookingListState, userInfoState } = useContext(myContext);
  const [userBookingList, setUserBookingList] = userBookingListState;
  const [userInfo] = userInfoState;

  useEffect(() => {
    fetch(
      `https://redlight-server.herokuapp.com/userBookingList?email=${userInfo.email}`
    )
      .then((res) => res.json())
      .then((data) => setUserBookingList(data))
      .catch((err) => console.log(err));
  }, [userInfo.email]);

  return (
    <div className="container-fluid">
      <h2 className="font-weight-bold mt-5">Booking List</h2>
      <div className="border my-3 p-3 bg-white">
        <div className="w-100 p-3 row">
          {userBookingList.length == 0 && (
            <h2 className="text-secondary">No Bookings Found</h2>
          )}
          {userBookingList.map((list) => (
            <BookingListCard list={list} key={list._id}></BookingListCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookingList;
