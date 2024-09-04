import { useState,useEffect } from 'react'

export default function UserList(props) {
    const {count} = props
    console.log('userlist run')
    
    const [data, setUser] = useState([])
    const [reload, setReload] = useState(false)

    const fetchData = async () => {
        const resp = await fetch('https://dummyjson.com/users?limit=5')
        const result = await resp.json()
        console.log(result)
        setUser(result)
    }
    
    // const checkReload = ()=>{
    //     console.log('count is' , {count})
    //     if(count %2 === 0)
    //     { 
    //         console.log('xx')
    //         setReload(prev=>!prev)
    //     }
    //     else console.log('y')
    // }

    useEffect(()=>{
        fetchData();
        console.log('useEffect01 userlist')
        return ()=>{console.log('return in useEffect02 userlist')}
    },[reload])

    // useEffect(()=>{
    //     if(count%2===0){
    //         fetchData();
    //     }
    //     console.log('useEffect02 userlist')
    // },[count])
    
    // checkReload();

  return (
    <div >
        <button className='p3 bg-lime-200' onClick={()=>setReload(prv=>!prv)}>Reload : {`${reload}`}</button>
        <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
