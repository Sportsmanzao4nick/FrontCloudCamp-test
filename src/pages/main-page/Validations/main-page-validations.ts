import { object, string } from "yup";

export const mainSchema = object({
  phone: string().required("Пожалуйста, заполните Номер телефона"),
  mail: string()
    .required("Пожалуйста, заполните e-mail")
    .matches(
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      "Некорректный домен в адресе электронной почты"
    )
    .email("Некорректный e-mail"),
});
