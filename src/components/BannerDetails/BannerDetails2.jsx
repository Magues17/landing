import React from "react";

const BannerDetails2 = ({ reverse, img }) => {
  return (
    <section>
      <main className="bg-slate-100 dark:bg-slate-900 dark:text-white">
        <section className="container flex flex-col items-center justify-center py-10 md:h-[500px]">
          <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-2">
            <div
              data-aos="fade-right"
              data-aos-duration="400"
              data-aos-once="true"
              className={`flex flex-col items-start gap-4 text-left md:items-start md:p-8 md:text-left ${
                reverse ? "md:order-last" : ""
              }`}
            >
              <h1 className="text-2xl md:text-4xl">
              Empower Your Business with Cutting-Edge Web Solutions
              </h1>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Harness the power of modern technologies and advanced frameworks to build 
                secure, scalable applications. From intuitive user experiences to robust 
                back-end systems, we deliver solutions that drive innovation and growth.
                </p>
              <div>
              <ul className="flex list-inside list-disc flex-col gap-2 md:gap-4">
                <li className="font-medium">Full-Stack Web & App Development</li>
                <li className="font-medium">Cloud Integration & Microservices</li>
                <li className="font-medium">AI-Driven Data Analytics & Insights</li>
                <li className="font-medium">Ongoing Maintenance & Performance Optimization</li>
             </ul>
              </div>
              {/* <div className="space-x-4">
                <button className="rounded-md border-2 border-primary bg-primary px-4 py-2 text-sm text-white transition-colors duration-300 hover:bg-primary/80">
                  Learn More
                </button>
              </div> */}
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="400"
              data-aos-once="true"
              className={reverse ? "order-1" : ""}
            >
              <img
                src={img}
                alt="Banner Details 2"
                className="max-auto w-full hover:drop-shadow-md"
              />
            </div>
          </div>
        </section>
      </main>
    </section>
  );
};

export default BannerDetails2;
