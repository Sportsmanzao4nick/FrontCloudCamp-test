import React from "react";
import styles from "./index.module.css";

function DotProgress() {
  return (
    <svg
      className={styles.dot}
      width="4"
      height="4"
      viewBox="0 0 4 4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="1.9999" cy="1.9999" r="1.6" fill="white" />
    </svg>
  );
}

export default DotProgress;