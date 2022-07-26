import { useNavigate } from "react-router-dom";
export default function DateInfo({
  userPerformedDate,
  userScheduledDate,
  feedback,
}) {
  const currentDate = new Date();
  const currentDateMonth = currentDate.getUTCMonth();
  const currentDateDate = currentDate.getDate();
  const scheduledDate = new Date(userScheduledDate);
  const scheduledDateMonth = scheduledDate.getUTCMonth();
  const scheduledDateDate = scheduledDate.getDate();
  const isDateSame =
    currentDateMonth === scheduledDateMonth &&
    currentDateDate == scheduledDateDate;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/workout");
  };
  return (
    <div className="flex gap-2 text-center">
      <div>
        <div className="flex mb-1 gap-1 p-1">
          <div>
            <img
              src="./assets/userCheck.png"
              alt="user-check"
              height={25}
              width={25}
            />
          </div>
          <div>
            <p className="text-[#FFFFFF]">{userPerformedDate}</p>
          </div>
        </div>
        <div
          className={`flex gap-1 ${
            isDateSame === true ? "bg-[#CC3838]" : ""
          } p-1 rounded-md`}
        >
          <div>
            <img
              src="./assets/calendar.png"
              alt="user-check"
              height={25}
              width={25}
            />
          </div>
          <div>
            <p className="text-[#FFFFFF]">{userScheduledDate}</p>
          </div>
        </div>
      </div>
      <div
        className={`${
          feedback === true ? "bg-[#CC3838]" : "bg-[#101317]"
        } w-8 min-h-full flex items-center justify-center text-2xl rounded-md cursor-pointer`}
        onClick={handleClick}
      >
        <p className="text-[#FFFFFF] ">{feedback == true ? "!" : ">"}</p>
      </div>
    </div>
  );
}
