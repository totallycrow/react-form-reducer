export interface IFormState {
  forms: Map<string, IForm>;
}

export interface IFormInput {
  type: string;
  value: string | number;
}

export interface IFormProps {
  fields: Array<IFormInput>;
  id: string;
}

export interface IForm {
  id: string;
  formInputs: Array<IFormInput>;
  isFormValid: boolean;
}

export interface IFormSetter {
  index: number;
  value: number | string;
  type: string;
  id: string;
}

export interface IOnFormChangeAction {
  index: number;
  value: number | string;
  id: string;
}
