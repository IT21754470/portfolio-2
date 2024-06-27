import React, { useRef, useState } from "react";
import Title from "../layouts/Title";
import ProjectsCard from "./ProjectsCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore from "swiper";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import {
  ayur,
ecommerce,
foodordering,
garbage,
movie,
spring
} from "../../assets/index";

SwiperCore.use([]);

const Projects = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <section
      id="projects"
      className="w-full py-12 border-b-[1px] border-b-black relative"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="" des="My Projects" />
      </div>
      <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-10">
        <button
          onClick={goPrev}
          className="bg-[#0f0f0f] border border-[#363636] text-slate-200 text-xl px-3 py-3 rounded-full"
        >
          <FaArrowLeft />
        </button>

      </div>
      <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
        <button
          onClick={goNext}
          className="bg-[#0f0f0f] border border-[#363636] text-slate-200 text-xl px-3 py-3  rounded-full  focus:outline-none"
        >
          <FaArrowRight />
        </button>
      </div>
      <div className="px-4">
        <Swiper
          ref={swiperRef}
          spaceBetween={40}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          onSlideChange={handleSlideChange}
        >
 <SwiperSlide>
            <ProjectsCard
              title="Garbage Collection System"
              des="Overview The Garbage Collection Management System is a comprehensive web application developed using the MERN stack (MongoDB, Express.js, React, Node.js). This system aims to streamline and manage garbage collection operations effectively. It provides functionalities for user management, scheduling pickups, receiving feedback, managing employees, and includes special features like special pickup notifications and a community system."
              src={garbage}
              githubLink="https://github.com/IT21754470/Garbage-collection-system.git"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectsCard
              title="E-Commerce earnings"
              des=" Welcome to my mobile-responsive website built with React JS and Tailwind CSS! This project features a dynamic UI, text animation using React-Typed, a toggleable mobile side drawer menu, and social icons with React-Icons."
              src={ecommerce}
              githubLink="https://github.com/IT21754470/Ecommerce-Site.git"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectsCard
              title="Food-Ordering System"
              des="Description Artful Aromas Cafe is a full-stack food ordering application that allows users to browse a delightful menu, place orders, and experience a seamless online dining experience. The application is built using MongoDB, Express JS, React JS, and Node JS, providing a robust and efficient solution for managing restaurant orders and enhancing customer satisfaction."
              src={foodordering}
              githubLink="https://github.com/IT21754470/Food-Ordering-System.git"
            />
          </SwiperSlide>
        
         

          <SwiperSlide>
            <ProjectsCard
              title="Movie-premier-website"
              des="Welcome to the New Premiere movie theater website repository! This website is built using Spring Boot for the backend, React for the frontend, and Bootstrap for styling. It allows users to browse movies, view trailers, read reviews, and submit feedback."
              src={movie}
              githubLink="https://github.com/IT21754470/movie-premier-website.git"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectsCard
              title="Social media workout app"
              des="This web application named “ FitCom ” allows users to share their fitness journey, workouts and tips for a healthy lifestyle. This platform is important for fitness enthusiasts to come together as a community and encourage each other. This platform is created by using Spring Boot technology and implemented with for both technical and non-technical users with simple and friendly UI. Users can register and login to the platform to perform activities such as posting pictures and videos with descriptions"
              src={spring}
              githubLink="https://github.com/IT21754470/Social--Media-app-workout.git"
            />
          </SwiperSlide>

          <SwiperSlide>
            <ProjectsCard
              title="Ayurwedic Package Management System"
              des="A comprehensive web application for an Ayurvedic website, facilitating the management and sale of Ayurvedic packages. Built using the MERN (MongoDB, Express.js, React.js, Node.js) stack.

Table of Contents Introduction Features Technologies Getting Started Prerequisites Installation Usage Functionality Contributing License Introduction The Ayurvedic Package Management System is a web application tailored for Ayurvedic practitioners and clinics to manage and sell Ayurvedic packages. This system, built on the MERN stack, provides a user-friendly interface for managing packages, processing orders, and maintaining customer information."
              src={ayur}
              githubLink="https://github.com/IT21754470/Ayurvedic-Package-Management-System.git"
            />
          </SwiperSlide>

        </Swiper>

        <div className="flex justify-center mt-4">
          {[...Array(10).keys()].map((index) => (
            <button
              key={index}
              onClick={() => {
                if (swiperRef.current && swiperRef.current.swiper) {
                  swiperRef.current.swiper.slideTo(index);
                }
              }}
              className={`w-4 h-4 mx-1 rounded-full focus:outline-none ${activeIndex === index ? "bg-[#37373a]" : "bg-[#141313]"
                }`}
            ></button>
          ))}
        </div>

      </div>
    </section>

  );
};

export default Projects;

