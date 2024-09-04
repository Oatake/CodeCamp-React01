import { useEffect, useState } from "react";
import Header from "./Header";
import Profile from "./Profile";

function App() {
  const [user, setUser] = useState({});

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const resp = await fetch("https://dummyjson.com/users/1");
  //     const result = await resp.json();
  //     setUser(result);
  //   };
  //   fetchUser();
  // }, []);

  // return (
  //   <div>
  //     {/* <header /> // <NavBar /> // <Profile>
  //     <UserInfo> */}
  //     <Header user={user} />
  //     <Profile user={user}/>
  //     <pre>{JSON.stringify(user,null,2)}</pre>
  //   </div>
  // );
  return (
    <div>
      
      {/* <Header /> */}
      <Profile/>
      
    </div>
  );
}

export default App;
