import React, { useState, useEffect } from "react";
import UsefetchData from "../../hooks/UsefetchData";
import { BASE_URL } from "../../../config";
import moment from "moment";
import DoctorCrd from "../../components/Doctors/DoctorCrd";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { PropagateLoader } from "react-spinners";

const MyBookings = () => {
  const { data, loading, error } = UsefetchData(
    `${BASE_URL}/users/appointments/my-appointments`
  );
  const [appointments, setAppointments] = useState([]);

  // Update local appointments state when data changes
  useEffect(() => {
    if (data) setAppointments(data);
  }, [data]);

  const [deletingId, setDeletingId] = useState(null);

  const handleDelete = async (bookingId) => {
    const token = localStorage.getItem("token");
    try {
      setDeletingId(bookingId);
      const res = await fetch(`${BASE_URL}/bookings/${bookingId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message || "Failed to delete");
      }

      toast.success("Appointment deleted successfully");

      // Update local appointments to remove deleted one
      setAppointments((prev) =>
        prev.filter((booking) => booking._id !== bookingId)
      );
    } catch (err) {
      toast.error(err.message || "Something went wrong");
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="px-4 py-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">My Appointments</h2>

      {loading && (
        <div className="flex justify-center items-center px-10  py-10">
          <PropagateLoader size={20} color="#4f46e5" />
        </div>
      )}

      {error && <p className="text-red-500 text-center">{error}</p>}

      {!loading && appointments.length === 0 && (
        <p className="text-gray-500 text-center">
          No appointments found. Please book first{" "}
          <Link
            to="/doctors"
            className="text-indigo-600 hover:underline font-semibold"
          >
            here
          </Link>
          .
        </p>
      )}

      <div className="max-w-[80vh]">
        {appointments.map((booking) => (
          <React.Fragment key={booking._id}>
            <div className="h-[10px]" />

            <div className="bg-gray-100 hover:shadow-cyan-400 shadow-xl rounded-2xl p-6 mb-5 flex flex-col md:flex-row justify-between gap-6">
              {/* Left Side: Booking Info */}
              <div className="flex-1 space-y-3 text-gray-700 text-sm">
                <div className="flex flex-wrap gap-4">
                  <div className="w-full sm:w-[45%]">
                    <p className="text-gray-500 text-xs">Appointment Date</p>
                    <p className="font-medium">
                      {moment(booking.appointmentDate).format("DD MMM YYYY")}
                    </p>
                  </div>

                  <div className="w-full sm:w-[45%]">
                    <p className="text-gray-500 text-xs">Ticket Price</p>
                    <p className="font-medium">₹{booking.ticketPrice}</p>
                  </div>

                  <div className="w-full sm:w-[45%]">
                    <p className="text-gray-500 text-xs">Status</p>
                    <p
                      className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                        booking.status === "pending"
                          ? "bg-yellow-100 text-yellow-800"
                          : booking.status === "approved"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {booking.status}
                    </p>
                  </div>

                  <div className="w-full sm:w-[45%]">
                    <p className="text-gray-500 text-xs">Paid</p>
                    <p className="font-medium">
                      {booking.isPaid ? "✅ Yes" : "❌ No"}
                    </p>
                  </div>

                  <div className="w-full">
                    <p className="text-gray-500 text-xs">Booking ID</p>
                    <p className="font-mono text-sm break-all">{booking._id}</p>
                  </div>
                </div>

                <button
                  onClick={() => handleDelete(booking._id)}
                  disabled={deletingId === booking._id}
                  className={`mt-4 px-4 py-2 rounded-md text-white text-sm font-semibold transition-transform duration-200 transform ${
                    deletingId === booking._id
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-red-600 hover:bg-red-700 hover:scale-105"
                  }`}
                >
                  {deletingId === booking._id
                    ? "Deleting..."
                    : "Delete booking"}
                </button>
              </div>

              {/* Right Side: Doctor Card */}
              <div className="w-full md:w-[250px] flex items-start justify-center h-[400px]">
                <div className="transform scale-[0.7] origin-top">
                  <DoctorCrd doctor={booking.doctor} compact />
                </div>
              </div>
            </div>

            <div className="h-[10px]" />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;


//new wokring final

// import React, { useState } from "react";
// import UsefetchData from "../../hooks/UsefetchData";
// import { BASE_URL } from "../../../config";
// import moment from "moment";
// import DoctorCrd from "../../components/Doctors/DoctorCrd";
// import { Link } from "react-router-dom";
// import { toast } from "react-toastify";
// import { ClimbingBoxLoader  } from "react-spinners";

// const MyBookings = () => {
//   const {
//     data: appointments,
//     loading,
//     error,
//     setData: setAppointments,
//   } = UsefetchData(`${BASE_URL}/users/appointments/my-appointments`);

//   const [deletingId, setDeletingId] = useState(null);
//   // const [appointments, setAppointments] = useState([]);

//   const handleDelete = async (bookingId) => {
//     const token = localStorage.getItem("token");
//     try {
//       setDeletingId(bookingId);
//       const res = await fetch(`${BASE_URL}/bookings/${bookingId}`, {
//         method: "DELETE",
//         credentials: "include",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`, // <--- important!
//         },
//       });

//       const result = await res.json();

//       if (!res.ok) {
//         throw new Error(result.message || "Failed to delete");
//       }

//       toast.success("Appointment deleted successfully");
//       setAppointments((prev) =>
//         prev.filter((booking) => booking._id !== bookingId)
//       );
//       await refetch();
//     } catch (err) {
//       toast.error(err.message || "Something went wrong");
//     } finally {
//       setDeletingId(null);
//     }
//   };

//   return (
//     <div className="px-4 py-6 max-w-xl mx-auto">
//       <h2 className="text-2xl font-bold mb-6">My Appointments</h2>

//       {loading && (
//         <div className="flex justify-center py-10">
//           <ClimbingBoxLoader  size={40} color="#4f46e5" />
//         </div>
//       )}

//       {error && <p className="text-red-500 text-center">{error}</p>}

//       {!loading && appointments.length === 0 && (
//         <p className="text-gray-500 text-center">
//           No appointments found. Please book first{" "}
//           <Link
//             to="/doctors"
//             className="text-indigo-600 hover:underline font-semibold"
//           >
//             here
//           </Link>
//           .
//         </p>
//       )}

//       <div className="max-w-[80vh]">
//         {appointments.map((booking) => (
//           <React.Fragment key={booking._id}>
//             <div className="h-[10px]" />

//             <div className="bg-gray-100 hover:shadow-indigo-400 shadow-md rounded-2xl p-6 mb-5 flex flex-col md:flex-row justify-between gap-6">
//               {/* Left Side: Booking Info */}
//               <div className="flex-1 space-y-3 text-gray-700 text-sm">
//                 <div className="flex flex-wrap gap-4">
//                   <div className="w-full sm:w-[45%]">
//                     <p className="text-gray-500 text-xs">Appointment Date</p>
//                     <p className="font-medium">
//                       {moment(booking.appointmentDate).format("DD MMM YYYY")}
//                     </p>
//                   </div>

//                   <div className="w-full sm:w-[45%]">
//                     <p className="text-gray-500 text-xs">Ticket Price</p>
//                     <p className="font-medium">₹{booking.ticketPrice}</p>
//                   </div>

//                   <div className="w-full sm:w-[45%]">
//                     <p className="text-gray-500 text-xs">Status</p>
//                     <p
//                       className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
//                         booking.status === "pending"
//                           ? "bg-yellow-100 text-yellow-800"
//                           : booking.status === "approved"
//                           ? "bg-green-100 text-green-800"
//                           : "bg-red-100 text-red-800"
//                       }`}
//                     >
//                       {booking.status}
//                     </p>
//                   </div>

//                   <div className="w-full sm:w-[45%]">
//                     <p className="text-gray-500 text-xs">Paid</p>
//                     <p className="font-medium">
//                       {booking.isPaid ? "✅ Yes" : "❌ No"}
//                     </p>
//                   </div>

//                   <div className="w-full">
//                     <p className="text-gray-500 text-xs">Booking ID</p>
//                     <p className="font-mono text-sm break-all">{booking._id}</p>
//                   </div>
//                 </div>

//                 <button
//                   onClick={() => handleDelete(booking._id)}
//                   disabled={deletingId === booking._id}
//                   className={`mt-4 px-4 py-2 rounded-md text-white text-sm font-semibold transition-transform duration-200 transform ${
//                     deletingId === booking._id
//                       ? "bg-gray-400 cursor-not-allowed"
//                       : "bg-red-600 hover:bg-red-700 hover:scale-105"
//                   }`}
//                 >
//                   {deletingId === booking._id ? "Deleting..." : "Delete booking"}
//                 </button>
//               </div>

//               {/* Right Side: Doctor Card */}
//               <div className="w-full md:w-[250px] flex items-start justify-center h-[400px]">
//                 <div className="transform scale-[0.7] origin-top">
//                   <DoctorCrd doctor={booking.doctor} compact />
//                 </div>
//               </div>
//             </div>

//             <div className="h-[10px]" />
//           </React.Fragment>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MyBookings;

// old without delete
// import React from "react";
// import UsefetchData from "../../hooks/UsefetchData";
// import { BASE_URL } from "../../../config";
// // import { Spinner } from "../../components/Spinner/Spinner";
// import moment from "moment";
// import DoctorCrd from "../../components/Doctors/DoctorCrd";

// const MyBookings = () => {
//   const {
//     data: appointments,
//     loading,
//     error,
//   } = UsefetchData(`${BASE_URL}/users/appointments/my-appointments`);

//   return (
//     <div className="px-4 py-6 max-w-xl mx-auto">
//       <h2 className="text-2xl font-bold mb-6">My Appointments</h2>

//       {loading && <div>Loading...</div>}
//       {error && <p className="text-red-500">{error}</p>}

//       {!loading && appointments.length === 0 && (
//         <p className="text-gray-500 text-center">
//           No appointments found.Please book first.
//         </p>
//       )}

//       <div className="max-w-[80vh] ">
//         {appointments.map((booking) => (
//           <>
//             <div className="h-[10px]"></div>
//             <div
//               key={booking._id}
//               className="bg-gray-100 hover:shadow-indigo-400 hite shadow-md rounded-2xl p-6 mb-5 flex flex-col md:flex-row justify-between gap-6  "
//             >
//               {/* Left Side: Booking Info */}
//               <div className="flex-1 space-y-3 text-gray-700 text-sm">
//                 <div className="flex flex-wrap gap-4">
//                   <div className="w-full sm:w-[45%]">
//                     <p className="text-gray-500 text-xs">Appointment Date</p>
//                     <p className="font-medium">
//                       {moment(booking.appointmentDate).format("DD MMM YYYY")}
//                     </p>
//                   </div>

//                   <div className="w-full sm:w-[45%]">
//                     <p className="text-gray-500 text-xs">Ticket Price</p>
//                     <p className="font-medium">₹{booking.ticketPrice}</p>
//                   </div>

//                   <div className="w-full sm:w-[45%]">
//                     <p className="text-gray-500 text-xs">Status</p>
//                     <p
//                       className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
//                         booking.status === "pending"
//                           ? "bg-yellow-100 text-yellow-800"
//                           : booking.status === "approved"
//                           ? "bg-green-100 text-green-800"
//                           : "bg-red-100 text-red-800"
//                       }`}
//                     >
//                       {booking.status}
//                     </p>
//                   </div>

//                   <div className="w-full sm:w-[45%]">
//                     <p className="text-gray-500 text-xs">Paid</p>
//                     <p className="font-medium">
//                       {booking.isPaid ? "✅ Yes" : "❌ No"}
//                     </p>
//                   </div>

//                   <div className="w-full">
//                     <p className="text-gray-500 text-xs">Booking ID</p>
//                     <p className="font-mono text-sm break-all">{booking._id}</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Right Side: Doctor Card */}
//               <div className="w-full md:w-[250px] flex items-start justify-center h-[400px]">
//                 <div className="transform scale-[0.7] origin-top">
//                   <DoctorCrd doctor={booking.doctor} compact />
//                 </div>

//               </div>

//             </div>
//             <div className="h-[10px]"></div>
//           </>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MyBookings;
