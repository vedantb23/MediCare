import Doctor from "../models/DoctorSchema.js";
import Booking from "../models/BookingSchema.js";
import nodemailer from "nodemailer";
import User from "../models/UserSchema.js";
import { sendEmail } from "../utils/sendEmail.js";

export const updateDoctor = async (req, res) => {
    const id = req.params.id;

  try {
    // changechange
    
        // const updatedDoctor = await Doctor.findByIdAndUpdate(id, { $set: req.body }, { new: true });
    // 
        const updatedDoctor = await Doctor.findByIdAndUpdate(id,  req.body , { new: true });
        res.status(200).json({
            success: true,
            message: 'Doctor updated successfully',
            data: updatedDoctor
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to update Doctor',
            error: error.message
        });
    }
};

export const deleterDoctor = async (req, res) => {
  const id = req.params.id;

  try {
    await Doctor.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: 'Doctor deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to delete Doctor',
      error: error.message
    });
  }
};

export const getSingleDoctor = async (req, res) => {
  const id = req.params.id;

  try {
    const doctor = await Doctor.findById(id).select("-password");
    res.status(200).json({
      success: true,
      message: "Doctor retrieved successfully",
      data: doctor,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to retrieve Doctor",
      error: error.message,
    });
  }
};



export const getAllDoctor = async (req, res) => {
    try {

        const { query } = req.query;
        let doctors;
        if (query) {
            doctors = await Doctor.find({ isApproved: "approved", $or: [{ name: { $regex: query, $options: 'i' } }, { specialization: { $regex: query, $options: 'i' } }] }).select("-password");
        }
        else {
            doctors= await Doctor.find({ isApproved: "approved" }).select("-password");
        }

    res.status(200).json({
      success: true,
      message: "Doctors retrieved successfully",
      data: doctors,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to retrieve Doctors",
      error: error.message,
    });
  }
};

export const getDoctorProfile = async (req, res) => {
    const doctorId = req.userId; // Assuming you have middleware that sets req.user
    
      try {
        const doctor = await Doctor.findById(doctorId);
        if (!doctor) {
          return res.status(404).json({
            success: false,
            message: "Doctor not found",
          });
        }

        const { password, ...rest } = doctor._doc;
        const appointments=await Booking.find({doctor:doctorId}) 
        res.status(200).json({
          success: true,
          message: "Doctor profile retrieved successfully",
          data: { ...rest, appointments },
        });
      } catch (error) {
        res.status(500).json({
          success: false,
          message: "Failed to retrieve doctor profile",
          error: error.message,
        });
      }
}

// booking 
// Create a booking (appointment)
// node maier code
// export const createBooking = async (req, res) => {
  //   try {
    //     const { doctor, user, ticketPrice, appointmentDate } = req.body;
    
    //     if (!doctor || !user || !ticketPrice || !appointmentDate) {
//       return res.status(400).json({
//         success: false,
//         message: "Missing required booking fields.",
//       });
//     }

//     const booking = new Booking({
//       doctor,
//       user,
//       ticketPrice,
//       appointmentDate,
//     });

//     const savedBooking = await booking.save();

//     // Optional: Push booking into doctor's and user's record (if you're tracking it there)
//     await Doctor.findByIdAndUpdate(doctor, {
//       $push: { appointments: savedBooking._id },
//     });

//     res.status(201).json({
//       success: true,
//       message: "Booking created successfully",
//       data: savedBooking,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: "Booking creation failed",
//       error: error.message,
//     });
//   }
// };
export const createBooking = async (req, res) => {
  try {
    const { doctor, user, ticketPrice, appointmentDate } = req.body;

    if (!doctor || !user || !ticketPrice || !appointmentDate) {
      return res
        .status(400)
        .json({ success: false, message: "Missing fields" });
    }

    const userData = await User.findById(user);
    if (!userData || !userData.email) {
      return res
        .status(404)
        .json({ success: false, message: "User email not found" });
    }

    const booking = new Booking({
      doctor,
      user,
      ticketPrice,
      appointmentDate,
    });

    const savedBooking = await booking.save();

    // await Doctor.findByIdAndUpdate(doctor, {
    //   $push: { appointments: savedBooking._id },
    // });

    // Send confirmation email
    await sendEmail(
      userData.email,
      "Appointment Booked - MediCare",
      `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f9f9f9;">
          <div style="max-width: 600px; margin: auto; background-color: #ffffff; padding: 20px; border-radius: 8px;">
            <div style="text-align: center;">
              <img src="https://res.cloudinary.com/dj74ojnrk/image/upload/v1748786541/twirlj2fezozw3zm9ymp.png" alt="MediCare Logo" width="120" />
              <h2 style="color: #4fa94d;">Appointment Confirmation</h2>
            </div>
    
            <p>Hi <strong>${userData.name || "User"}</strong>,</p>
            <p>We're happy to let you know that your appointment has been <strong>successfully booked</strong>.</p>
    
            <table style="width: 100%; margin-top: 20px; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px; border: 1px solid #eee;">👨‍⚕️ <strong>Doctor ID</strong></td>
                <td style="padding: 8px; border: 1px solid #eee;">${doctor}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border: 1px solid #eee;">📅 <strong>Appointment Date</strong></td>
                <td style="padding: 8px; border: 1px solid #eee;">${appointmentDate}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border: 1px solid #eee;">💳 <strong>Ticket Price</strong></td>
                <td style="padding: 8px; border: 1px solid #eee;">₹${ticketPrice}</td>
              </tr>
            </table>
    
            <div style="text-align: center; margin-top: 30px;">
              <img src="https://res.cloudinary.com/dj74ojnrk/image/upload/v1749144346/appoiment_logo_ku721i.png" alt="Doctor Illustration" width="250" />
            </div>
    
            <p style="margin-top: 30px;">Thank you for choosing <strong>MediCare</strong>. We wish you good health!</p>
            <p style="color: #888; font-size: 14px;">This is an automated message. Please do not reply.</p>
          </div>
        </div>
      `
    );
    

    res.status(201).json({
      success: true,
      message: "Booking created and email sent",
      data: savedBooking,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Booking failed",
      error: error.message,
    });
  }
};