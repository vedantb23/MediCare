"use client";

import { useState, useEffect } from "react";
import {
  Heart,
  MapPin,
  Calendar,
  Users,
  Award,
  Clock,
  CheckCircle,
  ArrowRight,
  Star,
  Phone,
  Video,
  UserCheck,
  Shield,
  ChevronDown,
  Search,
  PlayCircle,
  MessageCircle,
  Sparkles,
  TrendingUp,
  Headphones,
  Mail,
  PhoneCall,
  ThumbsUp,
  Verified,
  BadgeCheck,
} from "lucide-react";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
// Enhanced mock data with more details

// Enhanced Service Card with more animations
const ServiceCard = ({ service }) => (
  <div className="bg-white rounded-xl p-6 shadow-md">
    <div className="mb-6">
      <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
        <service.icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
      <div className="flex items-center text-sm text-gray-500 mt-2">
        <TrendingUp className="w-4 h-4 mr-2" />
        <span className="font-semibold">{service.stats}</span>
      </div>
    </div>

    <p className="text-gray-600 mb-6 text-sm">{service.description}</p>

    <div className="mb-6">
      <ul className="space-y-2">
        {service.features.map((feature, idx) => (
          <li key={idx} className="flex items-center text-sm text-gray-700">
            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
            {feature}
          </li>
        ))}
      </ul>
    </div>

    <Link to="/services">
      <button className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg">
        Learn More
      </button>
    </Link>
  </div>
);

// Enhanced Doctor Card with more details

// Enhanced Testimonial Card

const Home = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [doctors, setDoctors] = useState([]);
  const [services, setServices] = useState([]);
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setDoctors(mockDoctors);
        setServices(mockServices);
        setFaqs(mockFaqs);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Auto-rotate testimonials
  
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-100 relative overflow-hidden top-0">
      

      {/* Services Section - Enhanced */}
      <section className=" bg-white/80 backdrop-blur-sm relative overflow-hidden flex  ">
        {/* <div className="absolute inset-0 bg-gradient-to-r from-cyan-50/50 to-blue-50/50"></div> */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-full text-sm font-semibold text-cyan-700 mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Our Services
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-8">
              Providing the best{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
                healthcare services
              </span>{" "}
              for you
            </h2>

            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              World class care for everyone. Our healthcare professionals are
              dedicated to providing personalized care and support with
              cutting-edge technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your
            <span className="block text-yellow-300">Health Journey?</span>
          </h2>

          <p className="text-lg mb-10 max-w-2xl mx-auto">
            Join thousands of satisfied patients who trust us with their
            healthcare needs. Book your appointment today and experience the
            difference.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Link to="/doctors">
              <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg text-lg">
                Book Appointment Now
              </button>
            </Link>

            <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg text-lg">
              Call Us: +91 99900XX
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {[
              { label: "HIPAA Compliant", value: "100%" },
              { label: "Average Response", value: "< 2 min" },
              { label: "Success Rate", value: "98%" },
              { label: "Happy Patients", value: "1k+" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold mb-1">{item.value}</div>
                <div className="text-sm">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="flex items-center justify-center space-x-4 sm:space-x-6 text-lg sm:text-xl text-gray-600 mb-12 sm:mb-16 m-8">
        <p>Our patients' feedback drives our excellence.</p>
        <Link to="/contact">
          <button className="group inline-flex items-center text-cyan-600 hover:text-cyan-700 font-semibold hover:scale-105 transition-all duration-300">
            Rate us here
            <ArrowRight className="ml-2 sm:ml-3 w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </Link>
      </div>
    </div>
  );
};

// Add custom CSS animations
const styles = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
      transform: translateY(-20px) rotate(180deg);
    }
  }

  @keyframes smoothPulse {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
  }

  .animate-fadeInUp {
    animation: fadeInUp 0.8s ease-out forwards;
  }
`;

// Inject styles
if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}

export default Home;
