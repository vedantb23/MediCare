import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import {
  RiLinkedinFill,
  RiGithubFill,
  RiTwitterFill,
  RiFacebookFill,
  RiInstagramLine,
} from "react-icons/ri";
import { AiFillHeart } from "react-icons/ai"; // Ant Design Heart icon



const socialLinks = [
  { path: "https://www.linkedin.com", icon: <RiLinkedinFill /> },
  { path: "https://www.github.com", icon: <RiGithubFill /> },
  { path: "https://www.twitter.com", icon: <RiTwitterFill /> },
  { path: "https://www.facebook.com", icon: <RiFacebookFill /> },
  { path: "https://www.instagram.com", icon: <RiInstagramLine /> },
];
const quickLinks01 = [
  { path: "/home", name: "Home" },
  { path: "/about", name: "About Us" },
  { path: "/services", name: "Services" },
];
const quickLinks02 = [
  { path: "/find-a-doctor", display: "Find a Doctor" },
  { path: "/request-appointment", display: "Request an Appointment" },
  { path: "/find-location", display: "Find Location" },
  { path: "/get-opinion", display: "Get an Opinion" },
];
const quickLinks03 = [
  { path: "/donate", display: "Donate" },
  { path: "/contact", display: "Contact Us" },
];

const footerBlue = "#1e40af"; // dark blue
const footerCyan = "#0bc5ea"; // cyan
const textColor = "#000000";
const linkHoverColor = "#0883a6";

const Footer = () => {
  return (
    <>
      <style>{`
        /* Diagonal split background: left half dark blue, right half cyan */
        .footer-bg {
          position: relative;
          background: linear-gradient(
            135deg,
            ${footerBlue} 49.9%, 
            ${footerCyan} 50%
          );
          overflow: hidden;
        }

        .footer-overlay {
          position: relative;
          padding: 60px 20px 40px;
          user-select: none;
          color: ${textColor};
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: rgba(255 255 255 / 0.9); /* slight white overlay for text readability */
          max-width: 1200px;
          margin: 0 auto;
          border-radius: 12px;
          box-shadow: 0 8px 24px rgb(0 0 0 / 0.15);
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 40px;
        }

        .footer-logo-wrapper {
          flex: 1 1 250px;
          min-width: 250px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .footer-logo-link {
          display: flex;
          align-items: center;
          gap: 6px;
          font-weight: 800;
          font-size: 2rem;
          user-select: none;
          cursor: pointer;
          color: ${textColor};
          text-decoration: none;
        }
        .footer-logo {
          width: 48px;
          filter: contrast(8) brightness(1.1);
          transition: transform 0.4s ease;
        }
        .footer-logo-link:hover .footer-logo {
          animation: pulseScale 1.2s infinite;
        }
        .footer-logo-text-med {
          color: #4e5172;
        }
        .footer-logo-text-care {
          color: #4b5dff;
        }

        .footer-social {
          margin-top: 24px;
          display: flex;
          gap: 20px;
          justify-content: center;
        }
        .footer-social a {
          color: ${textColor};
          font-size: 28px;
          display: flex;
          align-items: center;
          transition: transform 0.3s ease, color 0.3s ease;
        }
        .footer-social a:hover {
          color: ${linkHoverColor};
          transform: scale(1.2);
        }

        nav {
          flex: 1 1 150px;
          min-width: 150px;
        }
        nav ul {
          list-style: none;
          padding: 0;
          margin: 0;
          text-align: center;
        }
        nav li {
          margin-bottom: 14px;
        }
        nav li a {
          color: ${textColor};
          text-decoration: none;
          font-weight: 500;
          font-size: 16px;
          transition: color 0.3s ease;
          cursor: pointer;
          user-select: none;
        }
        nav li a:hover {
          color: ${linkHoverColor};
        }

        hr.footer-divider {
          margin: 40px auto 20px;
          max-width: 1200px;
          border: none;
          border-top: 1px solid rgba(0,0,0,0.1);
        }

        .footer-copy {
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
          font-size: 14px;
          opacity: 0.7;
          user-select: none;
          padding-bottom: 20px;
        }

        @keyframes pulseScale {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        @media (max-width: 768px) {
          .footer-overlay {
            flex-direction: column;
            align-items: center;
          }
          nav ul {
            text-align: center;
          }
          nav {
            min-width: 100%;
          }
        }
      `}</style>

      <footer
        className="footer-bg"
        aria-label="Site footer with diagonal two-tone background"
      >
        <div className="footer-overlay">
          {/* Logo & Description */}
          <div className="footer-logo-wrapper">
            <a
              href="/"
              className="footer-logo-link hover:scale-125 transition-transform duration-300 ease-in-out"
              aria-label="MediCare Home "
            >
              <img src={logo} alt="MediCare Logo" className="footer-logo" />
              <span className="footer-logo-text-med">Medi</span>
              <span className="footer-logo-text-care">Care</span>
            </a>
            {/* <p
              
            >
              Your trusted healthcare partner delivering quality medical
              services with compassion and care.
            </p> */}
            <p
              style={{
                maxWidth: 320,
                lineHeight: 1.6,
                fontSize: 16,
                marginTop: 20,
              }}
               className="relative inline-block text-black hover:text-blue-900 group transition-colors duration-300"
            >
              Your trusted healthcare partner delivering quality medical
              services with compassion and care.
              <span className="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </p>

            <div className="footer-social">
              {socialLinks.map(({ path, icon }, i) => (
                <a
                  href={path}
                  key={i}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Link to ${path}`}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          {[quickLinks01, quickLinks02, quickLinks03].map((links, idx) => (
            <nav key={idx} aria-label={`Footer quick links group ${idx + 1}`}>
              <ul>
                {links.map(({ path, name, display }) => {
                  const label = name || display;
                  return (
                    <li
                      key={path}
                      className="transition-transform duration-300 ease-in-out hover:scale-125"
                    >
                      <Link
                        to={path}
                        className="relative inline-block text-black hover:text-blue-600 group transition-colors duration-300 "
                      >
                        {label}
                        <span className="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          ))}
        </div>

        <hr className="footer-divider" />

        <p className="footer-copy">
          &copy; {new Date().getFullYear()} MediCare. All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
