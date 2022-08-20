import React from 'react'
import CardImage from './CardImage'
import CardName from './CardName'
import Togle from './Togle'
import { useContext } from "react"
import { LayoutContext } from "../Context/LayoutContext";


const Card = () => {
  
  const { nightMode, night, day } = useContext(LayoutContext); 

  console.log("nightMode", night);

  const mood = nightMode ? night : day;
  return (
    <div  style={{ background: mood.background }}>
      <CardName/>
      <CardImage/>
      <Togle/>
    </div>
  )
}

export default Card
