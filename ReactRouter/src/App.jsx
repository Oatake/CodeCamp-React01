import { useState } from 'react'
import AppRouter from './Routes/AppRouter'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <AppRouter />
       
    </>
  )
}

export default App
