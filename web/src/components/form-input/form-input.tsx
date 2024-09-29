import React from "react";
import { InputText } from "primereact/inputtext";
import style from "./style.module.scss";

interface FormInputProps {
  id: string;
  type: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  label: string;
}

export const FormInput: React.FC<FormInputProps> = ({
  id,
  type,
  value,
  onChange,
  label,
}) => {
  return (
    <div className={style.input}>
      <label htmlFor={id}>{label}</label>
      <InputText id={id} type={type} onChange={onChange} value={value} />
    </div>
  );
};
