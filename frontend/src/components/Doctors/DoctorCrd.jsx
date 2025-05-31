import React from 'react'
import starIcon from '../../assets/images/Star.png'
import { Link } from 'react-router-dom'
import { BiSolidArrowToRight } from "react-icons/bi";

const DoctorCrd = ({ doctor }) => {
  const {
      name,
      avgRating,
      totalRating,
      photo,
      specialization,
      totalPatients,
      hospital } = doctor;
  return (
    <>
      
      <div className='flex flex-col items-center '>
        <div className="p-3 lg:p-5  rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex justify-center">
          <img
            src={photo}
            alt={name}
            className="w-[220px]  object-cover rounded-md"
          />
        </div>
        <h2 className="text-[18px] leading-7 font-[700] mt-4 ">{name}</h2>

        <div className="mt-3 flex gap-3 items-center justify-netween ">
          <span className="bg-[#CCF0F3] text-cyan-500 py-1 px-2 text-[18px] leading-4 rounded ">
            {specialization}
          </span>

          <div className="flex items-baseline gap-[6px]">
            <span className="flex items-center gap-[6px] text-[14px] leading-7 ">
              <img src={starIcon} alt="" />
              {avgRating} ({totalRating})
            </span>
          </div>

        </div>
          <h3 className="text-[16px] leading-6 font-[500] mt-2">
            +{totalPatients} Patients
        </h3>
        <p className="text-[14px] leading-6 font-[400] mt-1">
          {hospital}
        </p>
      <Link to={`/doctors/${doctor.id}`} className=" bg-blue-600 rounded-full mt-3 flex items-center m-2 gap-2 text-white hover:text-cyan-700 transition-colors duration-300">
        <span className="text-[16px] leading-6 font-[500]">View Details</span>
        <BiSolidArrowToRight className="text-[20px]" />
      </Link>
    </div>
    </>
  );
}

export default DoctorCrd
