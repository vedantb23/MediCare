import DoctorCrd from '../../components/Doctors/DoctorCrd'
import { BASE_URL } from "../../../config";
import useFetchData from "./../../hooks/UsefetchData";
import { toast } from "react-toastify";
import UsefetchData from "./../../hooks/UsefetchData";


const Doctors = () => {
  const { data: doctors, loading, error } = UsefetchData(`${BASE_URL}/doctors`);

  return (
    <>
      <div className="space h-[30px]"></div>
      <div>
        <section className="">
          <div className="container text-center flex flex-col items-center justify-center gap-4.5">
            <h2 className="heading">Find a Doctor</h2>

            <div className="flex flex-row  ">
              <input
                type="text"
                placeholder="Search by a Doctor"
                className="w-full max-w-[450px] mt-8 mx-auto h-12 px-4 bg-gray-300 text-gray-800 placeholder-gray-500 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
              />
              <button className="btn mt-0 rounded-[0px] rounded-r-md">
                Search
              </button>
            </div>
          </div>
        </section>
        <div className="space h-[30px]"></div>
        <section>
          <div className="container">
            {loading && <h1>Please wait fetching data...</h1>}
            {error && <h1>Error occurred while fetching data...</h1>} 
           {!loading && !error && <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 ">
              {doctors.map((doctor) => (
                <DoctorCrd key={doctor.id} doctor={doctor} />
              ))}
            </div>}
          </div>
        </section>
      </div>
    </>
  );
}

export default Doctors
