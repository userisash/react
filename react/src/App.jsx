import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Buttons from './Button'
import './App.css'

function App() {
  
  return (
    <div className="App">
      <Buttons text ="Important" name= "bold"/>
      <Buttons text ="Not Important"/>
    </div>
  )
}

export default App
