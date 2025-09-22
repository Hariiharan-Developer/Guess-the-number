import React, { useState } from 'react'
import './App.css'
import Result from './Result'
let guess = Math.floor(Math.random()*10)+1
const App = () => {
const [number,setNumber] = useState('')


 const handleSubmit =(e)=>{
      setNumber(e.target.value)
      
    }
  return (
    <>
      <div className="container">
        <div className="content">
          <label htmlFor="num" className="label">
            {" "}
            Guess the number between 1 - 10{" "}
          </label>{" "}
          <br />
          <input type="number" id="num" onChange={handleSubmit} />{" "}
          
          <Result guess={guess} number={number} />
          <button
            className="btn btn-dark mt-3"
            onClick={() => window.location.reload()}
          >
            Refresh
          </button>
        </div>
      </div>
    </>
  );
}

export default App
