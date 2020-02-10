import React from "react";

import styles from "./Party.module.css";

function Party({ rick, morty }) {
  return (
    <div className={styles.party}>
      <h2 className={styles.title}>PARTY</h2>
      <div className={styles.wrapper}>
        <div className={styles.character}>
          <div className={styles.characterName}>RICK</div>
          {rick && <img src={rick} alt="rick" />}
        </div>
        <div className={styles.character}>
          <div className={styles.characterName}>MORTY</div>
          {morty && <img src={morty} alt="morty" />}
        </div>
      </div>
    </div>
  );
}

export default Party;
