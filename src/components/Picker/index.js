import usePicker from "../../Hooks/usePicker";
import style from "./styles.module.css";
import { optionPicker } from "../../utils/pickerOption";

function Picker({ color, url, id, enable }) {
  const { setIsSelection, setPickSelection, isSelection } = usePicker();

  const handlePick = (id) => {
    setIsSelection(true);
    const selectPick = optionPicker[id - 1];
    if(!isSelection) setPickSelection(selectPick);
  };
  return (
    <div
      className={style.picker}
      style={{ "--color": color || "gray" }}
      onClick={() => handlePick(id)}
      disabled
    >
      <img src={url}></img>
    </div>
  );
}

export default Picker;
