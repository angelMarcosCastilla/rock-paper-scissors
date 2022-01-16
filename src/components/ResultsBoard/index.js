import { useEffect, useState } from "react";
import usePicker from "../../Hooks/usePicker";
import Picker from "../Picker";
import { optionPicker } from "../../utils/pickerOption";
import Button from "../Button";
import { ValidateGame } from "../../utils/validateGame";

function ResultBoard() {
  const { isSelection, pickSelection } = usePicker();
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [results, setResults] = useState("");

  useEffect(() => {
    let random = 0;
    if (isSelection) {
      const interval = setInterval(() => {
        random = Math.ceil(Math.random() * 3);
        setSelectedPlayer(optionPicker[random - 1]);
      }, 50);

      setTimeout(() => {
        clearInterval(interval);
        const winplayer = ValidateGame(pickSelection.id, random)
        setResults(winplayer)
      }, 1000);
      console.log("esperamdos")
    }
   
  }, [isSelection]);

  if (!isSelection) return null;

  return (
    <div>
      <div>
        <span>YOU SELECTED</span>
        <Picker {...pickSelection} />
      </div>
      {results && (
        <div>
          <span>{results}</span>
          <Button text="try again" />
        </div>
      )}
      <div>
        <span>COMPUTER SELECTS</span>
        <Picker {...selectedPlayer} />
      </div>{" "}
    </div>
  );
}

export default ResultBoard;
