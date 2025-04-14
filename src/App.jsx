import React from "react";
import { useState } from "react";

// Small library to animate elements on your page as you scroll.
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Products from "./components/Products";
import TopProduct from "./components/TopProduct";
import WinterSale from "./components/WinterSale";
import Subscribe from "./components/Subscribe";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
// import Popup from "./components/Popup";

// const [orderPopup, setOrderPopup] = useState(false);
const App = () => {
  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  // Small library to animate elements on your page as you scroll.
  React.useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <Navbar />
      <Banner />
      <Products />
      <TopProduct />
      <WinterSale />
      <Subscribe />
      <Products />
      <Testimonial />
      <Footer />
      {/* <Popup /> */}
    </div>
  );
};

export default App;
