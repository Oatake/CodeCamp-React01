import { createContext, useState , useEffect} from "react";

const UserContext = createContext();

UserContext.

function UserContextProvider() {
    const [user,setUser] = useState({})

    useEffect(() => {
        const fetchUser = async () => {
          const resp = await fetch("https://dummyjson.com/users/1");
          const result = await resp.json();
          setUser(result);
        };
        fetchUser();
      }, []);
    
  return (
    // <UserContext.Provider value={{user: user, setUser:setUser}}>
    <UserContext.Provider value={{user, setUser}}>
      {props.children}
    </UserContext.Provider>
  );
}

export {UserContextProvider}    //export name
export default UserContext

