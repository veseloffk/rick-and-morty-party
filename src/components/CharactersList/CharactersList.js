import React, { useState } from "react";

import CharacterCard from "../CharacterCard";

import styles from "./CharactersList.module.css";

function CharactersList({ characters, loading, error, onChoseCharacter }) {
  const [hideCharacters, setHideCharacters] = useState([]);

  const onCloseClick = id => setHideCharacters([...hideCharacters, id]);

  if (loading) return <p>loading</p>;
  if (error) return <p>error</p>;
  if (!characters) return <p>empty</p>;

  return (
    <ul className={styles["characters-list"]}>
      {characters
        .filter(({ id }) => !hideCharacters.includes(id))
        .map(({ name, image, id }) => (
          <li key={id}>
            <CharacterCard
              name={name}
              image={image}
              id={id}
              onCloseClick={onCloseClick}
              onClick={onChoseCharacter}
            />
          </li>
        ))}
    </ul>
  );
}

export default CharactersList;
