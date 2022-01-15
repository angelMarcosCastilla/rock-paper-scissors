import Header from "./components/Header"
import GameBoard from "./components/GameBoard"
import ProviderPicker from "./context/pickerContext"
import './App.js';
import ResultBoard from "./components/ResultsBoard";

function App() {
 
  return (
    <ProviderPicker>
      <Header/>
      <GameBoard/>
      <ResultBoard/>
    </ProviderPicker>
  );
}

export default App;
