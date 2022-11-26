import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import Navbar from '../../Shared/Navbar/Navbar';

const DashBoard = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);

    return (
        <div>
            <Navbar />
            <div className="drawer drawer-mobile">
                <input id="dashboard-layout" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                    <label
                        htmlFor="dashboard-layout"
                        className="btn btn-primary drawer-button lg:hidden">
                        Open drawer
                    </label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-layout" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li><Link to='/dashboard'>My Orders</Link></li>
                        {
                            isAdmin &&
                            <>
                                <li><Link to='/dashboard/allUsers'>All Users</Link></li>    
                            </>
                        }
                    </ul>

                </div>
            </div>

        </div>
    );
};

export default DashBoard;