import React from 'react'
import { Link } from 'react-router-dom';
import heroImg01 from '../assets/images/hero-img01.png'
import heroImg02 from "../assets/images/hero-img02.png";
import heroImg03 from "../assets/images/hero-img03.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import { BiSolidRightArrow } from 'react-icons/bi';
import About from '../components/About/About';
import CountUp from "react-countup";
import ServiceList from '../components/Services/ServiceList';
const Home = () => {
  return (
    <>
      {/* section first  */}
      {/* <div className="space h-[25px]"></div> */}
      <section className="hero_section flex-col gap-5 pt-[60px] md:h-[500px] md:pt-[80px]  ">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/* hero conte */}
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-[#181A1E] font-[800] md:text-[60px] md:leading-[70px]">
                  We help patients live a healthy , longer life{" "}
                </h1>
                <p className="text_para">
                  Our healthcare professionals are dedicated to providing
                  personalized care and support. We offer a wide range of
                  services to meet your healthcare needs, from routine check-ups
                  to specialized treatments.
                </p>

                <button className="btn rounded-md h-[30px] animate-[smoothPulse_1s_ease-in-out_infinite]">
                  Request a appointment
                </button>
              </div>

              {/* hero counter */}
            </div>
            <div className="flex gap-[30px]  justify-end">
              <div>
                <img
                  src={heroImg01}
                  alt="hero-img"
                  className="w-[350px] rounded-2xl h-[400px] object-cover"
                />
              </div>
              <div className="mt-[30px] flex-col gap-8 flex">
                <img
                  src={heroImg02}
                  alt="hero-img"
                  className="w-[150px] rounded-2xl h-[180px] object-cover"
                />
                <img
                  src={heroImg03}
                  alt="hero-img"
                  className="w-[150px] rounded-2xl h-[180px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[300px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-[30px] py-4 items-center justify-center top-[40px]">
          <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-black">
            <CountUp end={30} duration={6} suffix="+" />
            <span className="w-[100px] h-2 bg-yellow-300 rounded-full block"></span>
          </h2>
          <div className="mx-[20px] text_para">Years of Experience</div>

          <h2 className="mx-[20px] text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-black">
            <CountUp end={15} duration={8} suffix="+" />
            <span className="w-[100px] h-2 bg-[#b949de]  rounded-full block"></span>
          </h2>
          <div className="text_para">Clinic Location</div>

          <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-black">
            <CountUp end={30} duration={7} suffix="%" />
            <span className="w-[100px] h-2 bg-[#49b1de] rounded-full block"></span>
          </h2>
          <div className="text_para">Patient Satisfaction</div>
        </div>
      </section>

      <div className="space h-[25px]"></div>

      {/* dex secocnd */}
      <section className="flex flex-col items-center justify-center gap-5 py-10 ">
        <div className="container mt-[10px] ">
          <div className=" mx-auto flex flex-col gap-4 items-center justify-center">
            <h2 className="heading text-center ">
              Providing the best healthcare services for you
            </h2>
            <p className="text_para text-center">
              World class care for everyone. Our healthcare professionals are
              dedicated to providing personalized care and support.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px] ">
          <div className="py-[30px] px-5">
            <div className="flex justify-center items-baseline">
              <img src={icon01} alt="" />
            </div>
            <div className="mt-[30px] flex flex-col items-center justify-center">
              <h2 className="text-[22px] leading-9 font-[300] text-center ">
                Find a Doctor
              </h2>
              <p className="text-[16px]  leading-7 text-center ">
                World class care for everyone. Our healthcare professionals are
                dedicated to providing personalized care.
              </p>

              <Link
                to="/doctors"
                className="w-[44px] h-[44px] rounded-full border border-solid border-[#050505] flex items-center justify-center group mt-[20px]  hover:bg-[#4B5DFF] hover:text-white transition duration-300 ease-in-out"
              >
                <BiSolidRightArrow />
              </Link>
            </div>
          </div>
          <div className="py-[30px] px-5">
            <div className="flex justify-center items-baseline">
              <img src={icon02} alt="" />
            </div>
            <div className="mt-[30px] flex flex-col items-center justify-center">
              <h2 className="text-[22px] leading-9 font-[300] text-center ">
                Find location
              </h2>
              <p className="text-[16px]  leading-7 text-center ">
                Find the nearest healthcare facility. Our platform helps you
                locate healthcare facilities in your area.
              </p>

              <Link
                to="/doctors"
                className="w-[44px] h-[44px] rounded-full border border-solid border-[#050505] flex items-center justify-center group mt-[20px]  hover:bg-[#4B5DFF] hover:text-white transition duration-300 ease-in-out"
              >
                <BiSolidRightArrow />
              </Link>
            </div>
          </div>
          <div className="py-[30px] px-5">
            <div className="flex justify-center items-baseline">
              <img src={icon03} alt="" />
            </div>
            <div className="mt-[30px] flex flex-col items-center justify-center">
              <h2 className="text-[22px] leading-9 font-[300] text-center ">
                Book an Appointment
              </h2>
              <p className="text-[16px]  leading-7 text-center ">
                Easy online appointment booking.Our user-friendly platform
                allows you to book with healthcare professionals.
              </p>

              <Link
                to="/doctors"
                className="w-[44px] h-[44px] rounded-full border border-solid border-[#050505] flex items-center justify-center group mt-[20px]  hover:bg-[#4B5DFF] hover:text-white transition duration-300 ease-in-out"
              >
                <BiSolidRightArrow />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* abput */}
      <div className="space h-[45px]"></div>
      <About />
      <div className="gap h-[70px]"></div>
      {/* servies */}
      <section>
        <div className="container flex flex-col items-center justify-center gap-5 py-10 ">
          <div className="w-[600px] mx-auto ">
            <h2 className='heading text-center'>Our Services</h2>
            <p className="text_para text-center">
              We offer a wide range of healthcare services to meet your needs.
              Our team is dedicated to providing the highest quality care.
            </p>
          </div>


        </div>
          <ServiceList />
      </section>
    </>
  );
}

export default Home