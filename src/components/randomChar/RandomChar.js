import { useEffect, useState } from "react";
import "./randomChar.scss";
import axios from "axios";
import mjolnir from "../../resources/img/mjolnir.png";

function RandomChar({ id }) {
  const [name, setName] = useState(null);
  const [description, setDescription] = useState(null);
  const [thumbnail, setThumbnail] = useState([]);
  const [homepage, setHomepage] = useState(null);
  const [wiki, setWiki] = useState(null);
  const [isLoading, setIsLoading] = useState();
  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=27bdb1fe4071f56de731760787b2d82f`
    )
      .then((res) => res.json())
      .then((json) => {
        setName(json.data.results[0].name);
        setDescription(json.data.results[0].description);
        setThumbnail(
          json.data.results[0].thumbnail.path +
            "." +
            json.data.results[0].thumbnail.extension
        );
        setHomepage(json.data.results[0].urls[0].url);
        setWiki(json.data.results[0].urls[1].url);
        setIsLoading(false);
      });
  }, [id]);

  const [count, setCount] = useState(0);

 

  return (
    <div className="randomchar">
      {isLoading ? (
        "Loading ALER GKS: DLMFFFFFFFFFFFFFFFFFFFFFFF!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
      ) : (
        <div>
          <img
            src={thumbnail}
            alt="Random character"
            className="randomchar__img"
          />
          <div className="randomchar__info">
            <p className="randomchar__name">{name}</p>
            <p className="randomchar__descr">
              {description
                ? description
                : "Sorry, we dont have information about this character"}
            </p>
            <div className="randomchar__btns">
              <a href={homepage} className="button button__main">
                <div className="inner">homepage</div>
              </a>
              <a href={wiki} className="button button__secondary">
                <div className="inner">Wiki</div>
              </a>
            </div>
          </div>
          <div className="randomchar__static">
            <p className="randomchar__title">
              Random character for today! counter {count}
              <br />
              Do you want to get to know him better?
            </p>
            <p className="randomchar__title">Or choose another one</p>
            <button className="button button__main">
              <div className="inner">try it</div>
            </button>
          </div>
        </div>
      )}
      <img src={mjolnir} alt="mjolnir" className="randomchar__decoration" />
    </div>
  );
}

export default RandomChar;
