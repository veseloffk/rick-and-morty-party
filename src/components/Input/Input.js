import React, { useState } from "react";

import styles from "./Input.module.css";

function Input({ onChange }) {
  const [value, setValue] = useState("");

  const handleChange = ({ target: { value } }) => {
    setValue(value);
    onChange(value);
  };

  return (
    <label className={styles.input}>
      <input onChange={handleChange} value={value} />
    </label>
  );
}

export default Input;
