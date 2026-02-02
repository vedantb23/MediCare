const urgencyStyles = {
  High: "bg-red-100 text-red-700",
  Medium: "bg-yellow-100 text-yellow-700",
  Low: "bg-green-100 text-green-700",
};

const AIResultCard = ({ data, onDoctorClick }) => {
  console.log("AI->", data);
  return (
    <div className="max-w-xl bg-white border rounded-lg p-4 space-y-3">
      <div className="flex justify-between items-center">
        <h4 className="font-semibold flex rounded">
          Specialization Field:
          <h4 className="bg-cyan-300 ">{data.doctor.specialization}</h4>
        </h4>
        <span className={`px-2 py-1 text-sm rounded bg-red-100 text-red-700`}>
          Urgency: High
        </span>
      </div>

      <div>
        <p className="font-medium">Suggested Doctor</p>
        <button className="text-blue-600 underline">
          <a target="_blank" href={`/doctors/${data.doctor.id}`}>
            {data.doctor.name}
          </a>
        </button>
      </div>

      {data.precautions?.length > 0 && (
        <div>
          <p className="font-medium">Precautions</p>
          <ul className="list-disc list-inside text-sm">
            {data.precautions.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </div>
      )}
      <p className="text-sm text-gray-600">Reason:{data.reason}</p>

      <p className="text-xs text-gray-400">
        Medi AI- Using llama-3.3-70b-versatile Model
      </p>
    </div>
  );
};

export default AIResultCard;
