// backend/Controllers/bookingController.js

// Example: import your Booking model here
import Booking from "../models/BookingSchema.js";

// Create a new booking
export const createBooking = async (req, res) => {
  try {
    const newBooking = new Booking(req.body);
    const savedBooking = await newBooking.save();
    res.status(201).json({ success: true, booking: savedBooking });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get a booking by ID
export const getBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking)
      return res
        .status(404)
        .json({ success: false, message: "Booking not found" });
    res.status(200).json({ success: true, booking });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Delete booking by ID
export const deleteBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id);
    if (!booking)
      return res
        .status(404)
        .json({ success: false, message: "Booking not found" });
    res
      .status(200)
      .json({ success: true, message: "Booking deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update booking by ID
// export const updateBooking = async (req, res) => {
//   try {
//     const updatedBooking = await Booking.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true }
//     );
//     if (!updatedBooking)
//       return res
//         .status(404)
//         .json({ success: false, message: "Booking not found" });
//     res.status(200).json({ success: true, booking: updatedBooking });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// };
export const updateBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res
        .status(404)
        .json({ success: false, message: "Booking not found" });
    }

    // If doctor is updating, allow only status update
    if (req.role === "doctor") {
      if (booking.doctor.toString() !== req.userId) {
        return res.status(403).json({
          success: false,
          message: "Forbidden: You can only update your own appointments",
        });
      }

      // Allow only status update
      booking.status = req.body.status || booking.status;
      await booking.save();

      return res.status(200).json({
        success: true,
        message: "Booking status updated",
        data: booking,
      });
    }

    // If patient, allow general update (e.g., cancel)
    if (req.role === "patient") {
      const updated = await Booking.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );

      return res.status(200).json({
        success: true,
        message: "Booking updated successfully",
        data: updated,
      });
    }

    // Otherwise forbidden
    return res.status(403).json({
      success: false,
      message: "You do not have permission to update this booking",
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Server error", error });
  }
};


// Get all bookings (optional)
export const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json({ success: true, bookings });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
