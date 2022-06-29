import React from 'react'

const Die = ( {value, isHeld} ) => {  
    const styles = {
        backgroundColor: isHeld ? "#59E391" : "#FFFFFF"
    }

    return (
        <div className='die'
            style={styles}
        >
            <h2 className='die__size'>{value}</h2>        
        </div>
    )
}

export default Die