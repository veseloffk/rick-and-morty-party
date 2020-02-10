import React from "react";

import CloseButton from "../CloseButton";

import styles from "./CharacterCard.module.css";

function CharacterCard({ name, image, id, onCloseClick, onClick }) {
  const handlCloseButtonClick = () => onCloseClick(id);
  const handelClick = () => onClick({ name, image });

  return (
    <div className={styles.container} onClick={handelClick}>
      {/* <p>{name}</p> */}
      <div className={styles.button}>
        <CloseButton onClick={handlCloseButtonClick} />
      </div>
      <img src={image} alt={name} className={styles.image} />
    </div>
  );
}

export default CharacterCard;
