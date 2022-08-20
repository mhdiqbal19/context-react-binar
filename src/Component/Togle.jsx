import React from 'react'
import { LayoutContext } from '../Context/LayoutContext'
import { useContext } from 'react';

const Togle = () => {

  
  const {nightMode, handleTogle} = useContext(LayoutContext);

  console.log("handleTogle", handleTogle);
  return (
    <div>
        <button onClick={handleTogle}>
          Change to {nightMode ? 'night' : 'day'} mode
        </button>
    </div>
  )
}

export default Togle