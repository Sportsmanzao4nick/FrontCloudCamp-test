import React, { ChangeEvent, useState } from "react";
import InputMask from "react-input-mask";
import { MaskTypes } from "./types";
import styles from "./index.module.css";

function PhoneMask({ id, label, onChange, error }: MaskTypes) {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    onChange(event, { value: newValue });
  };

  return (
    <div className={styles.phoneMaskContainer}>
      <label className={styles.label}>{label}</label>
      <InputMask
        name={id}
        className={styles.inputMask}
        mask="+7 (999) 999-99-99"
        value={inputValue}
        onChange={handleChange}
        placeholder="+7 (961) 574-88-79"
      />
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
}

export default PhoneMask;
