import React from 'react'
import { doctors } from './../../assets/data/doctors'
import DoctorCrd from './DoctorCrd'
const DoctorList = () => {
  return (
    <div className='grid grid-cols-2 lg:grid-cols-3 gap-5 mt-[55px]'>
      {doctors.map((doctor, index) => (
        <DoctorCrd key={index} doctor={doctor} />
      ))}
    </div>
  );
}

export default DoctorList
