import { useState, useEffect } from "react";
import UserList from "./UserList";

export default function App() {
  console.log("app run..")
  const [count, setCount] = useState(0);
  const [fiveNum, setFiveNum] = useState(0);
  const [open, setOpen] = useState(false)

  useEffect(()=>{
    console.log("used effect01 run...")
  },[])

  useEffect(()=>{
    console.log("used effect02 run...")
  },)
  
  useEffect(()=>{
    console.log("used effect03 run...")
  },[fiveNum])

  const hdlClick = ()=>{
    if ((count+1) %5 ===0)
    {
      setFiveNum(prv=>prv+1)
    }
    setCount(prv=>prv+1)
  }
  return (
    <>
    <div className="p-4 flex flex-col gap-4 text-center">
      {console.log("app jsx...")}

      <h1 className="text-3xl font-bold underline">Count = {count}, fiveNum = {fiveNum}</h1>
      <button className="bg-pink-100" onClick={hdlClick}>
        Add 1
      </button>
      </div>
      <hr />
      <button onClick={()=>setOpen(prv=>!prv)}>Toggle User List</button>
      {open && <UserList count = {count} />}
    </>
  );
}
