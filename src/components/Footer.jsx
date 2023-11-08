import React from "react";
import { FcIcons8Cup } from 'react-icons/fc'
import { GoPaperAirplane } from "react-icons/go";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="bg-naturalSilver text-naturalGrey pt-16">
      <div className="w-10/12 m-auto">
        
        <div className="flex flex-wrap gap-8 justify-between">
          <div className="flex flex-col gap-2">
            <div>
              <h1 className="text-yellow text-xl">Company</h1>
            </div>
            <div className="flex flex-col gap-2">
              <a href="#">
                <p>About us</p>
              </a>
              <a href="#">
                <p>Blog</p>
              </a>
              <a href="#">
                <p>Contact us</p>
              </a>
              <a href="#">
                <p>Pricing</p>
              </a>
              <a href="#">
                <p>Testimonial</p>
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div>
              <h1 className="text-yellow text-xl">Support</h1>
            </div>
            <div className="flex flex-col gap-2">
              <a href="/">
                <p>Help center</p>
              </a>
              <a href="/">
                <p>Terms and Conditions</p>
              </a>
              <a href="/">
                <p>Legal</p>
              </a>
              <a href="/">
                <p>Privecy policy</p>
              </a>
              <a href="/">
                <p>Status</p>
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-2">
          <h2 className="text-xl">Stay up to date</h2>
            <div className="flex items-center justify-start gap-3">
            <input type="email" className="border-none rounded-md" placeholder="Your email Address"/>
            <button className="bg-brandPrimary px-4 py-2 rounded-md justify-center"><GoPaperAirplane className="text-2xl"/></button>
            </div>
          </div>
        </div>


        {/**down side copyright */}
        <div className="flex flex-wrap gap-2 items-center justify-between">
          <div>
            <a
              href=""
              className="text-2xl font-semibold flex items-center space-x-3"
            >
              <FcIcons8Cup className='text-5xl'/>
            </a>
          </div>
          
          <div className="flex flex-col gap-4">
            
            <div className="flex flex-wrap text-4xl gap-8">
              <FaFacebook className="text-blue-700" />
              <FaGithub className="text-black" />
              <FaLinkedin className="text-blue-700" />
              <FaYoutube className="text-rose-600" />
            </div>
          </div>
          <div className="flex flex-col text-brandPrimary py-8">
              <h2>Copyright © 2023 Agencify UI. All rights reserved</h2>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
