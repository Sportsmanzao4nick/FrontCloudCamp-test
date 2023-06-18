import React from "react";
import { PersonTypes } from "./types";
import SocialLink from "../social-link";
import styles from "./index.module.css";

function PersonalInfo({
  firstName,
  lastName,
  linkTg,
  linkGit,
  linkCv,
}: PersonTypes) {
  return (
    <div className={styles.personContainer}>
      <div className={styles.avatar}>
        {firstName[0]}
        {lastName[0]}
      </div>
      <div className={styles.personData}>
        <h2 className={styles.personName}>
          {firstName} {lastName}
        </h2>
        <div className={styles.personLinks}>
          <SocialLink linkName="Telegram " linkRef={linkTg} />
          <SocialLink linkName="Github " linkRef={linkGit} />
          <SocialLink linkName="Resume " linkRef={linkCv} />
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;