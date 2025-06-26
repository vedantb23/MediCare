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
const mockDoctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    rating: 4.9,
    experience: "15+ years",
    patients: "2.5k+",
    image:
      "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=400",
    available: true,
    price: "Rs.150",
    nextAvailable: "Today 2:30 PM",
    specializations: ["Heart Surgery", "Cardiac Care", "Preventive Medicine"],
    languages: ["English", "Spanish"],
    verified: true,
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Neurologist",
    rating: 4.8,
    experience: "12+ years",
    patients: "1.8k+",
    image:
      "https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg?auto=compress&cs=tinysrgb&w=400",
    available: true,
    price: "Rs.180",
    nextAvailable: "Tomorrow 10:00 AM",
    specializations: ["Brain Surgery", "Epilepsy", "Stroke Care"],
    languages: ["English", "Mandarin"],
    verified: true,
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialty: "Pediatrician",
    rating: 4.9,
    experience: "10+ years",
    patients: "3.2k+",
    image:
      "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400",
    available: false,
    price: "Rs.120",
    nextAvailable: "Next Week",
    specializations: ["Child Care", "Vaccinations", "Growth Development"],
    languages: ["English", "Spanish", "French"],
    verified: true,
  }
];

const mockServices = [
  {
    id: 1,
    title: "Find Expert Doctors",
    description:
      "Connect with verified healthcare professionals across various specializations. Browse profiles, read reviews, and choose the right doctor for your needs with our AI-powered matching system.",
    icon: Users,
    color: "from-blue-500 via-cyan-500 to-teal-500",
    features: [
      "Verified Profiles",
      "24/7 Support",
    ],
    stats: "2,500+ Doctors",
  },
  {
    id: 2,
    title: "Locate Nearby Clinics",
    description:
      "Find healthcare facilities in your area with our smart location service. Get directions, check availability, and plan your visit efficiently with real-time updates.",
    icon: MapPin,
    color: "from-emerald-500 via-green-500 to-teal-500",
    features: [
      "Real-time Updates",
      "Facility Info",
    ],
    stats: "100+ Locations",
  },
  {
    id: 3,
    title: "Easy Appointment Booking",
    description:
      "Schedule appointments instantly with our user-friendly booking system. Choose your preferred time slot and get confirmation immediately with automated reminders.",
    icon: Calendar,
    color: "from-purple-500 via-indigo-500 to-blue-500",
    features: [
      "Instant Booking",
      "Flexible Scheduling",
    ],
    stats: "1k+ Bookings/Month",
  },
];

const mockFaqs = [
  {
    question: "How do I book an appointment?",
    answer:
      "You can easily book an appointment through our online platform. Simply browse our available doctors, select your preferred time slot, and confirm your booking with instant confirmation. You'll receive SMS and email reminders before your appointment.",
    category: "Booking",
  },
  {
    question: "How secure is my medical information?",
    answer:
      "Your privacy and security are our top priorities. We use bank-level encryption and are fully HIPAA-compliant. All your medical information is stored securely and is only accessible to your healthcare providers and authorized personnel.",
    category: "Security",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Working Mother",
    rating: 5,
    comment:
      "The virtual consultation feature saved me so much time! Dr. Johnson was incredibly professional and thorough. The platform is user-friendly and the booking process was seamless.",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
    treatment: "Pediatric Consultation",
    date: "2 weeks ago",
  },
  {
    id: 2,
    name: "Robert Chen",
    role: "Senior Executive",
    rating: 5,
    comment:
      "Outstanding service! The doctors are highly qualified and the staff is very supportive. I was able to get an appointment the same day, which was crucial for my condition.",
    image:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
    treatment: "Cardiology Check-up",
    date: "1 month ago",
  },
  {
    id: 3,
    name: "Maria Rodriguez",
    role: "Retired Teacher",
    rating: 5,
    comment:
      "I've been using this platform for over a year now. The quality of care is exceptional, and the convenience of online booking makes managing my health so much easier.",
    image:
      "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400",
    treatment: "Regular Health Monitoring",
    date: "3 weeks ago",
  },
];

