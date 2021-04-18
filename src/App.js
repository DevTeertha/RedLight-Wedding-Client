import React, { useState, createContext, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/user/Home/Home/Home';
import Login from './components/user/Login/Login';
import AdminPanel from './components/admin/AdminPanel/AdminPanel';
import PrivateRoute from './components/user/PrivateRoute/PrivateRoute';
import PrivateAdminRoute from './components/user/PrivateRoute/PrivateAdminRoute';
import Dashboard from './components/user/Dashboard/Dashboard/Dashboard';

export const myContext = createContext();
function App() {
  const [userInfo, setUserInfo] = useState({
    isSignIn: false,
    name: "",
    email: "",
    img: ""
  });

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('currentUser'));
    if (userData) {
      fetch(`https://radiant-earth-05632.herokuapp.com/isAdmin?email=${userData.email}`)
        .then(res => res.json())
        .then(data => setIsAdmin(data))
        .catch(err => err)

      setUserInfo(userData);
    }
  }, [localStorage.getItem('currentUser')])

  const [open, setOpen] = useState({
    isOpen: false,
    massage: "",
    isWarning: false,
    warningMsg: ""
  });


  const [bookInfo, setBookInfo] = useState({
    name: "",
    email: "",
    serviceName: "",
    status: "pending"
  });
  const [addService, setAddService] = useState({
    title: "",
    price: "",
    description: "",
    img: ""
  })
  const [review, setReview] = useState({});
  const [testimonial, setTestimonial] = useState([])
  const [service, setService] = useState([]);
  const [bookingList, setBookingList] = useState([]);
  const [userBookingList, setUserBookingList] = useState([])
  const [loading, setLoading] = useState({
    uploadImageSpinner: false,
    eventLoadSpinner: false,
    statusSpinner: false,
    bookingSpinner: false,
    addServiceSpinner: false,
    deleteSpinner: false
  });
  const [makeAdmin, setMakeAdmin] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <myContext.Provider value={
      {
        userInfoState: [userInfo, setUserInfo],
        makeAdminState: [makeAdmin, setMakeAdmin],
        isAdminState: [isAdmin, setIsAdmin],
        bookInfoState: [bookInfo, setBookInfo],
        serviceState: [service, setService],
        addServiceState: [addService, setAddService],
        bookingListState: [bookingList, setBookingList],
        userBookingListState: [userBookingList, setUserBookingList],
        loadingState: [loading, setLoading],
        reviewState: [review, setReview],
        testimonialState: [testimonial, setTestimonial],
        openState: [open, setOpen]
      }
    }>
      <Router>
        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>

          <PrivateAdminRoute path="/admin">
            <AdminPanel></AdminPanel>
          </PrivateAdminRoute>

          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>

        </Switch>
      </Router>
    </myContext.Provider>
  );
}

export default App;
