import React from "react";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";

interface FormInputProps {
  id: string;
  type: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  label: string;
}

export const FormInput: React.FC<FormInputProps> = ({ id, type, value, onChange, label }) => (
  <FloatLabel>
    <InputText
      id={id}
      type={type}
      className="p-inputtext-sm"
      onChange={onChange}
      value={value}
    />
    <label htmlFor={id}>{label}</label>
  </FloatLabel>
);