import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Software Engineering Undergraduate.", "Full Stack Developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
    
  });
  return (
    <div className='w-full lgl:w-3/4 flex flex-col gap-20 p-1'>
      <div className='flex flex-col gap-5'>
        <h4 className=' text-lg font-normal'>
          Welcome to my portfolio.......! 👀🙋‍♂️{" "}
        </h4>
        <h1
          className='text-6xl font-bold text-white '
          style={{ fontFamily: "GeezaPro-Bold" }}
        >
          Hi, I'm{" "}
          <span className='text-[#00FFFF] capitalize'>
            Sathmini Subasinghe
          </span>
        </h1>
        <h2 className='text-2xl font-bold h-16 text-#4f53df '>
          A <span>{text}</span>
          <Cursor
            cursorBlinking='false'
            cursorStyle='|'
            cursorColor='#52619D'
          />
        </h2>
        <p className='text-base font-bodyFont leading-6 tracking-wide'>
        I am a BSc (Hons) Information Technology
 undergraduate at the Sri Lanka Institute of
 Information Technology (SLIIT) with strong skills in
 HTML, CSS, React, JavaScript, Python, and Java. I have
 a solid foundation in programming basics, OOP
 concepts, and design patterns. I have contributed to
 developing frontend applications using MERN and
 Spring Boot frameworks, implementing features to
 ensure high performance and scalability
        </p>
      </div>
      {/* Media */}
      <Media />
    </div>
  );
};

export default LeftBanner;
