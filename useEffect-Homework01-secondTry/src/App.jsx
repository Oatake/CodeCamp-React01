import { useState } from "react";
import CreateCard from "./component/CreateCard"
import CreateUserList from "./component/CreateUserList";

function App() {
  const [userID, setUserID] = useState(0);
  const [turnOn, setTurnOn] = useState(true)

  return (
    <>
      <div>
        <CreateUserList setUserID = {setUserID}/>
        {console.log("UserId is ", userID)}
        <button className="btn btn-outline btn-warning" onClick={()=>{setTurnOn((prev)=>(!prev))}}>Warning</button>
        {turnOn && <CreateCard userID={userID} />}
      </div>
    </>
  );
}

export default App;
