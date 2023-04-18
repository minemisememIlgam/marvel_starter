import "./charList.scss";
import { useState } from "react";
import { useEffect } from "react";
import image1 from "../../resources/img/image1.png";
const CharList = ({ id, onCharClick }) => {
  const [characterIds, setCharacterIds] = useState([]);
  const handleImageClick = (char) => {
    onCharClick(char);
  };
  useEffect(() => {
    fetch(
      "https://gateway.marvel.com:443/v1/public/characters?apikey=27bdb1fe4071f56de731760787b2d82f"
    )
      .then((response) => response.json())
      .then((json) => {
        const ids = json.data.results.map((result) => result.id);
        setCharacterIds(ids.slice(0, 5));
      });
  }, []);

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    Promise.all(
      characterIds.map((id) =>
        fetch(
          `https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=27bdb1fe4071f56de731760787b2d82f`
        ).then((response) => response.json())
      )
    ).then((data) => {
      setCharacters(data);
    });
  }, [characterIds]);

  return (
    <div className="char__list">
      <img
        src={image1}
        alt="Char 1"
        onClick={() => handleImageClick("Char 1")}
      />

      <ul className="char__grid">
        {characters.map((character) => (
          <li className="char__item" key={character.data.results[0].id}>
            <img
              src={character.data.results[0].thumbnail.path + `.jpg`}
              alt={character.data.results[0].name}
            />
            <div className="char__name">{character.data.results[0].name}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharList;
