import React from "react";

const Banner = () => {
  return (
    <main className="bg-primary">
      <section data-aos="fade-up" className="container py-8 md:py-12">
        <div className="flex flex-col items-center text-center text-white md:items-start md:text-left">
          <h1 className="text-3xl font-bold">Empower Your Business with Custom Digital Solutions</h1>
          <p className="mt-4 max-w-2xl">
            I specialize in **web development, CRM systems, AI integrations, and game development** using cutting-edge
            technologies like **React, WordPress, Unity, Unreal Engine, and Neural Networks**. Whether you need a business website, 
            an automated CRM, or a powerful AI-driven solution, I can help bring your ideas to life.
          </p>
          <button className="mt-4 rounded-md bg-white px-4 py-2 text-sm text-black transition-colors duration-300 hover:bg-white/90">
            Get a Free Consultation
          </button>
        </div>
      </section>
    </main>
  );
};

export default Banner;
