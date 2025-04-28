import React from 'react';
import { Link } from 'react-router-dom';
import './Admins.css'; // (optional) if you want to style it

const Admins = () => {
  const stations = [
    { name: "Police Department", path: "/station/police" },
    { name: "Fire Department", path: "/station/fire" },
    { name: "Medical Services", path: "/station/medical" },
    { name: "Disaster Management", path: "/station/disaster" },
    { name: "Rescue Operations", path: "/station/rescue" },
    { name: "Ambulance Dispatch", path: "/station/ambulance" },
    { name: "Traffic Control", path: "/station/traffic" },
    { name: "Security Services", path: "/station/security" },
    { name: "Coast Guard", path: "/station/coastguard" },
    { name: "Environmental Services", path: "/station/environmental" },
    { name: "Search and Recovery", path: "/station/recovery" },
    { name: "Community Response", path: "/station/community" },
    { name: "Hazmat Team", path: "/station/hazmat" },
  ];

  return (
    <div className="admins">
      <h1>Admins Dashboard</h1>
      <p>Choose your station to manage:</p>
      <div className="admins__stations">
        {stations.map((station, index) => (
          <Link key={index} to={station.path} className="station-link">
            {station.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Admins;
