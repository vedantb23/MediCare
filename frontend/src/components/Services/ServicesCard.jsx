import React from 'react'
import{ BiSolidRightArrow }from 'react-icons/bi';
import { Link } from 'react-router-dom';
const ServicesCard = ({ item, index }) => {
  const {name,desc,bgColor,textColor} = item;
  return (
    <>
      {/* <div className="space h-[20px]"></div> */}
      {/* <div className="px-4 md:px-8 lg:px-12">
        <div className="w-full max-w-[300px] rounded  px-5 py-[30px] flex flex-col justify-between items-center">
          <h2 className="text-[26px] leading-9 font-[700]">{name}</h2>
          <p className="text-[16px] leading-7 font-[300] mt-4">{desc}</p>

          <div className="flex items-center justify-between mt-7 w-full px-4">
            <Link
              to="/doctors"
              className="w-[44px] h-[44px] rounded-full border border-solid border-[#050505] flex items-center justify-center group hover:bg-[#4B5DFF] hover:text-white transition duration-300 ease-in-out"
            >
              <BiSolidRightArrow />
            </Link>

            <span
              className="w-[44px] h-[44px] flex items-center justify-center border border-solid border-[#050505] rounded-full group hover:bg-[#4B5DFF] hover:text-white transition duration-300 ease-in-out text-[20px] leading-[30px]"
              style={{ background: `${bgColor}`, color: `${textColor}` }}
            >
              {index + 1}
            </span>
          </div>
        </div>
      </div> */}
      <div className="w-full flex justify-center px-4 md:px-8 lg:px-12">
        <div className="w-full max-w-[300px] rounded px-5 py-[30px] flex flex-col justify-between items-center ">
          <h2 className="text-[26px] leading-9 font-[700]">{name}</h2>

          {/* Animated bar below title */}
          <div
            className="w-full h-[10px] rounded bg-opacity-100 mt-2 animate-[barMove_1.5s_ease-in-out_infinite]"
            style={{ backgroundColor: bgColor }}
          ></div>

          <p className="text-[16px] leading-7 font-[300] mt-4">{desc}</p>

          <div className="flex items-center justify-between mt-7 w-full px-4">
            <Link
              to="/doctors"
              className="w-[44px] h-[44px] rounded-full border border-solid border-[#050505] flex items-center justify-center group hover:bg-[#4B5DFF] hover:text-white transition duration-300 ease-in-out"
            >
              <BiSolidRightArrow />
            </Link>

            <span
              className="w-[44px] h-[44px] flex items-center justify-center border border-solid border-[#050505] rounded-full group hover:bg-[#4B5DFF] hover:text-white transition duration-300 ease-in-out text-[20px] leading-[30px]"
              style={{ background: `${bgColor}`, color: `${textColor}` }}
            >
              {index + 1}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServicesCard
