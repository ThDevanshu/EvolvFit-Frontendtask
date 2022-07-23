import { useEffect, useState } from "react";
import { PieChart } from "react-minimal-pie-chart";
import ReactTooltip from "react-tooltip";
import ProgressBar from "@ramonak/react-progress-bar";

import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function NutritionInfo({
  userCalorieTarget,
  userCalorieIntake,
  userProteinConsumed,
  userProteinTarget,
  userCarbConsumed,
  userCarbTarget,
  userFatConsumed,
  userFatTarget,
}) {
  const [calorieTarget, setCalorieTarget] = useState(userCalorieIntake);
  const [hovered, setHovered] = useState(null);
  const fatPercent = ((userFatConsumed / userFatTarget) * 100).toPrecision(2);
  const carbPercent = ((userCarbConsumed / userCarbTarget) * 100).toPrecision(
    2
  );
  const proteinPercent = (
    (userProteinConsumed / userProteinTarget) *
    100
  ).toPrecision(2);
  function makeTooltipContent() {
    return (
      <div className="w-64 rounded-xl">
        <div className="mb-2 bg-[#1B222A]">
          <span>Protein : {userProteinTarget}</span>
          <ProgressBar
            baseBgColor="#101317"
            bgColor="#F45C84"
            customLabel={`${userProteinConsumed}g`}
            completed={proteinPercent}
          />
        </div>
        <div className="mb-2 bg-[#1B222A]">
          <span>Fats : {userFatTarget}</span>
          <ProgressBar
            baseBgColor="#101317"
            bgColor="#03C6FA"
            customLabel={`${userFatConsumed}g`}
            completed={fatPercent}
          />
        </div>
        <div className="bg-[#1B222A]">
          <span>Carbs : {userCarbTarget}</span>
          <ProgressBar
            baseBgColor="#101317"
            bgColor="#F0C50F"
            customLabel={`${userCarbConsumed}g`}
            completed={carbPercent}
          />
        </div>
      </div>
    );
  }
  const incrementSteps = (ammount) => {
    console.log(calorieTarget);
    setCalorieTarget(calorieTarget + ammount);
  };
  const decrementSteps = (ammount) => {
    setCalorieTarget(calorieTarget - ammount);
  };
  useEffect(() => {}, [calorieTarget]);
  return (
    <div className="flex gap-2 items-center">
      <div
        style={{ width: 80, height: 80 }}
        data-tip=""
        data-for="chart"
        onMouseOver={() => {
          setHovered(1);
        }}
        onMouseOut={() => {
          setHovered(null);
        }}
      >
        <PieChart
          radius={50}
          lineWidth={20}
          label={() => calorieTarget}
          labelStyle={{
            fontSize: "25px",
            fontFamily: "sans-serif",
            fill: "#FFFF",
          }}
          labelPosition={0}
          background="#bfbfbf"
          rounded
          data={[
            { title: "PROTEIN", value: userProteinConsumed, color: "#F45C84" },
            { title: "FATS", value: userCarbConsumed, color: "#03C6FA" },
            { title: "CARBS", value: userFatConsumed, color: "#F0C50F" },
          ]}
        />
        <ReactTooltip
          className="tooltip-custom"
          place="bottom"
          id="chart"
          effect="solid"
          getContent={() =>
            typeof hovered === "number" ? makeTooltipContent() : null
          }
        />
      </div>
      <div className="flex flex-col gap-1">
        <div
          className="bg-[#101317] text-center flex-1 rounded-md cursor-pointer"
          onClick={() => incrementSteps(100)}
        >
          <p className="text-[#FFFFFF] text-base font-black ">+</p>
        </div>
        <div className="text-center flex-2">
          <p className="text-[#FFFFFF] font-black ">
            {(userCalorieTarget / 1000).toPrecision(2)}K
          </p>
          <p className="text-[#FFFFFF] font-thin">Walked</p>
        </div>
        <div
          className="bg-[#101317] text-center flex-1 rounded-md cursor-pointer"
          onClick={() => decrementSteps(100)}
        >
          <p className="text-[#FFFFFF] text-base font-black">-</p>
        </div>
      </div>
      <div className="bg-[#101317] w-8 h-20 flex items-center justify-center text-2xl rounded-md cursor-pointer">
        <p className="text-[#FFFFFF] ">{">"}</p>
      </div>
    </div>
  );
}
