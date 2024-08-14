import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] = useState(15)


  const AddValue = ()=>{
    console.log("clicked",Math.random())
    if(counter < 20){
      counter = counter+1
      setCounter(counter)
    }
  }

  const RemoveValue = ()=>{
    console.log("remove value clicked")
    if(counter > 0){
      setCounter(counter-1)
    }
  }

  return (
    <>
    <h1>chai aur react</h1>
    <h2>counter value: {counter}</h2>

    <button onClick={AddValue}>
    Add value {counter}</button>
    <br />
    <button onClick={RemoveValue}>
    Remove value {counter}</button>

    <p>footer: {counter}</p>
    </>
  )
}

export default App
