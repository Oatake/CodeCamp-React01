import React, { useContext } from 'react'
import UserContext from './contexts/UserContext'

// export default function Avatar(props) {
//     const {user} = props
//   return (
//     <div>
//         <img className='h-100' src={user?.image} alt="" />
//     </div>
//   )
  export default function Avatar() {
    const value = useContext(UserContext)
    console.log(value)
  return (
    <div>
        <img className='h-100' src={user?.image} alt="" />
    </div>
  )
}
