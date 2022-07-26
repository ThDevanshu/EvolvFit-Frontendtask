import { useNavigate } from "react-router-dom";
export default function UserDiet() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div>
      <div className="text-3xl text-purple-500">This is diet page</div>
      <button className="text-3xl text-purple-500" onClick={handleClick}>
        Home
      </button>
    </div>
  );
}
