import React from "react";
import { BiMenu } from "react-icons/bi";
import { useContext } from "react";
import { authContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Tabs = ({ tab, settab }) => {
    const { dispatch } = useContext(authContext);
    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
        navigate('/')
        toast.success("Logout successful!", {
          position: "top-right",
          theme: "light",
        });
    };
    const navigate=useNavigate()
  return (
    <>
      <div className="w-full ">
        {/* Mobile Menu Icon */}
        <div className="lg:hidden p-4 flex justify-end">
          <BiMenu className="w-6 h-6 cursor-pointer text-gray-700" />
        </div>

        {/* Desktop Tabs */}
        <div className="hidden lg:flex flex-col p-6  shadow-lg items-center rounded-xl w-[250px] space-y-4 ">
          <button
            onClick={() => settab("overview")}
            className={`${
              tab === "overview"
                ? "bg-indigo-500 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-125"
            } w-full py-2 px-4 rounded-md hover:scale-125 transition-all duration-200`}
          >
            Overview
          </button>

          <button
            onClick={() => settab("appointments")}
            className={`${
              tab === "appointments"
                ? "bg-indigo-500 text-white"
                : "bg-gray-100 text-gray-700hover:scale-125  hover:bg-gray-200"
            } w-full py-2 px-4 rounded-md transition-all hover:scale-125 duration-200`}
          >
            Appointments
          </button>

          <button
            onClick={() => settab("settings")}
            className={`${
              tab === "settings"
                ? "bg-indigo-500 text-white"
                : "bg-gray-300 text-gray-700 hover:scale-125  hover:bg-gray-200"
            } w-full py-2 px-4 rounded-md transition-all hover:scale-125 duration-200 h-[30px] animate-[smoothPulse_1s_ease-in-out_infinite] cursor-pointer `}
          >
            Update Your Profile
          </button>
          <div className="h-[30px]"></div>
          <div className="mt-[100px] flex flex-col w-full gap-[20px]">
            <button
              onClick={handleLogout}
              className="bg-[#181A1E] p-3 text-[16px] leading-7 rounded-md text-white w-full hover:scale-120 transition-transform duration-300 cursor-pointer"
            >
              Logout
            </button>
            <button className="bg-red-600 p-3 text-[16px] leading-7 rounded-md text-white w-full hover:scale-120 transition-transform duration-300 cursor-pointer">
              Delete account
            </button>
          </div>
        </div>
      </div>
      {/* <div cla></div> */}
    </>
  );
};

export default Tabs;
