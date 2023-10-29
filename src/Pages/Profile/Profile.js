import React from "react";
import Icon from "../../Assets/girl.png";
import { AiOutlineArrowUp } from "react-icons/ai";

const Profile = () => {
  return (
    <div className="bg-black h-[100vh] flex flex-col justify-between">
      <div className="md:border-b-2 h-[10%] flex items-center justify-between bg-[#2A2A2A] md:bg-black">
        <div className="text-white font-semibold flex md:items-start items-center px-5 py-3 md:text-[1.375rem] text-[1.0rem] tracking-widest gap-1">
          THE{" "}
          <span className="bg-white text-black px-[0.254rem] py-[0.063rem]">
            PRODUCT
          </span>{" "}
          PLATFORM
        </div>
        <div className="mr-5">
          <img src={Icon} alt="User Icon" width={40} />
        </div>
      </div>
      <div className="text-white md:text-[40px] my-7 flex justify-end mr-5">
        <div className="bg-[#2A2A2A] p-3 rounded-full w-max">
          <AiOutlineArrowUp />
        </div>
      </div>
    </div>
  );
};

export default Profile;
