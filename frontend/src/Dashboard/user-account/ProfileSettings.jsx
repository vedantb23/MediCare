import React from "react";
import { useNavigate } from "react-router-dom";
// import avatar from "../assets/images/doctor-img01.png";
import { useState, useEffect } from "react";
import uploadCloud from "../../utils/uploadCloud";
import { BASE_URL ,token} from "../../../config";
import { toast } from "react-toastify";
import HashLoader from "react-spinners/HashLoader";




const ProfileSettings = ({user}) => {
  const [selectedFile, setselectedFile] = useState(null);
  const [loading, setloading] = useState(false);
  const [formData, setformData] = useState({
    name: "",
    email: "",
    password: "",
    photo: null,
    gender: "",
    bloodType: "",
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
    setselectedFile(data.url);
    setformData({ ...formData, photo: data.url });
  };
  const submithandler = async (e) => {
    // console.log(formData);
    e.preventDefault();
    setloading(true);
    try {
      const res = await fetch(`${BASE_URL}/users/${user._id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization:`Bearer ${token}`
        },
        body: JSON.stringify(formData),
      });

      const { message } = await res.json();
      setloading(false);
      toast.success(message);
      navigate("/home/users/profile/me");
    } catch (error) {
      setloading(false);
      toast.error(error.message);
    }
  };

        useEffect(() => {
            setformData({ name: user.name, email: user.email, photo: user.photo, gender: user.gender, bloodType: user.bloodType });
        }, [user])
        
    
  return (
    <div>
      <form onSubmit={submithandler} className="flex flex-col gap-5">
        <div className="mb-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter your Name"
            className="w-full px-4 py-3 border border-blue-300 focus:outline-none focus:border-blue-600 rounded-md"
          />
        </div>

        <div className="mb-4">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your Email"
            className="w-full px-4 py-3 border border-blue-300 focus:outline-none focus:border-blue-600 rounded-md" aria-readonly readOnly
          />
        </div>

        <div className="mb-4">
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Enter your Password"
            className="w-full px-4 py-3 border border-blue-300 focus:outline-none focus:border-blue-600 rounded-md" required
          />
        </div>

        <div className="mb-4">
          <input
            type="text"
            name="bloodType"
            value={formData.bloodType}
            onChange={handleInputChange}
            placeholder="Update your blood Group"
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
          <div className="w-full"></div>
        </div>

        <div className="mb-5 flex items-center gap-4">
          {formData.photo && (
            <figure className="w-[60px] h-[60px] rounded-full border-2 border-gray-300 overflow-hidden">
              <img
                src={formData.photo}
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
              {selectedFile ? selectedFile.name:"Upload Photo"}
            </label>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading && true}
          className="w-full bg-blue-600 text-white text-[18px] leading-[30px] rounded-lg px-4 py-3 hover:bg-blue-700 transition hover:scale-110 cursor-pointer"
          onClick={submithandler}
        >
          {loading ? (
            <HashLoader color="#ffffff" size={20} />
          ) : (
            "Update Details"
          )}
        </button>
      </form>
    </div>
  );
};

export default ProfileSettings;
