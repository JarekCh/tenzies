import React, {useEffect, useState} from 'react';
import Die from './components/Die'

function App() {
  const [value, setValue] = useState('1')

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
      {/* button */}       
    </main>
  );
}

export default App;
