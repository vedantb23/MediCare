import React from "react";
import starIcon from "../../assets/images/Star.png";
import doctorkiimage from "../../assets/images/doctor-illustration.png";
import { Link } from "react-router-dom";
import { BiSolidArrowToRight } from "react-icons/bi";
import { useState,useEffect } from "react";

const DoctorCrd = ({ doctor }) => {
  if (!doctor)  return null;
  const {
    _id,
    name,
    averageRating,
    totalRating,
    photo,
    specialization,
    experiences,
    bio,
    qualifications,
    timeSlots,
  } = doctor;


  return (
    <>
      {/* <div className="h-[20px]"></div> */}
      <div className="flex flex-col items-center  bg-slate-200 rounded-3xl w-[290px] bg-linear-300  shadow-2xl hover:shadow-3xl transition-all duration-300 ease-in-out hover:scale-[1.03] hover:shadow-indigo-300">
        <div className="h-[20px]"></div>
        <div className="p-3 lg:p-5 rounded-lg shadow-md  hover:shadow-cyan-300 hover:shadow-lg transition-shadow duration-300 flex justify-center">
          <img
            src={photo || doctorkiimage}
            alt={name}
            className="w-[220px] object-cover rounded-xl "
          />
        </div>
        <duv className="space h-[5px] "></duv>
        <span className="text-[18px] leading-7 font-[600] mt-4 flex gap-[10px]">
          {name}
          <div className="relative group flex items-center cursor-pointer">
            {/* Rounded green bg with white checkmark */}
            <div className="w-6 h-6 rounded-full bg-green-500 flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            {/* Tooltip popup */}
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 bg-white text-gray-900 text-sm rounded-md shadow-lg p-3 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-300 z-10">
              <p>
                This doctor is <strong>verified</strong> by our verification
                team. All credentials have been thoroughly checked.
              </p>
            </div>
          </div>
        </span>

        <div className="mt-3 flex gap-3 items-center justify-between">
          Specialization:
          <span className="bg-[#CCF0F3] text-cyan-500  text-[18px] font-semibold mx-4 my-5 rounded-md">
            {specialization}
          </span>
          <span className="flex items-center gap-[6px] text-[14px] leading-7">
            <img src={starIcon} alt="rating" />
            {averageRating} ({totalRating})
          </span>
        </div>

        <div>
          <strong className="font-semibold text-gray-900 text-[15px] ">
            Qualifications:
          </strong>{" "}
          <ul>
            {qualifications.map((item, index) => (
              <li key={index} className="flex flex-col items-start">
                <p className="text-[15px]">Degree: {item.degree}</p>
                <p className="text-[15px]">University: {item.university}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* <h3 className="text-[16px] leading-6 font-[500] mt-2">
        +{totalPatients} Patients
        </h3> */}

        <div>
          <strong className="font-semibold text-gray-900 text-[15px]">
            Experiences:
          </strong>{" "}
          <ul>
            {experiences?.map((item, index) => (
              <li key={index} className="flex flex-col items-start">
                <p className="text-[15px]">Position: {item.position}</p>
                <p className="text-[15px]">Hospital: {item.hospital}</p>
              </li>
            ))}
          </ul>
        </div>
        {/* time slosy  */}
        <div className="mt-4">
          <strong className="text-red-600 font-medium block mb-2 text-center text-xl">
            Time Slots
          </strong>
          <div className="flex flex-col items-center space-y-2">
            {timeSlots?.map((slot, index) => (
              <div
                key={index}
                className="text-red-600 text-base flex flex-row gap-[5px] font-medium flex items-center space-x-2"
              >
                <span className="capitalize">{slot.day}</span>
                <span>–</span>
                <span>from</span>
                <span>{slot.startingTime}</span>
                <span>to</span>
                <span>{slot.endingTime}</span>
              </div>
            ))}
          </div>
        </div>

        <Link
          to={`/doctors/${_id}`}
          className="bg-blue-600 rounded-full mt-3 flex items-center m-8 gap-2 text-white hover:scale-110 transition-transform duration-300 ease-in-out hover:text-gray-400"
        >
          <span className="text-[16px] leading-6 font-[500] ">
            View Details
          </span>
          <BiSolidArrowToRight className="text-[20px]" />
        </Link>
      </div>

      {/* <div className="w-[50px]"></div> */}
    </>
  );
};

export default DoctorCrd;
