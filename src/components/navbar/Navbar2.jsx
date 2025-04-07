// import React, { useEffect, useState } from "react";
// import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
// import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
// import { FaCaretDown } from "react-icons/fa";
// import ResponsiveMenu from "./ResponsiveMenu";



// const Navbar2 = ({ onOpenModal }) => {
//   const [theme, setTheme] = useState(
//     localStorage.getItem("theme") ? localStorage.getItem("theme") : "light",
//   );
//   const [showMenu, setShowMenu] = useState(false);

//   const element = document.documentElement;

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };




//   useEffect(() => {
//     if (theme === "dark") {
//       element.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//       console.log("dark theme");
//     } else {
//       element.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//       console.log("light theme");
//     }
//   }, [theme]);

//   return ( <>
//       <header className="bg-gradient-to-l from-violet-900 via-violet-800 to-violet-900 text-white shadow-md">

//       <nav className="container mx-auto flex justify-between items-center h-[70px] px-6">

//       <div className="text-2xl md:text-3xl">
//             <a href="/#home" className="">
//               <span>4K </span>
//               <span className="inline-block font-bold text-primary">LABS</span>
//             </a>
//           </div>
//           {/* Desktop Menu */}
//           <div className="hidden md:block">
//           <ul className="flex items-center gap-8 justify-end">
//               <li className="group relative cursor-pointer">
//                 <a
//                   href="/#home"
//                   className="flex h-[72px] items-center gap-[2px]"
//                 >
//                   Home{" "}
//                   <span>
//                     <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
//                   </span>
//                 </a>

//                 <div className="absolute -left-9 z-[9999] hidden w-[150px] rounded-md bg-white p-2 text-black group-hover:block  ">
//                   <ul className="space-y-3">
//                     <li className="p-2 hover:bg-violet-200">Portfolio</li>
//                     <li className="p-2 hover:bg-violet-200">Testimonials</li>
//                     <li className="p-2 hover:bg-violet-200">Pricing</li>
//                   </ul>
//                 </div>
//               </li>
//               <li className="cursor pointer group">
//                 <a
//                   href="/#home"
//                   className="flex h-[72px] items-center gap-[2px]"
//                 >
//                   Services{" "}
//                   <span>
//                     <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
//                   </span>
//                 </a>
//                 <div className="absolute left-0 z-[9999] hidden w-full rounded-b-3xl bg-white p-2 text-black group-hover:block  ">
//                   <div className="grid grid-cols-3 gap-5 ">
//                     <div className="d-200 overflow-hidden">
//                       <img
//                         className="max-h-[300px] w-full rounded-b-3xl object-fill"
//                         src="./images/program.jpg"
//                         alt="pics"
//                       />
//                     </div>
//                     <div className="col-span-2">
//                       <h1 className="pb-3 text-xl font-semibold">
//                         Our Expertise
//                       </h1>
//                       <p className="text-sm text-slate-600">
//                         At 4K Labs, we specialize in delivering cutting-edge SaaS solutions, MVP development, and Training tailored to meet your needs.
//                       </p>
//                       <div className="grid grid-cols-3 ">
//                         <ul className="mt-3 flex flex-col gap-2">
//                           <h1 className="pb-1 text-xl font-semibold">
//                             SaaS & MVP
//                           </h1>
//                           <li className="cursor-pointer text-black/80 hover:text-primary">
//                             Web development
//                           </li>
//                           <li className="cursor-pointer text-black/80 hover:text-primary">
//                             Game Development
//                           </li>
//                           <li className="cursor-pointer text-black/80 hover:text-primary">
//                             Social Media
//                           </li>
//                         </ul>
//                         <ul className="mt-3 flex flex-col gap-2">
//                           <h1 className="pb-1 text-xl font-semibold">
//                             Workshops
//                           </h1>
//                           <li className="cursor-pointer text-black/80 hover:text-primary">
//                             Networking and Infastructure
//                           </li>
//                           <li className="cursor-pointer text-black/80 hover:text-primary">
//                             HMTL/CSS/Javascript
//                           </li>
//                           <li className="cursor-pointer text-black/80 hover:text-primary">
//                             Windows/Mac/Linux
//                           </li>

//                         </ul>
//                         <div>
//                           <img src="/images/training.jpg" alt="no image" />
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </li>
//               <li className="cursor pointer">
//                 <a href="/#contact">About us</a>
//               </li>
//               <div>


//               {/* Request a Demo */}
//               <li>
//                 <button
//                   onClick={onOpenModal}
//                   className="px-4 py-2 text-sm font-medium text-white bg-transparent border border-white rounded-md transition-all duration-300 hover:bg-white hover:text-violet-900"
//                 >
//                   Request a Demo
//                 </button>
//               </li>

//               </div>
//               <ul>
//                 <div>
//               </div>
//               {/* Light and dark mode switcher */}
//               {theme === "dark" ? (
//                 <BiSolidSun
//                   onClick={() => setTheme("light")}
//                   className="text-2xl"
//                 />
//               ) : (
//                 <BiSolidMoon
//                   onClick={() => setTheme("dark")}
//                   className="text-2xl"
//                 />
//               )}
//               </ul>
//             </ul>
//             </div>
//             <div>
//           </div>

