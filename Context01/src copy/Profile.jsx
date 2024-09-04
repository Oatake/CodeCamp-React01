import React, {useContext} from "react";
import UserContext from "./contexts/UserContext";

// export default function Profile(props) {
//   const { user } = props;
//   return (
//     <div className="p-2 bg-lime-400">
//       <pre>{JSON.stringify(user, null, 2)}</pre>
//     </div>
//   );
  export default function Profile() {
    const {user} = useContext(UserContext)
    return (
      <div className="p-2 bg-lime-400">
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </div>
    );
}
