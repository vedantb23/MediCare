import React, { useState, useEffect } from "react";
import { BASE_URL, token } from "./../../../config";
import { toast } from "react-toastify";

const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Profile = ({ doctorData }) => {
  const [formData, setFormData] = useState({
    name: doctorData?.name || "",
    email: doctorData?.email || "",
    password: "",
    phone: doctorData?.phone || "",
    bio: doctorData?.bio || "",
    about: doctorData?.about || "",
    gender: doctorData?.gender || "",
    specialization: doctorData?.specialization || "",
    ticketPrice: doctorData?.ticketPrice || 0,
    qualifications:
      doctorData?.qualifications?.length > 0
        ? doctorData.qualifications
        : [
            {
              startingDate: "",
              startingYear: "",
              endingDate: "",
              endingYear: "",
              degree: "",
              university: "",
            },
          ],
    experiences:
      doctorData?.experiences?.length > 0
        ? doctorData.experiences
        : [
            {
              startingDate: "",
              startingYear: "",
              endingDate: "",
              endingYear: "",
              position: "",
              hospital: "",
            },
          ],
    timeSlots:
      doctorData?.timeSlots && doctorData.timeSlots.length > 0
        ? doctorData.timeSlots
        : [],
    photo: null,
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState(null);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreviewURL(URL.createObjectURL(file));
      setFormData({ ...formData, photo: file });
    }
  };

  const updateArrayItem = (key, index, field, value) => {
    const newArray = [...formData[key]];
    newArray[index] = { ...newArray[index], [field]: value };
    setFormData({ ...formData, [key]: newArray });
  };

  // -- TimeSlots helpers --

  // Helper to toggle day checkbox
  const toggleDay = (day) => {
    // Find if day exists
    const idx = formData.timeSlots.findIndex((slot) => slot.day === day);
    let newSlots = [...formData.timeSlots];

    if (idx === -1) {
      // Add day with empty times
      newSlots.push({ day, startingTime: "", endingTime: "" });
    } else {
      // Remove day
      newSlots.splice(idx, 1);
    }
    setFormData({ ...formData, timeSlots: newSlots });
  };

  // Handle time input change per day
  const updateTimeSlot = (day, field, value) => {
    const idx = formData.timeSlots.findIndex((slot) => slot.day === day);
    if (idx === -1) return; // should not happen
    const newSlots = [...formData.timeSlots];
    newSlots[idx] = { ...newSlots[idx], [field]: value };
    setFormData({ ...formData, timeSlots: newSlots });
  };

  const updateProfileHandler = async (e) => {
    e.preventDefault();
    try {
      const updatedData = { ...formData };
      if (!updatedData.email) delete updatedData.email;
      if (!updatedData.password) delete updatedData.password;

      if (selectedFile) {
        const photoData = new FormData();
        photoData.append("photo", selectedFile);
        // Optional: upload photo if backend handles it
      }

      const res = await fetch(`${BASE_URL}/doctors/${doctorData._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updatedData),
      });

      const result = await res.json();

      if (!res.ok) throw new Error(result.message);

      toast.success(result.message || "Profile updated!", {
        position: "bottom-right",
        autoClose: 2500,
        theme: "colored",
      });
    } catch (error) {
      toast.error(error.message || "Something went wrong!");
    }
  };

  // To help checkbox checked state
  const isDaySelected = (day) =>
    formData.timeSlots.some((slot) => slot.day === day);

  // To get time value for day
  const getTimeSlot = (day) =>
    formData.timeSlots.find((slot) => slot.day === day) || {
      startingTime: "",
      endingTime: "",
    };

  return (
    <form onSubmit={updateProfileHandler} className="space-y-6 p-6">
      <h2 className="text-2xl font-bold mb-4">Update Doctor Profile</h2>

      {/* Basic Fields */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block font-medium">Name</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="form_input"
          />
        </div>
        <div>
          <label className="block font-medium">Phone</label>
          <input
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="form_input"
          />
        </div>

        <div className="col-span-2">
          <label className="block font-medium">Bio</label>
          <input
            name="bio"
            value={formData.bio}
            onChange={handleInputChange}
            className="form_input w-full"
          />
        </div>

        <div className="col-span-2">
          <label className="block font-medium">About</label>
          <textarea
            name="about"
            value={formData.about}
            onChange={handleInputChange}
            className="form_input w-full"
          />
        </div>
      </div>

      {/* Qualifications */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Qualifications</h3>
        {formData.qualifications.map((q, i) => (
          <div key={i} className="grid grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm">Start Date</label>
              <input
                type="date"
                value={q.startingDate}
                onChange={(e) =>
                  updateArrayItem(
                    "qualifications",
                    i,
                    "startingDate",
                    e.target.value
                  )
                }
                className="form_input"
              />
            </div>
            <div>
              <label className="block text-sm">Start Years</label>
              <input
                type="number"
                value={q.startingYear}
                onChange={(e) =>
                  updateArrayItem(
                    "qualifications",
                    i,
                    "startingYear",
                    e.target.value
                  )
                }
                className="form_input"
              />
            </div>
            <div>
              <label className="block text-sm">End Date</label>
              <input
                type="date"
                value={q.endingDate}
                onChange={(e) =>
                  updateArrayItem(
                    "qualifications",
                    i,
                    "endingDate",
                    e.target.value
                  )
                }
                className="form_input"
              />
            </div>
            <div>
              <label className="block text-sm">End Years</label>
              <input
                type="number"
                value={q.endingYear}
                onChange={(e) =>
                  updateArrayItem(
                    "qualifications",
                    i,
                    "endingYear",
                    e.target.value
                  )
                }
                className="form_input"
              />
            </div>
            <div>
              <label className="block text-sm">Degree</label>
              <input
                type="text"
                value={q.degree}
                onChange={(e) =>
                  updateArrayItem("qualifications", i, "degree", e.target.value)
                }
                className="form_input"
              />
            </div>
            <div>
              <label className="block text-sm">University</label>
              <input
                type="text"
                value={q.university}
                onChange={(e) =>
                  updateArrayItem(
                    "qualifications",
                    i,
                    "university",
                    e.target.value
                  )
                }
                className="form_input"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Experiences */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Experiences</h3>
        {formData.experiences.map((e, i) => (
          <div key={i} className="grid grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm">Start Date</label>
              <input
                type="date"
                value={e.startingDate}
                onChange={(ev) =>
                  updateArrayItem(
                    "experiences",
                    i,
                    "startingDate",
                    ev.target.value
                  )
                }
                className="form_input"
              />
            </div>
            <div>
              <label className="block text-sm">Start Years</label>
              <input
                type="number"
                value={e.startingYear}
                onChange={(ev) =>
                  updateArrayItem(
                    "experiences",
                    i,
                    "startingYear",
                    ev.target.value
                  )
                }
                className="form_input"
              />
            </div>
            <div>
              <label className="block text-sm">End Date</label>
              <input
                type="date"
                value={e.endingDate}
                onChange={(ev) =>
                  updateArrayItem(
                    "experiences",
                    i,
                    "endingDate",
                    ev.target.value
                  )
                }
                className="form_input"
              />
            </div>
            <div>
              <label className="block text-sm">End Years</label>
              <input
                type="number"
                value={e.endingYear}
                onChange={(ev) =>
                  updateArrayItem(
                    "experiences",
                    i,
                    "endingYear",
                    ev.target.value
                  )
                }
                className="form_input"
              />
            </div>
            <div>
              <label className="block text-sm">Position</label>
              <input
                type="text"
                value={e.position}
                onChange={(ev) =>
                  updateArrayItem("experiences", i, "position", ev.target.value)
                }
                className="form_input"
              />
            </div>
            <div>
              <label className="block text-sm">Hospital</label>
              <input
                type="text"
                value={e.hospital}
                onChange={(ev) =>
                  updateArrayItem("experiences", i, "hospital", ev.target.value)
                }
                className="form_input"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Time Slots */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Time Slots</h3>
        <div className="flex flex-col space-y-4">
          {daysOfWeek.map((day) => {
            const slot = getTimeSlot(day);
            return (
              <div key={day} className="flex items-center space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    checked={isDaySelected(day)}
                    onChange={() => toggleDay(day)}
                  />
                  <span className="ml-2">{day}</span>
                </label>
                {isDaySelected(day) && (
                  <>
                    <input
                      type="time"
                      value={slot.startingTime}
                      onChange={(e) =>
                        updateTimeSlot(day, "startingTime", e.target.value)
                      }
                      className="form_input w-28"
                      name={`startTime-${day}`}
                    />
                    <span>to</span>
                    <input
                      type="time"
                      value={slot.endingTime}
                      onChange={(e) =>
                        updateTimeSlot(day, "endingTime", e.target.value)
                      }
                      className="form_input w-28"
                      name={`endTime-${day}`}
                    />
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
          
      {/* Photo Upload */}
      <div>
        <label className="block font-medium mb-1 bg-slate-300 rouned-xl w-fit">
          Upload Photo
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileInputChange}
          className="form_input"
        />
        {previewURL && (
          <img
            src={previewURL}
            alt="Preview"
            className="w-32 h-32 rounded mt-2"
          />
        )}
      </div>
      <div className="h-[20px]"></div>
      <button
        type="submit"
        className="bg-blue-600 hover:scale-150 text-white px-6 py-2 rounded hover:bg-blue-700 scale-125 transform-fill duration-300 ease-initial"
      >
        Update
      </button>

      <div className="h-[50px]"></div>
    </form>
  );
};

export default Profile;

// import React, { useState } from "react";
// import { BASE_URL, token } from "./../../../config";
// import { toast } from "react-toastify";

// const Profile = ({ doctorData }) => {
//     // old
// //   const [formData, setFormData] = useState({
// //     name: doctorData?.name || "",
// //     email: doctorData?.email || "",
// //     password: "",
// //     phone: doctorData?.phone || "",
// //     bio: doctorData?.bio || "",
// //     about: doctorData?.about || "",
// //     gender: doctorData?.gender || "",
// //     specialization: doctorData?.specialization || "",
// //     ticketPrice: doctorData?.ticketPrice || 0,
// //     qualifications: doctorData?.qualifications || [
// //       {
// //         startingDate: "",
// //         startingYear: "",
// //         endingDate: "",
// //         endingYear: "",
// //         degree: "",
// //         university: "",
// //       },
// //     ],
// //     experiences: doctorData?.experiences || [
// //       {
// //         startingDate: "",
// //         startingYear: "",
// //         endingDate: "",
// //         endingYear: "",
// //         position: "",
// //         hospital: "",
// //       },
// //     ],
// //     timeSlots: doctorData?.timeSlots || [
// //       { day: "", selectedDays: [], startingTime: "", endingTime: "" },
// //     ],
// //     photo: null,
// //   });
// const [formData, setFormData] = useState({
//   name: doctorData?.name || "",
//   email: doctorData?.email || "",
//   password: "",
//   phone: doctorData?.phone || "",
//   bio: doctorData?.bio || "",
//   about: doctorData?.about || "",
//   gender: doctorData?.gender || "",
//   specialization: doctorData?.specialization || "",
//   ticketPrice: doctorData?.ticketPrice || 0,
//   qualifications:
//     doctorData?.qualifications?.length > 0
//       ? doctorData.qualifications
//       : [
//           {
//             startingDate: "",
//             startingYear: "",
//             endingDate: "",
//             endingYear: "",
//             degree: "",
//             university: "",
//           },
//         ],
//   experiences:
//     doctorData?.experiences?.length > 0
//       ? doctorData.experiences
//       : [
//           {
//             startingDate: "",
//             startingYear: "",
//             endingDate: "",
//             endingYear: "",
//             position: "",
//             hospital: "",
//           },
//         ],
//   timeSlots: doctorData?.timeSlots || [
//     { day: "", selectedDays: [], startingTime: "", endingTime: "" },
//   ],
//   photo: null,
// });

//   const [selectedFile, setSelectedFile] = useState(null);
//   const [previewURL, setPreviewURL] = useState(null);

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleFileInputChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setSelectedFile(file);
//       setPreviewURL(URL.createObjectURL(file));
//       setFormData({ ...formData, photo: file });
//     }
//   };

//   const updateArrayItem = (key, index, field, value) => {
//     const newArray = [...formData[key]];
//     newArray[index] = { ...newArray[index], [field]: value };
//     setFormData({ ...formData, [key]: newArray });
//   };

//   const updateProfileHandler = async (e) => {
//     e.preventDefault();
//     try {
//         const updatedData = { ...formData };
//         if (!updatedData.email) delete updatedData.email;
//         if (!updatedData.password) delete updatedData.password;

//       if (selectedFile) {
//         const photoData = new FormData();
//         photoData.append("photo", selectedFile);
//         // Optional: upload photo if backend handles it
//       }

//       const res = await fetch(`${BASE_URL}/doctors/${doctorData._id}`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(updatedData),
//       });

//       const result = await res.json();

//       if (!res.ok) throw new Error(result.message);

//       toast.success(result.message || "Profile updated!", {
//         position: "bottom-right",
//         autoClose: 2500,
//         theme: "colored",
//       });
//     } catch (error) {
//       toast.error(error.message || "Something went wrong!");
//     }
//   };

//   return (
//     <form onSubmit={updateProfileHandler} className="space-y-6 p-6">
//       <h2 className="text-2xl font-bold mb-4">Update Doctor Profile</h2>

//       <div className="grid grid-cols-2 gap-4">
//         <div>
//           <label className="block font-medium">Name</label>
//           <input
//             name="name"
//             value={formData.name}
//             onChange={handleInputChange}
//             className="form_input"
//           />
//         </div>
//         <div>
//           <label className="block font-medium">Phone</label>
//           <input
//             name="phone"
//             value={formData.phone}
//             onChange={handleInputChange}
//             className="form_input"
//           />
//         </div>

//         <div className="col-span-2">
//           <label className="block font-medium">Bio</label>
//           <input
//             name="bio"
//             value={formData.bio}
//             onChange={handleInputChange}
//             className="form_input w-full"
//           />
//         </div>

//         <div className="col-span-2">
//           <label className="block font-medium">About</label>
//           <textarea
//             name="about"
//             value={formData.about}
//             onChange={handleInputChange}
//             className="form_input w-full"
//           />
//         </div>
//       </div>

//       {/* Qualifications */}
//       <div>
//         <h3 className="text-lg font-semibold mb-2">Qualifications</h3>
//         {formData.qualifications.map((q, i) => (
//           <div key={i} className="grid grid-cols-3 gap-4 mb-4">
//             <div>
//               <label className="block text-sm">Start Date</label>
//               <input
//                 type="date"
//                 value={q.startingDate}
//                 onChange={(e) =>
//                   updateArrayItem(
//                     "qualifications",
//                     i,
//                     "startingDate",
//                     e.target.value
//                   )
//                 }
//                 className="form_input"
//               />
//             </div>
//             <div>
//               <label className="block text-sm">Start Years</label>
//               <input
//                 type="number"
//                 value={q.startingYear}
//                 onChange={(e) =>
//                   updateArrayItem(
//                     "qualifications",
//                     i,
//                     "startingYear",
//                     e.target.value
//                   )
//                 }
//                 className="form_input"
//               />
//             </div>
//             <div>
//               <label className="block text-sm">End Date</label>
//               <input
//                 type="date"
//                 value={q.endingDate}
//                 onChange={(e) =>
//                   updateArrayItem(
//                     "qualifications",
//                     i,
//                     "endingDate",
//                     e.target.value
//                   )
//                 }
//                 className="form_input"
//               />
//             </div>
//             <div>
//               <label className="block text-sm">End Years</label>
//               <input
//                 type="number"
//                 value={q.endingYear}
//                 onChange={(e) =>
//                   updateArrayItem(
//                     "qualifications",
//                     i,
//                     "endingYear",
//                     e.target.value
//                   )
//                 }
//                 className="form_input"
//               />
//             </div>
//             <div>
//               <label className="block text-sm">Degree</label>
//               <input
//                 type="text"
//                 value={q.degree}
//                 onChange={(e) =>
//                   updateArrayItem("qualifications", i, "degree", e.target.value)
//                 }
//                 className="form_input"
//               />
//             </div>
//             <div>
//               <label className="block text-sm">University</label>
//               <input
//                 type="text"
//                 value={q.university}
//                 onChange={(e) =>
//                   updateArrayItem(
//                     "qualifications",
//                     i,
//                     "university",
//                     e.target.value
//                   )
//                 }
//                 className="form_input"
//               />
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Experiences */}
//       <div>
//         <h3 className="text-lg font-semibold mb-2">Experiences</h3>
//         {formData.experiences.map((e, i) => (
//           <div key={i} className="grid grid-cols-3 gap-4 mb-4">
//             <div>
//               <label className="block text-sm">Start Date</label>
//               <input
//                 type="date"
//                 value={e.startingDate}
//                 onChange={(ev) =>
//                   updateArrayItem(
//                     "experiences",
//                     i,
//                     "startingDate",
//                     ev.target.value
//                   )
//                 }
//                 className="form_input"
//               />
//             </div>
//             <div>
//               <label className="block text-sm">Start Years</label>
//               <input
//                 type="number"
//                 value={e.startingYear}
//                 onChange={(ev) =>
//                   updateArrayItem(
//                     "experiences",
//                     i,
//                     "startingYear",
//                     ev.target.value
//                   )
//                 }
//                 className="form_input"
//               />
//             </div>
//             <div>
//               <label className="block text-sm">End Date</label>
//               <input
//                 type="date"
//                 value={e.endingDate}
//                 onChange={(ev) =>
//                   updateArrayItem(
//                     "experiences",
//                     i,
//                     "endingDate",
//                     ev.target.value
//                   )
//                 }
//                 className="form_input"
//               />
//             </div>
//             <div>
//               <label className="block text-sm">End Years</label>
//               <input
//                 type="number"
//                 value={e.endingYear}
//                 onChange={(ev) =>
//                   updateArrayItem(
//                     "experiences",
//                     i,
//                     "endingYear",
//                     ev.target.value
//                   )
//                 }
//                 className="form_input"
//               />
//             </div>
//             <div>
//               <label className="block text-sm">Position</label>
//               <input
//                 type="text"
//                 value={e.position}
//                 onChange={(ev) =>
//                   updateArrayItem("experiences", i, "position", ev.target.value)
//                 }
//                 className="form_input"
//               />
//             </div>
//             <div>
//               <label className="block text-sm">Hospital</label>
//               <input
//                 type="text"
//                 value={e.hospital}
//                 onChange={(ev) =>
//                   updateArrayItem("experiences", i, "hospital", ev.target.value)
//                 }
//                 className="form_input"
//               />
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Photo Upload */}
//       <div>
//         <label className="block font-medium mb-1 bg-slate-300 rouned-xl w-fit">
//           Upload Photo
//         </label>
//         <input
//           type="file"
//           accept="image/*"
//           onChange={handleFileInputChange}
//           className="form_input"
//         />
//         {previewURL && (
//           <img
//             src={previewURL}
//             alt="Preview"
//             className="w-32 h-32 rounded mt-2"
//           />
//         )}
//       </div>
//       <div className="h-[20px]"></div>
//       <button
//         type="submit"
//         className="bg-blue-600 hover:scale-150 text-white px-6 py-2 rounded hover:bg-blue-700 scale-125 transform-fill duration-300 ease-initial"
//       >
//         Update
//       </button>

//       <div className="h-[50px]"></div>
//     </form>
//   );
// };

// export default Profile;
