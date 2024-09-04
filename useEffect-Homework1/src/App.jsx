import { useState, useEffect } from "react";
import UserList from "./UserList";
import InfoBox from "./InfoBox";

function App() {
  const [open, setOpen] = useState(false);
  const [selectUser, setSelectUser] = useState(0)
  
  return (
    <>
      <div className="flex flex-col gap-4 max-w-screen-lg">
        <UserList setSelectUser={setSelectUser}/>
        <hr />
        <button
          className="btn btn-outline btn-primary"
          onClick={() => setOpen((prv) => !prv)}
        >
          Info Box
        </button>
        {open && <InfoBox selectUser={selectUser}/>}
      </div>
    </>
  );
}

export default App;
