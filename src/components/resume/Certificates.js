import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Certificates = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className='py-6 font-titleFont flex flex-col gap-20 md:flex-row'
    >
      <div className='flex-1'>
        <div className='py-6 font-titleFont flex flex-col gap-4'>
          <p className='text-sm text-[#00FFFF] tracking-[4px]'>
            2021 - Present
          </p>
          <h2 className='text-4xl font-bold'>Accomplishments</h2>
        </div>
        <div className='mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
          <ResumeCard
            title='"Trainee- Full Stack Developer" programme-python for Beginners'
            subTitle='conducted by Department of Information technology , NIBM'
            des='The program comprises six comprehensive courses, encompassing the following subjects: Web Designing, Frontend JavaScript, jQuery, Bootstrap, Server-side Web Programming, and Professional Skill Development.'
          />
 <ResumeCard
            title='"NIBM-Certificate in Softeare Engineering'
            subTitle='conducted by Department of Information technology , University of Moratuwa'
            des='The program comprises software engineering cncepts ,agile methodolgies,java and python'
          />
<ResumeCard
            title='"Trainee- Full Stack Developer" programme-Web design for Beginners'
            subTitle='conducted by Department of Information technology , University of Moratuwa'
            des='The program comprises six comprehensive courses, encompassing the following subjects: Web Designing, Frontend JavaScript, jQuery, Bootstrap, Server-side Web Programming, and Professional Skill Development.'
          />
          
         

        </div>
      </div>
      <div className='flex-1'>
        <div className='py-6 font-titleFont flex flex-col gap-4'>
          <p className='text-sm text-[#00FFFF] tracking-[4px]'>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </p>
        </div>
        <div className='mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
         
          <ResumeCard
            title='Certificate In Introduction to Programming with Scratch'
            subTitle='offered from Harvard University'
            des='On completion of Introduction to Programming with scratcj including nine projects
     Awarded by the Cambridge ,Massachusets,in the 2021'
          />
           <ResumeCard
            title='>Python Foundations'
            subTitle='conducted by Great Learning Academy'
            des='This Android app development course stands as a good guide for beginners strengthening your basics in Android application development and is a good mixture of theory and practical knowledge. '
          />

<ResumeCard
            title='Front End Development-HTML'
            subTitle='offered by Great Learning Academy'
            des='This course will help you understand the basics of Artificial Intelligence, Neural networks, and Computer Vision with use cases.'
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Certificates;
