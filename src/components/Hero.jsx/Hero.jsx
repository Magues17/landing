// import React from "react";
// import Banner from "../../assets/undraw_real_time_sync_re_nky7.svg";
// import Demo from "../Demo/DemoModal";


// const Hero = () => {
//   return (
//     <main className="bg-gradient-to-r from-violet-950 to-violet-900 pt-20 dark:bg-violet-950">
//       <section className="container flex h-[650px] flex-col items-center justify-center md:h-[500px] ">
//         <div className="grid grid-cols-1 items-center gap-8 dark:text-white md:grid-cols-2">
//           <div
//             data-aos="fade-right"
//             data-aos-duration="400"
//             data-aos-once="true"
//             className="flex flex-col items-center gap-4 text-center text-white md:items-start md:text-left "
//           >
//             <h1 className=" text-4xl ">
//             Innovative Solutions for a Digital World
//             </h1>
//             <p className="">
//             From cutting-edge SaaS solutions to robust MVP development, we craft digital experiences tailored to your business goals.
//             </p>
//             <div className="space-x-4">
//               {/* <button className="rounded-md border-2 border-primary bg-primary px-6 py-3 text-lg text-white transition-colors duration-300 hover:bg-primary/80">
//                 Request a Demo */}
//                 <Demo />
//               {/* </button> */}
//               {/* <button className="border-1  rounded-md border-2 border-white px-4 py-2 text-sm text-white transition-colors duration-300 ">
//                 Get Started
//               </button> */}
//             </div>
//           </div>
//           <div
//             data-aos="fade-left"
//             data-aos-duration="400"
//             data-aos-once="true"
//             className="mx-auto max-w-xs p-4"
//           >
//             <img src={Banner} alt="No image" className="hover:drop-shadow-md" />
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default Hero;



import React, { useState } from "react";
import Banner from "../../assets/undraw_real_time_sync_re_nky7.svg";


const Hero = ({ onOpenModal }) => {
  const [showModal] = useState(false);

  return (
    <main className="bg-gradient-to-r from-violet-950 to-violet-900 -mt-10 pt-20 dark:bg-violet-950">
      <section className="container flex h-[650px] flex-col items-center justify-center md:h-[500px] ">
        <div className="grid grid-cols-1 items-center gap-8 dark:text-white md:grid-cols-2">
          <div
            data-aos="fade-right"
            data-aos-duration="400"
            data-aos-once="true"
            className="flex flex-col items-center gap-4 text-center text-white md:items-start md:text-left "
          >
            <h1 className="text-4xl">Innovative Solutions for a Digital World</h1>
            <p>
              From cutting-edge SaaS solutions to robust MVP development, we craft digital experiences tailored to your business goals.
            </p>
            <div className="space-x-4">

              <button
                className="rounded-md bg-primary px-6 py-3 text-lg text-white transition-colors duration-300 hover:bg-primary/80"
                onClick={onOpenModal}
              >
                Request a Demo
              </button>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="400"
            data-aos-once="true"
            className="mx-auto max-w-xs p-4"
          >
            <img src={Banner} alt="No image" className="hover:drop-shadow-md" />
          </div>
        </div>
      </section>

      {/* Render Modal */}
      {showModal && <DemoModal onClose={handleCloseModal} />}
    </main>
  );
};

export default Hero;