// Enhanced FAQ Component with categories
const FaqItem = ({ question, answer, category, isOpen, onToggle }) => (
  <div className="group bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] hover:bg-white">
    <button
      className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gradient-to-r hover:from-cyan-50/50 hover:to-blue-50/50 transition-all duration-300"
      onClick={onToggle}
    >
      <div className="flex-1 pr-4">
        <div className="flex items-center mb-2">
          <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-semibold rounded-full mr-3">
            {category}
          </span>
        </div>
        <span className="font-bold text-gray-800 text-lg group-hover:text-cyan-600 transition-colors duration-300">
          {question}
        </span>
      </div>
      <div
        className={`transform transition-all duration-500 ${
          isOpen ? "rotate-180 scale-110" : "group-hover:scale-110"
        }`}
      >
        <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
          <ChevronDown className="w-5 h-5 text-white" />
        </div>
      </div>
    </button>
    <div
      className={`px-8 transition-all duration-700 ease-in-out ${
        isOpen
          ? "pb-8 max-h-96 opacity-100"
          : "max-h-0 opacity-0 overflow-hidden"
      }`}
    >
      <div className="border-t border-gradient-to-r from-cyan-200 to-blue-200 pt-6">
        <p className="text-gray-600 leading-relaxed text-base">{answer}</p>
      </div>
    </div>
  </div>
);

