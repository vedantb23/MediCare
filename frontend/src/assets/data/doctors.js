import doctorImg01 from "../images/doctor-img01.png";
import doctorImg02 from "../images/doctor-img02.png";
import doctorImg03 from "../images/doctor-img03.png";

export const doctors = [
  {
    id: "01",
    name: "Dr. Ayush Mehra",
    specialization: "Cardiologist",
    avgRating: 4.8,
    totalRating: 272,
    photo: doctorImg01,
    totalPatients: 500,
    hospital: "Ruby Hall Clinic, Pune",
    email: "ayush.mehra@rubyhall.com",
    experience: 12,
    bio: "Dr. Ayush Mehra is a renowned cardiologist with over 12 years of experience. He specializes in interventional cardiology and preventive heart care.",
    ticketPrice: "500 Rs",
    timeSlots: [
      { day: "Sunday", time: "4:00 PM - 9:30 PM" },
      { day: "Wednesday", time: "3:00 PM - 8:00 PM" },
    ],
  },
  {
    id: "02",
    name: "Dr. Rohan Kapoor",
    specialization: "Neurologist",
    avgRating: 4.8,
    totalRating: 272,
    photo: doctorImg02,
    totalPatients: 1000,
    hospital: "Lilavati Hospital, Mumbai",
    email: "rohan.kapoor@lilavati.org",
    experience: 15,
    bio: "Dr. Rohan Kapoor is a senior neurologist with 15 years of experience. He focuses on stroke rehabilitation and neuroimaging advancements.",
    ticketPrice: "700 Rs",
    timeSlots: [
      { day: "Monday", time: "10:00 AM - 1:00 PM" },
      { day: "Thursday", time: "2:00 PM - 6:00 PM" },
    ],
  },
  {
    id: "03",
    name: "Dr. Jolly Reddy",
    specialization: "Dermatologist",
    avgRating: 4.8,
    totalRating: 272,
    photo: doctorImg03,
    totalPatients: 1500,
    hospital: "Apollo Hospitals, Hyderabad",
    email: "jolly.reddy@apollohospitals.com",
    experience: 10,
    bio: "Dr. Jolly Reddy specializes in cosmetic dermatology, acne treatment, and skin rejuvenation therapies.",
    ticketPrice: "600 Rs",
    timeSlots: [
      { day: "Tuesday", time: "12:00 PM - 4:00 PM" },
      { day: "Friday", time: "10:00 AM - 2:00 PM" },
    ],
  },
];
