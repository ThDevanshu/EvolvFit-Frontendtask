import { useEffect, useState } from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function StepInfo({ userStepTarget, userStepsWalked }) {
  const [stepsWalked, setStepsWalked] = useState(userStepsWalked);
  const incrementSteps = (ammount) => {
    setStepsWalked(stepsWalked + ammount);
  };
  const decrementSteps = (ammount) => {
    setStepsWalked(stepsWalked - ammount);
  };
  useEffect(() => {}, [stepsWalked]);

  return (
    <div className="flex gap-2 items-center">
      <div style={{ width: 80, height: 80 }} className="items-center">
        <CircularProgressbarWithChildren
          value={stepsWalked}
          maxValue={userStepTarget}
          styles={buildStyles({
            rotation: 0.25,
            strokeLinecap: "butt",
            textSize: "16px",
            pathTransitionDuration: 0.5,
            textColor: "#FFFFFF",
            pathColor: "#7FD18C",
            trailColor: "#FFFFFF",
          })}
        >
          <div className="text-center">
            <h3 className="text-[#FFFFFF] font-black">{stepsWalked}</h3>
            <h4 className="text-[#A2A1A3]">Walked</h4>
          </div>
        </CircularProgressbarWithChildren>
      </div>
      <div className="flex flex-col gap-1">
        <div
          className="bg-[#101317] text-center flex-1 rounded-md cursor-pointer"
          onClick={() => incrementSteps(500)}
        >
          <p className="text-[#FFFFFF] text-base font-black ">+</p>
        </div>
        <div className="text-center flex-2">
          <p className="text-[#FFFFFF] font-black ">
            {(userStepTarget / 1000).toPrecision(3)}K
          </p>
          <p className="text-[#A2A1A3]">Walked</p>
        </div>
        <div
          className="bg-[#101317] text-center flex-1 rounded-md cursor-pointer"
          onClick={() => decrementSteps(500)}
        >
          <p className="text-[#FFFFFF] text-base font-black">-</p>
        </div>
      </div>
    </div>
  );
}
