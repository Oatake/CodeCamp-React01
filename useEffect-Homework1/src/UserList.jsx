import React, { useEffect, useState } from "react";

export default function UserList(props) {
  const {setSelectUser} = props
  const [data, setData] = useState([]);
  
  const getData = async ()=>{
    const resp = await fetch('https://dummyjson.com/users?limit=5')
    const result = await resp.json()
    // console.log(data.users)
    // console.log(data)
    setData(result.users)
    // console.log(data)
    console.log(result.users)
  }

  function hdlUserClick(id){
    setSelectUser(id);
    console.log('el.id is ', id)
  }

  useEffect(()=>{
    getData();
    console.log("arr is " ,data)
    // arr.map(el=>{console.log(el.users.firstName)})
},[])



  return (
    <div>
        {/* <p>{JSON.stringify(data)}</p> */}
      <ul className="menu bg-base-200 rounded-box w-56">
        {data.map(el=>(
            <li><a onClick={(e)=>{hdlUserClick(el.id)}}>{el.firstName}, {el.lastName}</a></li>
        ))}
        <li>
          <a>Item 1</a>
        </li>
        <li>
          <a>Item 2</a>
        </li>
        <li>
          <a>Item 3</a>
        </li>
      </ul>
    </div>
  );
}
