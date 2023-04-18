import { useState } from "react";
import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";

import decoration from "../../resources/img/vision.png";

const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
const App = () => {
  const [selectedChar, setSelectedChar] = useState(null);
  const handleCharClick = (char) => {
    setSelectedChar(char);
  };

  return (
    <div className="app">
      <AppHeader />
      <main>
        <RandomChar id={id} />
        <div className="char__content">
          <CharList id={id} onCharClick = {handleCharClick} />
          <CharInfo selectChar = {selectedChar} />
        </div>
        <img className="bg-decoration" src={decoration} alt="vision" />
      </main>
    </div>
  );
};

export default App;
