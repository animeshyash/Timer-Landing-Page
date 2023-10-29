import React from "react";
import { useTimer } from "react-timer-hook";

const Timestamp = ({ expiryTimestamp, setTimeOver }) => {
  const { seconds, minutes } = useTimer({
    expiryTimestamp,
    onExpire: () => setTimeOver(true),
  });

  return (
    <div className="flex gap-10 justify-center bg-gradient-to-r from-[#E5B8D9] to-[#C9B8E5] w-[100%] rounded-[0.5rem] md:rounded-[1.5rem] md:p-[1.25rem] p-[1.45rem]">
      <div className="w-max text-center">
        <div className=" font-medium md:text-[2.813rem] text-[1.35rem]">{minutes}</div>
        <p className="md:text-[1.5rem] text-[0.80rem]">Minutes</p>
      </div>
      <span className="md:text-[2.813rem] text-[1.35rem]">:</span>
      <div className="w-max text-center">
        <div className=" font-medium md:text-[2.813rem] text-[1.35rem]">{seconds}</div>
        <p className="md:text-[1.5rem] text-[0.80rem]">Seconds</p>
      </div>
    </div>
  );
};

export default Timestamp;
