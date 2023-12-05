import React, { useState } from "react";
import TabContentName from "../../components/tabs/tab-content-name";
import TabContentAdvantages from "../../components/tabs/tab-content-advantages";
import ProgressBar from "../../components/progress-bar";
import styles from "./index.module.css";

function CreatePage() {
  const [step, setStep] = useState<number>(1);

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      window.location.href = "/FrontCloudCamp-test";
    }
  };

  function activeTab(step: number) {
    switch (step) {
      case 2:
        return <TabContentAdvantages />;
      default :
        return <TabContentName />;
    }
  }

return (
  <div>
    <ProgressBar progress={step} />
    {activeTab(step)}
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
