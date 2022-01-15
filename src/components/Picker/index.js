import usePicker from "../../Hooks/usePicker";
import style from "./styles.module.css";
import { optionPicker } from "../../utils/pickerOption";

function Picker({ color, url, id, enable }) {
  const { setIsSelection, setPickSelection } = usePicker();

  const handlePick = (id) => {
    setIsSelection(true);
    const selectPick = optionPicker[id - 1];
    setPickSelection(selectPick);
  };
  return (
    <div
      className={style.picker}
      style={{ "--color": color || "gray" }}
      onClick={() => handlePick(id)}
      enable="false"
    >
      <img src={url}></img>
    </div>
  );
}

export default Picker;
