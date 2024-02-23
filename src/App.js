import { useState } from "react";
import "./App.css";
import TheDice from "./components/TheDice/TheDice";

function App() {
  const [diceNumber, setDiceNumber] = useState(0);

  function handlerClick() {
    const randomNum = Math.floor(Math.random() * (6 - 1 + 1) + 1);

    if (randomNum === diceNumber) {
      handlerClick();
    } else {
      setDiceNumber(randomNum);
    }
  }

  return (
    <div className="App">
      <h1 className="title">Игральная кость</h1>
      <button onClick={handlerClick} className="btn-roll">
        {diceNumber ? "Кинуть еще раз" : "Кинуть кость"}
      </button>
      <TheDice num={diceNumber} />
    </div>
  );
}

export default App;
