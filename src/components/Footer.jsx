import React from "react";
import Shopsy from "../assets/shopsy.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
} from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa";

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#About",
  },
  {
    title: "Contact",
    link: "/#Contact",
  },
  {
    title: "Blog",
    link: "/#Blog",
  },
];

const Footer = () => {
  return (
    <div className="bg-[url(./assets/footer.jpg)] bg-cover h-[100%] bg-center bg-no-repeat text-white pb-44">
      <div className="container">
        <div data-aos="zoom-in" className="grid md:grid-cols-3 pt-5">
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={Shopsy} alt="" className="max-w-[50px]" />
              Shopsy
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum in
              beatae ea recusandae blanditiis veritatis.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((data) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                      key={data.title}
                    >
                      <a href={data.link}>{data.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3">
                  Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((data) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                      key={data.title}
                    >
                      <a href={data.link}>{data.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 mt-6">
                <a href="#">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
              <div className="mt-3 flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Dhaka, Bangladesh</p>
                </div>
                <div className="flex items-center gap-3">
                  <FaMobileAlt />
                  <p>+880 17000000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
