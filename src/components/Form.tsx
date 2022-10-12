import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../app/store";
import { IFormProps } from "../types";
import { setInput } from "../features/form/formSlice";
import { onInputChange, setForm } from "../features/form/formSlice";

// **** ????????????????????????????? ****
// All the Forms re-rendering even though only one changes at time
// **** ????????????????????????????? ****

const Form = ({ fields, id }: IFormProps) => {
  const dispatch = useDispatch();

  console.log(`Form ${id} loaded!`);

  const formState = useSelector((state: RootState) => state.form.forms);

  console.log("STATE", formState);

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
  }, [fields, id]);

  const targetForm = formState.find((item) => item.id === id);

  if (!targetForm) return <div>error</div>;

  return (
    <div>
      Form
      <div>
        <div>{targetForm.id}</div>
        {targetForm.formInputs.map((item, index) => (
          <input
            key={item.value}
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
