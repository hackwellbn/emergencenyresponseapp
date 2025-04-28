import React, { useState, useEffect } from "react";
import "./Form.css";
import axios from "axios";
import { toast } from "react-toastify";
import { FaTrash, FaEdit } from "react-icons/fa";

const baseURL = process.env.NODE_ENV === "production" 
  ? "https://emtech.onrender.com" 
  : "http://localhost:5000";

// ViewData component
const ViewData = ({ formData, setFormData, setIsEditing, refreshKey }) => {
  const [emergencyData, setEmergencyData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const id = localStorage.getItem("id");
        if (!id) {
          toast.error("No emergency ID found in localStorage.");
          return;
        }
        const response = await axios.get(`${baseURL}/api/emergency/${id}`);
        setEmergencyData(response.data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [refreshKey]);

  const handleDelete = async () => {
    const id = localStorage.getItem("id");
    if (!window.confirm("Are you sure you want to delete this emergency data?")) {
      return;
    }

    try {
      const response = await axios.delete(`${baseURL}/api/emergency/${id}`);
      if (response.status === 200) {
        toast.success("Emergency data deleted successfully.");
        setEmergencyData(null);
        localStorage.removeItem("id");
      } else {
        toast.error("Failed to delete emergency data.");
      }
    } catch (error) {
      toast.error("Error deleting emergency data: " + error.message);
    }
  };

  const startEditing = () => {
    if (emergencyData) {
      setFormData({
        fullName: emergencyData.fullName,
        phoneNumber: emergencyData.phoneNumber,
        emergencyType: emergencyData.emergencyType,
        location: emergencyData.location,
        description: emergencyData.description,
      });
      setIsEditing(true);
    }
  };

  return (
    <div className="view-data-section">
      <h3>Submitted Emergency Details</h3>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {emergencyData ? (
        <div className="emergency-card">
          <p><strong>Name:</strong> {emergencyData.fullName}</p>
          <p><strong>Phone:</strong> {emergencyData.phoneNumber}</p>
          <p><strong>Type:</strong> {emergencyData.emergencyType}</p>
          <p><strong>Location:</strong> {emergencyData.location}</p>
          <p><strong>Description:</strong> {emergencyData.description}</p>

          {emergencyData.viewed ? (
            <p style={{ color: "green" }}>✔️✔️ Viewed by Admin</p>
          ) : (
            <p style={{ color: "orange" }}>📪 Awaiting Admin Review</p>
          )}
          <button onClick={handleDelete} className="delete-btn">
            <FaTrash />
          </button>
          <button onClick={startEditing} className="update-btn">
            <FaEdit />
          </button>
        </div>
      ) : (
        <p>No emergency data submitted yet.</p>
      )}
    </div>
  );
};

// Main Form component
const Form = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    emergencyType: "",
    location: "",
    description: "",
  });
  const [refreshKey, setRefreshKey] = useState(0);
  const [loadingLocation, setLoadingLocation] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const getLocation = () => {
    if (!navigator.geolocation) {
      toast.error("Geolocation is not supported by your browser.");
      return;
    }

    setLoadingLocation(true);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const locationString = `Lat: ${latitude}, Lng: ${longitude}`;
        setFormData((prev) => ({ ...prev, location: locationString }));
        setLoadingLocation(false);
      },
      (error) => {
        toast.error("Failed to get your location.");
        console.error("Geolocation error:", error);
        setLoadingLocation(false);
      }
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isEditing) {
        const id = localStorage.getItem("id");
        await axios.put(`${baseURL}/api/emergency/${id}`, formData);
        toast.success("Emergency data updated successfully.");
        setIsEditing(false);
      } else {
        const response = await axios.post(`${baseURL}/api/emergency`, formData);
        toast.success("Emergency request sent. Help is on the way!");
        localStorage.setItem("id", response.data.data._id);
      }

      setFormData({
        fullName: "",
        phoneNumber: "",
        emergencyType: "",
        location: "",
        description: "",
      });
      setRefreshKey((oldKey) => oldKey + 1);
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="emergency-form-section">
      <h2>{isEditing ? "Update Emergency Details" : "Immediate Emergency Help"}</h2>
      <form onSubmit={handleSubmit} className="emergency-form">
        <input
          type="text"
          name="fullName"
          placeholder="Your Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phoneNumber"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />

        <select
          name="emergencyType"
          value={formData.emergencyType}
          onChange={handleChange}
          required
        >
          <option value="">Select Emergency Type</option>
          <option value="medical">Medical</option>
          <option value="fire">Fire</option>
          <option value="accident">Accident</option>
          <option value="violence">Violence</option>
          <option value="security">Security</option>
          <option value="other">Other</option>
        </select>

        <div className="location-input-group">
          <input
            type="text"
            name="location"
            placeholder="Current Location"
            value={formData.location}
            onChange={handleChange}
            required
          />
          <button type="button" onClick={getLocation} className="gps-btn">
            {loadingLocation ? "Locating..." : "Use My Location"}
          </button>
        </div>

        <textarea
          name="description"
          placeholder="Brief Description of the Emergency"
          value={formData.description}
          onChange={handleChange}
          rows="4"
          required
        ></textarea>

        <button type="submit" className="submit-btn">
          {isEditing ? "Update Emergency" : "Send SOS"}
        </button>
      </form>

      <ViewData
        formData={formData}
        setFormData={setFormData}
        setIsEditing={setIsEditing}
        refreshKey={refreshKey}
      />
    </div>
  );
};

export default Form;
