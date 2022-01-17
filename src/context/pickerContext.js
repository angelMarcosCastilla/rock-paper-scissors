import { createContext, useState } from "react";

const PickerContext = createContext();

function ProviderPicker({ children }) {
  const [isSelection, setIsSelection] = useState(false);
  const [pickSelection, setPickSelection] = useState(false);
  const [score, setScore] = useState(0);

  const data = {
    isSelection,
    setIsSelection,
    setPickSelection,
    pickSelection,
    score,
    setScore
  };
  return (
    <PickerContext.Provider value={data}>{children}</PickerContext.Provider>
  );
}

export { PickerContext };

export default ProviderPicker;
