import React, { useState } from 'react'
import useStore from '../Store/MyStore'

const Section3 = () => {
    const[txt,setTxt]=useState('')
    const {arr2, addArr2, delArr2}=useStore((state)=>({
        arr2 : state.arr2, 
        addArr2 : state.addArr2,
        delArr2 : state.delArr2,
    }))
    console.log(arr2)

    const handleOnChange = (e)=>{
        // console.log(e.target.value)
        setTxt(e.target.value)
    }

    const handleClickAdd = (e)=>{
        console.log(txt)
        addArr2(txt)
        
    }
    const handleDelete = (id)=>{
        console.log(id)
        delArr2(id)
    }

  return (
    <div>
        <h1>Section 3</h1>
        <input type="text" onChange={handleOnChange}/>
        <button onClick={handleClickAdd}>Add</button>
        
        {arr2.map((item,index)=>(
            <li key={index}>{item.title}<button onClick={()=>handleDelete(item.id)}>Remove</button></li>
            
        ))}
    </div>
  )
}

export default Section3