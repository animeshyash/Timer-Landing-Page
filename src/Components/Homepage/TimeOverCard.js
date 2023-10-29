import React from "react";

const TimeOverCard = () => {
  return (
    <div className="bg-gradient-to-r from-[#E5B8D9] to-[#C9B8E5] flex mx-auto flex-col gap-1 justify-center  rounded-xl py-2 px-4 md:py-5 md:px-14">
      <p className="md:text-[3.75rem] text-[1.5rem] text-center font-semibold">
        We are Live Now!
      </p>
      <p className="text-center font-normal md:text-[1.438rem] text-[0.75rem]">
        Our new feature is now{" "}
        <span className="font-medium">Live and ready</span> for you <br /> to
        explore. Go ahead and give it a try
      </p>
      <button className="md:mt-8 mt-3 mx-auto md:mb-5 mb-2 font-medium border py-1 md:px-10 px-5 rounded-md bg-[#0F0F0F] text-white md:text-[1.375rem] text-[0.75rem] tracking-widest">
        Get Started
      </button>
    </div>
  );
};

export default TimeOverCard;
