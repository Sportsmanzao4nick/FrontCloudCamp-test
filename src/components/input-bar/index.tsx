import React, { useState, ChangeEvent } from "react";
import { InputsTypes } from "./types";
import styles from "./index.module.css";

function InputBar({
  id,
  label,
  type,
  placeholder,
  onChange,
  backgroundColor,
  error,
}: InputsTypes) {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    onChange(event, { value: newValue });
  };

  const inputStyle = {
    backgroundColor:
      backgroundColor === "grey"
        ? "rgba(0, 0, 0, 0.04)"
        : backgroundColor === "white"
        ? "#FFFFFF"
        : "",
  };

  return (
    <div className={styles.inputContainer}>
      <label className={styles.label}>{label}</label>
      <input
        id={id}
        className={styles.input}
        type={type}
        value={inputValue}
        placeholder={placeholder}
        onChange={handleChange}
        style={inputStyle}
      />
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
}

export default InputBar;
