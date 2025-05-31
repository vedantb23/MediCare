import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { HiStar } from "react-icons/hi";
import userImg from "../../assets/images/avatar-icon.png"; // Make sure this path is correct

const testimonialsData = [
  {
    name: "Dr. John Doe",
    review: "Excellent service and professional staff.",
    image: userImg,
  },
  {
    name: "Dr. Jane Smith",
    review: "Very attentive and kind medical team.",
    image: userImg,
  },
  {
    name: "Dr. Emily Johnson",
    review: "Smooth and professional appointment process.",
    image: userImg,
  },
  {
    name: "Dr. Michael Brown",
    review: "Efficient service and friendly staff.",
    image: userImg,
  },
  {
    name: "Dr. Sarah Lee",
    review: "Great facilities and caring doctors.",
    image: userImg,
  },
];

const headingColor = "#1F2937";
const yellowColor = "#FBBF24";
const textColor = "#6B7280";

const Testimonials = () => {
  return (
    <div style={{ maxWidth: "1200px", margin: "40px auto", padding: "0 16px" }}>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        spaceBetween={40}
        slidesPerView={3}
        loop={true}
        centeredSlides={true}
        breakpoints={{
          0: { slidesPerView: 1, centeredSlides: false },
          640: { slidesPerView: 1, centeredSlides: false },
          768: { slidesPerView: 2, centeredSlides: false },
          1024: { slidesPerView: 3, centeredSlides: true },
        }}
        style={{ paddingBottom: "40px" }} // for pagination spacing
      >
        {testimonialsData.map((t, i) => (
          <SwiperSlide key={i}>
            <div
              style={{
                backgroundColor: "#fff",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                borderRadius: "12px",
                padding: "24px",
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 13,
                  marginBottom: 16,
                }}
              >
                <img
                  src={t.image}
                  alt={t.name}
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
                <div>
                  <h4
                    style={{
                      color: headingColor,
                      fontSize: 18,
                      lineHeight: "30px",
                      fontWeight: 600,
                    }}
                  >
                    {t.name}
                  </h4>
                  <div style={{ display: "flex", gap: 2, marginTop: 4 }}>
                    {[...Array(5)].map((_, idx) => (
                      <HiStar
                        key={idx}
                        style={{ color: yellowColor, width: 18, height: 20 }}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p
                style={{
                  color: textColor,
                  fontSize: 16,
                  lineHeight: "28px",
                  fontWeight: 400,
                  flexGrow: 1,
                }}
              >
                "{t.review}"
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
