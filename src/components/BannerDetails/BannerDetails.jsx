import React from "react";
import Banner from "../../assets/blog2.jpg";

const BannerDetails = ({ reverse, img }) => {
  return (
    <section>
      <main className="bg-slate-100 dark:bg-slate-900 dark:text-white">
        <section className="container flex flex-col items-center justify-center py-10 md:h-[500px] ">
          <div className="grid grid-cols-1 items-center gap-4  md:grid-cols-2">
            <div
              data-aos="fade-right"
              data-aos-duration="400"
              data-aos-once="true"
              className={`flex flex-col items-start gap-4 text-left md:items-start md:p-8 md:text-left ${
                reverse ? "md:order-last" : ""
              } `}
            >
              <h1 className="text-2xl md:text-4xl ">
              Boost Your Online Presence with Social Media Marketing
              </h1>
              <p className="text-sm text-slate-600 dark:text-slate-400">
              Reach and engage your audience on the platforms they use every day. I specialize 
              in crafting targeted social media strategies that amplify your brand, foster 
              community growth, and drive measurable results.
              </p>
              <div>
              <ul className="flex list-inside list-disc flex-col gap-2 md:gap-4">
                <li className="font-medium">Social Media Strategy & Management</li>
                <li className="font-medium">Content Creation & Scheduling</li>
                <li className="font-medium">Paid Advertising & Campaign Optimization</li>
                <li className="font-medium">Analytics & Performance Reporting</li>
              </ul>
              </div>
              {/* <div className="space-x-4">
                <button className="rounded-md border-2 border-primary bg-primary px-4 py-2 text-sm text-white transition-colors duration-300 hover:bg-primary/80">
                  Get a Free Consultation
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
                alt="Custom Solutions"
                className="max-auto w-full hover:drop-shadow-md"
              />
            </div>
          </div>
        </section>
      </main>
    </section>
  );
};

export default BannerDetails;
