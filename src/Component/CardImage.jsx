import { useContext } from "react"
// import { mainContext } from "../Context/mainContext"
import {MainContextNew} from "../Context/mainContext";

const CardImage = () => {

  const context = useContext(MainContextNew);
  console.log("ini context", context);

  return (
    <div>
      <img src={context.data.avatar} alt="" width={200}/>
    </div>
  )
}

export default CardImage
