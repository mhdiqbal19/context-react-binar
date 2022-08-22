import {useContext} from 'react'
// import { LayoutContext } from '../Context/LayoutContext'
import { LayoutContextNew } from '../Context/LayoutContextNew';
import {MainContextNew} from "../Context/mainContext";


const CardName = () => {

    const context = useContext(MainContextNew);
    const { nightMode, night, day } = useContext(LayoutContextNew); 

    console.log("nightMode", night);

    const mood = nightMode ? night : day;

  return (
    <div>
        <h1 style={{ color: mood.color }}>{context.data.name}</h1>
    </div>
  )
}

export default CardName