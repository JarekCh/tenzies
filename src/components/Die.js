import React from 'react'

const Die = ( {value} ) => {    
  return (
    <div className='die'>
        <h2 className='die__size'>{value}</h2>        
    </div>
  )
}

export default Die