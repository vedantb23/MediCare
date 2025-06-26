import React, { useContext, useState, useEffect } from "react";
import userImg from "../../assets/images/patient-avatar.png";
import { authContext } from "../../context/AuthContext";
import { toast, ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MyBookings from "./MyBookings";
import ProfileSettings from "./ProfileSettings";
import UseGetProfile from "../../hooks/UsefetchData";
import { BASE_URL } from "../../../config";
import { PacmanLoader } from "react-spinners";

const MyAccount = () => {
  const { dispatch } = useContext(authContext);
  const [tab, settab] = useState("bookings");
  const {
    data: userData,
    loading,
    error,
  } = UseGetProfile(`${BASE_URL}/users/profile/me`);
  // console.log("userdatd",userData)

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });

    toast.success("Logout successful!", {
      position: "top-right",
      theme: "light",
    });
  };
  useEffect(() => {
    if (error) {
      toast.error("Sorry! Try Again");
    } else if (!loading && userData) {
      toast.success("User Data Fetched Successfully!", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }, [loading, error, userData]);
  return (
    <>
      {/* <div className="h-4"></div> */}
      <section className="flex mx-6">
        {loading && !error && (
          <div className="flex justify-center items-center w-full h-full">
            <PacmanLoader color="#36d7b7" size={50} />
          </div>
        )}
        {error && !loading && <h1> ("Sorry! Try Again ")</h1>}
        {!loading && !error && userData && (
          <>
            {" "}
            <div className="max-w-[590px] px-5 mx-auto flex flex-row justify-between items-start">
              {/* <div className="w-[100px] "></div> */}
              <div className="">
                <div className="pb-[10px] px-[30px] rounded-md">
                  <div className="flex items-center justify-center">
                    <figure className="w-[100px] h-[100px] rounded-full border-2 border-solid border-primaryColor">
                      <img
                        src={userData.photo}
                        alt=""
                        className="w-full h-full rounded-full"
                      />
                    </figure>
                  </div>
                </div>

                <div className="text-center mt-4">
                  <h2 className="text-[28px] leading-[30px] text-headingColor font-bold">
                    {userData.name}
                  </h2>
                  <p className="text-textColor text-[15px] leading-6 font-medium">
                    {userData.email}
                  </p>
                  <p className="text-textColor text-[15px] leading-6 font-medium">
                    Blood Type:
                    <span className="ml-2 text-headingColor text-[22px] leading-8">
                      {userData.bloodType}
                    </span>
                  </p>
                </div>
                {/* <div className="space h-[20px]"></div> */}
                <div className="mt-[50px] md:mt-[100px] flex flex-col md:w-[300px] mx-auto gap-5 justify-center items-center">
                  <button
                    onClick={handleLogout}
                    className="bg-[#181A1E] p-3 text-[16px] leading-7 rounded-md text-white w-full hover:scale-120 transition-transform duration-300 cursor-pointer"
                  >
                    Logout
                  </button>
                  <button
                    className="bg-red-600 p-3 text-[16px] leading-7 rounded-md text-white w-full hover:scale-120 transition-transform duration-300 cursor-pointer "
                    onClick={handleLogout}
                  >
                    Delete account
                  </button>
                </div>
              </div>
              <div className="w-[100px]"></div>
              {/* Toast Container */}
              {/* <ToastContainer /> */}
            </div>
            {/* <div className="h-[39px]"></div> */}
            <div className="md:col-span-2 md:px-[30px] flex flex-col justify-between gap-[20px] items-center mt-10">
              <div className="flex flex-col justify-center items-center gap-5">
                <div className="flex flex-row justify-between items-center gap-8">
                  <button
                    className={` ${
                      tab === "bookings"
                        ? "bg-blue-700 text-white cursor-pointer"
                        : "text-blue-700 cursor-pointer "
                    } "p-2 mr-5 mx-4 rounded-md text-[20px] leading-7 border border-solid border-blue-700 cursor-pointer"`}
                    onClick={() => settab("bookings")}
                  >
                    My Bookings{" "}
                  </button>

                  <button
                    className={`${
                      tab === "settings"
                        ? "bg-blue-700 text-white cursor-pointer"
                        : "text-blue-700 cursor-pointer"
                    } "p-2 mr-5 mx-4 rounded-md text-[20px] leading-7 border border-solid border-blue-700 cursor-pointer"`}
                    onClick={() => settab("settings")}
                  >
                    Profile Settings
                  </button>
                </div>

                {tab === "bookings" ? (
                  <MyBookings />
                ) : (
                  <ProfileSettings user={userData} />
                )}
              </div>
            </div>
          </>
        )}
      </section>
      {/* <div className="h-8"></div> */}
    </>
  );
};

export default MyAccount;
