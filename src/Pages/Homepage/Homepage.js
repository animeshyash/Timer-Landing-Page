import React, { useState } from "react";
import "./Homepage.css";
import Time from "../../Components/Homepage/Time";
import TimeOverCard from "../../Components/Homepage/TimeOverCard";

const Homepage = () => {
  const [timeOver, setTimeOver] = useState(false);
  const time = new Date();
  time.setSeconds(time.getSeconds() + 60);
  return (
    <div className="relative h-[100vh]">
      <div className="shape-blob absolute"></div>
      <div className="shape-blob-Two absolute"></div>
      <div className="text-black font-semibold flex md:items-start items-center px-5 py-3 md:text-[1.375rem] text-[1.0rem] tracking-widest h-[10%] gap-1">
        THE{" "}
        <span className="bg-black text-white px-[0.354rem] py-[0.063rem]">
          PRODUCT
        </span>{" "}
        PLATFORM
      </div>
      <div
        className={`flex flex-col justify-center items-center ${
          !timeOver ? "md:h-[87%] h-[78%]" : "md:h-[80%] h-[65%]"
        }`}
      >
        {!timeOver ? <Time setTimeOver={setTimeOver} /> : <TimeOverCard />}
      </div>
    </div>
  );
};

export default Homepage;
