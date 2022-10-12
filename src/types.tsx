export interface IFormInput {
  type: string;
  value: string | number;
}

export interface IFormProps {
  fields: Array<IFormInput>;
  id: string;
}
