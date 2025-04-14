import React from "react";
import ImageSubscribe from "../assets/subscribeImg.jpg";

// const SubscribeImage = {
//   backgroundImage: `url(${ImageSubscribe})`,
//   backgroundPosition: "center",
//   backgroundRepeat: "no-repeat",
//   backgroundSize: "cover",
//   height: "100%",
//   width: "100%",
// };

const Subscribe = () => {
  return (
    <div
      data-aos="zoom-in"
      className="bg-[url(./assets/subscribeImg.jpg)] bg-cover bg-center bg-no-repeat mb-20 bg-gray-100 text-white"
    >
      <div className="container backdrop-blur-sm py-10">
        <div className="space-y-6 max-w-xl mx-auto">
          <h1 className="text-2xl !text-center sm:text-left md:text-4xl font-semibold">
            Get Notified About New Products
          </h1>
          <input
            data-aos="fade-up"
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 bg-white text-black text-2xl pl-6 placeholder:text-gray-500 placeholder:text-2xl focus:outline-none"
          />
        </div>
      </div>

      {/* <div className="pb-[1000px]"></div> */}
    </div>
  );
};

export default Subscribe;
