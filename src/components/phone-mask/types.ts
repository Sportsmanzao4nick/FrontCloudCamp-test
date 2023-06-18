import { ChangeEvent } from "react";
import { FormikErrors } from "formik";

export type MaskTypes = {
  id: string;
  label: string;
  type: string;
  value: string;
  placeholder: string;
  onChange: (
    event: ChangeEvent<HTMLInputElement>,
    payload: { value: string }
  ) => void;
  error?: FormikErrors<string>;
};
