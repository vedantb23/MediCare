import Doctor from "../models/DoctorSchema.js";

export const triageSymptoms = async (req, res) => {
  try {
    const { symptoms } = req.body;
    if (!symptoms) {
      return res.status(400).json({ message: "Symptoms required" });
    }

    // 1. Fetch approved doctors from Mongo
    const doctors = await Doctor.find({
      isApproved: "approved",
    }).select("_id name specialization");

    if (doctors.length === 0) {
      return res.status(400).json({ message: "No doctors available" });
    }

    // 2. Call Python AI service
    const pyRes = await fetch(`${process.env.AI_SERVICE_URL}/triage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },  
      body: JSON.stringify({
        symptoms,
        doctors: doctors.map((d) => ({
          id: d._id.toString(),
          name: d.name,
          specialization: d.specialization,
        })),
      }),
    });

    if (!pyRes.ok) {
      const err = await pyRes.json();

      if (err.detail?.includes("RESOURCE_EXHAUSTED")) {
        return res.status(429).json({
          message:
            "AI is temporarily busy. Please wait 30 seconds and try again.",
        });
      }

      return res.status(502).json({
        message: "AI service failed",
      });
    }

    
    if (!pyRes.ok) {
      const err = await pyRes.text();
      return res.status(502).json({
        message: "AI service failed",
        error: err,
      });
    }

    const aiData = await pyRes.json();

    // 3. Return to frontend
    res.json(aiData);
  } catch (err) {
    console.error("TRIAGE ERROR:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};
