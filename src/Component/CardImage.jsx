import { useContext } from "react"
import { mainContext } from "../Context/mainContext"

const CardImage = () => {

  const context = useContext(mainContext);

  return (
    <div>
      <img src={context.data.avatar} alt="" width={200}/>
    </div>
  )
}

export default CardImage
