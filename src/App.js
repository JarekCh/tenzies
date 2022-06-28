import React, {useEffect, useState} from 'react';
import Die from './components/Die'

function App() {
  const [value, setValue] = useState('1');

  function allNewDice() {
    const diceArray = []

    for(let i = 0; i <= 9; i++) {
      diceArray.push(Math.floor(Math.random() * 6) + 1)
    }
    console.log(diceArray);
  }

  return (
    <main className="main">     
      {/* Title */}
      <div className='dice__container'>
        <Die value={value} />
        <Die value={value} />
        <Die value={value} />
        <Die value={value} />
        <Die value={value} />
        <Die value={value} />
        <Die value={value} />
        <Die value={value} />
        <Die value={value} />
        <Die value={value} />
      </div>      
      <button onClick={allNewDice}>generate number</button>     
    </main>
  );
}

export default App;
