import { ChangeEvent } from "react";
import { FormikErrors } from "formik";

export type InputsTypes = {
  id: string;
  label?: string;
  type: string;
  value: string;
  placeholder: string;
  onChange: (
    event: ChangeEvent<HTMLInputElement>,
    payload: { value: string }
  ) => void;
  backgroundColor?: string;
  error?: FormikErrors<string>;
};
