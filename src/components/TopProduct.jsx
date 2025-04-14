import React from "react";
import Casual from "../assets/casual.png";
import Printed from "../assets/printed.png";
import Wshirt from "../assets/wshirt.png";
import { FaStar } from "react-icons/fa";

const BestProducts = [
  {
    id: 1,
    img: Casual,
    title: "Casual Wear",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
  {
    id: 2,
    img: Printed,
    title: "Casual Wear",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
  {
    id: 3,
    img: Wshirt,
    title: "Casual Wear",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
];

const TopProduct = () => {
  return (
    <div>
      <div className="container">
        <div className="text-left mb-24">
          <p className="text-sm text-primary">What our customers are saying</p>
          <h1 className="text-3xl font-bold">Products</h1>
          <p className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores modi Sit asperiores modi
          </p>
        </div>
        {/* body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {BestProducts.map((data) => (
            <div
              data-aos="zoom-in"
              className="rounded-2xl bg-white hover:bg-black/80 hover:text-white relative shadow-xl duration-900 group max-w-[300px]"
            >
              <div className="h-[100px]">
                <img
                  src={data.img}
                  alt="Casual Wear"
                  className="max-w-[140px] mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>
              <div className="p-4 text-center">
                <div className="w-full flex items-center justify-center gap-1">
                  <FaStar className="flex gap-1 text-yellow-500" />
                  <FaStar className="flex gap-1 text-yellow-500" />
                  <FaStar className="flex gap-1 text-yellow-500" />
                  <FaStar className="flex gap-1 text-yellow-500" />
                  <FaStar className="flex gap-1 text-yellow-500" />
                </div>
                <h1 className="text-xl font-bold group-hover:text-white duration-300">
                  {data.title}
                </h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {data.description}
                </p>
                <button className="bg-primary hover:scale-105 text-white px-4 py-2 rounded-full mt-4 group-hover:bg-white group-hover:text-primary">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProduct;
