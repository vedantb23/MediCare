import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

import { BASE_URL } from "../../../config";
// import { Navigate } from "react-router-dom";
const SidePanel = ({ doctorId, userId, ticketPrice, timeSlots, token }) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [loading, setLoading] = useState(false);
  const handleBookApp = async () => {
    if (!userId) {
        toast.error("Please log in to book an appointment.");
      return;
    }

    if (!selectedDate) {
        toast.error("Please select a date.");
      return;
    }
    

    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/doctors/book`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // send token if you use JWT auth
        },
        body: JSON.stringify({
          doctor: doctorId,
          user: userId,
          ticketPrice,
          appointmentDate: selectedDate,
        }),
      });

      const data = await res.json();
      // setLoading(false);
      // setTimeout(() => {
        toast.success(`Appointment booked successfully for  Date: ${selectedDate}`);
        
      // }, 1000);
      // setTimeout(() => {
        setSelectedDate("");
        
      // }, 1500);
      
        if (!res.ok) {
          toast.error(data.message || "Booking failed.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong while booking.");
    }

    setLoading(false);
  };
  

  return (
    <div className="w-full bg-blue-200 text-gray-900 shadow-lg p-6 rounded-md sticky top-20 scale-110 border-b-gray-800">
      <div className="flex items-center justify-between mb-4">
        <p className="text-base font-semibold">Ticket Price</p>
        <span className="text-xl font-bold">{ticketPrice}</span>
      </div>

      <div className="mb-4">
        <h3 className="text-md text-blue-900 mb-2">🕒 Available Time Slots</h3>
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

      <div className="mb-4">
        <label className="block text-sm font-semibold mb-1">Select Date:</label>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="w-full px-2 py-1 rounded-md border border-gray-400"
          disabled={loading}
          min={new Date().toISOString().split("T")[0]} // prevent past dates
        />
      </div>

      <button
        className={`w-full bg-blue-600 p-5 text-white py-2 rounded-md hover:bg-blue-700 text-[17px] hover:scale-110 transition-transform ease-in-out duration-200 cursor-pointer ${
          loading ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={handleBookApp}
        disabled={loading}
      >
        {loading ? "Booking..." : "Book Appointment"}
      </button>
    </div>
  );
};

export default SidePanel;
