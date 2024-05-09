import React, { useState } from 'react';
import './calc.css';

const Calculator = () => {
    const[calcInput, setCalcInput] = useState("")
    const[showResult,setShowResult] = useState("")
    const handleCalcClick = (value) =>{
        console.log(value)
        setCalcInput(calcInput+value)
    }
    const performCalc = () =>{
        if(calcInput){
            let result = eval(calcInput)
            setShowResult(result)
        }else{
            setShowResult("Error")
        }
    }
    const handleClear = () =>{
        setCalcInput('')
    }
  return (
    <div className='container'>
      <h1>React Calculator</h1>
      <input type='text' value={calcInput}/>
        <div className='result'>{showResult}</div>
        <div className='calc-grid'>
            <button className='operator' onClick={() => handleCalcClick("7")}>7</button>
            <button className='operator' onClick={() => handleCalcClick("8")}>8</button>
            <button className='operator' onClick={() => handleCalcClick("9")}>9</button>
            <button className='operator' onClick={() => handleCalcClick("+")}>+</button>
            <button className='operator' onClick={() => handleCalcClick("4")}>4</button>
            <button className='operator' onClick={() => handleCalcClick("5")}>5</button>
            <button className='operator' onClick={() => handleCalcClick("6")}>6</button>
            <button className='operator' onClick={() => handleCalcClick("-")}>-</button>
            <button className='operator' onClick={() => handleCalcClick("1")}>1</button>
            <button className='operator' onClick={() => handleCalcClick("2")}>2</button>
            <button className='operator' onClick={() => handleCalcClick("3")}>3</button>
            <button className='operator' onClick={() => handleCalcClick("*")}>*</button>
            <button className='operator' onClick={() => handleClear()}>C</button>
            <button className='operator' onClick={() => handleCalcClick("0")}>0</button>
            <button className='operator' onClick={() => performCalc()}>=</button>
            <button className='operator' onClick={() => handleCalcClick("/")}>/</button>
        </div>
    </div>
  )
}

export default Calculator
