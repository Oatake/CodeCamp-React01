import React, { useEffect } from "react";
import useStore from "../Store/MyStore";

const Section4 = () => {
  const { data, isLoading, error, errorMsg, getData } = useStore((state) => ({
    data: state.data,
    isLoading: state.isLoading,
    error: state.error,
    errorMsg: state.errorMsg,
    getData : state.getData
  }));
  console.log(data, isLoading, error, errorMsg);

  useEffect(()=>{
    getData()
  },[])

  const handleGetData = ()=>{
    console.log('click')
    getData()
  }
  return (
    <div>
      <h1>Section4</h1>
      {
        isLoading
        ?<h1>Loading...</h1>
        :error
        ?<p>{errorMsg}</p>
        :(data.map((item,index)=>(
            <li key={index}>{item.name}</li>
        )))
      }
      <button onClick={handleGetData}>Get Data</button>
    </div>
  );
};

export default Section4;
