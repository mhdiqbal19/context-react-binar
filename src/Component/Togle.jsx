import React from 'react'
// import { LayoutContext } from '../Context/LayoutContext'
import { LayoutContextNew } from '../Context/LayoutContextNew';
import { useContext } from 'react';

const Togle = () => {

  const {nightMode, handleTogle} = useContext(LayoutContextNew);

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