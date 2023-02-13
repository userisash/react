import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const greet = ["hello","world"];
  const num1 = 5;
  const num2 = 6;
  const string = "I love react";
  
  return (
    <div className="App">
      {greet[0]}{greet[1]}<br></br>
      {num1} + {num2} = {num1 + num2}<br></br>
      the string's length is {string.length};
    </div>
  )
}

export default App
