import React from 'react'
import { useState } from 'react'
import { createContext } from 'react';

export const LayoutContextNew = createContext();

const LayoutContextNewProvider = ({children}) => {
    const [nightMode, setNightMode] = useState(false);
    const [day, setDay] = useState({
        color: "#000",
        background: "red"
    })
    const [night, setNight] = useState({
        color: "#fff",
        background: "#000"
    })

    const handleTogle = () => {
        setNightMode(!nightMode);
    }

    console.log(setDay)
    console.log(setNight)

  return (
    <div>
    <LayoutContextNew.Provider value={{nightMode, night, day, handleTogle}}>
        {children}
    </LayoutContextNew.Provider>
    </div>
  )
}

export default LayoutContextNewProvider