// Enhanced Service Card with more animations
const ServiceCard = ({ service, index }) => (
  <div
    className="group relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 hover:rotate-1 border border-white/20 overflow-hidden"
    style={{
      animationDelay: `${index * 200}ms`,
      animation: `fadeInUp 0.8s ease-out forwards ${index * 200}ms`,
    }}
  >
    {/* Animated background gradient */}
    <div
      className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-all duration-700`}
    ></div>

    {/* Floating particles effect */}
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className={`absolute w-2 h-2 bg-gradient-to-r ${service.color} rounded-full opacity-0 group-hover:opacity-60 transition-all duration-1000`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 200}ms`,
            animation: `float 3s ease-in-out infinite ${i * 200}ms`,
          }}
        ></div>
      ))}
    </div>

    <div className="relative z-10">
      {/* Enhanced icon with multiple layers */}
      <div className="relative mb-8">
        <div
          className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}
        >
          <service.icon className="w-10 h-10 text-white" />
        </div>
        <div
          className={`absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200`}
        >
          <Sparkles className="w-3 h-3 text-white" />
        </div>
      </div>

      <div className="mb-4">
        <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-600 group-hover:to-blue-600 transition-all duration-500">
          {service.title}
        </h3>
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <TrendingUp className="w-4 h-4 mr-2" />
          <span className="font-semibold">{service.stats}</span>
        </div>
      </div>

      <p className="text-gray-600 leading-relaxed mb-6 text-base group-hover:text-gray-700 transition-colors duration-300">
        {service.description}
      </p>

      {/* Feature list */}
      <div className="mb-8">
        <div className="grid grid-cols-2 gap-2">
          {service.features.map((feature, idx) => (
            <div key={idx} className="flex items-center text-sm text-gray-600">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      <button className="group/btn relative w-full px-6 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-2xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 overflow-hidden">
        <Link to="/services">
          <span className="relative z-10 flex items-center justify-center">
            Learn More
            <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
          </span>
        </Link>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
      </button>
    </div>
  </div>
);

// Enhanced Doctor Card with more details
const DoctorCard = ({ doctor }) => (
  <div className="group bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 overflow-hidden border border-white/20 transform hover:-translate-y-3 hover:rotate-1">
    <div className="relative h-80 overflow-hidden">
      <img
        src={doctor.image || "/placeholder.svg"}
        alt={doctor.name}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

      {/* Status badges */}
      <div className="absolute top-4 left-4 right-4 flex justify-between">
        <div
          className={`px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm ${
            doctor.available
              ? "bg-green-500/90 text-white"
              : "bg-red-500/90 text-white"
          }`}
        >
          {doctor.available ? "Available" : "Busy"}
        </div>
        {doctor.verified && (
          <div className="px-3 py-2 bg-blue-500/90 backdrop-blur-sm rounded-full flex items-center">
            <BadgeCheck className="w-4 h-4 text-white mr-1" />
            <span className="text-white text-sm font-semibold">Verified</span>
          </div>
        )}
      </div>

      {/* Floating info cards */}
      <div className="absolute bottom-4 left-4 right-4">
        <div className="flex items-center justify-between text-white mb-3">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(doctor.rating)
                    ? "text-yellow-400 fill-current"
                    : "text-gray-300"
                }`}
              />
            ))}
            <span className="text-sm ml-2 font-semibold">{doctor.rating}</span>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold">{doctor.price}</div>
            <div className="text-xs opacity-80">per consultation</div>
          </div>
        </div>

        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3">
          <div className="flex items-center text-white text-sm">
            <Clock className="w-4 h-4 mr-2" />
            <span>Next: {doctor.nextAvailable}</span>
          </div>
        </div>
      </div>
    </div>

    <div className="p-6">
      <div className="mb-4">
        <h3 className="text-2xl font-bold text-gray-800 mb-1">{doctor.name}</h3>
        <p className="text-cyan-600 font-semibold text-lg mb-2">
          {doctor.specialty}
        </p>

        {/* Languages */}
        <div className="flex flex-wrap gap-2 mb-3">
          {doctor.languages.map((lang, idx) => (
            <span
              key={idx}
              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
            >
              {lang}
            </span>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="flex items-center justify-between mb-6 text-sm text-gray-600">
        <div className="flex items-center">
          <Award className="w-4 h-4 mr-2 text-yellow-500" />
          {doctor.experience}
        </div>
        <div className="flex items-center">
          <Users className="w-4 h-4 mr-2 text-blue-500" />
          {doctor.patients}
        </div>
      </div>

      {/* Specializations */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-gray-700 mb-2">
          Specializations:
        </h4>
        <div className="flex flex-wrap gap-1">
          {doctor.specializations.slice(0, 2).map((spec, idx) => (
            <span
              key={idx}
              className="px-2 py-1 bg-cyan-50 text-cyan-600 text-xs rounded-lg"
            >
              {spec}
            </span>
          ))}
          {doctor.specializations.length > 2 && (
            <span className="px-2 py-1 bg-gray-50 text-gray-500 text-xs rounded-lg">
              +{doctor.specializations.length - 2} more
            </span>
          )}
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex space-x-3">
        <Link to="/doctors">
        <button className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
          <Calendar className="w-4 h-4 mr-2" />
          Book Now
        </button>
        </Link>
        <button className="px-4 py-3 border-2 border-cyan-600 text-cyan-600 rounded-xl hover:bg-cyan-600 hover:text-white transition-all duration-300 group/msg">
          <MessageCircle className="w-5 h-5 group-hover/msg:scale-110 transition-transform duration-300" />
        </button>
        <button className="px-4 py-3 border-2 border-green-600 text-green-600 rounded-xl hover:bg-green-600 hover:text-white transition-all duration-300 group/call">
          <Video className="w-5 h-5 group-hover/call:scale-110 transition-transform duration-300" />
        </button>
      </div>
    </div>
  </div>
);

// Enhanced Testimonial Card
const TestimonialCard = ({ testimonial, index }) => (
  <div
    className="group bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 border border-white/20 overflow-hidden"
    style={{ animationDelay: `${index * 200}ms` }}
  >
    {/* Floating background elements */}
    <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
      <Star className="w-16 h-16 text-yellow-400" />
    </div>

    <div className="relative z-10">
      {/* Rating stars */}
      <div className="flex items-center justify-center mb-6">
        {[...Array(testimonial.rating)].map((_, j) => (
          <Star
            key={j}
            className="w-6 h-6 text-yellow-400 fill-current mr-1 group-hover:scale-110 transition-transform duration-300"
            style={{ animationDelay: `${j * 100}ms` }}
          />
        ))}
      </div>

      {/* Quote */}
      <div className="relative mb-8">
        <div className="absolute -top-2 -left-2 text-6xl text-cyan-200 font-serif">
          "
        </div>
        <p className="text-gray-700 italic text-lg leading-relaxed pl-8 group-hover:text-gray-800 transition-colors duration-300">
          {testimonial.comment}
        </p>
        <div className="absolute -bottom-4 -right-2 text-6xl text-cyan-200 font-serif rotate-180">
          "
        </div>
      </div>

      {/* Patient info */}
      <div className="flex items-center">
        <div className="relative">
          <img
            src={testimonial.image || "/placeholder.svg"}
            alt={testimonial.name}
            className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
            <Verified className="w-3 h-3 text-white" />
          </div>
        </div>
        <div className="ml-4 flex-1">
          <h4 className="font-bold text-gray-800 text-lg">
            {testimonial.name}
          </h4>
          <p className="text-gray-600 text-sm">{testimonial.role}</p>
          <div className="flex items-center mt-1 text-xs text-gray-500">
            <span className="px-2 py-1 bg-blue-50 text-blue-600 rounded-full mr-2">
              {testimonial.treatment}
            </span>
            <span>{testimonial.date}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

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
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-100 flex items-center justify-center relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        </div>

        <div className="text-center relative z-10">
          <div className="relative mb-8">
            <div className="w-20 h-20 border-4 border-cyan-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
            <div
              className="absolute inset-0 w-20 h-20 border-4 border-blue-400 border-b-transparent rounded-full animate-spin mx-auto"
              style={{
                animationDirection: "reverse",
                animationDuration: "1.5s",
              }}
            ></div>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">
              Loading Your Healthcare Experience
            </h2>
            <p className="text-gray-600 text-lg">
              Preparing something amazing for you...
            </p>
            <div className="flex items-center justify-center space-x-2">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-3 h-3 bg-cyan-500 rounded-full animate-bounce"
                  style={{ animationDelay: `${i * 200}ms` }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-100 relative overflow-hidden top-0">
      {/* Global floating elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float 6s ease-in-out infinite ${Math.random() * 6}s`,
              animationDirection: Math.random() > 0.5 ? "normal" : "reverse",
            }}
          ></div>
        ))}
      </div>

      {/* Hero Section - Enhanced */}
      <section className="relative overflow-hidden pt-10 pb-12  flex items-center">
        {/* Enhanced animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-10 right-1/3 w-64 h-64 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
            {/* Hero Content - Enhanced */}
            <div className="flex-1 text-center lg:text-left max-w-2xl">
              {/* Trust badge with animation */}
              <div className="inline-flex items-center px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg mb-8 border border-white/30 group hover:scale-105 transition-all duration-300">
                <div className="flex items-center">
                  <Heart className="w-5 h-5 text-red-500 mr-3 animate-pulse" />
                  <span className="text-sm font-semibold text-gray-700 mr-3">
                    Trusted by
                  </span>
                  <div className="flex items-center">
                    <CountUp
                      end={50}
                      duration={2}
                      suffix="k+"
                      className="font-bold text-cyan-600"
                    />
                    <span className="text-sm font-semibold text-gray-700 ml-1">
                      Patients
                    </span>
                  </div>
                </div>
                <div className="ml-3 flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full border-2 border-white"
                    ></div>
                  ))}
                </div>
              </div>

              {/* Main heading with enhanced typography */}
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-800 leading-tight mb-8">
                We help patients live a{" "}
                <span className="relative">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600">
                    healthy, longer life
                  </span>
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                </span>
              </h1>

              {/* Enhanced description */}
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0">
                Our healthcare professionals are dedicated to providing
                <span className="font-semibold text-cyan-600">
                  {" "}
                  personalized care
                </span>{" "}
                and support. We offer a wide range of services to meet your
                healthcare needs, from routine check-ups to
                <span className="font-semibold text-blue-600">
                  {" "}
                  specialized treatments
                </span>
                .
              </p>

              {/* Enhanced CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-16 justify-center lg:justify-start">
                <Link to="/doctors">
                  <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-2xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Calendar className="w-6 h-6 mr-3 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                    <span className="relative z-10">
                      Request an Appointment
                    </span>
                    <ArrowRight className="w-5 h-5 ml-2 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </Link>

                <button className="group px-8 py-4 bg-white/90 backdrop-blur-sm text-cyan-600 font-semibold rounded-2xl border-2 border-cyan-600/30 hover:bg-cyan-600 hover:text-white transition-all duration-300 flex items-center justify-center hover:shadow-xl">
                  <PlayCircle className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" />
                  Watch Demo
                </button>
              </div>

              {/* Enhanced Stats with better spacing */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-2 border-t border-white/30">
                {[
                  {
                    number: 15,
                    suffix: "+",
                    label: "Years of Experience",
                    color: "from-yellow-400 to-orange-500",
                    icon: Award,
                  },
                  {
                    number: 189,
                    suffix: "+",
                    label: "Clinic Locations",
                    color: "from-purple-400 to-pink-500",
                    icon: MapPin,
                  },
                  {
                    number: 80,
                    suffix: "%",
                    label: "Patient Satisfaction",
                    color: "from-cyan-400 to-blue-500",
                    icon: ThumbsUp,
                  },
                ].map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="relative inline-block mb-4">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mb-3 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}
                      >
                        <stat.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3">
                      <CountUp
                        end={stat.number}
                        duration={3}
                        suffix={stat.suffix}
                      />
                    </div>
                    <div
                      className={`w-20 h-1 bg-gradient-to-r ${stat.color} rounded-full mx-auto mb-3 group-hover:w-24 transition-all duration-300`}
                    ></div>
                    <p className="text-gray-600 font-medium text-sm sm:text-base">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Images - Enhanced with better mobile layout */}
            <div className="flex-1 relative max-w-lg w-full">
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-4 sm:space-y-6">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
                    <img
                      src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="Doctor consultation"
                      className="relative w-full h-64 sm:h-80 object-cover rounded-3xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-cyan-600/20 to-transparent rounded-3xl"></div>

                    {/* Floating badge */}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-2 shadow-lg">
                      <div className="flex items-center text-sm font-semibold text-gray-700">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                        Available Now
                      </div>
                    </div>
                  </div>

                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
                    <img
                      src="https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=400"
                      alt="Medical equipment"
                      className="relative w-full h-32 sm:h-48 object-cover rounded-3xl shadow-xl group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-3xl"></div>
                  </div>
                </div>

                <div className="space-y-4 sm:space-y-6 pt-8 sm:pt-12">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
                    <img
                      src="https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=400"
                      alt="Healthcare team"
                      className="relative w-full h-32 sm:h-48 object-cover rounded-3xl shadow-xl group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/20 to-transparent rounded-3xl"></div>
                  </div>

                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
                    <img
                      src="https://images.pexels.com/photos/4173258/pexels-photo-4173258.jpeg?auto=compress&cs=tinysrgb&w=400"
                      alt="Modern clinic"
                      className="relative w-full h-64 sm:h-80 object-cover rounded-3xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-teal-600/20 to-transparent rounded-3xl"></div>

                    {/* Floating stats */}
                    <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-2xl p-3 shadow-lg">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-800">
                          4.9
                        </div>
                        <div className="flex items-center justify-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-3 h-3 text-yellow-400 fill-current"
                            />
                          ))}
                        </div>
                        <div className="text-xs text-gray-600">Rating</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Enhanced */}
      <section className="py-20 sm:py-32 bg-white/80 backdrop-blur-sm relative overflow-hidden flex  ">
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

      {/* Virtual Treatment Section - Enhanced */}
      <section className="py-20 sm:py-32 bg-gradient-to-br from-cyan-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 max-w-2xl">
              <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full text-sm font-semibold text-cyan-700 mb-8">
                <Video className="w-4 h-4 mr-2" />
                Virtual Care Available
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-10">
                Get virtual treatment{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
                  anytime
                </span>
              </h2>

              <div className="space-y-6 sm:space-y-8 mb-12">
                {[
                  {
                    icon: Calendar,
                    title: "Schedule the appointment directly",
                    description:
                      "Schedule the appointment directly from your device with our intuitive booking system and get instant confirmation.",
                    color: "from-cyan-500 to-blue-500",
                  },
                  {
                    icon: Users,
                    title: "View our physicians",
                    description:
                      "View our physicians who are accepting new patients, use the online scheduling tool to select an appointment that fits your schedule.",
                    color: "from-blue-500 to-indigo-500",
                  },
                  {
                    icon: Search,
                    title: "Search for your physician",
                    description:
                      "Search for your physician here, and contact their office directly for personalized care and specialized treatments.",
                    color: "from-indigo-500 to-purple-500",
                  },
                ].map((step, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 sm:space-x-6 group"
                  >
                    <div
                      className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                    >
                      <span className="text-white font-bold text-lg sm:text-xl">
                        {index + 1}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3 group-hover:text-cyan-600 transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/doctors">
                <button className="group px-8 sm:px-10 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-2xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center text-lg">
                  <Search className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                  Find a Doctor
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </Link>
            </div>

            <div className="flex-1 relative max-w-lg w-full">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-3xl blur opacity-20"></div>
                <img
                  src="https://images.pexels.com/photos/4173258/pexels-photo-4173258.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Virtual consultation"
                  className="relative w-full h-80 sm:h-96 object-cover rounded-3xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-600/30 to-transparent rounded-3xl"></div>

                {/* Enhanced floating elements */}
                <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl animate-bounce">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-gray-700">
                      Online Now
                    </span>
                    <div className="flex -space-x-1">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className="w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full border-2 border-white"
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-xl">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center">
                      <Video className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <div>
                      <p className="text-sm sm:text-base font-semibold text-gray-800">
                        Virtual Consultation
                      </p>
                      <p className="text-xs sm:text-sm text-gray-600">
                        Available 24/7
                      </p>
                      <div className="flex items-center mt-1">
                        <Star className="w-3 h-3 text-yellow-400 fill-current mr-1" />
                        <span className="text-xs font-semibold text-gray-700">
                          4.9 Rating
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional floating element */}
                <div className="absolute top-1/2 -right-8 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-600">24/7</div>
                    <div className="text-xs text-gray-600">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Section - Enhanced */}
      <section className="py-20 sm:py-32 bg-white/80 backdrop-blur-sm relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-full text-sm font-semibold text-cyan-700 mb-6">
              <UserCheck className="w-4 h-4 mr-2" />
              Expert Medical Team
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-8">
              Meet Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
                Expert Doctors
              </span>
            </h2>

            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Connect with our team of experienced and verified healthcare
              professionals dedicated to providing exceptional, personalized
              care for your health journey.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {doctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>

          <div className="text-center mt-12 sm:mt-16 flex justify-center items-center">
            <Link to="/doctors">
              <button className="group px-8 sm:px-10 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-2xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 text-lg flex">
                <Users className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" />
                View All Doctors
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section - Enhanced */}
      <section className="py-20 sm:py-32 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            <div className="flex-1 order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-3xl blur opacity-20"></div>
                <img
                  src="https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="FAQ Support"
                  className="relative w-full h-80 sm:h-96 object-cover rounded-3xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-600/30 to-transparent rounded-3xl"></div>

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                  <div className="w-16 sm:w-20 h-16 sm:h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <MessageCircle className="w-8 sm:w-10 h-8 sm:h-10" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">
                    24/7 Support
                  </h3>
                  <p className="text-base sm:text-lg">
                    We're here to help you anytime
                  </p>
                  <div className="flex items-center justify-center mt-3 space-x-2">
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">+1 (555) 123-4567</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 order-1 lg:order-2">
              <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full text-sm font-semibold text-cyan-700 mb-8">
                <MessageCircle className="w-4 h-4 mr-2" />
                Got Questions?
              </div>

              <h5 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-12">
                Frequently Asked{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
                  Questions
                </span>
              </h5>

              <div className="space-y-4 sm:space-y-6">
                {faqs.map((faq, index) => (
                  <FaqItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    category={faq.category}
                    isOpen={openFaq === index}
                    onToggle={() =>
                      setOpenFaq(openFaq === index ? null : index)
                    }
                  />
                ))}
              </div>

              <div className="mt-8 sm:mt-12 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/30">
                <div className="flex items-center mb-4">
                  <Headphones className="w-6 h-6 text-cyan-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-800">
                    Still have questions?
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Our support team is available 24/7 to help you with any
                  questions or concerns.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                    <PhoneCall className="w-4 h-4 mr-2" />
                    Call Support
                  </button>
                  <button className="flex-1 px-6 py-3 border-2 border-cyan-600 text-cyan-600 font-semibold rounded-xl hover:bg-cyan-600 hover:text-white transition-all duration-300 flex items-center justify-center">
                    <Mail className="w-4 h-4 mr-2" />
                    Email Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="py-20 sm:py-32 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-full text-sm font-semibold text-cyan-700 mb-6">
              <Star className="w-4 h-4 mr-2" />
              Patient Reviews
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-8">
              What Our Patients{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
                Say About Us
              </span>
            </h2>
          </div>

          {/* Featured testimonial */}
          {/* <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl p-8 sm:p-12 shadow-xl border border-white/30 relative overflow-hidden">
              <div className="absolute top-4 right-4 opacity-10">
                <Star className="w-24 h-24 text-yellow-400" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-center mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-8 h-8 text-yellow-400 fill-current mr-2"
                    />
                  ))}
                </div>

                <blockquote className="text-2xl sm:text-3xl font-medium text-gray-800 text-center mb-8 leading-relaxed italic">
                  "{testimonials[currentTestimonial].comment}"
                </blockquote>

                <div className="flex items-center justify-center">
                  <img
                    src={
                      testimonials[currentTestimonial].image ||
                      "/placeholder.svg"
                    }
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg mr-4"
                  />
                  <div className="text-center">
                    <h4 className="font-bold text-gray-800 text-xl">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-gray-600">
                      {testimonials[currentTestimonial].role}
                    </p>
                    <div className="flex items-center justify-center mt-2 text-sm text-gray-500">
                      <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full mr-2">
                        {testimonials[currentTestimonial].treatment}
                      </span>
                      <span>{testimonials[currentTestimonial].date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          {/* Testimonial grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                index={index}
              />
            ))}
          </div>

          {/* Testimonial navigation dots */}
          <div className="flex items-center justify-center mt-12 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentTestimonial === index
                    ? "bg-gradient-to-r from-cyan-500 to-blue-500 w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 sm:py-32 bg-gradient-to-br from-cyan-600 via-blue-600 to-indigo-700 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-xl animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center text-white">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8">
              Ready to Start Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                Health Journey?
              </span>
            </h2>

            <p className="text-xl sm:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed opacity-90">
              Join thousands of satisfied patients who trust us with their
              healthcare needs. Book your appointment today and experience the
              difference.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Link to="/doctors">
                <button className="group px-10 py-5 bg-white text-cyan-600 font-bold rounded-2xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 text-lg flex items-center">
                  <Calendar className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                  Book Appointment Now
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </Link>

              <button className="group px-10 py-5 border-2 border-white text-white font-bold rounded-2xl hover:bg-white hover:text-cyan-600 transition-all duration-300 text-lg flex items-center">
                <Phone className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" />
                Call Us:+91 99900XX
              </button>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { icon: Shield, label: "HIPAA Compliant", value: "100%" },
                { icon: Clock, label: "Average Response", value: "< 2 min" },
                { icon: Award, label: "Success Rate", value: "98%" },
                { icon: Users, label: "Happy Patients", value: "1k+" },
              ].map((item, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold mb-2">{item.value}</div>
                  <div className="text-sm opacity-80">{item.label}</div>
                </div>
              ))}
            </div>
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
