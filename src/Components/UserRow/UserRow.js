import { useState } from "react";
import UserInfo from "../UserInfo/UserInfo";
import StepInfo from "../StepInfo/StepInfo";
import DateInfo from "../DateInfo/DateInfo";
import NutritionInfo from "../NutritionInfo/NutritionInfo";
import BellIcon from "../BellIcon/BellIcon";

export default function UserRow({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      key={item.userID}
      className="flex flex-col md:flex-row justify-around gap-8 items-center bg-[#1E262F] p-2 rounded-lg mb-8"
    >
      <div className="flex  w-full md:w-auto justify-center">
        <div className="ml-auto">
          <UserInfo
            userName={item.userName}
            userID={item.userID}
            userEmail={item.userEmail}
            userProfileImage={item.userProfileImage}
          />
        </div>
        <div
          className="self-center ml-auto md:hidden p-4 cursor-pointer"
          onClick={handleClick}
        >
          <img
            src="./assets/down.png"
            alt="down-image"
            height={20}
            width={20}
          />
        </div>
      </div>
      <div className={`${isOpen === true ? "block" : "hidden"} md:block`}>
        <StepInfo
          userStepTarget={item.userStepTarget}
          userStepsWalked={item.userStepsWalked}
        />
      </div>
      <div className={`${isOpen === true ? "block" : "hidden"} md:block`}>
        <DateInfo
          userPerformedDate={item.userPerformedDate}
          userScheduledDate={item.userScheduledDate}
          feedback={item.feedback}
        />
      </div>
      <div className={`${isOpen === true ? "block" : "hidden"} md:block`}>
        <NutritionInfo
          userCalorieIntake={item.userCalorieIntake}
          userCalorieTarget={item.userCalorieTarget}
          userProteinConsumed={item.userProteinConsumed}
          userProteinTarget={item.userProteinTarget}
          userCarbConsumed={item.userCarbConsumed}
          userCarbTarget={item.userCarbTarget}
          userFatConsumed={item.userFatConsumed}
          userFatTarget={item.userFatTarget}
        />
      </div>
      <div className={`${isOpen === true ? "block" : "hidden"} md:block`}>
        <BellIcon />
      </div>
    </div>
  );
}
