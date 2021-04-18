import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useMediaQuery } from 'react-responsive';
import { Switch } from "react-router-dom";
import AdminNavBar from '../AdminNavBar/AdminNavBar';
import AddService from '../AddService/AddService';
import PrivateRoute from '../../user/PrivateRoute/PrivateRoute';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import EventList from '../EventList/EventList';
import ManageService from '../ManageService/ManageService';
const menuIcon = <FontAwesomeIcon icon={faBars} />
const AdminPanel = () => {
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
                <AdminNavBar></AdminNavBar>
            </div>
            <div id="page-content-wrapper">
                <button className="btn btn-danger" style={btnHideVisibleStyle} onClick={handleShowMenu}>{menuIcon}</button>
                <div class="container-fluid">
                    <Switch>
                        <PrivateRoute exact path="/admin">
                            <EventList></EventList>
                        </PrivateRoute>

                        <PrivateRoute path="/admin/addService">
                            <AddService></AddService>
                        </PrivateRoute>

                        <PrivateRoute path="/admin/makeAdmin">
                            <MakeAdmin></MakeAdmin>
                        </PrivateRoute>

                        <PrivateRoute path="/admin/manageServices">
                            <ManageService></ManageService>
                        </PrivateRoute>

                    </Switch>
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;