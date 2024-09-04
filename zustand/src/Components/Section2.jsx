import React, {useState} from 'react'
import useStore from '../Store/MyStore'
import { useShallow } from 'zustand/react/shallow'

const Section2 = () => {
    const [txt, setTxt] = useState('')
    const {arr, addArr}=useStore(useShallow((state)=>({
        arr:state.arr,
        addArr:state.addArr,
    })))
    console.log(arr)

    const handleChange = (e)=>{
        console.log(e.target.value)
        setTxt(e.target.value)
    }
    const handleClickAdd = ()=>{
        console.log(txt)
        addArr(txt)
    }

  console.log('Section  2')
  return (
    <div>
        <h1>Section2</h1>
        {arr.map((item, index)=>(
            <li key={index}>{item}</li>
        ))}
        <input type="text" onChange={handleChange} />
        <button onClick={handleClickAdd}>Add</button>
    </div>
  )
}

export default Section2