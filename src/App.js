import React, {useEffect, useState} from 'react';
import Die from './components/Die'

function App() {
  const [dices, setDices] = useState(allNewDice());  

  function allNewDice() {    
    const dicesArray = [];    

    for(let i = 0; i <= 9; i++) {
      dicesArray.push(Math.floor(Math.random() * 6) + 1)
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
       {dices.map((dice, i) => (
            <Die value={dice} key={i}/>
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
