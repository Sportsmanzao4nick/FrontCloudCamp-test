import React from "react";
import { ProgressBarProps } from "./types";
import DotProgress from "../dot-progress";
import CheckProgress from "../check-progress";
import cn from "classnames";
import styles from "./index.module.css";

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className={styles.bar}>
      <div className={styles.lines}>
        <div
          className={
            progress >= 2 ? cn(styles.lineActive, styles.line) : styles.line
          }
        />
        <div
          className={
            progress === 3 ? cn(styles.lineActive, styles.line) : styles.line
          }
        />
        <div className={styles.points}>
          <div className={cn(styles.onePoint, styles.onePointActive)}>
            {progress > 1 ? <CheckProgress /> : <DotProgress />}
          </div>
          <div
            className={
              progress > 1
                ? cn(styles.onePointActive, styles.onePoint)
                : styles.onePoint
            }
          >
            {progress > 2 ? (
              <CheckProgress />
            ) : progress === 1 ? (
              <div className={styles.none} />
            ) : (
              <DotProgress />
            )}
          </div>
          <div
            className={
              progress === 3
                ? cn(styles.onePointActive, styles.onePoint)
                : styles.onePoint
            }
          >
            {progress === 3 ? <DotProgress /> : <div className={styles.none} />}
          </div>
        </div>
      </div>
      <div className={styles.numbers}>
        <div className={styles.number}>1</div>
        <div className={styles.number}>2</div>
        <div className={styles.number}>3</div>
      </div>
    </div>
  );
};

export default ProgressBar;