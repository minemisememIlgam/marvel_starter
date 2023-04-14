import { useState, useEffect } from "react";
import "./charInfo.scss";

import thor from "../../resources/img/thor.jpeg";

const CharInfo = () => {
  const [thor, setThor] = useState(null);
  const [thorDescription, setThorDescription] = useState(null);
  useEffect(() => {
    fetch(
      `https://gateway.marvel.com:443/v1/public/characters/1009664?apikey=27bdb1fe4071f56de731760787b2d82f`
    )
      .then((res) => res.json())
      .then((json) => {
        setThor(json.data.results[0].thumbnail.path + ".jpg");
        setThorDescription(json.data.results[0].description);
      });
  }, []);
  return (
    <div className="char__info">
      <div className="char__basics">
        <img src={thor} alt="abyss" />
        <div>
          <div className="char__info-name">thor</div>
          <div className="char__btns">
            <a href="#" className="button button__main">
              <div className="inner">homepage</div>
            </a>
            <a href="#" className="button button__secondary">
              <div className="inner">Wiki</div>
            </a>
          </div>
        </div>
      </div>
      <div className="char__descr">{thorDescription}</div>
      <div className="char__comics">Comics:</div>
      <ul className="char__comics-list">
        <li className="char__comics-item">
          All-Winners Squad: Band of Heroes (2011) #3
        </li>
        <li className="char__comics-item">Alpha Flight (1983) #50</li>
        <li className="char__comics-item">Amazing Spider-Man (1999) #503</li>
        <li className="char__comics-item">Amazing Spider-Man (1999) #504</li>
        <li className="char__comics-item">
          AMAZING SPIDER-MAN VOL. 7: BOOK OF EZEKIEL TPB (Trade Paperback)
        </li>
        <li className="char__comics-item">
          Amazing-Spider-Man: Worldwide Vol. 8 (Trade Paperback)
        </li>
        <li className="char__comics-item">
          Asgardians Of The Galaxy Vol. 2: War Of The Realms (Trade Paperback)
        </li>
        <li className="char__comics-item">Vengeance (2011) #4</li>
        <li className="char__comics-item">Avengers (1963) #1</li>
        <li className="char__comics-item">Avengers (1996) #1</li>
      </ul>
    </div>
  );
};

export default CharInfo;
