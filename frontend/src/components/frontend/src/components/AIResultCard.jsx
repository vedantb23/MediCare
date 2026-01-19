const urgencyStyles = {
  High: "bg-red-100 text-red-700",
  Medium: "bg-yellow-100 text-yellow-700",
  Low: "bg-green-100 text-green-700",
};

const AIResultCard = ({ data, onDoctorClick }) => {
  return (
    <div className="max-w-xl bg-white border rounded-lg p-4 space-y-3">
      <div className="flex justify-between items-center">
        <h4 className="font-semibold">Recommended: {data.specialization}</h4>
        <span
          className={`px-2 py-1 text-sm rounded ${urgencyStyles[data.urgency]}`}
        >
          {data.urgency}
        </span>
      </div>

      <p className="text-sm text-gray-600">{data.reason}</p>

      <div>
        <p className="font-medium">Suggested Doctor</p>
        <button
          className="text-blue-600 underline"
          onClick={() => onDoctorClick(data.doctor.id)}
        >
          {data.doctor.name}
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
    </div>
  );
};

export default AIResultCard;
