import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from './Components/Footer/Footer'
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Form from './Pages/Form/Form'
import Admin from './Pages/responder/Admins/Admins'
import PoliceDepartment from './Pages/responder/Admins/_Layouts/Stations/PoliceDepartment/PoliceDepartment'
import PoliceViewsEmergencies from './Pages/responder/Admins/_Layouts/Stations/PoliceDepartment/PoliceViewEmergencies/PoliceViewsEmergencies'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<h1>Contact</h1>} />
        <Route path="/inform" element={<Form />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/station/police" element={<PoliceDepartment /> } />
        <Route path="/station/police/view" element={<PoliceViewsEmergencies /> } />

      </Routes>
      <ToastContainer position='top-right' autoClose={4000} />
      <Footer />
    </div>
  );
};
export default App;
