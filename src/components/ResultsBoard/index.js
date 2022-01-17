import { useEffect, useState } from "react";
import usePicker from "../../Hooks/usePicker";
import Picker from "../Picker";
import { optionPicker } from "../../utils/pickerOption";
import Button from "../Button";
import { ValidateGame } from "../../utils/validateGame";
import { tablero } from "../../utils/tablero";

function ResultBoard() {
  const { isSelection, pickSelection } = usePicker();
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [results, setResults] = useState("");
  const { setScore, setIsSelection } = usePicker();

  useEffect(() => {
    let random = 0;
    if (isSelection) {
      const interval = setInterval(() => {
        random = Math.ceil(Math.random() * 3);
        setSelectedPlayer(optionPicker[random - 1]);
      }, 50);

      setTimeout(() => {
        clearInterval(interval);
        const winplayer = ValidateGame(pickSelection.id, random);
        setResults(winplayer);
        setScore((prevState) => prevState + tablero[winplayer]);
      }, 1000);
    }
  }, [isSelection, pickSelection.id, setScore]);

  const handleTryAgain = () => {
    setIsSelection(false);
    setResults("");
  };
  if (!isSelection) return null;

  return (
    <div>
      <div>
        <span>YOU SELECTED</span>
        <Picker {...pickSelection} show={results === "win"} />
      </div>
      {results && (
        <div>
          <span>{results}</span>
          <Button text="try again" onClick={handleTryAgain} />
        </div>
      )}
      <div>
        <span>COMPUTER SELECTS</span>
        <Picker {...selectedPlayer} show={results === "lose"} />
      </div>{" "}
    </div>
  );
}

export default ResultBoard;
