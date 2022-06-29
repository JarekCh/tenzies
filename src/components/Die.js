import React from 'react'

const Die = ( {value, isHeld, holdDice} ) => {  
    const styles = {
        backgroundColor: isHeld ? "#59E391" : "#FFFFFF"
    }

    return (
        <div className='die'
            style={styles}
            onClick={holdDice}
        >
            <h2 className='die__size'>{value}</h2>        
        </div>
    )
}

export default Die