import React from "react";
import { IoCloseOutline } from "react-icons/io5";

const Popup = ({ orderPopup, setOrderPopup }) => {
  return (
    <div>
      <>
        {orderPopup && (
          <div className="popup">
            <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 backdrop-blur-sm">
              <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white rounded-md duration-200 w-[300px]">
                <div className="flex items-center justify-between">
                  <div>
                    <h1>Order Now</h1>
                  </div>
                  <div>
                    <IoCloseOutline
                      className="text-2xl cursor-pointer"
                      onClick={() => setOrderPopup(false)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    </div>
  );
};

export default Popup;
