import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IFormInput } from "../../types";

export interface IForm {
  id: string;
  formInputs: Array<IFormInput>;
  isFormValid: boolean;
}

export interface IFormState {
  forms: Array<IForm>;
}

const initialState: IFormState = {
  forms: [
    {
      id: "test-form-initialState",
      formInputs: [
        {
          type: "text",
          value: "test",
        },
      ],
      isFormValid: false,
    },
  ],
};

interface IFormSetter {
  index: number;
  value: number | string;
  type: string;
  id: string;
}

interface IOnFormChangeAction {
  index: number;
  value: number | string;
  id: string;
}

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    onInputChange: (state, action: PayloadAction<IOnFormChangeAction>) => {
      const { index, value, id } = action.payload;

      // **** ????????????????????????????? ****
      // Not efficient? Looking up ID every time?
      // **** ????????????????????????????? ****
      const targetForm = state.forms.find((form) => form.id === id);

      if (!targetForm) return state;

      targetForm.formInputs[index].value = value;
    },
    setInput: (state, action: PayloadAction<IFormSetter>) => {
      const { index, value, type, id } = action.payload;

      const newFormItem = {
        type: type,
        value: value,
      };

      const targetForm = state.forms.find((form) => form.id === id);

      if (!targetForm) return state;

      targetForm.formInputs[index] = newFormItem;
    },

    setForm: (state, action: PayloadAction<IForm>) => {
      state.forms.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { onInputChange, setInput, setForm } = formSlice.actions;

export default formSlice.reducer;
