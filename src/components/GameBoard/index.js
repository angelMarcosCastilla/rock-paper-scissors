import Picker from "../Picker"
import {optionPicker} from "../../utils/pickerOption"
import style from  "./styles.module.css"
import usePicker from "../../Hooks/usePicker";

function GameBoard() {
  const {isSelection} = usePicker();

  if(isSelection) return null
  
  return (
    <main >
     <div className={style.mainGame}>
     <img className={style.bgTriangle} src="./images/bg-triangle.svg" alt=""/>   
     {
       optionPicker.map(pick => <Picker key={pick.id} {...pick}/>)
     }
     </div>
    </main>
  )
}

export default GameBoard
