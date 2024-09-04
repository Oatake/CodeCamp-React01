import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
    const [productId, setProductId] = useState('')
    const hdlSubmit = e=>{
        e.preventDefault()
        console.log("xxxx")
        navigate(`/product/${productId}`)
    }
    console.log('123')
  return (
    <div className="mt-4">
      <form onSubmit={hdlSubmit}>
        <label>
          Product ID :
          <input className="border" value={productId} onChange={(e)=>setProductId(e.target.value)}/>
        </label>
        <button className="bg-lime-500">Search</button>
      </form>
      
    </div>
  );
}
