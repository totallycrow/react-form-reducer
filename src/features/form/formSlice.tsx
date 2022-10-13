import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
  IFormInput,
  IFormState,
  IOnFormChangeAction,
  IFormSetter,
  IForm,
} from "./types";
import { enableMapSet } from "immer";

enableMapSet();
const initialState: IFormState = {
  forms: new Map(),
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    onInputChange: (state, action: PayloadAction<IOnFormChangeAction>) => {
      const { index, value, id } = action.payload;

      const targetForm = state.forms.get(id);

      if (!targetForm) return state;

      targetForm.formInputs[index].value = value;
    },
    setInput: (state, action: PayloadAction<IFormSetter>) => {
      const inputArray = action.payload;

      // const newFormItem = {
      //   type: type,
      //   value: value,
      // };

      // console.log("********** SET INPUT **************");
      // console.log(action.payload);
      // console.log(action.payload[0].id);
      // console.log(state);

      const targetForm = state.forms.get(inputArrayid);
      // console.log(targetForm);

      // if (!targetForm) return state;

      // targetForm.formInputs] = newFormItem;
    },

    setForm: (state, action: PayloadAction<IForm>) => {
      state.forms.set(action.payload.id, action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { onInputChange, setInput, setForm } = formSlice.actions;

export default formSlice.reducer;
