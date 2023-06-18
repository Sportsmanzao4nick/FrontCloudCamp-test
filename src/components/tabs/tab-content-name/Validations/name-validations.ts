import { object, string } from "yup";

export const userSchema = object({
  nickname: string()
    .required("Пожалуйста, заполните поле Nickname")
    .max(30, "Максимальная длина никнейма - 30 символов")
    .matches(
      /^[a-zA-Zа-яА-Я0-9]+$/,
      "Никнейм может содержать только буквы и цифры"
    ),
  name: string()
    .required("Пожалуйста, заполните поле Name")
    .max(50, "Максимальная длина имени - 50 символов")
    .matches(/^[a-zA-Zа-яА-Я]+$/, "Имя может содержать только буквы"),
  surname: string()
    .required("Пожалуйста, заполните поле Surname")
    .max(50, "Максимальная длина фамилии - 50 символов")
    .matches(/^[a-zA-Zа-яА-Я]+$/, "Фамилия может содержать только буквы"),
});
