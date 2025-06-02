

import React from "react";

const DoctorAbout = ({
  name,
  about,
  qualifications,
  experiences,
  phone,
  timeSlots,
}) => {
  return (
    <div className=" w-[25vw]  mx-auto my-12 p-8 bg-white rounded-lg transition-shadow duration-300 hover:shadow-lg hover:shadow-blue-600/50  flex flex-col justify-center items-center">
      <h2 className="text-2xl font-bold mb-6 text-center">About {name}</h2>

      {/* Doctor Info Section */}
      <div className="space-y-4 text-xl text-gray-800">
        <p>
          <strong className="font-semibold text-gray-900">Biography:</strong>{" "}
          {about}
        </p>

        <div>
          <strong className="font-semibold text-gray-900 text-[22px] ">
            Qualifications:
          </strong>{" "}
          <ul>
            {qualifications?.map((item, index) => (
              <li key={index} className="flex flex-col items-start">
                <span className="text-[20px]">
                  {item.startingDate} - {item.endingDate}
                </span>
                <p className="text-[20px]">Degree: {item.degree}</p>
                <p className="text-[20px]">University: {item.university}</p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <strong className="font-semibold text-gray-900 text-[22px]">
            Experiences:
          </strong>{" "}
          <ul>
            {experiences?.map((item, index) => (
              <li key={index} className="flex flex-col items-start">
                <span className="text-[20px]">
                  {item.startingDate} - {item.endingDate}
                </span>
                <p className="text-[20px]">Position: {item.position}</p>
                <p className="text-[20px]">Hospital: {item.hospital}</p>
              </li>
            ))}
          </ul>
        </div>

        <p>
          <strong className="font-semibold text-gray-900">Contact: </strong> +91
          {phone}
        </p>

        <div>
          <strong className=" text-red-600 font-medium mt-1">
            Time Slots:{" "}
          </strong>
          <ul>
            {timeSlots?.map((item, index) => (
              <li key={index} className="flex flex-col items-start mb-2">
                <span className="text-[20px] text-red-600 ">
                  {item.startingTime} - {item.endingTime}
                </span>

                <p className="text-[18px] font-medium mt-1 text-red-600">
                  {" "}
                  Available Days:
                </p>
                <ul className="ml-4 list-none flex gap-5 flex-wrap text-red-600">
                  {item.selectedDays?.map((day, idx) => (
                    <li key={idx} className="text-[15px]">
                      {day}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DoctorAbout;



// old code 

// import React from "react";
// import { useParams } from "react-router-dom";
// import { doctors } from "../../assets/data/doctors";

// const DoctorAbout = ({ name, about, qualifications, experiences }) => {
//   const { id } = useParams();
//   const doctor = doctors.find((doc) => String(doc.id) === String(id));

//   if (!doctor) {
//     return (
//       <div className="text-center text-red-500 mt-8">Doctor not found.</div>
//     );
//   }

//   return (
//     <div className="max-w-4xl mx-auto my-12 p-8 bg-white rounded-lg shadow-md">
//       <h2 className="text-3xl font-bold mb-6 text-center">
//         About {doctor.name}
//       </h2>

//       {/* Doctor Info Section */}
//       <div className="space-y-4 text-lg text-gray-800">
//         <p>
//           <strong className="font-semibold text-gray-900">
//             Specialization:
//           </strong>{" "}
//           {doctor.specialization}
//         </p>

//         <p>
//           <strong className="font-semibold text-gray-900">Hospital:</strong>{" "}
//           {doctor.hospital}
//         </p>

//         <p>
//           <strong className="font-semibold text-gray-900">Experience:</strong>{" "}
//           {doctor.experience} years
//         </p>

//         <p>
//           <strong className="font-semibold text-gray-900">Biography:</strong>{" "}
//           {doctor.bio}
//         </p>

//         <p>
//           <strong className="font-semibold text-gray-900">
//             Average Rating:
//           </strong>{" "}
//           {doctor.avgRating} ({doctor.totalRating} reviews)
//         </p>

//         <p>
//           <strong className="font-semibold text-gray-900">Email:</strong>{" "}
//           {doctor.email}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default DoctorAbout;
