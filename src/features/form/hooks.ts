import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { IFormInput } from "./types";
import { onInputChange, setForm, setInput } from "./formSlice";
import setInputs from "./formSlice";

export const useFormActions = () => {
  const dispatch = useDispatch();

  const handleInputsAction = (preparedFields: any) =>
    dispatch(setInput(preparedFields));

  const handleInputChange = (preparedFields: any) =>
    dispatch(onInputChange(preparedFields));

  const handleSetForm = (preparedFields: any) =>
    dispatch(setForm(preparedFields));

  return { handleInputsAction, handleInputChange, handleSetForm };
};
