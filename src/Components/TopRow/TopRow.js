export default function TopRow() {
  return (
    <div className=" grid-cols-10 hidden md:grid mb-2">
      <div className="col-span-3"></div>
      <div className="col-span-2 text-[#FFFFFF] flex">
        <img src="./assets/steps.png" alt="step-image" height={10} width={30} />
        <p>Steps</p>
      </div>
      <div className="col-span-2 text-[#FFFFFF] flex">
        <img
          src="./assets/workout.png"
          alt="workout-image"
          height={10}
          width={30}
        />
        <p>Workout</p>
      </div>
      <div className=" text-[#FFFFFF] flex">
        <img
          src="./assets/nutrition.png"
          alt="Nutrition-image"
          height={10}
          width={30}
        />
        <p>Nutrition</p>
      </div>
    </div>
  );
}
