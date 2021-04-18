import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useMediaQuery } from 'react-responsive';
import { Switch } from "react-router-dom";
import PrivateRoute from '../../PrivateRoute/PrivateRoute';
import DashboardNav from '../DashboardNav/DashboardNav';
import Book from '../Book/Book';
import BookingList from '../BookingList/BookingList';
import Review from '../Review/Review';

const menuIcon = <FontAwesomeIcon icon={faBars} />

const Dashboard = () => {
    const [style, setStyle] = useState({
        margin: '0',
        display: 'none'
    })

    let menuBarStyle = {
        marginLeft: style.margin
    };

    let btnHideVisibleStyle = {
        display: style.display
    };

    const isSmallScreen = useMediaQuery({
        query: '(min-width: 768px)'
    })

    useEffect(() => {
        if (!isSmallScreen) {
            setStyle({
                margin: "-15rem",
                display: 'block'
            })
        }
        else {
            setStyle({
                margin: "0rem",
                display: 'none'
            })
        }
    }, [isSmallScreen])

    const handleShowMenu = () => {
        if (style.margin === "-15rem") {
            setStyle({
                margin: "0rem",
                display: 'block'
            });
        } else {
            setStyle({
                margin: "-15rem",
                display: 'block'
            });
        }
    }
    return (
        <div class="d-flex" id="wrapper">
            <div style={menuBarStyle} class="bg-danger border-right" id="sidebar-wrapper">
                <DashboardNav></DashboardNav>
            </div>
            <div id="page-content-wrapper">
                <button className="btn btn-danger" style={btnHideVisibleStyle} onClick={handleShowMenu}>{menuIcon}</button>
                <div class="container-fluid">
                    <Switch>
                        <PrivateRoute exact path="/dashboard">
                            <Book></Book>
                        </PrivateRoute>
                        <PrivateRoute path="/dashboard/book">
                            <Book></Book>
                        </PrivateRoute>
                        <PrivateRoute path="/dashboard/bookingList">
                            <BookingList></BookingList>
                        </PrivateRoute>
                        <PrivateRoute path="/dashboard/review">
                            <Review></Review>
                        </PrivateRoute>
                    </Switch>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;