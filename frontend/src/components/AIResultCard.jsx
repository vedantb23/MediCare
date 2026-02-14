const urgencyStyles = {
  High: "bg-red-100 text-red-700",
  Medium: "bg-yellow-100 text-yellow-700",
  Low: "bg-green-100 text-green-700",
};



const AIResultCard = ({ data ,doctor}) => {
  console.log("receive doctor obj in ai resut card ", doctor);

  const specialization_field = data.specialization;
  
  // getDoctorBySpecz();
  return (
    <div className="max-w-xl bg-white border rounded-lg p-4 space-y-3">
      <div className="flex justify-between items-center">
        <div className="font-semibold flex rounded">
          Specialization Field:
          <h4 className="bg-cyan-300 ">{data.specialization}</h4>
        </div>
        <span className={`px-2 py-1 text-sm rounded bg-red-100 text-red-700`}>
          Confidence: {(data.confidence * 100).toFixed(2)}%
        </span>
      </div>

      <div>
        <p className="font-medium">Suggested Doctor</p>
        <button className="text-blue-600 underline">
          <a target="_blank" href={`/doctors/${doctor.data._id}`}>
            Dr. {doctor.data.name}
          </a>
        </button>
      </div>

      {/* {data.precautions?.length > 0 && (
        <div>
          <p className="font-medium">Precautions</p>
          <ul className="list-disc list-inside text-sm">
            {data.precautions.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </div>
      )} */}
      <div className="flex flex-col justify-start">
        <div className="flex flex-row ">Qualifications:</div>
        <div>Degree:{doctor.data.qualifications[0].degree}</div>
        <div>University:{doctor.data.qualifications[0].university}</div>
        <div className="flex flex-row">Experiences:</div>
        <div>Hospital:{doctor.data.experiences[0].hospital}</div>
        <div>Position:{doctor.data.experiences[0].position}</div>
      </div>

      <p className="text-sm text-gray-600">
        Note:{"This is predicted from custom trained ML model."}
      </p>

      {/* <p className="text-xs text-gray-400">
        Medi AI- Using llama-3.3-70b-versatile Model
      </p> */}
    </div>
  );
};

export default AIResultCard;
