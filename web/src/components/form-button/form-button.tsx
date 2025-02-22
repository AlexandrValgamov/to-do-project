import style from "./style.module.scss";
import React from "react";
import { Button } from "primereact/button";

interface FormButtonProps {
  label: string;
  type: "submit" | "button";
}

export const FormButton: React.FC<FormButtonProps> = ({ label, type }) => (
  <div className={style.formButton}>
    <Button outlined label={label} type={type} className={style.formButton__button} />
  </div>
);
