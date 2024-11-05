import { Button } from "primereact/button";
import { ListBox } from "primereact/listbox";
import { OverlayPanel } from "primereact/overlaypanel";
import { FC, useRef } from "react";
import style from "./style.module.scss";
import classNames from "classnames";
import { CustomOverlayPanel } from "../custom-overlay-panel/customOverlayPanel";

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

  const optionTemplate = (option: { name: string; code: number }) => {
    return (
      <div className={style.option}>
        <i
          className={classNames(
            `pi pi-flag`,
            style[`option__icon_p${option.code}`]
          )}
          style={{ width: "1.25rem", marginRight: ".5rem" }}
        />
        <div>{option.name}</div>
      </div>
    );
  };

  return (
    <>
      <Button
        type="button"
        label={label}
        outlined
        size="small"
        icon={"pi pi-flag"}
        className={classNames(classname, {
          [style[`option__icon_p${value}`]]:
            value !== null && value !== undefined,
        })}
        onClick={(e) => op.current?.toggle(e)}
      >
        {value !== null && value !== undefined && (
          <i
            className={classNames(
              style.buttonIcon,
              "pi pi-times-circle p-button",
              {
                [style[`option__icon_p${value}`]]:
                  value !== null && value !== undefined,
              }
            )}
            onClick={(e) => {
              e.stopPropagation();
              setValue(null);
            }}
          ></i>
        )}
      </Button>
      <CustomOverlayPanel overlayPanelRef={op}>
        <ListBox
          value={value !== null && value !== undefined && options[value]}
          onChange={(e) => setValue(e.value.code)}
          options={options}
          optionLabel="name"
          itemTemplate={optionTemplate}
          pt={{
            item: {
              className: style.listBox__item,
            },
            list: {
              className: style.listBox__list,
            },
          }}
        />
      </CustomOverlayPanel>
    </>
  );
};
