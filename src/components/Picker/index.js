import usePicker from "../../Hooks/usePicker";
import style from "./styles.module.css";
import { optionPicker } from "../../utils/pickerOption";

function Picker({ color, url, id, show }) {
  const { setIsSelection, setPickSelection, isSelection } = usePicker();
  const clases = ["picker"];
  if (show) clases.push("gano");

  const handlePick = (id) => {
    setIsSelection(true);

    const selectPick = optionPicker[id - 1];

    if (!isSelection) setPickSelection(selectPick);
  };
  return (
    <div
      className={clases.join(" ")}
      style={{ "--color": color || "gray" }}
      onClick={() => handlePick(id)}
    >
      <img src={url} alt="iamgen"></img>
    </div>
  );
}

export default Picker;
