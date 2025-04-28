import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./PoliceDepartment.css";
import axios from "axios";
import { toast } from "react-toastify";




const PoliceDepartment = () => {
    return (
        <div className="police-department">
            <h1>Police Department</h1>
            <p>Manage police department operations here.</p>
            <div className="police-department__actions">
                <Link to="/station/police/view" className="action-link">View Emergencies</Link>
                <Link to="/station/police/manage" className="action-link">Manage Officers</Link>
                <Link to="/station/police/reports" className="action-link">Generate Reports</Link>
            </div>
        </div>
    )
}

export default PoliceDepartment;