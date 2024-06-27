import React from "react";
import { FaLinkedinIn, FaInstagram, FaFacebook } from "react-icons/fa";
import { SiGithub, SiGmail } from "react-icons/si";
import { my } from "../../assets/index";

const Footer = () => {
  return (
    <div className='w-full py-20 bg-black flex flex-col md:flex-row justify-center items-center'>
      <div className=' md:gap-8'>
        <div className='w-40 mx-auto'>
          <img className='w-full rounded-full  ' src={my} alt='logo' />
        </div>
        <div className='flex gap-4 mt-10 '>
          <span className='bannerIcon'>
            <a
              href='https://github.com/IT21754470'
              target='_blank'
              rel='noopener noreferrer'
            >
              <SiGithub />
            </a>
          </span>
          <span className='bannerIcon'>
            <a href='mailto:sathminisuabsinghe05@gmail.com'>
              <SiGmail />
            </a>
          </span>
          <span className='bannerIcon'>
            <a
              href='https://www.linkedin.com/in/sathmini-subasinghe-8649022a1'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaLinkedinIn />
            </a>
          </span>

         
        </div>
      </div>
    </div>
  );
};

export default Footer;
