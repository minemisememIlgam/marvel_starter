import { useEffect, useState } from "react";
import "./randomChar.scss";
import thor from "../../resources/img/thor.jpeg";
import mjolnir from "../../resources/img/mjolnir.png";
import MarvelService from "../../services/MarvelService";

function RandomChar() {
  const [name, setName] = useState(null);
  const [description, setDescription] = useState(null);
  const [thumbnail, setThumbnail] = useState([]);
  const [homepage, setHomepage] = useState(null);
  const [wiki, setWiki] = useState(null);
  useEffect(() => {
    fetch(
      "https://gateway.marvel.com:443/v1/public/characters/1011196?apikey=27bdb1fe4071f56de731760787b2d82f"
    )
      .then((res) => res.json())
      .then((json) => {
        setName(json.data.results[0].name);
        setDescription(json.data.results[0].description);
        setThumbnail(json.data.results[0].thumbnail.path + ".jpg");
        setHomepage(json.data.results[0].urls[0].url);
        setWiki(json.data.results[0].urls[1].url);
      });
  }, []);

  return (
    <div className="randomchar">
      <div className="randomchar__block">
        <img
          src={thumbnail}
          alt="Random character"
          className="randomchar__img"
        />
        <div className="randomchar__info">
          <p className="randomchar__name">{name}</p>
          <p className="randomchar__descr">{description}</p>
          <div className="randomchar__btns">
            <a href="#" className="button button__main">
              <div className={homepage}>homepage</div>
            </a>
            <a href="#" className="button button__secondary">
              <div className={wiki}>Wiki</div>
            </a>
          </div>
        </div>
      </div>
      <div className="randomchar__static">
        <p className="randomchar__title">
          Random character for today!
          <br />
          Do you want to get to know him better?
        </p>
        <p className="randomchar__title">Or choose another one</p>
        <button className="button button__main">
          <div className="inner">try it</div>
        </button>
        <img src={mjolnir} alt="mjolnir" className="randomchar__decoration" />
      </div>
    </div>
  );
}

export default RandomChar;
