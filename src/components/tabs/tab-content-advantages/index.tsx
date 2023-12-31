import React, { ChangeEvent, useState } from "react";
import Tab from "../../tab";
import InputBar from "../../input-bar";
import { useAppDispatch } from "../../../store/personal-name";
import { setName } from "../../../store/personal-name/personal-name-slice";
import { useFormik } from "formik";
import {advantageSchema} from "./validations/advantage-validations";
import styles from "./index.module.css"

function TabContentAdvantages() {
  const dispatch = useAppDispatch();

  const onSubmit = () => {
    const data = {
      advantages,
    };
    dispatch(setName(advantages));
  };

  const handleFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    handleChange(event);
    onSubmit();
  };

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    handleChange(event);
    onSubmit();
  };

  const { values, errors, handleChange, handleSubmit, setFieldValue } =
    useFormik({
      initialValues: {
        advantages: [],
      },
      validationSchema: advantageSchema,
      onSubmit,
    });

  const { advantages } = values;

  const handleAddAdvantages = () => {
    setFieldValue("advantages", [...advantages, ""]);
  };

  const handleRemoveAdvantages = (index: number) => {
    const updatedAdvantages = advantages.filter((_, i) => i !== index);
    setFieldValue("advantages", updatedAdvantages);
  };

  const handleAdvantagesChange = (index: number, value: string) => {
    const updatedAdvantages: string[] = [...advantages];
    updatedAdvantages[index] = value;
    setFieldValue("advantages", updatedAdvantages);
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <div className={styles.createContainer}>
        <label className={styles.label}>Advantages</label>
        {advantages.map((advantage, index) => (
          <div key={index} className={styles.input}>
            <InputBar
              id={`advantage-${index}`}
              type="text"
              placeholder="Enter advantage"
              value={advantage}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                handleAdvantagesChange(index, event.target.value)
              }
              backgroundColor="white"
              error={errors.advantages && errors.advantages[index]}
            />
            {index >= 0 && (
              <button
                type="button"
                className={styles.buttonRemove}
                onClick={() => handleRemoveAdvantages(index)}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.4551 15.5498L2.5551 6.54975C2.52566 6.25541 2.75681 6 3.05262 6H12.9476C13.2434 6 13.4746 6.25541 13.4451 6.54975L12.5451 15.5498C12.5196 15.8054 12.3045 16 12.0476 16H3.95262C3.69574 16 3.48066 15.8054 3.4551 15.5498Z"
                    fill="#CCCCCC"
                  />
                  <path
                    d="M15.0001 4H1.00012C0.72398 4 0.500122 3.77614 0.500122 3.5V2.5C0.500122 2.22386 0.72398 2 1.00012 2H3.34873C3.44745 2 3.54395 1.97078 3.62608 1.91603L6.37416 0.0839749C6.45629 0.029219 6.5528 0 6.65151 0H9.34873C9.44745 0 9.54395 0.029219 9.62608 0.0839748L12.3742 1.91603C12.4563 1.97078 12.5528 2 12.6515 2H15.0001C15.2763 2 15.5001 2.22386 15.5001 2.5V3.5C15.5001 3.77614 15.2763 4 15.0001 4Z"
                    fill="#CCCCCC"
                  />
                </svg>
              </button>
            )}
          </div>
        ))}
        <div>
          <button type="button" onClick={handleAddAdvantages} className={styles.buttonCreate}>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.99998 1C6.99998 0.447715 6.55226 0 5.99998 0C5.44769 0 4.99998 0.447715 4.99998 1V4.99998H1C0.447716 4.99998 0 5.44769 0 5.99998C0 6.55226 0.447715 6.99998 1 6.99998H4.99998V11C4.99998 11.5522 5.44769 12 5.99998 12C6.55226 12 6.99998 11.5522 6.99998 11V6.99998H11C11.5522 6.99998 12 6.55226 12 5.99998C12 5.44769 11.5522 4.99998 11 4.99998H6.99998V1Z"
                fill="#5558FA"
              />
            </svg>
          </button>
        </div>
      </div>
    </form>
  );
}

export default TabContentAdvantages;
