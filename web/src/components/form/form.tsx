import style from "./style.module.scss";
import "primeicons/primeicons.css";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { useState } from "react";

export const Form = () => {
  const [value, setValue] = useState("");
  return (
    <div>
      <form className={style.form}>
        <div className={style.formInputs}>
          <InputText
            type="text"
            className="p-inputtext-sm"
            placeholder="Заголовок"
          />
          <InputTextarea
            placeholder="Описание..."
            autoResize
            value={value}
            onChange={(e) => setValue(e.target.value)}
            rows={2}
            cols={80}
          />
        </div>
        <Button
          severity="success"
          label="Подтвердить"
          raised
          icon="pi pi-check"
          iconPos="left"
          type="submit"
        />
      </form>
    </div>
  );
};
