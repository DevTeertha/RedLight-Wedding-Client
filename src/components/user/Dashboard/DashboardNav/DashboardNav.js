import React from 'react';
import { Link } from 'react-router-dom';

const DashboardNav = () => {
    return (
        <nav>
            <div class="sidebar-heading">
                <Link style={{textDecoration: 'none'}} to="/">
                    <h2 className="text-white font-weight-bold my-4" href="#home">
                        <span className="text-dark">Red</span>
                        <span className="text-white">Light</span>
                    </h2>
                </Link>
            </div>
            <div class="list-group list-group-flush">
                <Link className="pl-3 text-white link" to="/dashboard/"> Book</Link>
                <Link className="pl-3 text-white link" to="/dashboard/bookingList"> Booking List</Link>
                <Link className="pl-3 text-white link" to="/dashboard/review"> Review</Link>
            </div>
        </nav>
    );
};

export default DashboardNav;