import React from 'react'
import { Link } from 'react-router-dom'
import DoctorCrd from './DoctorCrd'
import {BASE_URL} from "../../../config"
import useFetchData from "./../../hooks/UsefetchData"
import { toast } from 'react-toastify'
import UsefetchData from './../../hooks/UsefetchData'
const DoctorList = () => {
  const {data:doctors,loading,error}=UsefetchData(`${BASE_URL}/doctors`)
  return (
    <>
      {loading && <h1>Please wait fetching data...</h1>}
      {error && <h1>Error occurred while fetching data...</h1>}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 mt-[55px]">
        {!loading &&
          !error &&
          doctors.map((doctor) => (
              <DoctorCrd doctor={doctor} key={doctor._id}  />
          ))}
      </div>
    </>
  );
}

export default DoctorList
