import "./charList.scss";
import { useState } from "react";
import { useEffect } from "react";
const CharList = ({ id, wasClickedOnCharacter }) => {
  const [characterIds, setCharacterIds] = useState([]);
  const limit = 30;
  const totalCharacters = 1493;
  const wasClickedOnImageCharacter = (characterss) => {
    wasClickedOnCharacter(characterss);
  };
  const offset = Math.floor(Math.random() * (totalCharacters - limit));
  const url = `https://gateway.marvel.com:443/v1/public/characters?apikey=27bdb1fe4071f56de731760787b2d82f&limit=${limit}&offset=${offset}`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        const ids = json.data.results.map((result) => result.id);
        setCharacterIds(ids.slice(0, 30));
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
      <ul className="char__grid">
        {characters.map((character) => (
          <li className="char__item" key={character.data.results[0].id}>
            <img
              src={character.data.results[0].thumbnail.path + `.jpg`}
              alt={character.data.results[0].name}
              onClick={() =>
                wasClickedOnImageCharacter({
                  name: character.data.results[0].name,
                  description: character.data.results[0].description,
                })
              }
            />
            <div className="char__name">{character.data.results[0].name}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharList;
