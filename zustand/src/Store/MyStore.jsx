//Step 1 create a store
import axios from "axios";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const myStore = (set) => ({
  fname: "thitiwut",
  lname: "ekwisit",
  value: 0,
  setName: (newValue) => set({ fname: newValue }), //call set function
  incNum: () => set((state) => ({ value: state.value + 1 })),
  decNum: () => set((state) => ({ value: state.value - 1 })),

  //Todo Section2 Array
  arr: ["Js", "React", "NodeJS"],
  addArr: (newValue) =>
    set((state) => ({
      arr: [...state.arr, newValue],
    })),

  //Todo Section3 array_obj
  arr2: [
    { id: 1, title: "work1" },
    { id: 2, title: "work2" },
  ],
  addArr2: (newValue) =>
    set((state) => ({ arr2: [...state.arr2, { id: 3, title: newValue }] })),

  delArr2: (id) => set((state)=>({
    arr2:state.arr2.filter((item,index)=>item.id!==id)
  })),

   //TODO section4
   data:[],
   isLoading: false,
   error:false,
   errorMsg:'',
   getData:async ()=>{
    try{    //code
        set({isLoading:true,errorMsg:"",error:false})
        const resp = await axios.get('https://jsonplaceholder.typicode.com/users')
        set({isLoading:false,data:resp.data})
    }
    catch(err){  //error
        set({isLoading:false,error:true,errorMsg:err.message})
    }
   }
});


// const useStore = create(myStore);
// const useStore = create(()=>({fname : "thitiwut"}))
/* Done for create store */

//Persist session
const usePersist = {
    name : 'Tam-store',
    getStorage : ()=>localStorage,   //เก็บทั้งหมด
    partialize : (state)=>({
        arr : state.arr,
        arr2 : state.arr2
    })
}
const useStore = create(persist(myStore,usePersist));

export default useStore;
