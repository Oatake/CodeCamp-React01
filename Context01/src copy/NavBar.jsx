import React from "react";
import Avatar from "./Avatar"

// export default function NavBar(props) {
//     const {user}=props;
//   return (
//     <div className="w-1/2 bg-violet-300 h-full flex justify-between items-end">
//       <nav className="flex gap-3">
//         <a href="#">login</a>
//         <a href="#">login</a>
//         <a href="#">login</a>
//         <a href="#">login</a>
        
//       </nav>
//       <Avatar user={user}/>
//     </div>
//   );
export default function NavBar() {
return (
    <div className="w-1/2 bg-violet-300 h-full flex justify-between items-end">
      <nav className="flex gap-3">
        <a href="#">login</a>
        <a href="#">login</a>
        <a href="#">login</a>
        <a href="#">login</a>
        
      </nav>
      <Avatar />
    </div>
  );
}
