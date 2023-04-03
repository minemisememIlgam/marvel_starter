import { useState } from "react";
import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import Spinner from "../spinner/Spinner";
import decoration from "../../resources/img/vision.png";

const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
const App = () => {
  const [loading, setLoading] = useState(true);
  return (
    <div className="app">
      <AppHeader />
      <main>
        {{ loading } ? (
          <RandomChar id={id} setLoad={setLoading} load={loading} />
        ) : (
          <Spinner />
        )}
        <div className="char__content">
          <CharList id={id} />
          <CharInfo />
        </div>
        <img className="bg-decoration" src={decoration} alt="vision" />
      </main>
    </div>
  );
};

export default App;
