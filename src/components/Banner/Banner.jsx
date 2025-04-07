import React from "react";

const Banner = () => {
  return (
    <main className="bg-primary">
      <section data-aos="fade-up" className="container py-8 md:py-12">
        <div className="flex flex-col items-center text-center text-white md:items-start md:text-left">
        <h1 className="text-3xl font-bold">Custom Digital Solutions to Grow Your Business</h1>
<p className="mt-4 max-w-2xl">
  I build high-performance websites, smart CRM systems, AI-powered tools, and interactive games using technologies like React, WordPress, Unity, Unreal Engine, and neural networks. From streamlined business platforms to advanced automation, I deliver solutions that work.
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
