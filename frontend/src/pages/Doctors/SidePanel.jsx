import React from "react";

const SidePanel = ({ ticketPrice, timeSlots = [] }) => {
  return (
    <div className="w-full bg-blue-400 text-gray-900 shadow-lg p-6 rounded-md sticky top-20 scale-110 border-b-gray-800">
      <div className="flex items-center justify-between mb-4">
        <p className="text-base font-semibold">Ticket Price</p>
        <span className="text-xl font-bold">{ticketPrice || "N/A"} </span>
      </div>

      <div className="mb-6">
        <p className="text-base font-semibold mb-2">Available Time Slots:</p>
        {timeSlots.length > 0 ? (
          <ul className="space-y-2">
            {timeSlots.map((slot, index) => (
              <li
                key={index}
                className="flex items-center justify-between text-sm font-medium"
              >
                <span>{slot.day}</span>
                <span>{slot.time}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-gray-500">No time slots available.</p>
        )}
      </div>

      <button className="w-full bg-blue-600 text-white py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition">
        Book Appointment
      </button>
    </div>
  );
};

export default SidePanel;
