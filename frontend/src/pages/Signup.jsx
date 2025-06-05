import React from "react";
import { Link, useNavigate } from "react-router-dom";
import signupImg from "../assets/images/signup.gif";
import avatar from "../assets/images/doctor-img01.png";
import { useState, useEffect } from "react";
import uploadCloud from "../utils/uploadCloud";
import { BASE_URL } from "../../config";
import { toast } from "react-toastify";
import HashLoader from "react-spinners/HashLoader";

const Signup = () => {
  const [selectedFile, setselectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState("");
  const [loading, setloading] = useState(false);
  const [formData, setformData] = useState({
    name: "",
    email: "",
    password: "",
    photo: selectedFile,
    gender: "",
    role: "patient",
  });

  const navigate = useNavigate();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setformData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleFileInputChange = async (e) => {
    const file = e.target.files[0];
    const data = await uploadCloud(file);
    setPreviewURL(data.url);
    setselectedFile(data.url);
    setformData({ ...formData, photo: data.url });
  };
  const submithandler = async (e) => {
    // console.log(formData);
    e.preventDefault();
    setloading(true);
    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const { message } = await res.json();
      setloading(false);
      toast.success(message);
      navigate("/login");
    } catch (error) {
      setloading(false);
      toast.error(error.message);
    }
  };

  
  return (
    <section className="px-5 xl:px-0 flex items-center justify-center min-h-screen bg-gray-50">
      <div className="max-w-[1100px] w-full bg-white shadow-md rounded-xl flex flex-col lg:flex-row items-center justify-between p-6 lg:p-12 gap-10">
        {/* Image */}
        <div className="w-full lg:w-1/2">
          <img src={signupImg} alt="Signup" className="w-[450px] rounded-xl" />
        </div>

        {/* Form */}
        <div className="w-full lg:w-1/2">
          <h3 className="text-gray-800 text-[24px] lg:text-[28px] font-bold mb-6 text-center lg:text-left">
            Create an <span className="text-blue-600">Account</span>
          </h3>

          <form onSubmit={submithandler} className="flex flex-col gap-5">
            <div className="mb-4 ">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your Name"
                className="w-full px-4 py-3 border border-blue-300 focus:outline-none focus:border-blue-600 rounded-md"
              />
            </div>

            <div className="mb-4 relative group w-full ">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your Email"
                className="w-full px-4 py-3 border border-blue-300 focus:outline-none focus:border-blue-600 rounded-md"
              />
              {/* */}
              <div className="absolute left-0  opacity-0 group-hover:opacity-100  -top-5 bg-yellow-300 text-black text-xs px-3 py-1 rounded transition-all duration-300 pointer-events-none">
                Please enter a valid email to receive appointment Emails and updates !!
              </div>
            </div>

            <div className="mb-4">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter your Password"
                className="w-full px-4 py-3 border border-blue-300 focus:outline-none focus:border-blue-600 rounded-md"
              />
            </div>

            <div className="mb-4 flex flex-col md:flex-row gap-4">
              <div className="w-full">
                <label className="font-medium text-gray-700 mb-1 block">
                  Role:
                </label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-blue-300 focus:outline-none focus:border-blue-600 rounded-md"
                >
                  <option value="patient">Patient</option>
                  <option value="doctor">Doctor</option>
                </select>
              </div>
              <div className="w-full">
                <label className="font-medium text-gray-700 mb-1 block">
                  Gender:
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  required
                  className="..."
                >
                  <option value="">Select gender</option> {/* placeholder */}
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="mb-5 flex items-center gap-4">
              {selectedFile && (
                <figure className="w-[60px] h-[60px] rounded-full border-2 border-gray-300 overflow-hidden">
                  <img
                    src={previewURL}
                    alt="avatar"
                    className="w-full h-full object-cover"
                  />
                </figure>
              )}

              <div className="relative w-[160px] h-[50px]">
                <input
                  type="file"
                  name="photo"
                  id="customFile"
                  accept=".jpg,.png,.jpeg"
                  className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                  onChange={handleFileInputChange}
                />
                <label
                  htmlFor="customFile"
                  className="absolute top-0 left-0 w-full h-full bg-gray-200 border border-gray-400 rounded-md flex items-center justify-center cursor-pointer text-sm font-medium"
                >
                  Upload Photo
                </label>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading && true}
              className="w-full bg-blue-600 text-white text-[18px] leading-[30px] rounded-lg px-4 py-3 hover:bg-blue-700 transition"
              onClick={submithandler}
            >
              {loading ? <HashLoader color="#ffffff" size={20} /> : "Sign Up"}
            </button>

            <p className="mt-5 text-gray-700 text-center">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-600 font-semibold">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signup;
