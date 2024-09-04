import style from "./style.module.scss";
import React from "react";
import { Button } from "primereact/button";

interface FormButtonProps {
  label: string;
  type: "submit" | "button";
}

export const FormButton: React.FC<FormButtonProps> = ({ label, type }) => (
  <div className={style.formButton}>
    <Button label={label} type={type} severity="success" />
  </div>
);
