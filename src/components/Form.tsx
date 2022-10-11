import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { IFormProps } from "../types";

const Form = ({ fields }: IFormProps) => {
  console.log(Object.entries(fields));
  const formFields = Object.entries(fields);

  const state = useSelector((state: RootState) => state.form.value);

  console.log(formFields[0][0]);

  return (
    <div>
      Form
      <div>{state}</div>
      <input type={formFields[0][0]} value={formFields[0][1]}></input>
    </div>
  );
};

export default Form;
