import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Quiz from './quiz'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Quiz/>
    </div>
  )
}

export default App
