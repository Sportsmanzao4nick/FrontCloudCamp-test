import { FormikErrors } from "formik";
import { ChangeEvent } from "react";

export type SelectTypes = {
  id: string;
  label: string;
  value: string;
  placeholder: string;
  onSelectChange: (
    event: ChangeEvent<HTMLSelectElement>,
    payload: { value: string }
  ) => void;
  error?: FormikErrors<string>;
};
