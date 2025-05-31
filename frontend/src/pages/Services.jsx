import React from 'react'
import { services } from '../assets/data/services'
import ServicesCard from '../components/Services/ServicesCard'
const Services = () => {
  return (
    <>
      <h2 className="text-[40px] leading-7 mt-4 font-[700] text-center">
        Our Services
      </h2>
      <div className="space h-[40px]"></div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-5  mt-[55px] ">
        {services.map((item, index) => (
          <ServicesCard
            className="mx-[40px]"
            item={item}
            index={index}
            key={index}
          />
        ))}
      </div>
      <div className="space h-[20px]"></div>
    </>
  );
}

export default Services
