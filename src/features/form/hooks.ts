import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { IFormInput } from "./types";
import { onInputChange, setForm, setInput } from "./formSlice";
import setInputs from "./formSlice";

// inifite loop?
// Uncaught InternalError: too much recursion

// export const useFormActions = () => {
//   const dispatch = useDispatch();

//   const setInputsAction = (preparedFields: Array<IFormInput>) =>
//     dispatch(setInputs(state, preparedFields));

//   return { setInputs };
// };
