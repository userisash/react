import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import './Boxes.jsx'
import Box1 from './Boxes.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Box1></Box1>
    </div>
  )
}

export default App
