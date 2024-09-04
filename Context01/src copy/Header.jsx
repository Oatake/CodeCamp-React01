import React from "react";
import NavBar from "./NavBar";

// export default function Header(props) {
//   const {user}=props
  // return (
  //   <div className="bg-pink-400 h-20 flex justify-between items-end">
  //     <p>Logo</p>
  //     <NavBar user = {user} />
  //   </div>
  // );
  export default function Header() {
  
  return (
    <div className="bg-pink-400 h-20 flex justify-between items-end">
      <p>Logo</p>
      <NavBar />
    </div>
  );
}
