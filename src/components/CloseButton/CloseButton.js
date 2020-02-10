import React from "react";

import styles from "./CloseButton.module.css";

function CloseButton({ onClick }) {
  return (
    <button className={styles.button} onClick={onClick}>
      <div className={styles.close} />
    </button>
  );
}

export default CloseButton;
