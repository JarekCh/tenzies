import React, {useEffect, useState} from 'react';
import Die from './components/Die';
import {nanoid} from "nanoid"
import Confetti from './components/Confetti';

function App() {
  const [dices, setDices] = useState(allNewDice());      
  const [tenzies, setTenzies] = useState(false);
  console.log("🚀 ~ file: App.js ~ line 9 ~ App ~ tenzies", tenzies)

  useEffect(() => {
    const allHeld = dices.every(die => die.isHeld)
    const firstValue = dices[0].value
    const allSameValue = dices.every(die => die.value === firstValue)
    if (allHeld && allSameValue) {
        setTenzies(true)
        console.log("You won!")  
    }  
  }, [dices])

  function generateNewDie() {
    return {
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid()
    }
  }  

  function allNewDice() {    
    const dicesArray = [];    

    for(let i = 0; i <= 9; i++) {
      dicesArray.push(generateNewDie())
    }
    
    return dicesArray;
  }  

  function rollDice() {
    if(tenzies) {
      setTenzies(prevState => !prevState);
      setDices(allNewDice());      
    } else {
    setDices((prevState) => {
        return prevState.map(dice =>{
          return dice.isHeld ?
          dice : generateNewDie()
        })
      })
    }
  }

  function holdDice(id) {
    setDices((prevState) => {
      return prevState.map((dice) => {
        return dice.id === id ? 
        {...dice, isHeld: !dice.isHeld} : dice
      })
    }) 
  }

  return (
    <main className="main">     
      {tenzies && <Confetti />}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same.
         Click each die to freeze it at its current value between rolls.
      </p>
      <div className='dice__container'>
       {dices.map((dice) => (
            <Die 
              value={dice.value} 
              key={dice.id}
              isHeld={dice.isHeld}
              holdDice={() => holdDice(dice.id)}
            />
          )
        )}  
      </div>      
      <button className='roll__btn' onClick={rollDice}>
        <h2>{tenzies ? "New Game" : "Roll"}</h2>  
      </button>     
    </main>
  );
}

export default App;