//           {/* Mobile view  */}
//           <div className="flex items-center gap-4 md:hidden ">
//             {theme === "dark" ? (
//               <BiSolidSun
//                 onClick={() => setTheme("light")}
//                 className="text-2xl"
//               />
//             ) : (
//               <BiSolidMoon
//                 onClick={() => setTheme("dark")}
//                 className="text-2xl"
//               />
//             )}
//             {showMenu ? (
//               <HiMenuAlt1
//                 onClick={toggleMenu}
//                 className=" cursor-pointer transition-all"
//                 size={30}
//               />
//             ) : (
//               <HiMenuAlt3
//                 onClick={toggleMenu}
//                 className="cursor-pointer transition-all"
//                 size={30}
//               />
//             )}


//           </div>
//         </nav>
//         <ResponsiveMenu showMenu={showMenu} />
//       </header>



//     </>
//   );
// };



// export default Navbar2;

import React, { useState, useEffect } from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import { FaCaretDown } from "react-icons/fa";

const Navbar2 = ({ onOpenModal }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  useEffect(() => {
    const element = document.documentElement;
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <header className="bg-gradient-to-l from-violet-900 via-violet-800 to-violet-900 text-white shadow-md">
      <nav className="container mx-auto flex justify-between items-center h-[70px] px-6">
        {/* Logo */}
        <div className="text-2xl md:text-3xl">
          <a href="/#home">
            <span>4K </span>
            <span className="font-bold text-primary">LABS</span>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-8 justify-end">
            <li className="group relative cursor-pointer">
              <a
                href="/#home"
                className="flex h-[72px] items-center gap-[2px]"
              >
                Home{" "}
                <span>
                  <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                </span>
              </a>

              <div className="absolute -left-9 z-[9999] hidden w-[150px] rounded-md bg-white p-2 text-black group-hover:block  ">
                <ul className="space-y-3">
                  <li className="p-2 hover:bg-violet-200">Portfolio</li>
                  <li className="p-2 hover:bg-violet-200">Testimonials</li>
                  <li className="p-2 hover:bg-violet-200">Pricing</li>
                </ul>
              </div>
            </li>
        
        <li className="cursor pointer group">
          <a
            href="/#home"
            className="flex h-[72px] items-center gap-[2px]"
          >
            Services{" "}
            <span>
              <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
            </span>
          </a>
          <div className="absolute left-0 z-[9999] hidden w-full rounded-b-3xl bg-white p-2 text-black group-hover:block  ">
            <div className="grid grid-cols-3 gap-5 ">
              <div className="d-200 overflow-hidden">
                <img
                  className="max-h-[300px] w-full rounded-b-3xl object-fill"
                  src="./images/program.jpg"
                  alt="pics"
                />
              </div>
              <div className="col-span-2">
                <h1 className="pb-3 text-xl font-semibold">
                  Our Expertise
                </h1>
                <p className="text-sm text-slate-600">
                  At 4K Labs, we specialize in delivering cutting-edge SaaS solutions, MVP development, and Training tailored to meet your needs.
                </p>
                <div className="grid grid-cols-3 ">
                  <ul className="mt-3 flex flex-col gap-2">
                    <h1 className="pb-1 text-xl font-semibold">
                      SaaS & MVP
                    </h1>
                    <li className="cursor-pointer text-black/80 hover:text-primary">
                      Web development
                    </li>
                    <li className="cursor-pointer text-black/80 hover:text-primary">
                      Game Development
                    </li>
                    <li className="cursor-pointer text-black/80 hover:text-primary">
                      Social Media
                    </li>
                  </ul>
                  <ul className="mt-3 flex flex-col gap-2">
                    <h1 className="pb-1 text-xl font-semibold">
                      Workshops
                    </h1>
                    <li className="cursor-pointer text-black/80 hover:text-primary">
                      Networking and Infastructure
                    </li>
                    <li className="cursor-pointer text-black/80 hover:text-primary">
                      HMTL/CSS/Javascript
                    </li>
                    <li className="cursor-pointer text-black/80 hover:text-primary">
                      Windows/Mac/Linux
                    </li>

                  </ul>
                  <div>
                    <img src="/images/training.jpg" alt="no image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        
          <li>
            <a href="/#about" className="hover:text-primary">
              About us
            </a>
          </li>
          <li>
            <button
              onClick={onOpenModal}
              className="px-4 py-2 text-sm font-medium text-white bg-transparent border border-white rounded-md transition-all duration-300 hover:bg-white hover:text-violet-900"
            >
              Request a Demo
            </button>
          </li>
          </ul>
          </div>



      {/* Mobile Menu */}
      <div className="flex items-center md:hidden gap-4">
        {theme === "dark" ? (
          <BiSolidSun
            onClick={() => setTheme("light")}
            className="text-2xl cursor-pointer"
          />
        ) : (
          <BiSolidMoon
            onClick={() => setTheme("dark")}
            className="text-2xl cursor-pointer"
          />
        )}
        <button onClick={toggleMenu}>
          {showMenu ? <HiMenuAlt1 size={30} /> : <HiMenuAlt3 size={30} />}
        </button>
      </div>
    </nav>
    </header >
  );
};

export default Navbar2;



