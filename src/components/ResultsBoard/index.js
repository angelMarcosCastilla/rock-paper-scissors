import { useEffect, useState } from "react";
import usePicker from "../../Hooks/usePicker";
import Picker from "../Picker";
import { optionPicker } from "../../utils/pickerOption";

function ResultBoard() {
  const { isSelection, pickSelection } = usePicker();
  const [selectedPlayer, setSelectedPlayer] = useState({});

  useEffect(() => {
    if (isSelection) {
      const interval = setInterval(() => {
        const random = Math.ceil(Math.random() * 3) - 1;
        setSelectedPlayer(optionPicker[random]);
      }, 77);

      setTimeout(() => {
        clearInterval(interval);
      }, 1000);
    }
    console.log(isSelection)

    console.log("efect");
  }, [isSelection]);

  if (!isSelection) return null;

  return (
    <div>
      <Picker {...pickSelection}  />
      <Picker {...selectedPlayer}  />
    </div>
  );
}

export default ResultBoard;
