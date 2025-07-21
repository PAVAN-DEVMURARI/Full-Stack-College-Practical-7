import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <h1>Welcome To My Website</h1>
          <p>This is the main content area.</p>
        <Sidebar />
      </div>   
    </>
  )
}

export default App
