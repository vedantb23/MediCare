import React from 'react'
import { Link } from 'react-router-dom';
import heroImg01 from "../assets/images/faq-img.png";
import heroImg02 from "../assets/images/hero-img02.png";
import heroImg03 from "../assets/images/hero-img01.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import featureImg from "../assets/images/special-img.gif";
import faqImg from "../assets/images/homepageapp1.avif";
import FaqList from "../components/Faq/FaqList"
import { HiArrowNarrowRight } from "react-icons/hi";
import { BiSolidRightArrow } from 'react-icons/bi';
import About from '../components/About/About';
import CountUp from "react-countup";
import ServiceList from '../components/Services/ServiceList';
import DoctorList from '../components/Doctors/DoctorList';
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
              <div className="lg:w-[570px] flex flex-col justify-center items-center">
                <div className="text-[55px] leading-[46px] text-[#181A1E] font-[500]  md:leading-[70px]">
                  We help patients live a healthy , longer life{" "}
                </div>
                <p className="text_para">
                  Our healthcare professionals are dedicated to providing
                  personalized care and support. We offer a wide range of
                  services to meet your healthcare needs, from routine check-ups
                  to specialized treatments.
                </p>

                <button className="btn rounded-md h-[30px] animate-[smoothPulse_1s_ease-in-out_infinite] cursor-pointer">
                  Request a appointment
                </button>
              </div>

              {/* hero counter */}
            </div>
            <div className="flex gap-[70px]  justify-end">
              <div>
                <img
                  src={heroImg01}
                  alt="hero-img Mirrored"
                  className="w-[250px] h-[400px] object-cover rounded-2xl transform scale-x-[-1] scale-100 hover:scale-x-[-1] hover:scale-105 transition-transform duration-300 ease-in-out  hover:shadow-gray-500/50"
                />
              </div>
              <div className="mt-[30px] flex-col gap-8 flex">
                <img
                  src={heroImg02}
                  alt="hero-img"
                  className="w-[150px] rounded-2xl h-[180px] object-cover hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-lg hover:shadow-gray-500/50"
                />
                <img
                  src={heroImg03}
                  alt="hero-img"
                  className="w-[150px] rounded-2xl h-[180px] object-cover hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-lg hover:shadow-gray-500/50"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="space h-[25px]"></div>
        <div className="mt-[300px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-[30px] py-4 items-center justify-center top-[40px]  ">
          <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-black flex *justify-center items-center flex-col">
            <CountUp end={15} duration={8} suffix="+" />
            <span className="w-[100px] h-2 bg-yellow-300 rounded-full block"></span>
          </h2>
          <div className="mx-[20px] text_para">Years of Experience</div>

          <h2 className="mx-[20px] text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-black">
            <CountUp end={189} duration={4} suffix="+" />
            <span className="w-[100px] h-2 bg-[#b949de]  rounded-full block"></span>
          </h2>
          <div className="text_para">Clinic Location</div>

          <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-black">
            <CountUp end={80} duration={4} suffix="%" />
            <span className="w-[100px] h-2 bg-[#49b1de] rounded-full block"></span>
          </h2>
          <div className="text_para">Patient Satisfaction</div>
        </div>
        <div className="space h-[15px]"></div>
      </section>

      <div className="space h-[15px]"></div>

      {/* dex secocnd */}
      <section className="flex flex-col justify-items-center gap-5 py-10 ">
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

      {/* virtual treatment */}
      <div className="space h-[5px]"></div>
      <section className="flex justify-center gap-[90px] ">
        <div className="w-[570px] flex justify-center items-center flex-col">
          <h2 className="heading text-center">
            Get virtual treatment <br /> anytime
          </h2>
          <ul className="pl-4">
            <li className="text_para">
              1.Schedule the appointment directly from your device.
            </li>
            <li className="text_para">
              2.View our physicians who are accepting new patients,use the
              online scheduling toolto select an appointment.
            </li>
            <li className="text_para">
              3.Search for your physician here, and contact their office.
            </li>
          </ul>
          <Link to="/doctors" className="btn mx-auto">
            Find a Doctor
          </Link>
        </div>
        <div className="relative z-10 w-[220px] flex justify-end mt-50px] ">
          {" "}
          <img src={featureImg} alt="" className="w-[250px]" />
        </div>
      </section>

      <div className="gap h-[30px]"></div>
      {/* servies */}
      <section className="flex flex-col items-center justify-center  py-10 ">
        <div className="container flex flex-col items-center justify-center gap-5 py-10 ">
          <div className="w-[600px] mx-auto ">
            <h2 className="heading text-center">Our Services</h2>
            <p className="text_para text-center">
              We offer a wide range of healthcare services to meet your needs.
              Our team is dedicated to providing the highest quality care.
            </p>
          </div>
        </div>
      </section>
      <div className="space h-[20px]"></div>

      {/* 6  */}
      <section>
        <ServiceList />
      </section>
      <div className="space h-[50px]"></div>
      {/* features */}
      <About />
      <div className="space h-[60px]"></div>

      {/* faq */}
      <section className="flex justify-center">
        <div className="container">
          <div className="flex justify-between  ">
            <div className="w-1/2 hidden md:block  ">
              <img src={faqImg} alt="" className="w-2/3 left-2" />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="heading">Frequently Asked Questions</h2>
              <FaqList />
            </div>
          </div>
        </div>
      </section>

      <div className="space h-[40px]"></div>
      {/* dotors  */}

      <div className="space h-[40px]"></div>

      {/*  */}
      {/* doctorslist */}
      <section>
        <div className="container flex flex-col justify-center items-center ">
          <div className="w-[470px] mx-auto flex flex-col justify-center items-center">
            <h2 className="heading text-center">Our Doctors</h2>
            <p className="text_para text-center">
              Meet our team of experienced healthcare professionals.
            </p>
          </div>
        </div>
        <div className="space h-[40px]"></div>
        <DoctorList />
      </section>
      <div className="space h-[40px]"></div>

      {/* testimonials */}
      {/* <Testimonials /> */}
      {/* <div className="container"> */}
      <section>
        {/* <div className="container"> */}
        <div className="mx-auto flex flex-col items-center justify-center text-center">
          <div className="text_para text-center flex gap-[14px]">
            <p>Our patients' feedback is valuable to us. </p>
            <Link
              to="/rate"
              className="inline-flex items-center text-blue-600 hover:text-blue-400 hover:scale-120 not-last:font-medium transition duration-200 mx-4"
            >
              Rate us here
              <HiArrowNarrowRight className="inline-block rotate-" />
            </Link>
          </div>
        </div>
      </section>
      {/* <Testimonials /> */}
      {/* </div> */}
    </>
  );
}

export default Home