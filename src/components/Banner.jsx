import React from "react";
import BigSale from "../assets/BigSale.png";
import Mens from "../assets/mens.png";
import Womens from "../assets/womens.png";
import Slider from "react-slick";
const ImageList = [
  {
    id: 1,
    img: Mens,
    title: "Upto 50% off on all Men's Wear",
    description:
      "Lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: Womens,
    title: "30% off on all Women's Wear",
    description:
      "Who's there lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: BigSale,
    title: "70% off on all Products Sales",
    description:
      "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const Banner = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    slidesToShow: 1,
    pauseOnOver: false,
    pauseOnFocus: true,
    slidesToScroll: 1,
  };

  return (
    <div>
      <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center">
        {/* background pattern or shape */}
        {/* this is rotation shape */}
        <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45"></div>

        {/* banner main section */}
        <div className="container pb-8 sm:pb-0">
          <Slider {...settings}>
            {ImageList.map((data) => (
              <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-15">
                  <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                    <h1
                      // animation
                      data-aos="zoom-in"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                    >
                      {data.title}
                    </h1>
                    <p
                      // animation
                      data-aos="fade-up"
                      data-aos-duration="500"
                      data-aos-delay="100"
                      className="text-sm"
                    >
                      {data.description}
                    </p>
                    <div
                      // animation
                      data-aos="fade-up"
                      data-aos-duration="500"
                      data-aos-delay="100"
                    >
                      <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
                        Order Now
                      </button>
                    </div>
                  </div>
                  <div className="order-2 sm:order-1 z-10">
                    <div>
                      <img
                        src={data.img}
                        alt="Mens"
                        // scale use for zoom image or content
                        className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 object-contain mx-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      {/* {ImageList.map((item) => (
          
        ))} */}
    </div>
  );
};

export default Banner;
