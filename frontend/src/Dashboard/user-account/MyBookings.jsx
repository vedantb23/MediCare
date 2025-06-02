import React from 'react'
import UsefetchData from '../../hooks/UsefetchData';
import { BASE_URL } from '../../../config';
import DoctorCrd from "../../components/Doctors/DoctorCrd"
import { PacmanLoader } from "react-spinners";
const MyBookings = () => {
    const { data: appointments,loading,error } = UsefetchData(
      `${BASE_URL}/users/appointments/my-appointments`
    );
    return <div>
      
        {loading && !error && (
                    <div className="flex justify-center items-center w-full h-full">
                      <PacmanLoader color="#36d7b7" size={50} />
                    </div>
                  )}
        {error && !loading && toast("Sorry! Try Again ")}
        {!loading && !error && (<div className='grid grid-cols-1 lg:grid-col-2 gap-5 '>
            {appointments.map(doctor => {
                <DoctorCrd doctor={doctor} key={doctor._id}/>
            })}

        </div>)}
        
        {!loading && !error && appointments.length===0 && (<h2> You have not boooked any appointment yet </h2>)}
  </div>;
}

export default MyBookings
