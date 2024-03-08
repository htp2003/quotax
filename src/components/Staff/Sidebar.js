// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <Link to="/dashboard/contract-process">Contract Process</Link>
            <Link to="/dashboard/feedback">Feedback</Link>
            <Link to="/dashboard/create-post">Create Post</Link>
            <Link to="/dashboard/manage-posts">Manage Posts</Link>
        </div>
    );
};

export default Sidebar;
