import Doctor from "../models/DoctorSchema.js";

export const updateDoctor = async (req, res) => {
    const id = req.params.id;

    try {
        const updatedDoctor = await Doctor.findByIdAndUpdate(id, { $set: req.body }, { new: true });
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
            doctors = await Doctor.find({ isApproved: "approved", $or: [{ name: { $regrex: query, $options: 'i' } }, { specialization: { $regex: query, $options: 'i' } }] }).select("-password");
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

