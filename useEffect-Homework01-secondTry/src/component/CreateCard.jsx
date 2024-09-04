import React, { useEffect, useState } from "react";

export default function CreateCard(props) {
    const {userID} = props
    const [userInfo, setUserInfo] = useState({})
    async function getUser ()
    {
        let resp = await fetch(`https://dummyjson.com/users/${userID}`)
        let result = await resp.json()
        console.log(result)
        setUserInfo(result)
        // console.log("users is " , users)
    }
    
    useEffect(()=>{
        getUser()
    },[userID])
  return (
    <div class="card card-compact bg-base-100 w-96 shadow-xl">
      <figure>
        <img
          src={userInfo.image}
          alt="Shoes"
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{userInfo.id}</h2>
        <p>{userInfo.firstName}, {userInfo.lastName}</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}
