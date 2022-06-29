import React, {useEffect, useState} from 'react';
import Die from './components/Die';
import {nanoid} from "nanoid"

function App() {
  const [dices, setDices] = useState(allNewDice());      
  console.log("🚀 ~ file: App.js ~ line 7 ~ App ~ dices", dices)

  function allNewDice() {    
    const dicesArray = [];    

    for(let i = 0; i <= 9; i++) {
      dicesArray.push({
        id: nanoid(),
        value: Math.floor(Math.random() * 6) + 1,
        isHeld: false
      })
    }
    
    return dicesArray;
  }  

  function rollDice() {
    setDices((prevState) => {
      return prevState.map(dice =>{
        return dice.isHeld ? dice : {...dice, value: Math.floor(Math.random() * 6) + 1}
      })
    })
  }

  function holdDice(id) {
    setDices((prevState) => {
      return prevState.map((dice) => {
        return dice.id === id ? {...dice, isHeld: !dice.isHeld} : dice
      })
    })    
  }

  return (
    <main className="main">     
      {/* Title */}
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
        <h2>Roll</h2>  
      </button>     
    </main>
  );
}

export default App;
