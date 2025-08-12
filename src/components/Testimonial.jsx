import React from "react";
import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    name: "Victor",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis invetore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/200/300",
  },
  {
    id: 1,
    name: "Sachin Tendulkar",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis invetore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/200/300",
  },
  {
    id: 2,
    name: "Virat Kohli",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis invetore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/200/300",
  },
  {
    id: 1,
    name: "Satya Nadella",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis invetore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/200/300",
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
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

    // responsive settings
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="py-10 mb-10">
      <div className="container">
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            What our customers are saying
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testimonials
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores modi Sit asperiores modi
          </p>
        </div>
        {/* testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {testimonialData.map((data) => (
              <div className="my-6">
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-primary/10 relative"
                >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className=" flex flex-col items-center gap-4">
                    <div className="space-y-2">
                      <p className="text-xs text-gray-500">{data.review}</p>
                      <h1 className="text-xl font-bold text-black/80 text-left">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
