import React from "react";
import doctorIllustration from "../../assets/images/doctor-illustration.png";

const DoctorAbout = ({
  name,
  about,
  qualifications,
  experiences,
  phone,
  timeSlots,
}) => {
  return (
    <div className="max-w-7xl mx-auto mt-16 mb-24 px-10 py-12 bg-gray-200 rounded-3xl shadow-xl shadow-blue-100">
      {/* Header */}
      <div className="flex gap-10 items-center border-b pb-8">
        <img
          src={doctorIllustration}
          alt="Doctor"
          className="w-36 h-36 rounded-full border-4 border-blue-300 shadow-md object-cover"
        />
        <div className="space-y-2">
          <h2 className="text-4xl font-bold text-blue-900">{name}</h2>
          <p className="text-lg text-gray-700">{about}</p>
          <p className="text-blue-700 font-semibold text-base">
            📞 +91 {phone}
          </p>
        </div>
      </div>

      {/* Tabs Placeholder */}
      <div className="mt-10 flex border-b border-gray-200 text-blue-600 font-medium">
        <button className="px-5 py-3 border-b-2 border-blue-600 text-blue-900">
          About
        </button>
      </div>

      {/* Body Section */}
      <div className="mt-12 space-y-12 text-gray-800 text-[17px] leading-relaxed">
        {/* Qualifications */}
        <div>
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">
            🎓 Qualifications
          </h3>
          <div className="grid grid-cols-2 gap-6">
            {qualifications?.map((item, index) => (
              <div key={index} className="bg-blue-50 p-5 rounded-xl shadow-sm">
                <p className="text-blue-800 font-medium mb-1">
                  {item.startingDate} – {item.endingDate}
                </p>
                <p>Degree: {item.degree}</p>
                <p>University: {item.university}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Experiences */}
        <div>
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">
            🏥 Experience
          </h3>
          <div className="grid grid-cols-2 gap-6">
            {experiences?.map((item, index) => (
              <div key={index} className="bg-blue-50 p-5 rounded-xl shadow-sm">
                <p className="text-blue-800 font-medium mb-1">
                  {item.startingDate} – {item.endingDate}
                </p>
                <p>Position: {item.position}</p>
                <p>Hospital: {item.hospital}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Time Slots */}
        <div>
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">
            🕒 Available Time Slots
          </h3>
          <ul className="space-y-2">
            {timeSlots?.map((slot, index) => (
              <li key={index} className="text-blue-700 text-lg">
                <span className="capitalize font-semibold">{slot.day}</span> —
                from <span className="font-medium">{slot.startingTime}</span> to{" "}
                <span className="font-medium">{slot.endingTime}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DoctorAbout;
