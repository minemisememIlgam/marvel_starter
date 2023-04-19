import { useState, useEffect } from "react";
import "./charInfo.scss";

import thor from "../../resources/img/thor.jpeg";

const CharInfo = ({ selectedCharacters }) => {
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
    <div>
      {selectedCharacters ? (
        <div>
          <img src={selectedCharacters.thumbnail} width={150} height={150} />
          <p> Selected character is {selectedCharacters.name} </p>
          <p> {selectedCharacters.description} </p>
        </div>
      ) : (
        <p> Choose an character </p>
      )}
    </div>
  );
};

export default CharInfo;
