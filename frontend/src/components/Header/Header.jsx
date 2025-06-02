import {React,use,useRef,useEffect,useState} from 'react'
import logo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import userImg from '../../assets/images/avatar-icon.png'
import { BiMenu } from 'react-icons/bi';
import CountUp from "react-countup";
import { authContext } from '../../context/AuthContext';
import { useContext } from 'react';
const navLinks = [
  { name: "Home", href: "/home" },
  { name: "Find a Doctor", href: "/doctors" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];
const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const { user, role ,token} = useContext(authContext);
  const handleStickHeader = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add("sticky_header");
      }
      else {
        headerRef.current.classList.remove("sticky_header");
      }
    })
  }

  useEffect(() => {
    handleStickHeader()
    return () => {
      window.removeEventListener('scroll', handleStickHeader);
    };
  },[]);
  
  const handleMenuToggle = () => {
      menuRef.current.classList.toggle("show_menu");
    
  }
  return (
    <header className=" header flex items-center   " ref={headerRef}>
      <div className="container flex  mx-4   justify-between top-[5px]  ">
        <div className="  flex   items-center justify-between ">
          {/* logo */}

          <a
            href="/"
            className="cursor-pointer flex   items-center justify-center font-bold "
          >
            <fuck className="z-99999999 invert-10">
              <img
                src={logo}
                className=""
                alt="MediCare Logo"
                style={{
                  width: "40px",
                  filter: "contrast(800%) brightness(110%)",
                }}
              />
            </fuck>
            <span className="text-[#4e5172] font-[800] text-2xl items-center justify-center ">
              Medi
            </span>
            <span className="text-[#4B5DFF] font-[800] text-2xl items-center justify-center ">
              Care
            </span>
          </a>
        </div>
        {/* menu */}
        <div>
          <div className="navigation" ref={menuRef} onClick={handleMenuToggle}>
            <ul className="menu flex items-center justify-center  gap-[1.5rem]">
              {navLinks.map((link, index) => (
                <li key={index} className="flex items-center justify-center">
                  <NavLink
                    to={link.href}
                    className="group relative inline-block transition-transform duration-300 ease-in-out hover:scale-115"
                  >
                    <span className="relative z-10 text-black transition-colors duration-300 group-hover:text-blue-500">
                      {link.name}
                      <span className="absolute left-0 -bottom-0.5 h-[2px] w-full scale-x-0 origin-left bg-blue-600 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                    </span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* buttons */}
        <div className=" flex items-center justify-center gap-4 scale-125 ">
          {token && user ? (
            <div className="flex items-center gap-4">
              <Link
                to={`/home/${
                  role === "doctor" ? "doctors/profile/me" : "users/profile/me"
                }`}
              >
                <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                  <img
                    src={user?.photo}
                    alt=""
                    className="w-[35px] h-[35px] rounded-full hover:border hover:border-blue-400 hover:scale-110 transition-transform duration-300 ease-in-out  "
                  />
                </figure>
              </Link>
              <Link
                to={`/home/${
                  role === "doctor" ? "doctors/profile/me" : "users/profile/me"
                }`}
              >
                <div className='text-[13px] hover:text-blue-800'>
                  <span>Hey, </span> {user?.name} !
                </div>
                

              </Link>
            </div>
          ) : (
            <Link to="/login">
              <button className="bg-[#4B5DFF] text-white py-1 px-4 rounded hover:bg-[#3a4bbf] hover:scale-110 transition duration-300 ease-in-out issue_login scale-115">
                Login
              </button>
            </Link>
          )}
        </div>
        <span className="md:hidden  " onClick={handleMenuToggle}>
          <BiMenu className="w-6 h-6 cursor-pointer"> </BiMenu>
        </span>
      </div>
    </header>
  );
}

export default Header
