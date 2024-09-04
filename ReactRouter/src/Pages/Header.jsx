import React , {useContext} from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/Authcontext'

export default function Header() {
    const {user, setUser} = useContext(AuthContext)
  return (
     <div className='bg-pink-300 flex justify-between items-end h-[60px]'>
        <h1>Logo</h1>
        <nav className='flex gap-3 text-xl'>
            <Link to='/'>Home</Link>
            <Link to='/about'>about</Link>
            <Link to='/login'>login</Link>
            <Link to='/product'>Product</Link>
            <button onclick={()=>setUser({})}>LogOut</button>
        </nav>
     </div>
  ) 
}
