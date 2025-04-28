import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./PoliceViewEmergencies.css"; // Make sure this CSS file exists and has styles
import axios from "axios";
import { toast } from "react-toastify";

// Define the base URL for your backend API
const baseURL = "http://localhost:5000";

// Function to fetch emergencies from the backend API
const viewEmergencies = async () => {
    try {
        const response = await axios.get(`${baseURL}/api/emergency`);
        console.log(response.data); // Log the full response to check the data structure
        return response.data.data;  // Return the data array
    } catch (error) {
        toast.error("Error fetching emergencies: " + error.message);
        return [];
    }
};

const PoliceViewEmergencies = () => {
    const [emergencies, setEmergencies] = useState([]);   // State to store all emergencies
    const [filteredEmergencies, setFilteredEmergencies] = useState([]); // State for filtered emergencies based on search
    const [searchTerm, setSearchTerm] = useState("");   // State to track search term

    useEffect(() => {
        // Fetch the emergencies when the component is mounted
        const fetchEmergencies = async () => {
            const data = await viewEmergencies();  // Fetch the data
            setEmergencies(data);  // Set emergencies data
            setFilteredEmergencies(data); // Set filtered emergencies (initially same as all emergencies)
        };
        fetchEmergencies();
    }, []);  // Empty dependency array ensures this runs once when the component mounts

    // Function to handle search term input and filter the list of emergencies
    const handleSearch = (e) => {
        setSearchTerm(e.target.value); // Update the search term
        const filtered = emergencies.filter((emergency) =>
            emergency.type.toLowerCase().includes(e.target.value.toLowerCase())  // Filter based on type
        );
        setFilteredEmergencies(filtered); // Set the filtered emergencies
    };

    return (
        <div className="police-view-emergencies">
            <h1>View Emergencies</h1>
            {/* Input for searching through emergency types */}
            <input
                type="text"
                placeholder="Search by type..."
                value={searchTerm}
                onChange={handleSearch}
                className="search-input"
            />
            {/* Table to display the list of emergencies */}
            <table className="emergency-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Type</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
=                    {filteredEmergencies.length > 0 ? (
                        filteredEmergencies.map((emergency) => (
                            <tr key={emergency._id}>
                                <td>{emergency._id}</td>
                                <td>{emergency.type}</td>
                                <td>{emergency.description}</td>
=                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4">No emergencies found.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default PoliceViewEmergencies;
