import React, { useState } from "react";

const statusColors = {
  approved: "bg-green-100 text-green-800",
  pending: "bg-yellow-100 text-yellow-800",
  rejected: "bg-red-100 text-red-800",
};

const statusOptions = ["pending", "approved", "rejected"];

const Appointments = ({ appointments, updateBookingStatus }) => {
  // Local copy of status for instant UI update
  const [localStatus, setLocalStatus] = useState(() =>
    appointments.reduce((acc, a) => {
      acc[a._id] = a.status || "pending";
      return acc;
    }, {})
  );

  const handleStatusChange = async (appointmentId, newStatus) => {
    // Optimistic UI update
    setLocalStatus((prev) => ({ ...prev, [appointmentId]: newStatus }));

    try {
      await updateBookingStatus(appointmentId, newStatus);
      // Success - maybe notify user here
    } catch (err) {
      alert("Error updating status, please try again.");
      // Revert to old status on failure
      setLocalStatus((prev) => ({
        ...prev,
        [appointmentId]:
          appointments.find((a) => a._id === appointmentId)?.status ||
          "pending",
      }));
    }
  };

  if (!appointments || appointments.length === 0) {
    return (
      <div className="py-10 text-center text-gray-600 text-lg">
        No appointments found.
      </div>
    );
  }

  return (
    <>
      <div className="h-[20px]" />
      <div className="overflow-x-auto rounded-xl">
        <table className="w-full min-w-[900px] text-left text-sm text-gray-700">
          <thead className="text-sm text-gray-700 uppercase bg-gray-100 border-b text-center">
            <tr>
              <th className="px-4 py-3">Patient</th>
              <th className="px-4 py-3">Gender</th>
              <th className="px-4 py-3">Payment Status</th>
              <th className="px-4 py-3">Price</th>
              <th className="px-4 py-3">Appointment Date</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((item) => (
              <tr
                key={item._id}
                className="bg-white border-b last:border-b-0 hover:bg-gray-50 transition text-center"
              >
                <td className="flex items-center px-4 py-3 whitespace-nowrap">
                  <img
                    src={item.user?.photo || "/default-avatar.png"}
                    alt={`${item.user?.name || "Patient"} avatar`}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="pl-3 text-left">
                    <div className="font-semibold text-gray-900">
                      {item.user?.name || "Unknown"}
                    </div>
                    <div className="text-xs text-gray-500 truncate max-w-[180px]">
                      {item.user?.email || "No email"}
                    </div>
                  </div>
                </td>

                <td className="px-4 py-3">{item.user?.gender || "N/A"}</td>

                <td className="px-4 py-3">
                  {item.isPaid ? (
                    <span className="inline-block rounded-full bg-green-100 text-green-800 px-3 py-1 text-xs font-semibold">
                      PAID
                    </span>
                  ) : (
                    <span className="inline-block rounded-full bg-red-100 text-red-700 px-3 py-1 text-xs font-semibold">
                      UNPAID
                    </span>
                  )}
                </td>

                <td className="px-4 py-3">
                  ₹
                  {item.ticketPrice ? Number(item.ticketPrice).toFixed(2) : "0"}
                </td>

                <td className="px-4 py-3">
                  {item.appointmentDate
                    ? new Date(item.appointmentDate).toLocaleDateString(
                        "en-IN",
                        {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        }
                      )
                    : "N/A"}
                </td>

                <td className="px-4 py-3">
                  <select
                    className={`cursor-pointer rounded px-2 py-1 text-sm font-semibold ${
                      localStatus[item._id]
                        ? statusColors[localStatus[item._id]]
                        : ""
                    }`}
                    value={localStatus[item._id] || "pending"}
                    onChange={(e) =>
                      handleStatusChange(item._id, e.target.value)
                    }
                  >
                    {statusOptions.map((status) => (
                      <option key={status} value={status}>
                        {status.charAt(0).toUpperCase() + status.slice(1)}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Appointments;


// cuurentluy perfect except statsus approved

// import React from "react";

// const Appointments = ({ appointments }) => {
//   if (!appointments || appointments.length === 0) {
//     return (
//       <div className="py-10 text-center text-gray-600 text-lg">
//         No appointments found.
//       </div>
//     );
//   }

//   return (
//     <>
//       {/* {console.log(appointments)} */}
//       <div className="h-[20px] " />
//       <div className="overflow-x-auto rounded-xl ">
//         <table className="w-full min-w-[800px] text-left text-sm text-gray-700">
//           <thead className="text-sm text-gray-700 uppercase bg-gray-100 border-b text-center">
//             <tr>
//               <th className="px-4 py-3">Patient</th>
//               <th className="px-4 py-3">Gender</th>
//               <th className="px-4 py-3">Payment Status</th>
//               <th className="px-4 py-3">Price</th>
//               <th className="px-4 py-3">Appointment Date</th>
//             </tr>
//           </thead>
//           <tbody>
//             {appointments.map((item) => {
//               return (
//                 // <-- ADD THIS RETURN
//                 <tr
//                   key={item._id}
//                   className="bg-white border-b last:border-b-0 hover:bg-gray-50 transition text-center "
//                 >
//                   <td className="flex items-center px-4 py-3 whitespace-nowrap">
//                     <img
//                       src={item.user?.photo || "/default-avatar.png"}
//                       alt={`${item.user?.name || "Patient"} avatar`}
//                       className="w-10 h-10 rounded-full object-cover"
//                     />
//                     <div className="pl-3">
//                       <div className="font-semibold text-gray-900">
//                         {item.user?.name || "Unknown"}
//                       </div>
//                       <div className="text-xs text-gray-500 truncate max-w-[180px]">
//                         {item.user?.email || "No email"}
//                       </div>
//                     </div>
//                   </td>

//                   <td className="px-4 py-3">{item.user?.gender || "N/A"}</td>

//                   <td className="px-4 py-3">
//                     {item.isPaid ? (
//                       <span className="inline-block rounded-full bg-green-100 text-green-800 px-3 py-1 text-xs font-semibold">
//                         PAID
//                       </span>
//                     ) : (
//                       <span className="inline-block rounded-full bg-red-100 text-red-700 px-3 py-1 text-xs font-semibold">
//                         UNPAID
//                       </span>
//                     )}
//                   </td>

//                   <td className="px-4 py-3">
//                     ₹
//                     {item.ticketPrice
//                       ? Number(item.ticketPrice).toFixed(2)
//                       : "0"}
//                   </td>

//                   <td className="px-4 py-3">
//                     {item.createdAt
//                       ? new Date(item.appointmentDate).toLocaleDateString(
//                           "en-IN",
//                           {
//                             year: "numeric",
//                             month: "short",
//                             day: "numeric",
//                           }
//                         )
//                       : "N/A"}
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
// };

// export default Appointments;
