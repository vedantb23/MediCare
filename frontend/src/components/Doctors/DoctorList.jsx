import React from 'react'
import { doctors } from './../../assets/data/doctors'
import { Link } from 'react-router-dom'
import DoctorCrd from './DoctorCrd'
const DoctorList = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 mt-[55px]">
      {doctors.map((doctor) => (
        <Link to={`/doctors/${doctor.id}`} key={doctor.id}>
          <DoctorCrd doctor={doctor} />
        </Link>
      ))}
    </div>
  );
}

export default DoctorList
