import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import { OverlayPanel } from "primereact/overlaypanel";
import { FC, useRef } from "react";
import style from "./style.module.scss";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import classNames from "classnames";
import { CustomOverlayPanel } from "../custom-overlay-panel/customOverlayPanel";

interface ICustomCalendarButton {
  value?: Date | null;
  setValue: (value: Date | null) => void;
  classname?: string;
}

export const CustomCalendarButton: FC<ICustomCalendarButton> = ({
  setValue,
  value,
  classname,
}) => {
  const op = useRef<OverlayPanel>(null);
  const label = value
    ? format(value, "d MMMM", { locale: ru })
    : "Срок выполнения";
  return (
    <>
      <Button
        label={label}
        outlined
        size="small"
        icon="pi pi-calendar-plus"
        className={classname}
        onClick={(e) => op.current?.toggle(e)}
        type="button"
      >
        {value && (
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
      <CustomOverlayPanel
        overlayPanelRef={op}
      >
        <Calendar
          value={value ?? new Date()}
          onChange={(e) => setValue(e.value || new Date())}
          inline
          className={style.customCalendar}
          pt={{
            panel: {
              className: style.customCalendar__panel,
            },
            dayLabel: {
              className: style.customCalendar__dayLabel,
            },
          }}
        />
      </CustomOverlayPanel>
    </>
  );
};
