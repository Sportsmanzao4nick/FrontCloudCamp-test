import React, { ChangeEvent, useState } from "react";
import InputBar from "../../components/input-bar";
import PersonalInfo from "../../components/personal-info";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import { useAppDispatch } from "../../store/personal-phone";
import { MainTypes } from "./types";
import { mainSchema } from "./Validations/main-page-validations";
import PhoneMask from "../../components/phone-mask";
import { setPhone } from "../../store/personal-phone/personal-phone-slice";
import styles from "./index.module.css";

function MainPage() {
  const dispatch = useAppDispatch();

  const onSubmit = () => {
    const data = {
      phone,
      mail,
    };
    dispatch(setPhone(data));
  };

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      phone: "",
      mail: "",
    },
    validationSchema: mainSchema,
    onSubmit,
  });

  const { phone, mail } = values;
  console.log(values);

  return (
    <div className={styles.mainContainer}>
      <PersonalInfo
        firstName="Сергей"
        lastName="Лучко"
        linkTg="https://t.me/Sportsmanzao4nick"
        linkGit="https://github.com/Sportsmanzao4nick"
        linkCv="https://drive.google.com/file/d/1nNJQFPAtggLB1hWJWDOLYlTV0tl1smst/view?usp=sharing"
      />
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className={styles.inputsContainer}>
          <PhoneMask
            id="phone"
            label="Номер телефона"
            type="text"
            onChange={handleChange}
            value={values.phone}
            error={errors.phone}
            placeholder="+7 (961) 574-88-79"
          />
          <InputBar
            id="mail"
            label="Email"
            type="email"
            placeholder="serojaluchko@gmail.com"
            value={values.mail}
            onChange={handleChange}
            backgroundColor="grey"
            error={errors.mail}
          />
        </div>
        <NavLink to="create" type="submit">
          <button type="button" onClick={onSubmit} className={styles.buttonStart}>
            Начать
          </button>
        </NavLink>
      </form>
    </div>
  );
}

export default MainPage;
