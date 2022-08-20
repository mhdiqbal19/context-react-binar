import {useContext} from 'react'
import { mainContext } from '../Context/mainContext'
import { LayoutContext } from '../Context/LayoutContext'


const CardName = () => {

    const context = useContext(mainContext);
    const { nightMode, night, day } = useContext(LayoutContext); 

    console.log("nightMode", night);

    const mood = nightMode ? night : day;

  return (
    <div>
        <h1 style={{ color: mood.color }}>{context.data.name}</h1>
    </div>
  )
}

export default CardName