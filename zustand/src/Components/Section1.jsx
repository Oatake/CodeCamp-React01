import { useState } from "react";
import React from "react";
import useStore from "../Store/MyStore";
import { useShallow } from "zustand/react/shallow";

const Section1 = () => {
  const [txt, setTxt] = useState("");
  //js
  //step 2 use store1
//   // const fname = useStore()
//   const fname = useStore((state) => state.fname);
//   const lname = useStore((state) => state.lname);
//   const value = useStore((state) => state.value);
//   const setName = useStore((state) => state.setName);
//   const incNum = useStore((state) => state.incNum);
//   const decNum = useStore((state) => state.decNum);
  const{fname, setName, lname, value, incNum, decNum}=useStore(useShallow((state)=>({
    fname : state.fname,
    setName : state.setName,
    lname :  state.lname,
    value : state.value,
    incNum : state.incNum,
    decNum : state.decNum
  })))

  const handleChangeTxt = (e) => {
    console.log(e.target.value);
    setTxt(e.target.value);
  };

  const handleSetName = () => {
    setName(txt);
  };

  const handleIncNum = () => {
    console.log("click");
    incNum();
  };

  const handleDecNum = () => {
    console.log("click");
    decNum();
  };
  console.log('Section  1')
  return (
    <div>
      <h1>
        {fname} {lname}{" "}
      </h1>
      <p>value is {value}</p>
      <input type="text" onChange={handleChangeTxt} />
      <button onClick={handleSetName}>Set Name</button>
      <p>
        <button onClick={handleIncNum}>+ Num</button>
        <button onClick={handleDecNum}>- Num</button>
      </p>
    </div>
  );
};

export default Section1;
