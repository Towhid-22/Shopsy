import React from "react";
import Mens from "../assets/mens.png";
import Western from "../assets/w-western.jpg";
import Googles from "../assets/goggles.jpg";
import Tshirt from "../assets/PTShirt.jpg";
import { FaStar } from "react-icons/fa";

const ProductCards = [
  {
    id: 1,
    img: Mens,
    title: "Women Ethnic",
    color: "White",
    rating: 5.0,
    aosDelay: "0",
  },
  {
    id: 2,
    img: Western,
    title: "Women western",
    color: "Red",
    rating: 4.5,
    aosDelay: "200",
  },
  {
    id: 3,
    img: Googles,
    title: "Goggles",
    color: "brown",
    rating: 4.7,
    aosDelay: "400",
  },
  {
    id: 4,
    img: Tshirt,
    title: "Printed T-Shirt",
    color: "Yellow",
    rating: 4.4,
    aosDelay: "600",
  },
  {
    id: 5,
    img: Western,
    title: "Fashin T-Shirt",
    color: "Pink",
    rating: 4.5,
    aosDelay: "600",
  },
];

const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Selling Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores modi Sit asperiores modi
          </p>
        </div>
        {/* body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* card section */}
            {ProductCards.map((data) => (
              <div
                // Small library to animate elements on your page as you scroll.
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3"
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[200px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p>{data.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-500" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <button className="text-white bg-primary py-1 px-10 cursor-pointer rounded-md text-1xl">View All</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
