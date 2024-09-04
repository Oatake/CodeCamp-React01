import { useState } from "react";
import NavBar from "./components/NavBar";
import TodoList from "./components/TodoList";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <TodoList />
    </>
  );
}

export default App;
