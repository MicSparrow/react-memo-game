import { useState, useEffect } from "react";

import Display from "./components/Display";
import GameData from "./components/GameData";
import Header from "./components/Header";
import "./styles.css";

export default function App(props) {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clicked, setClicked] = useState([]);

  useEffect(() => {
    if (score >= bestScore) {
      setBestScore(score);
    }
  }, [score, bestScore]);

  function imageClicked(event) {
    //console.log(event.target.alt);
    console.log(event.target.dataset.id);
    setClicked(event.target.dataset.id);
    shuffle(GameData);
    if (clicked.includes(event.target.dataset.id) === false) {
      setScore(score + 1);
      setClicked([...clicked, event.target.dataset.id]);
    } else {
      setScore(0);
      setClicked([]);
    }
  }

  function shuffle(GameData) {
    let currentIndex = GameData.length;
    let randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [GameData[currentIndex], GameData[randomIndex]] = [
        GameData[randomIndex],
        GameData[currentIndex]
      ];
    }

    return GameData;
  }

  function resetGame() {
    shuffle(GameData);
    setScore(0);
    setBestScore(0);
    setClicked([]);
  }

  return (
    <div>
      <Header score={score} bestScore={bestScore} />
      {bestScore === 12 ? (
        <div className="button-div">
          <p>Congratulations! You beat the game!</p>
          <button onClick={resetGame}>Play again?</button>
        </div>
      ) : (
        <p>
          Get points by clicking on an image but don't click on any more than
          once!
        </p>
      )}
      <Display onClick={imageClicked} items={GameData} />
    </div>
  );
}
