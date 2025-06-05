import React from 'react'
import aboutImg from "../../assets/images/feature-img.png";
import aboutCardImg from "../../assets/images/about-card.png";
import { Link } from 'react-router-dom';
const About = () => {
  return (
      <section >
          <div className="container ">
              <div className="flex justify-center gap-[80px] flex-col lg:flex-row mx-auto ">
                  <div className="relative w-[300px]  z-10 order-2 lg:order-1 " >
                      <img src={aboutImg} alt="" />
                      <div className="absolute z-20 bottom-0.5 w-[250px] mx-auto ">
                          <img src={aboutCardImg} alt="" />
                      </div>
                  </div>


                  <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2 flex flex-col gap-3">
                      <h2 className='heading'>About Us</h2>
                      <p >We are dedicated to providing the best healthcare services. Since 1990, we have been at the forefront of medical innovation and patient care.</p>
                      <p>Our team of experienced professionals is committed to ensuring that every patient receives personalized and compassionate care.</p>
                      <Link to="/"><button className='btn'>Learn More</button></Link>
                  </div>
              </div>
          </div>
    </section>
  )
}

export default About
