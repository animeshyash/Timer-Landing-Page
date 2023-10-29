import React, { useState } from "react";
import Timestamp from "./Timestamp";
import { BsRocket } from "react-icons/bs";
import { LiaCheckSolid } from "react-icons/lia";
import Spinner from "../../Components/Homepage/Spinner/Spinner";
import { useNavigate } from "react-router-dom";

const Time = ({ setTimeOver }) => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [tickMark, setTickMark] = useState(false);
  const [correct, setCorrect] = useState(true);
  const [data, setData] = useState({
    email: "",
  });

  function validateEmail(email) {
    // Regular expression for a valid email address
    var re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  }

  function handleChange(event) {
    setTickMark(false);
    setCorrect(true);
    setData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }
  const time = new Date();
  time.setSeconds(time.getSeconds() + 60);
  return (
    <div className="flex mx-auto flex-col md:gap-8 gap-4 justify-center items-center">
      {/* Heading Section */}
      <div className="md:w-[100%]">
        <div className="flex items-baseline md:w-[100%] w-[90%] md:mx-0 mx-auto">
          <div className="md:w-[5%] w-[10%] flex justify-end">
            <BsRocket className="md:w-[3.313rem] md:h-[3.55rem] w-[1.35rem] h-[1.15rem] rotate-[30deg]" />
          </div>
          <p className="md:w-[95%] w-[90%] md:text-[3.75rem] text-[1.45rem] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#0F0F0F] to-[#333333] md:text-center ml-1">
            Launching New Module Soon!
          </p>
        </div>
        <div className="mt-2 font-normal md:text-[1.313rem] text-[0.83rem] mx-auto text-center tracking-wide md:w-[100%] w-[80%]">
          <span className={``}>Exciting things are in the works!</span> We're
          currently{" "}
          <span className="md:font-bold font-bold">Crafting a new feature</span>{" "}
          for you. <br />
          Keep an eye out for updates – We're working to make it available soon!
        </div>
      </div>

      {/* Mid Section */}
      <div className=" md:w-[80%] w-[95%] flex flex-col items-center">
        <p className="md:text-[1.875rem] text-[1.25rem] tracking-widest font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0F0F0F] to-[#333333]">
          GET READY FOR THE REVEAL!
        </p>
        <div className="my-4 flex justify-center w-[60%]">
          <Timestamp expiryTimestamp={time} setTimeOver={setTimeOver} />
        </div>
      </div>

      {/* Last Section */}
      <div className="flex flex-col justify-center w-[100%]">
        <p className="md:text-[1.25rem] text-[0.80rem] w-[95%] mx-auto text-center tracking-wider">
          Be the first to know! Share your email and We'll notify you when it's
          live
        </p>
        <div className="mt-3 w-[95%] flex mx-auto justify-center flex-wrap md:gap-0 gap-2 h-[100%] md:h-[2.813rem]">
          <input
            placeholder="Please enter your email id"
            value={data.value}
            onChange={handleChange}
            name="email"
            type="email"
            className="py-1 outline-none px-4 border md:text-[1.25rem] text-[0.85rem] border-[#4D4D4D] mx-4 rounded-md md:w-[75%] w-[95%] tracking-wider"
          />
          <button
            onClick={() => {
              setLoader(true);
              if (!validateEmail(data.email)) {
                setTimeout(() => {
                  setLoader(false);
                  setCorrect(false);
                }, 1000);
              } else {
                setTimeout(() => {
                  setLoader(false);
                  setCorrect(true);
                  setTimeout(() => {
                    navigate("/profile");
                  }, 1030);
                }, 1000);
                setTickMark(true);
              }
            }}
            className={`border md:mx-0 mx-auto py-1 px-5 rounded-md bg-[#0F0F0F] ${
              loader ? "md:w-[10%] w-[93%]" : "md:w-[20%] w-[93%]"
            } ${
              tickMark ? "md:w-[10%] w-[93%]" : "md:w-[20%] w-[93%]"
            } md:text-[1.375rem] text-[1rem] tracking-wider ${
              !data.email ? "text-[#FFFFFF80]" : "text-white"
            }`}
          >
            {loader ? (
              <div className="flex justify-center">
                <Spinner />
              </div>
            ) : tickMark ? (
              <p className="md:text-[1.875rem] text-[1.25rem] text-white font-bold flex justify-center">
                <LiaCheckSolid />
              </p>
            ) : (
              <p>Notify Me</p>
            )}
          </button>
        </div>
        <p
          className={`${
            !correct ? "opacity-1" : "opacity-0"
          } text-[#FD443A] ml-6 mt-1 md:text-[1.19rem] text-[0.85rem] md:ml-11`}
        >
          invalid email
        </p>
      </div>
    </div>
  );
};

export default Time;
