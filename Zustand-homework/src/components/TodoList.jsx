import React, { useState } from "react";
import storage from "../Store/MyStore";
import { AiFillCalendar } from "react-icons/ai";
import Toast, {toast} from "./Toast";

function TodoList() {
  const [task, setTask] = useState("");
  const data = storage((state) => ({
    tasks: state.tasks,
    addTask: state.addTask,
    delTask: state.delTask,
  }));
  const { tasks, addTask, delTask } = data;
  console.log("data is " , data)

  const hdlOnChange = (e) => {
    // console.log(e.target.value)
    setTask(e.target.value);
    console.log(e);
  };

  const hdlOnClickAdd = (e) => {
    console.log(task);
    //submit task
    addTask(task);
    console.log("task are ", tasks);
  };

  const hdlOnClickDel = (index) => {
    console.log("click");
    delTask(index);
    toast("successful delete : so easy !");
  };

  return (
    <div>
      <Toast />
      <h1 className="items-center flex justify-center font-bold">Todo List </h1>
      <p>you have enterd : {task}</p>
      <input
        onChange={hdlOnChange}
        type="text"
        placeholder="Type here"
        class="input input-bordered w-full max-w-xs mr-4"
      />
      <button onClick={hdlOnClickAdd} class="btn btn-outline btn-success">
        Add
      </button>
      {console.log("re rendering")}
      <ul className="gap-10">
        {tasks.map((item, index) => (
          <div className="flex flex-row justify-start gap-4 items-center">
            <li key={index}>{item}</li>
            <button
              onClick={() => hdlOnClickDel(index)}
              class="btn btn-outline btn-info"
            >
              <AiFillCalendar />
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
