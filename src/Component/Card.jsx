import React from 'react'
import CardImage from './CardImage'
import CardName from './CardName'
import Togle from './Togle'
import { useContext } from "react"
// import { LayoutContext } from "../Context/LayoutContext";
import {LayoutContextNew} from '../Context/LayoutContextNew'


const Card = () => {

  const { nightMode, night, day } = useContext(LayoutContextNew); 

  console.log("nightMode", nightMode);

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
