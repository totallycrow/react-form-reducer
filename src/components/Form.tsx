import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../app/store";
import { IFormInput, IFormProps } from "../types";
import { setInput } from "../features/form/formSlice";
import { onInputChange, setForm } from "../features/form/formSlice";
import { createSelector } from "@reduxjs/toolkit";
import { IForm } from "../features/form/formSlice";

// **** ????????????????????????????? ****
// All the Forms re-rendering even though only one changes at time
// **** ????????????????????????????? ****

// works?
const selectTargetForm = (id: string) =>
  createSelector(
    (state: RootState) => state.form.forms,
    (form) => form.find((item: IForm) => item.id === id)
  );

const Form = ({ fields, id }: IFormProps) => {
  const fromstate = useForm();
  const { setInputs } = useFormActions();

  const dispatch = useDispatch();

  console.log(`Form ${id} loaded!`);

  const targetForm = useSelector(selectTargetForm(id));

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
    const preparedFields = fields.map((item, index) => {
      const formElemement = {
        type: item.type,
        index: index,
        value: item.value,
        id: id,
      };
      console.log(formElemement);
    });

    setInputs(preparedFields);
  }, []);

  if (!targetForm) return <div>error</div>;

  return (
    <div>
      Form
      <div>
        <div>{targetForm.id}</div>
        {targetForm.formInputs.map((item: IFormInput, index: number) => (
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
