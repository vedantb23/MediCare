import React from "react";

const SidePanel = ({ doctorId,ticketPrice, timeSlots = [] }) => {
  return (
    <div className="w-full bg-blue-200 text-gray-900 shadow-lg p-6 rounded-md sticky top-20 scale-110 border-b-gray-800">
      <div className="flex items-center justify-between mb-4">
        <p className="text-base font-semibold">Ticket Price</p>
        <span className="text-xl font-bold">{ticketPrice} </span>
      </div>

      <div>
        <h3 className="text-md  text-blue-900 mb-4">
          🕒 Available Time Slots
        </h3>
        <ul className="space-y-2">
          {timeSlots?.map((slot, index) => (
            <li key={index} className="text-blue-700 text-[15px]">
              <span className="capitalize font-semibold">{slot.day}</span> -
              from <span className="font-medium">{slot.startingTime}</span> to{" "}
              <span className="font-medium">{slot.endingTime}</span>
            </li>
          ))}
        </ul>
      </div>

      <button className="w-full bg-blue-600 p-5 text-white py-2 rounded-md  hover:bg-blue-700  text-[17px] hover:scale-110 transition-transform ease-in-out duration-200 cursor-pointer">
        Book Appointment
      </button>
    </div>
  );
};

export default SidePanel;
