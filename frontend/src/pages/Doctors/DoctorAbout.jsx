import React from "react";
import { useParams } from "react-router-dom";
import { doctors } from "../../assets/data/doctors";

const DoctorAbout = () => {
  const { id } = useParams();
  const doctor = doctors.find((doc) => String(doc.id) === String(id));

  if (!doctor) {
    return (
      <div className="text-center text-red-500 mt-8">Doctor not found.</div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto my-12 p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-center">
        About {doctor.name}
      </h2>

      {/* Doctor Info Section */}
      <div className="space-y-4 text-lg text-gray-800">
        <p>
          <strong className="font-semibold text-gray-900">
            Specialization:
          </strong>{" "}
          {doctor.specialization}
        </p>

        <p>
          <strong className="font-semibold text-gray-900">Hospital:</strong>{" "}
          {doctor.hospital}
        </p>

        <p>
          <strong className="font-semibold text-gray-900">Experience:</strong>{" "}
          {doctor.experience} years
        </p>

        <p>
          <strong className="font-semibold text-gray-900">Biography:</strong>{" "}
          {doctor.bio}
        </p>

        <p>
          <strong className="font-semibold text-gray-900">
            Average Rating:
          </strong>{" "}
          {doctor.avgRating} ({doctor.totalRating} reviews)
        </p>

        <p>
          <strong className="font-semibold text-gray-900">Email:</strong>{" "}
          {doctor.email}
        </p>
      </div>
    </div>
  );
};

export default DoctorAbout;
