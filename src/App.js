import React, {useEffect, useState} from 'react';
import Die from './components/Die';
import {nanoid} from "nanoid"

function App() {
  const [dices, setDices] = useState(allNewDice());      

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
    setDices(allNewDice())
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
