import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../app/store";
import {
  IFormInput,
  IFormProps,
  IForm,
  IFormSetter,
} from "../features/form/types";

import { createSelector } from "@reduxjs/toolkit";
import { useFormActions } from "../features/form/hooks";

const selectTargetForm = (id: string) =>
  createSelector(
    (state: RootState) => state.form.forms,
    (form) => form.get(id)
  );

const Form = ({ fields, id }: IFormProps) => {
  const dispatch = useDispatch();
  const { handleInputsAction, handleInputChange, handleSetForm } =
    useFormActions();

  console.log(`Form ${id} loaded!`);

  const targetForm = useSelector(selectTargetForm(id));

  const newFormItem = {
    id: id,
    formInputs: [],
    isFormValid: false,
  };

  // Setup Main Form Containers
  useEffect(() => {
    dispatch(handleSetForm(newFormItem));
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
      return formElemement;
    });

    dispatch(handleInputsAction(preparedFields));
  }, []);

  if (!targetForm) return <div>error</div>;
  console.log(targetForm);

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
                handleInputChange({
                  index: index,
                  value: e.target.value,
                  id: id,
                })
              )
            }
          ></input>
        ))}
      </div>
    </div>
  );
};

export default Form;
