import React, { ChangeEvent } from "react";
import InputBar from "../../input-bar";
import SelectMale from "../../select-male";
import { useFormik } from "formik";
import { userSchema } from "./Validations/name-validations";
import { useAppDispatch } from "../../../store/personal-name";
import { setName } from "../../../store/personal-name/personal-name-slice";import styles from "./index.module.css";


function TabContentName() {
  const dispatch = useAppDispatch();

  const onSubmit = () => {
    const data = {
      nickname,
      name,
      surname,
      male,
    };
    dispatch(setName(data));
  };

  const handleFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    handleChange(event);
    onSubmit();
  };

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    handleChange(event);
    onSubmit();
  };

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      nickname: "",
      name: "",
      surname: "",
      male: "",
    },
    validationSchema: userSchema,
    onSubmit,
  });

  const { nickname, name, surname, male } = values;

  return (
    <form onSubmit={handleSubmit} autoComplete="off" typeof="submit">
      <div className={styles.createContainer}>
        <InputBar
          id="nickname"
          label="Nickname"
          type="text"
          placeholder="Иван3125"
          value={values.nickname}
          onChange={handleFieldChange}
          backgroundColor="white"
          error={errors.nickname}
        />
        <InputBar
          id="name"
          label="Name"
          type="text"
          placeholder="Иван"
          value={values.name}
          onChange={handleFieldChange}
          backgroundColor="white"
          error={errors.name}
        />
        <InputBar
          id="surname"
          label="Surname"
          type="text"
          placeholder="Иванов"
          value={values.surname}
          onChange={handleFieldChange}
          backgroundColor="white"
          error={errors.surname}
        />
        <SelectMale
          id="sex"
          label="Sex"
          placeholder="Не выбрано"
          onSelectChange={handleSelectChange}
          value={values.male}
          error={errors.male}
        />
      </div>
    </form>
  );
}

export default TabContentName;
