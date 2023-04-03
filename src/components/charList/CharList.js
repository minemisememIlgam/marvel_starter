import "./charList.scss";
import { useState } from "react";
import { useEffect } from "react";
import abyss from "../../resources/img/abyss.jpg";

import MarvelService from "../../services/MarvelService";
const CharList = ({ id }) => {
  const [char, setChar] = useState();
  const [thumbnail, setThumbnail] = useState([]);
  useEffect(() => {
    fetch(
      `https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=27bdb1fe4071f56de731760787b2d82f`
    )
      .then((res) => res.json)
      .then((json) => {
        setChar(json.data.results[0].name);
        setThumbnail(
          json.data.results[0].thumbnail.path +
            "." +
            json.data.results[0].thumbnail.extension
        );
      });
  }, []);
  return (
    <div className="char__list">
      <ul className="char__grid">
        <li className="char__item">
          <img src={thumbnail} alt="abyss" />
          <div className="char__name">Abyss</div>
        </li>
        <li className="char__item char__item_selected">
          <img src={abyss} alt="abyss" />
          <div className="char__name">{char}</div>
        </li>
        <li className="char__item">
          <img src={abyss} alt="abyss" />
          <div className="char__name">Abyss</div>
        </li>
        <li className="char__item">
          <img src={abyss} alt="abyss" />
          <div className="char__name">Abyss</div>
        </li>
        <li className="char__item">
          <img src={abyss} alt="abyss" />
          <div className="char__name">Abyss</div>
        </li>
        <li className="char__item">
          <img src={abyss} alt="abyss" />
          <div className="char__name">Abyss</div>
        </li>
        <li className="char__item">
          <img src={abyss} alt="abyss" />
          <div className="char__name">Abyss</div>
        </li>
        <li className="char__item">
          <img src={abyss} alt="abyss" />
          <div className="char__name">Abyss</div>
        </li>
        <li className="char__item">
          <img src={abyss} alt="abyss" />
          <div className="char__name">Abyss</div>
        </li>
      </ul>
      <button className="button button__main button__long">
        <div className="inner">load more</div>
      </button>
    </div>
  );
};

export default CharList;
