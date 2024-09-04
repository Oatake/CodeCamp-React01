import React, { useContext } from 'react'
import UserContext from '../contexts/UserContextProvider'

export default function Profile() {
    const {user} = useContext(UserContext)
    console.log(user)
  return (
    <div>Profile</div>
  )
}
