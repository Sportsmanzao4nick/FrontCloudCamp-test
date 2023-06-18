import React from "react";
import { Data } from "./types";
import styles from "./index.module.css";

function Page({ children }: Data) {
  return (
    <div>
      <div className={styles.page}>{children}</div>
    </div>
  );
}

export default Page;