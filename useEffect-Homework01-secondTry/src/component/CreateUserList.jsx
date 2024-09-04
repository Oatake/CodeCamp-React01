import React, { useEffect, useState } from "react";

export default function CreateUserList(props) {
    const {setUserID} = props
    let [users, setUsers] = useState([])
    async function getData ()
    {
        let resp = await fetch('https://dummyjson.com/users?limit=5')
        let result = await resp.json()
        // console.log(result.users)
        setUsers(result.users)
        // console.log("users is " , users)
    }
    // getData();
    
    useEffect(()=>{  
        getData()
        // console.log("users is " , users)
    },[])

    function hdlclick(id){
        setUserID(id)
        console.log(id)
    }

  return (
    <div>
      <ul className="menu bg-base-200 rounded-box w-56">
        <li className="menu-title">NameLists</li>
        {users.map(el=> (<li key={el.id}><a onClick={()=>{hdlclick(el.id)}}>{el.firstName}</a></li>))}
      </ul>
    </div>
  );
}
