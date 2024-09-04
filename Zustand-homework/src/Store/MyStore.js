import React from 'react'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const myStorage = (set)=>({
  tasks : [],
  addTask : (newTask)=>set((state)=>({tasks: [...state.tasks, newTask]})),
  delTask : (delTaskId)=>set((state)=>({tasks : state.tasks.filter((item,index)=>(index!==delTaskId))}))
})


const persitItem = {
  name : "myStorage",
  getStorage : ()=>localStorage,
  partialize : (state)=>({
    tasks : state.tasks
  })
}
const storage = create(persist(myStorage, persitItem))

export default storage