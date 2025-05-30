import React from 'react'
import { services } from "../../assets/data/services"
import ServicesCard from './ServicesCard';
const ServiceList = () => {
  return <div className='grid grid-cols-2 lg:grid-cols-3 gap-5  mt-[55px] '>
    {services.map((item, index) => (
      <ServicesCard className="mx-[40px]" item={item} index={index} key={index} />
    ))}

  </div>;
}

export default ServiceList
