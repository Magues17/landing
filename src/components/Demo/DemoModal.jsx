// import React, { useState } from "react";

// const Demo = () => {
//   const [showModal, setShowModal] = useState(false);

//   return (
//     <div>
//       <button
//         onClick={() => setShowModal(true)}
//         className="rounded-md border-2 border-primary bg-primary px-6 py-3 text-lg text-white transition-colors duration-300 hover:bg-primary/80"
//       >
//         Request a Demo
//       </button>

//       {showModal && (
//         <div
//           className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
//           onClick={() => setShowModal(false)}
//         >
//           <div
//             className="relative w-[90%] max-w-md rounded-lg bg-white p-6 shadow-lg"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <button
//               onClick={() => setShowModal(false)}
//               className="absolute right-3 top-3 text-gray-500 hover:text-gray-800"
//             >
//               ✖
//             </button>
//             <h2 className="text-xl font-bold mb-4">Request a Demo</h2>
//             <form>
//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700">Name</label>
//                 <input
//                   type="text"
//                   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//                   placeholder="Enter your name"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700">Email</label>
//                 <input
//                   type="email"
//                   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//                   placeholder="Enter your email"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700">Message</label>
//                 <textarea
//                   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//                   rows="3"
//                   placeholder="Tell us about your needs"
//                 ></textarea>
//               </div>
//               <button
//                 type="submit"
//                 className="w-full rounded-md bg-primary py-2 px-4 text-white hover:bg-primary/80"
//               >
//                 Submit
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Demo;



import React from "react";

const DemoModal = ({ onClose }) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="relative w-[90%] max-w-md rounded-lg bg-white p-6 shadow-lg"
        onClick={(e) => e.stopPropagation()} // Prevent modal closure on click inside
      >
        <button
          onClick={onClose}
          className="absolute right-3 top-3 text-gray-500 hover:text-gray-800"
        >
          ✖
        </button>
        <h2 className="text-xl font-bold mb-4">Request a Demo</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              rows="3"
              placeholder="Tell us about your needs"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-primary py-2 px-4 text-white hover:bg-primary/80"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default DemoModal;
