import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import starIcon from "../../assets/images/Star.png";
import DoctorAbout from "./DoctorAbout";
import Feedback from "./Feedback";
import SidePanel from "./SidePanel";

import { token } from "../../../config";
import { BASE_URL } from "../../../config";

import RotatingTriangles from "some-spinner-library";

const DoctorDetails = () => {
  const { id } = useParams();
  const user = JSON.parse(localStorage.getItem("user"));
// console.log(user)
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tab, setTab] = useState("about");

  useEffect(() => {
    const fetchDoctor = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${BASE_URL}/doctors/${id}`);

        if (!response.ok) {
          throw new Error("Doctor not found");
        }
        const data = await response.json();
        setDoctor(data.data);
        // console.log(data);
      } catch (err) {
        setError(err.message);
      }
      setLoading(false);
    };

    fetchDoctor();
  }, [id]);

  if (loading) {
    return (
      <RotatingTriangles
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="rotating-triangles-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    );
  }

  if (error) {
    return (
      <div className="text-center mt-20 text-red-500 font-semibold">
        {error}
      </div>
    );
  }

  return (
    <>
      <div className="flex mx-auto w-full justify-center items-start">
        <section className="flex flex-row gap-1 justify-center items-center mx-auto">
          <div className="container flex flex-col items-center justify-center gap-1 mt-10 w-full ">
            <div className="flex items-center gap-5">
              <figure className="max-w-[200px] max-h-[200px]">
                <img
                  src={doctor.photo}
                  alt={doctor.name}
                  className="w-full rounded-md"
                />
              </figure>

              <div>
                <span className="bg-[#CCF0F3] text-blue-600 py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">
                  Specialization: {doctor.specialization}
                </span>

                <h3 className="text-gray-800 text-[22px] leading-9 mt-3 font-bold">
                  {doctor.name}
                </h3>

                <p className="text-[15px] text-gray-500 font-medium mb-2">
                  Hospital:{doctor.experiences[5]}
                </p>

                <div className="flex items-center gap-[6px] mt-2">
                  <span className="flex items-center gap-[6px] text-[14px] lg:text-[16px] font-semibold text-gray-800">
                    <img src={starIcon} alt="star" className="w-4 h-4" />
                    {doctor.avgRating}
                  </span>
                  <span className="text-[14px] lg:text-[16px] font-normal text-gray-500">
                    ({doctor.totalRating})
                  </span>
                </div>

                <p className="text-gray-600 text-[14px] md:text-[15px] leading-5 max-w-[390px] mt-2">
                  Bio:{doctor.bio}
                </p>
              </div>
            </div>

            <div className="mt-[50px] border-b flex justify-center items-center  flex-row gap-[30px] border-solid border-b-gray-800">
              <button
                className={`py-2 px-5 mr-5 text-[18px] leading-6 transition-colors ${
                  tab === "about"
                    ? "border-b-2 border-blue-600 font-semibold text-blue-600 hover:cursor-pointer"
                    : "text-gray-600  hover:cursor-pointer "
                }`}
                onClick={() => setTab("about")}
              >
                About
              </button>

              <button
                className={`py-2 px-5 mr-5 text-[18px]   hover:cursor-pointer leading-6 transition-colors ${
                  tab === "feedback"
                    ? "border-b-2 border-blue-600 font-semibold text-blue-600"
                    : "text-gray-600  hover:cursor-pointer "
                }`}
                onClick={() => setTab("feedback")}
              >
                Feedback
              </button>
            </div>
            {tab === "about" && (
              <div className="scale-90">
                <DoctorAbout
                  name={doctor.name}
                  about={doctor.bio}
                  qualifications={doctor.qualifications}
                  experiences={doctor.experiences}
                  phone={doctor.phone}
                  timeSlots={doctor.timeSlots}
                />
              </div>
            )}
            {tab === "feedback" && (
              <Feedback
                reviews={doctor.reviews}
                totalRating={doctor.totalRating}
              />
            )}
          </div>
        </section>
        <div className="w-[40px]"></div>
        <div className="side w-[350px] top-48 ">
          <SidePanel
            doctorId={doctor._id}
            userId={user?._id}
            ticketPrice={doctor.ticketPrice}
            timeSlots={doctor.timeSlots}
            token={token}
          />  
        </div>
      </div>
      <div className="h-[50px]"></div>
    </>
  );
};

export default DoctorDetails;

// olf

// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import { doctors } from "../../assets/data/doctors";
// import starIcon from "../../assets/images/Star.png";
// import  DoctorAbout  from "./DoctorAbout";
// import Feedback from "./Feedback";
// import SidePanel from "./SidePanel";
// const DoctorDetails = () => {
//   const { id } = useParams();
//   const doctor = doctors.find((doc) => doc.id.toString() === id);
//   const [tab, setTab] = useState("about");

//   if (!doctor) {
//     return (
//       <div className="text-center mt-20 text-red-500 font-semibold">
//         Doctor not found!
//       </div>
//     );
//   }

//   return (
//     <>
//       <div className="flex mx-auto w-full justify-center items-start">
//         <section className="flex flex-row gap-1  justify-center items-center mx-auto">
//           <div className="container flex flex-col items-center justify-center gap-1 mt-10 w-2/3 ">
//             <div className="flex items-center gap-5">
//               {/* Doctor Image */}
//               <figure className="max-w-[200px] max-h-[200px]">
//                 <img
//                   src={doctor.photo}
//                   alt={doctor.name}
//                   className="w-full rounded-md"
//                 />
//               </figure>

//               {/* Doctor Details */}
//               <div>
//                 <span className="bg-[#CCF0F3] text-blue-600 py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">
//                   {doctor.specialization}
//                 </span>

//                 <h3 className="text-gray-800 text-[22px] leading-9 mt-3 font-bold">
//                   {doctor.name}
//                 </h3>

//                 {/* Hospital Name */}
//                 <p className="text-[15px] text-gray-500 font-medium mb-2">
//                   {doctor.hospital}
//                 </p>

//                 {/* Rating */}
//                 <div className="flex items-center gap-[6px] mt-2">
//                   <span className="flex items-center gap-[6px] text-[14px] lg:text-[16px] font-semibold text-gray-800">
//                     <img src={starIcon} alt="star" className="w-4 h-4" />
//                     {doctor.avgRating}
//                   </span>
//                   <span className="text-[14px] lg:text-[16px] font-normal text-gray-500">
//                     ({doctor.totalRating})
//                   </span>
//                 </div>

//                 {/* Description */}
//                 <p className="text-gray-600 text-[14px] md:text-[15px] leading-5 max-w-[390px] mt-2">
//                   {doctor.bio}
//                 </p>
//               </div>
//             </div>

//             {/* Tabs */}
//             <div className="mt-[50px] border-b flex flex-row gap-[30px] border-solid border-b-gray-800">
//               <button
//                 className={`py-2 px-5 mr-5 text-[16px] leading-6 transition-colors ${
//                   tab === "about"
//                     ? "border-b-2 border-blue-600 font-semibold text-blue-600"
//                     : "text-gray-600"
//                 }`}
//                 onClick={() => setTab("about")}
//               >
//                 About
//               </button>

//               <button
//                 className={`py-2 px-5 mr-5 text-[16px] leading-6 transition-colors ${
//                   tab === "feedback"
//                     ? "border-b-2 border-blue-600 font-semibold text-blue-600"
//                     : "text-gray-600"
//                 }`}
//                 onClick={() => setTab("feedback")}
//               >
//                 Feedback
//               </button>
//             </div>
//             {tab === "about" && <DoctorAbout doctor={doctor} />}
//             {tab === "feedback" && <Feedback doctor={doctor} />}
//           </div>
//         </section>
//         <div className="side w-[280px] top-48">
//           <SidePanel
//             ticketPrice={doctor.ticketPrice}
//             timeSlots={doctor.timeSlots}
//           />
//         </div>
//       </div>
//       <div className="h-[50px]"></div>
//     </>
//   );
// };

// export default DoctorDetails;
