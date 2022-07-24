import DUMMY_DATA from "./Data/DUMMY_DATA";
import TopRow from "./Components/TopRow/TopRow";
import UserRow from "./Components/UserRow/UserRow";

function App() {
  return (
    <div className="App p-10 ">
      <TopRow />
      {DUMMY_DATA.map((item) => {
        return <UserRow item={item} />;
      })}
    </div>
  );
}

export default App;
