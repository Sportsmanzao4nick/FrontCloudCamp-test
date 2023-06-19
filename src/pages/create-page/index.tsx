import React, { useState } from "react";
import TabContentName from "../../components/tabs/tab-content-name";
import TabContentAdvantages from "../../components/tabs/tab-content-advantages";
import ProgressBar from "../../components/progress-bar";
import styles from "./index.module.css";

function CreatePage() {
  const [activeTab, setActiveTab] = useState<number>(1);

  const handleNext = () => {
    setActiveTab(activeTab + 1);
  };

  const handlePrev = () => {
    if (activeTab > 1) {
      setActiveTab(activeTab - 1);
    } else {
      window.location.href = "/FrontCloudCamp-test";
    }
  };

  return (
    <div>
      <ProgressBar progress={activeTab} />
      {activeTab === 1 && <TabContentName />}
      {activeTab === 2 && <TabContentAdvantages />}
      <div className={styles.buttonContainer}>
        <button
          type="button"
          className={styles.buttonPrev}
          onClick={handlePrev}
        >
          Назад
        </button>
        <button
          type="button"
          className={styles.buttonNext}
          onClick={handleNext}
        >
          Далее
        </button>
      </div>
    </div>
  );
}

export default CreatePage;
