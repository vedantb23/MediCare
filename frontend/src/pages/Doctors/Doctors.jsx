import DoctorCrd from '../../components/Doctors/DoctorCrd'
import { BASE_URL } from "../../../config";
import useFetchData from "./../../hooks/UsefetchData";
import { toast } from "react-toastify";
import UsefetchData from "./../../hooks/UsefetchData";
import { useState,useEffect } from 'react';


const Doctors = () => {
  const [query, setquery] = useState('')
  const [debounceQuery, setdebounceQuery] = useState("")
  const handleSearch=() => {
    setquery(query.trim())
    // console.log(query)
  }
  
  useEffect(() => {
    const timeout=setTimeout(() => {
      setdebounceQuery(query);
    }, 700);
    return () => {
      clearTimeout(timeout)
    }
    
  }, [query])
  const {
    data: doctors,
    loading,
    error,
  } = UsefetchData(`${BASE_URL}/doctors?query=${debounceQuery}`);
  
  return (
    <>
      <div className="space h-[30px]"></div>
      <div>
        <section className="">
          <div className="container text-center flex flex-col items-center justify-center gap-4.5">
            <h2 className="heading">Find a Doctor</h2>

            <div className="flex flex-row ">
              <input
                type="text"
                placeholder="Search by a Doctor/Name/Specialization"
                className="w-[350px] max-w-[450px] mt-8 mx-auto h-12 px-4 bg-gray-300 text-gray-800 placeholder-gray-500 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                value={query}
                onChange={(e) => {
                  setquery(e.target.value);
                }}
              />
              <button
                className="btn mt-0 rounded-[0px] rounded-r-md"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
          </div>
        </section>
        <div className="space h-[30px]"></div>
        <section>
          <div className="container">
            {loading && (
              <div className="flex justify-center items-center h-20">
                <div className="w-10 h-10 border-4 border-dashed rounded-full animate-spin border-blue-500">
                  Loading...
                </div>
              </div>
            )}
            {error && <h1>Error occurred while fetching data...</h1>}
            {!loading && !error && (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 ">
                {doctors.map((doctor) => (
                  <div
                    key={doctor._id}
                    className="flex justify-center items-center h-fit"
                  >
                    <DoctorCrd doctor={doctor} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
}

export default Doctors
