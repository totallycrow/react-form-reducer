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

// A non-serializable value was detected in the state, in the path: `form.forms`. Value:
// Map(3) { "test-form" → {…}, "test-form2" → {…}, "test-form3" → {…} }

// Take a look at the reducer(s) handling this action type: form/setForm.
// (See https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)

// Can I put functions, promises, or other non-serializable items in my store state?
// It is highly recommended that you only put plain serializable objects, arrays, and primitives into your store. It's technically possible to insert non-serializable items into the store, but doing so can break the ability to persist and rehydrate the contents of a store, as well as interfere with time-travel debugging.

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    onInputChange: (state, action: PayloadAction<IOnFormChangeAction>) => {
      console.log("ON INPUT CHANGE FIRED");

      const { index, value, id } = action.payload;

      const targetForm = state.forms.get(id);

      if (!targetForm) return state;

      console.log(targetForm.formInputs[index].value);

      targetForm.formInputs[index].value = value;
    },
    setInput: (state, action: PayloadAction<Array<IFormSetter>>) => {
      console.log("SET INPUT COMPONENT LOADED");
      const inputArray = action.payload;
      console.log(inputArray);

      const targetForm = state.forms.get(inputArray[0].id);
      console.log(targetForm);

      if (!targetForm) return state;

      targetForm.formInputs = inputArray;
    },

    setForm: (state, action: PayloadAction<IForm>) => {
      state.forms.set(action.payload.id, action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { onInputChange, setInput, setForm } = formSlice.actions;

export default formSlice.reducer;
