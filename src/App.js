import DUMMY_DATA from "./Data/DUMMY_DATA";
import UserInfo from "./Components/UserInfo/UserInfo";
import StepInfo from "./Components/StepInfo/StepInfo";
import DateInfo from "./Components/DateInfo/DateInfo";
import NutritionInfo from "./Components/NutritionInfo/NutritionInfo";
import BellIcon from "./Components/BellIcon/BellIcon";

function App() {
  return (
    <div className="App p-10">
      {DUMMY_DATA.map((item) => {
        return (
          <div
            key={item.userID}
            className="flex justify-around gap-8 items-center bg-[#1E262F] p-2 rounded-lg mb-8"
          >
            <UserInfo
              userName={item.userName}
              userID={item.userID}
              userEmail={item.userEmail}
              userProfileImage={item.userProfileImage}
            />
            <StepInfo
              userStepTarget={item.userStepTarget}
              userStepsWalked={item.userStepsWalked}
            />
            <DateInfo
              userPerformedDate={item.userPerformedDate}
              userScheduledDate={item.userScheduledDate}
              feedback={item.feedback}
            />
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
            <BellIcon />
          </div>
        );
      })}
    </div>
  );
}

export default App;
