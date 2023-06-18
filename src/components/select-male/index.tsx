import React, { useState, ChangeEvent } from "react";
import { SelectTypes } from "./types";
import styles from "./index.module.css";

function SelectMale({
  id,
  label,
  value,
  placeholder,
  onSelectChange,
  error,
}: SelectTypes) {
  const [inputValue, setInputValue] = useState("");
  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    onSelectChange(event, { value: newValue });
  };

  return (
    <div className={styles.selectContainer}>
      <label className={styles.label}>{label}</label>
      <select
        className={styles.select}
        name={id}
        onChange={handleSelectChange}
        value={inputValue}
      >
        <option className={styles.optionSelect} value="select">
          Не выбрано
        </option>
        <option className={styles.optionSelect} value="man">
          man
        </option>
        <option className={styles.optionSelect} value="woman">
          woman
        </option>
      </select>
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
}

export default SelectMale;
