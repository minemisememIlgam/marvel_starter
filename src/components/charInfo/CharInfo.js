import { useState, useEffect } from "react";
import "./charInfo.scss";

import thor from "../../resources/img/thor.jpeg";

const CharInfo = ({ selectChar }) => {
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
      {selectChar ? (
        <div>
          <h2>{selectChar}</h2>
          <p>Description of {selectChar}</p>
        </div>
      ) : (
        <p>Select a character to see more information</p>
      )}
    </div>
  );
};

export default CharInfo;
