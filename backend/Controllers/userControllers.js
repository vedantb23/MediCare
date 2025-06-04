import User from "../models/UserSchema.js";
import Booking from "../models/BookingSchema.js";
import Doctor from "../models/DoctorSchema.js";
export const updateUser = async (req, res) => {
    const id = req.params.id;

    try {
        const updatedUser = await User.findByIdAndUpdate(id, { $set: req.body }, { new: true });
        res.status(200).json({
            success: true,
            message: 'User updated successfully',
            data: updatedUser
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to update user',
            error: error.message
        });
    }
};

export const deleterUser = async (req, res) => {
  const id = req.params.id;

  try {
    await User.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: 'User deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to delete user',
      error: error.message
    });
  }
};

export const getSingleUser = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await User.findById(id).select("-password");
    res.status(200).json({
      success: true,
      message: "User retrieved successfully",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to retrieve user",
      error: error.message,
    });
  }
};



export const getAllUser = async (req, res) => {
  try {
    const users = await User.find({}).select("-password"); // Exclude password and __v field
    res.status(200).json({
      success: true,
      message: "Users retrieved successfully",
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to retrieve userS",
      error: error.message,
    });
  }
};

export const getUserProfile = async (req, res) => { 
  const userId = req.userId; // Assuming you have middleware that sets req.user

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const { password, ...rest } = user._doc;
    res.status(200).json({
      success: true,
      message: "User profile retrieved successfully",
      data: { ...rest },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to retrieve user profile",
      error: error.message,
    });
  }
} 

export const getMyAppointments = async (req, res) => {
  try {
    // Step 1: Retrieve bookings for the user
    const bookings = await Booking.find({ user: req.userId }).populate(
      "doctor"
    );
    // console.log("Bookings found:", bookings);
    res.status(200).json({
      success: true,
      message: "Appointments retrieved successfully",
      data: bookings, // each booking contains full doctor info
    });
  } catch (error) {
    console.error("getMyAppointments error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to retrieve appointments",
      error: error.message,
    });
  }
};
