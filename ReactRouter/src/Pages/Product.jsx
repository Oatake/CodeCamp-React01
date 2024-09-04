import React, {useEffect, useState} from 'react'
import { useLocation , useParams } from 'react-router-dom'

export default function Product() {
    const location = useLocation()
    const param = useParams()

    const [data,setData] = useState({})
    useEffect(()=>{
        const fetchProduct = async () =>{
            const resp = await fetch(`https://dummyjson.com/products/${param.id}`)
            const result = await resp.json()
            setData(result)
        }
        fetchProduct()
    },[]
    )
  return (
    <div>
        <h1 className='text-4xl'>Product Page</h1>
        <hr />
        <p>Use location</p>
        <pre>{JSON.stringify(location,null,2)}</pre>
        <p>You are in {location.pathname}</p>
        <hr />
        <p>Use Param</p>
        <pre>{JSON.stringify(param,null,2)}</pre>
        <p>You are in {param.id}</p>
        <hr />
        <p>Product Data</p>
        <pre>{JSON.stringify(data,null,2)}</pre>
    </div>
  )
}
