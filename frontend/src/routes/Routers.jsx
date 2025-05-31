import React from 'react'
import Home from '../pages/Home'
import Services from '../pages/Services'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Contact from '../pages/Contact'
import Doctors from "../pages/Doctors/Doctors"
import DoctorDetails from "../pages/Doctors/DoctorDetails";
import { Link } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/doctors/:id" element={<DoctorDetails />} />
      <Route path="/services" element={<Services />} />
      <Route
        path="*"
        element={
          <>
            <h1 className="text-center text-4xl">
              This Page is under Construction{" "}
            </h1>
            <p className="text-center">
              If you have any questions, feel free to{" "}
              <Link to="/contact" className="text-blue-500">
                contact us
              </Link>
              .
            </p>
            <p className='flex justify-center'>
              <Link to="/" className="btn text-gray-500 text-center">
                Go back to Home
              </Link>{" "}
            </p>
          </>
        }
      />
    </Routes>
  );
}

export default Routers
