export function validateAIResponse(aiData, doctors) {
  if (
    !aiData?.doctor?.id ||
    !aiData?.doctor?.name ||
    !aiData?.specialization ||
    !aiData?.urgency
  ) {
    throw new Error("Invalid AI response structure");
  }

  const doctorExists = doctors.some(
    (d) => d._id.toString() === aiData.doctor.id,
  );

  if (!doctorExists) {
    throw new Error("AI selected invalid doctor");
  }
  
  return true;
}
