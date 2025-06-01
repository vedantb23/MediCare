import React, { useState,useContext } from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../config";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import HashLoader from "react-spinners/HashLoader";
import {authContext} from "../context/AuthContext.jsx"
const Login = () => {
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();
  const [formData, setformData] = useState({
    email: "",
    password: "",
  });
  const {dispatch} = useContext(authContext);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setformData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
const submithandler = async (e) => {
    // console.log(formData);
    e.preventDefault();
    setloading(true);
    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      dispatch({
        type: "LOGIN_SUCCESS",
        payload: {
          user: result.data,
          role: result.role,
          token: result.token,
        },
      });
      setloading(false);
      toast.success(result.message);
      navigate("/home");
    } catch (error) {
      setloading(false);
      toast.error(error.message);
    }
  };
  return (
    <section className="flex items-center justify-center leading-[10vh] bg-gray-100 min-h-[60vh]">
      <div className="w-full max-w-[570px] mx-auto rounded-2xl shadow-md bg-white p-8">
        <h3 className="text-[25px] leading-9 mb-10 font-semibold text-gray-800 text-center">
          Hello! <span className="text-blue-600">Welcome</span> Back!
        </h3>

        <form onSubmit={submithandler}>
          <div className="mb-5">
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border-b border-blue-400 focus:outline-none focus:border-blue-600 rounded-md cursor-pointer"
            />
          </div>

          <div className="mb-5">
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border-b border-blue-400 focus:outline-none focus:border-blue-600 rounded-md cursor-pointer"
            />
          </div>

          <div className="mt-7">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white text-[18px] leading-[30px] rounded-lg px-4 py-3 hover:bg-blue-700 transition"
            >
              {loading ? <HashLoader color="#ffffff" size={40} /> : "Login"}
            </button>
          </div>

          <p className="mt-5 text-gray-700 text-center">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-600 font-medium">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
