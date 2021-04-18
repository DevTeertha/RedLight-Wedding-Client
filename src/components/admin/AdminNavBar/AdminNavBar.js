import React from 'react';
import './AdminNavBar.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faPlus, faUserPlus, faThLarge } from '@fortawesome/free-solid-svg-icons';

const listIcon = <FontAwesomeIcon icon={faList} />
const plusIcon = <FontAwesomeIcon icon={faPlus} />
const makeAdminIcon = <FontAwesomeIcon icon={faUserPlus} />
const manageIcon = <FontAwesomeIcon icon={faThLarge} />

const AdminNavBar = () => {
    return (
        <nav>
            <div class="sidebar-heading">
                <Link style={{ textDecoration: 'none' }} to="/">
                    <h2 className="text-white font-weight-bold my-4" href="#home">
                        <span className="text-dark">Red</span>
                        <span className="text-white">Light</span>
                    </h2>
                </Link>
            </div>
            <div class="list-group list-group-flush">
                <Link className="text-white list-group-item list-group-item-action bg-danger" to="/admin/"><span>{listIcon}</span> <span>Event List</span></Link>
                <Link className="text-white list-group-item list-group-item-action bg-danger" to="/admin/addService"><span>{plusIcon}</span> <span>Add Service</span></Link>
                <Link className="text-white list-group-item list-group-item-action bg-danger" to="/admin/makeAdmin"><span>{makeAdminIcon}</span> <span>Make Admin</span></Link>
                <Link className="text-white list-group-item list-group-item-action bg-danger" to="/admin/manageServices"><span>{manageIcon}</span> <span>Manage Services</span></Link>
            </div>
        </nav>
    );
};

export default AdminNavBar;