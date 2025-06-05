import React from 'react'
import  useGetProfile  from "../../hooks/UsefetchData"
import { useState,useEffect } from 'react';
import { PacmanLoader } from "react-spinners";
import {BASE_URL} from "../../../config"
import Tabs from './Tabs';
import starIcon from "../../assets/images/Star.png"
import DoctorAbout from "../../pages/Doctors/DoctorAbout"
import Doctorimg from "../../assets/images/doctor-img02.png";
import Profile from './Profile';
import Appointments from './Appointments';
import { toast } from 'react-toastify';
const Dashboard = () => {
  const { data, loading, error } = useGetProfile(`${BASE_URL}/doctors/profile/me`)
  const [appointments, setAppointments] = useState([]);
  const [tab, settab] = useState("overview")
  const updateBookingStatus = async (bookingId, newStatus) => {
    try {
      const response = await fetch(`${BASE_URL}/bookings/${bookingId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!response.ok) {
        throw new Error("Failed to update booking status");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error updating booking status:", error);
      throw error; // rethrow for caller to handle
    }
  };

  useEffect(() => {
    const fetchDoctorBookings = async () => {
      if (data?._id) {
        try {
          const res = await fetch(
            `${BASE_URL}/doctors/appointments/my-appointments`,
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          );
          const result = await res.json();

          if (res.ok) {
            setAppointments(result.data);
            toast.success("Appointments Fetched!");
          } else {
            toast.error(result.message || "Failed to fetch bookings");
          }
        } catch (error) {
          toast.error("Error fetching bookings");
        }
      }
    };

    fetchDoctorBookings();
  }, [data]);
  
  

  return (
    <>
      <div className="h-[50px] "></div>
      <section className="flex flex-row justify-center items-center gap-30">
        <div className="max-w-[1170px] px-5 mx-auto ">
          {loading && !error && (
            <div className="flex justify-center items-center w-full h-full">
              <PacmanLoader color="#36d7b7" size={50} />
            </div>
          )}
          {error && !loading && toast("Sorry! Try Again ")}
          {!loading && !error && (
            <div className="grid grid-cols-1 lg:grid-col-2 gap-10 cursor-pointer">
              <Tabs tab={tab} settab={settab} />
            </div>
          )}
        </div>

        <div className="conatin2 flex flex-col ">
          <div className="relative top-0 py-0 ">  
            {data.isApproved === "pending" && (
              <div className="flex  text-yellow-800 bg-yellow-100 rounded-lg w-fit text-[14px]">
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zm-1 9a1 1 0 000-2v-3a1 1 0 00-1-1H9a1 1 0 100 2v3a1 1 0 001 1h1z"
                    clipRule="evenodd"
                  />
                </svg>

                <span className="sr-only"> Info</span>
                <div>
                  To get approval please complete your profile. We will review
                  you profile mannualy and approve within 48 hours.
                </div>
              </div>
            )}
          </div>
            
          <div className="mt-3">
            {tab === "overview" && (
              <div className="flex flex-row gap-20">
                <div className="flex flex-col gap-2 justify-center items-center">
                  <div className="flex items-center gap-4 mb-10 ">
                    <figure className="max-w-[200px] max-h[200px] rounded-lg transition-shadow duration-300 hover:shadow-lg hover:shadow-blue-600/50 ">
                      <img
                        src={data?.photo || Doctorimg}
                        alt=""
                        className="w-[300px]"
                      />
                    </figure>
                  </div>
                  <span className="bg-blue-200 px-2 py-1 lg:px-6 lg:py-4 rounded-md text-[18px] leading-5 font-semibold ">
                    Specialization: {data.specialization}
                  </span>

                  <h3 className="text-[22px] leading-9 font-bold mt-3 ">
                    {data.name}
                  </h3>

                  <div className="flex items-center gap-[6px]  ">
                    <span className="flex items-center gap-[6px] text-[15px] leading-3.5 font-semibold">
                      <img src={starIcon} alt="" />
                      4.2
                    </span>
                    <span className="text-[12px] ">(15)</span>
                  </div>

                  <div className="text_para font-[15px] max-w-[350px] leading-5 ">
                    Bio: {data?.bio}
                  </div>
                </div>
                <div className="scale-80 ">
                  <DoctorAbout
                    name={data.name}
                    about={data.about}
                    qualifications={data.qualifications}
                    experiences={data.experiences}
                    phone={data.phone}
                    timeSlots={data.timeSlots}
                  />
                </div>
              </div>
            )}
            {tab === "appointments" && (
              <Appointments
                appointments={appointments}
                updateBookingStatus={updateBookingStatus}
               />
            )}
            {tab === "settings" && <Profile doctorData={data} />}
          </div>
        </div>
      </section>
      <div className="h-[40px]"></div>
    </>
  );
}

export default Dashboard
