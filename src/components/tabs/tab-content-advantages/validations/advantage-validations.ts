import {array, object, string} from "yup";

export const advantageSchema = object({
  advantages: array()
    .of(
      string().matches(
        /^[a-zA-Zа-яА-Я\s]+$/,
        "Преимущество может содержать только буквы"
      )
    )
    .required("Необходимо добавить хотя бы одно преимущество"),
});