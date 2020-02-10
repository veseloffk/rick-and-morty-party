import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import debounce from "lodash/debounce";

import Input from "../Input";
import CharactersList from "../CharactersList";
import Party from "../Party";

import { GET_CHARACTERS } from "../../api/getCharactrers";

import styles from "./MainPage.module.css";

function MainPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [partyCharacters, setPartyCharacters] = useState({
    rick: "",
    morty: ""
  });

  const { loading, error, data = {} } = useQuery(GET_CHARACTERS, {
    variables: { name: searchQuery }
  });

  const onInputChange = debounce(value => {
    if (value && value.length > 2) {
      setSearchQuery(value);
    }
  }, 300);

  const onChoseCharacter = ({ name: characterName, image }) => {
    if (characterName.toUpperCase().includes("RICK")) {
      setPartyCharacters({ ...partyCharacters, rick: image });
    } else if (characterName.toUpperCase().includes("MORTY")) {
      setPartyCharacters({ ...partyCharacters, morty: image });
    }
  };

  const { characters: { results } = {} } = data;

  return (
    <div className={styles.wrapper}>
      <div className={styles.inputWrapper}>
        <Input onChange={onInputChange} />
      </div>
      <div className={styles.charactersWrapper}>
        <CharactersList
          characters={results}
          loading={loading}
          error={error}
          onChoseCharacter={onChoseCharacter}
        />
      </div>
      <div>
        <Party rick={partyCharacters.rick} morty={partyCharacters.morty} />
      </div>
    </div>
  );
}

export default MainPage;
