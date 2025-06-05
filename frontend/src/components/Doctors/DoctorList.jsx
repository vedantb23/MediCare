import React from 'react'
import { Link } from 'react-router-dom'
import DoctorCrd from './DoctorCrd'
import {BASE_URL} from "../../../config"
import { toast } from 'react-toastify'
import UsefetchData from './../../hooks/UsefetchData'
import { HashLoader } from "react-spinners"; 

const DoctorList = () => {
  const {data:doctors,loading,error}=UsefetchData(`${BASE_URL}/doctors`)
  return (
    <>
      {loading && <HashLoader size={40} color="#4f46e5" />}
      {error && <h1>Error occurred while fetching data...</h1>}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-1 mt-[55px]">
        {!loading &&
          !error &&
          doctors.map((doctor) => (
            <div className="flex justify-center items-center h-fit">
              <DoctorCrd key={doctor._id} doctor={doctor} />
            </div>
          ))}
      </div>
    </>
  );
}

export default DoctorList
