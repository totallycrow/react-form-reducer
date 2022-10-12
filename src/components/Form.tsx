import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../app/store";
import { IFormProps } from "../types";
import { setInput } from "../features/form/formSlice";
import { onInputChange, setForm } from "../features/form/formSlice";
import { createSelector } from "@reduxjs/toolkit";

// **** ????????????????????????????? ****
// All the Forms re-rendering even though only one changes at time
// **** ????????????????????????????? ****

// works?
const selectTargetForm = (id: string) =>
  createSelector(
    (state: any) => state.form.forms,
    (form) => form.find((item: any) => item.id === id)
  );

const Form = ({ fields, id }: IFormProps) => {
  const dispatch = useDispatch();

  console.log(`Form ${id} loaded!`);

  // TEST CREATE SELECTOR
  // const formState = useSelector((state: RootState) => state.form.forms);
  // console.log(useSelector(selectTargetForm("test-form3")));

  const targetForm = useSelector(selectTargetForm(id));

  // console.log("STATE", formState);

  const newFormItem = {
    id: id,
    formInputs: [],
    isFormValid: false,
  };

  // Setup Main Form Containers
  useEffect(() => {
    dispatch(setForm(newFormItem));
  }, []);

  // Setup Input Fields For Specific Forms
  useEffect(() => {
    fields.forEach((item, index) => {
      const formElemement = {
        type: item.type,
        index: index,
        value: item.value,
        id: id,
      };
      console.log(formElemement);
      dispatch(setInput(formElemement));
    });
  }, []);

  // const targetForm = formState.find((item) => item.id === id);

  if (!targetForm) return <div>error</div>;

  return (
    <div>
      Form
      <div>
        <div>{targetForm.id}</div>
        {targetForm.formInputs.map((item: any, index: any) => (
          <input
            type={item.type}
            value={item.value}
            onChange={(e) =>
              dispatch(
                onInputChange({ index: index, value: e.target.value, id: id })
              )
            }
          ></input>
        ))}
      </div>
    </div>
  );
};

export default Form;
