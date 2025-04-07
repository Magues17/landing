import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="rounded-t-3xl bg-gradient-to-r from-violet-950 to-violet-900">
      <section className="mx-auto max-w-[1200px] text-white">
        <div className="grid py-5 md:grid-cols-3">
          {/* Left Column */}
          <div className="px-4 py-8">
            <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-3xl">
              <a href="/#home">
                <span>4K </span>
                <span className="inline-block font-bold text-primary">LABS</span>
              </a>
            </h1>
            <p>
              Specializing in web development, CRM systems, and tech consulting, 4K LABS is your trusted partner in innovation.
            </p>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>Michael Campbell</p>
            </div>
          </div>

          {/* Middle Columns */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            <div className="px-4 py-8">
              <h1 className="mb-3 text-xl font-bold">Important Links</h1>
              <ul className="flex flex-col gap-3">
                <li className="cursor-pointer hover:translate-x-[2px] transition-all duration-300">Home</li>
                <li className="cursor-pointer hover:translate-x-[2px] transition-all duration-300">About</li>
                <li className="cursor-pointer hover:translate-x-[2px] transition-all duration-300">Services</li>
                <li className="cursor-pointer hover:translate-x-[2px] transition-all duration-300">Login</li>
              </ul>
            </div>

            <div className="px-4 py-8">
              <h1 className="mb-3 text-xl font-bold">Links</h1>
              <ul className="flex flex-col gap-3">
                <li className="cursor-pointer hover:translate-x-[2px] transition-all duration-300">Privacy Policy</li>
                <li className="cursor-pointer hover:translate-x-[2px] transition-all duration-300">Services</li>
                <li className="cursor-pointer hover:translate-x-[2px] transition-all duration-300">About us</li>
              </ul>
            </div>

            {/* Replaced newsletter with Request a Demo */}
            <div className="px-4 py-8">
              <h1 className="mb-3 text-xl font-bold">Get in Touch</h1>
              <div className="flex flex-col gap-3">
                <p className="text-sm font-medium">Want to work with us?</p>
                <button
                  onClick={() => document.getElementById("demoModalTrigger").click()}
                  className="px-4 py-2 text-sm font-medium text-white bg-transparent border border-white rounded-md transition-all duration-300 hover:bg-white hover:text-violet-900"
                >
                  Request a Demo
                </button>
                <div className="mt-6 flex items-center gap-3">
                  <a href="#" className="duration-200 hover:scale-105"><FaInstagram className="text-3xl" /></a>
                  <a href="#" className="duration-200 hover:scale-105"><FaFacebook className="text-3xl" /></a>
                  <a href="#" className="duration-200 hover:scale-105"><FaLinkedin className="text-3xl" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-gray-300/50 py-6 text-center">
          © 2025 4KLABS || MC
        </div>
      </section>
    </div>
  );
};

export default Footer;
