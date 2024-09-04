import React, { useEffect, useState } from "react";

export default function InfoBox(props) {
    const {selectUser}=props
    const [user, setUser] = useState({})
    const fetchUserId = async (id)=>{
       
        const resp= await fetch(`https://dummyjson.com/users/${id}`)
        const result = await resp.json()
        console.log("the result is " , result)
        setUser(result);
    }

    useEffect(()=>{
        fetchUserId(selectUser)
    },[selectUser])

    if(selectUser===0)
    {
        return <h1>loading</h1>
    }

  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>{user.id}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
