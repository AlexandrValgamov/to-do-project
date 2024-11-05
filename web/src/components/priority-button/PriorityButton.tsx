import { Button } from "primereact/button";
import { ListBox } from "primereact/listbox";
import { OverlayPanel } from "primereact/overlaypanel";
import { FC, useRef } from "react";
import style from "./style.module.scss";
import classNames from "classnames";

interface IPriorityButton {
  classname?: string;
  value?: number | null;
  setValue: (value: number | null) => void;
}

export const PriorityButton: FC<IPriorityButton> = ({
  classname,
  value,
  setValue,
}) => {
  const op = useRef<OverlayPanel>(null);
  const options = [
    { name: "Приоритет 1", code: 0 },
    { name: "Приоритет 2", code: 1 },
    { name: "Приоритет 3", code: 2 },
    { name: "Приоритет 4", code: 3 },
  ];
  const label =
    value !== null && value !== undefined ? options[value].name : "Приоритет";

  return (
    <>
      <Button
        type="button"
        label={label}
        outlined
        size="small"
        icon="pi pi-flag"
        className={classname}
        onClick={(e) => op.current?.toggle(e)}
      >
        {value !== null && value !== undefined && (
          <i
            className={classNames(
              style.buttonIcon,
              "pi pi-times-circle p-button"
            )}
            onClick={(e) => {
              e.stopPropagation();
              setValue(null);
            }}
          ></i>
        )}
      </Button>
      <OverlayPanel
        className={style.overlayPanel}
        ref={op}
        pt={{
          content: {
            className: style.overlayPanel__content,
          },
        }}
      >
        <ListBox
          value={value !== null && value !== undefined && options[value]}
          onChange={(e) => setValue(e.value.code)}
          options={options}
          optionLabel="name"
          pt={{
            item: {
              className: style.listBox__item,
            },
            list: {
              className: style.listBox__list,
            },
          }}
        />
      </OverlayPanel>
    </>
  );
};
